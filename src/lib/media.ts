// Every image and film on the site is served from Cloudinary, from one folder.
// To swap a piece of work, upload the new file to the same public ID
// (overwrite) or change the name here.

const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? "gtvnqv9v";
const FOLDER = "daniekeys-site";

export function img(name: string, width = 2000): string {
  return `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto,c_limit,w_${width}/${FOLDER}/${name}`;
}

export function video(name: string): string {
  return `https://res.cloudinary.com/${CLOUD}/video/upload/f_auto:video,q_auto/${FOLDER}/${name}`;
}

export type Media =
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; src: string; poster: string; alt: string };

export const image = (name: string, alt: string, width?: number): Media => ({
  kind: "image",
  src: img(name, width),
  alt,
});

export const film = (name: string, alt: string): Media => ({
  kind: "video",
  src: video(name),
  poster: img(`${name}-poster`),
  alt,
});
