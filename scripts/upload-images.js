const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const { v2: cloudinary } = require("cloudinary");

dotenv.config();

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const API_KEY = process.env.CLOUDINARY_API_KEY;
const API_SECRET = process.env.CLOUDINARY_API_SECRET;

if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
  console.error("❌ Missing Cloudinary credentials in .env");
  console.error(
    "Required: CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET"
  );
  process.exit(1);
}

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

const imagesDirectory = path.join(process.cwd(), "public", "images");

const supportedExtensions = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".avif",
]);

function getAllImages(directory) {
  const files = [];

  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...getAllImages(fullPath));
    } else if (supportedExtensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

async function uploadImage(filePath) {
  const relativePath = path.relative(imagesDirectory, filePath);

  // Remove the file extension.
  const withoutExtension = relativePath.replace(/\.[^/.]+$/, "");

  // Convert Windows backslashes to Cloudinary's forward slashes.
  const publicId = withoutExtension.split(path.sep).join("/");

  console.log(`⬆️  Uploading: ${relativePath}`);
  console.log(`   Public ID: ${publicId}`);

  try {
    const result = await cloudinary.uploader.upload(filePath, {
      public_id: publicId,
      resource_type: "image",
      overwrite: true,
      invalidate: true,
    });

    console.log(`✅ Uploaded: ${result.public_id}`);
    console.log(`   URL: ${result.secure_url}\n`);

    return true;
  } catch (error) {
    console.error(`❌ Failed: ${relativePath}`);
    console.error(error.message);
    console.log("");

    return false;
  }
}

async function main() {
  if (!fs.existsSync(imagesDirectory)) {
    console.error(`❌ Image directory not found: ${imagesDirectory}`);
    process.exit(1);
  }

  const images = getAllImages(imagesDirectory);

  if (images.length === 0) {
    console.log("⚠️ No supported images found in public/images");
    return;
  }

  console.log(`\nFound ${images.length} image(s).\n`);

  let successful = 0;
  let failed = 0;

  for (const image of images) {
    const success = await uploadImage(image);

    if (success) {
      successful++;
    } else {
      failed++;
    }
  }

  console.log("========================================");
  console.log("Cloudinary upload complete");
  console.log("========================================");
  console.log(`Total:     ${images.length}`);
  console.log(`Uploaded:  ${successful}`);
  console.log(`Failed:    ${failed}`);
  console.log("========================================\n");

  if (failed > 0) {
    process.exit(1);
  }
}

main();