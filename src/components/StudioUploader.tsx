"use client";

import { CldUploadWidget, type CloudinaryUploadWidgetInfo } from "next-cloudinary";
import { useCallback, useEffect, useRef, useState } from "react";

import Button from "@/components/shared/Button";
import { SelectField, TextField } from "@/components/shared/FormFields";
import type { UploadFolder } from "@/lib/cloudinary-portfolio";
import { STUDIO_UPLOAD_PRESET } from "@/lib/studio-upload";

// Free-plan limits, enforced before a file leaves the browser.
const MAX_IMAGE_BYTES = 10 * 1024 * 1024; // 10 MB
const MAX_VIDEO_BYTES = 100 * 1024 * 1024; // 100 MB

interface StudioUploaderProps {
  // The Cloudinary API key is not a secret — a signed upload sends it in the
  // clear. The API secret never leaves the server; /api/studio/sign uses it.
  apiKey: string;
}

type FolderState =
  | { status: "loading" }
  | { status: "error" }
  | { status: "ready"; folders: UploadFolder[] };

type Uploaded = { info: CloudinaryUploadWidgetInfo; folder: UploadFolder };

// One click of "Choose Files": the destination and metadata as they were at
// that moment.
type Launch = { id: number; folder: UploadFolder; context: Record<string, string> };

// Opens the widget once, as soon as its script has loaded.
function OpenWhenReady({ open, isLoading }: { open: () => void; isLoading?: boolean }) {
  const opened = useRef(false);

  useEffect(() => {
    if (!isLoading && !opened.current) {
      opened.current = true;
      open();
    }
  });

  return null;
}

// Context values are sent as "key=value|key=value", so a literal = or | in a
// value has to be escaped or it would be read as a separator.
const escapeContext = (value: string) => value.replace(/([=|])/g, "\\$1");

export default function StudioUploader({ apiKey }: StudioUploaderProps) {
  const [folderState, setFolderState] = useState<FolderState>({ status: "loading" });
  const [folderPath, setFolderPath] = useState("");
  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");
  const [launch, setLaunch] = useState<Launch | null>(null);
  const [uploaded, setUploaded] = useState<Uploaded[]>([]);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const loadFolders = useCallback(async () => {
    setFolderState({ status: "loading" });
    try {
      const response = await fetch("/api/studio/folders");
      if (!response.ok) throw new Error(`Folder list returned ${response.status}`);
      const { folders } = (await response.json()) as { folders: UploadFolder[] };
      setFolderState({ status: "ready", folders });
    } catch {
      setFolderState({ status: "error" });
    }
  }, []);

  useEffect(() => {
    loadFolders();
  }, [loadFolders]);

  if (folderState.status === "loading") {
    return <p className="text-ds-body text-light-dark">Loading folders…</p>;
  }

  if (folderState.status === "error") {
    return (
      <div className="space-y-space-4">
        <p role="alert" className="text-ds-body text-primary">
          Couldn&apos;t load the folder list from Cloudinary. Check your
          connection and try again.
        </p>
        <Button variant="secondary" onClick={loadFolders}>
          Try Again
        </Button>
      </div>
    );
  }

  const folder = folderState.folders.find((item) => item.folder === folderPath);

  const startUpload = () => {
    if (!folder) return;
    setUploadError(null);
    setLaunch((previous) => ({
      id: (previous?.id ?? 0) + 1,
      folder,
      context: {
        ...(title.trim() && { title: escapeContext(title.trim()) }),
        ...(client.trim() && { client: escapeContext(client.trim()) }),
      },
    }));
  };

  return (
    <div className="grid gap-space-8 lg:grid-cols-2">
      <div className="space-y-space-5">
        <SelectField
          label="Folder"
          id="studio-folder"
          options={folderState.folders.map((item) => ({
            label: item.label,
            value: item.folder,
          }))}
          placeholder="Choose a folder"
          value={folderPath}
          onChange={(event) => setFolderPath(event.target.value)}
        />
        <TextField
          label="Title (optional)"
          id="studio-title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          label="Client (optional)"
          id="studio-client"
          value={client}
          onChange={(event) => setClient(event.target.value)}
        />
        <p className="text-ds-small text-light-dark">
          Title and client apply to every file in the upload. Images up to 10
          MB, videos up to 100 MB.
        </p>

        <Button variant="primary" disabled={!folder} onClick={startUpload}>
          Choose Files
        </Button>

        {/* The widget keeps the options it was created with, and recreating it
            while someone is typing steals focus from the field. So a fresh
            widget is mounted per click of Choose Files, carrying the folder
            and metadata as they stood at that click. */}
        {launch && (
          <CldUploadWidget
            key={launch.id}
            signatureEndpoint="/api/studio/sign"
            uploadPreset={STUDIO_UPLOAD_PRESET}
            // A passed `cloud` object replaces the library's env defaults
            // wholesale, so the cloud name has to be given alongside the key.
            config={{
              cloud: {
                cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
                apiKey,
              },
            }}
            options={{
              sources: ["local"],
              multiple: true,
              resourceType: "auto",
              folder: launch.folder.folder,
              context: launch.context,
              clientAllowedFormats: ["image", "video"],
              maxImageFileSize: MAX_IMAGE_BYTES,
              maxVideoFileSize: MAX_VIDEO_BYTES,
              singleUploadAutoClose: false,
            }}
            onSuccess={(result) => {
              const info = result.info;
              if (info && typeof info !== "string") {
                setUploaded((previous) => [
                  { info, folder: launch.folder },
                  ...previous,
                ]);
              }
            }}
            onError={(error) => {
              setUploadError(
                (typeof error === "string" ? error : error?.statusText) ||
                  "The upload failed. Check your connection and try again."
              );
            }}
          >
            {({ open, isLoading }) => (
              <OpenWhenReady open={open} isLoading={isLoading} />
            )}
          </CldUploadWidget>
        )}

        {uploadError && (
          <p role="alert" className="text-ds-small text-primary">
            Upload error: {uploadError}
          </p>
        )}
      </div>

      <div aria-live="polite">
        <h2 className="text-ds-h4 text-primary">Uploaded this session</h2>
        {uploaded.length === 0 ? (
          <p className="mt-space-3 text-ds-body text-light-dark">Nothing yet.</p>
        ) : (
          <ul className="mt-space-4 space-y-space-4">
            {uploaded.map(({ info, folder: destination }) => (
              <li key={info.public_id} className="flex items-center gap-space-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={info.thumbnail_url}
                  alt=""
                  className="h-16 w-16 flex-none rounded-radius-md bg-primary object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate text-ds-body text-primary">
                    Uploaded to {destination.label}
                  </p>
                  <p className="truncate text-ds-small text-light-dark">
                    {info.public_id.slice(info.public_id.lastIndexOf("/") + 1)}
                  </p>
                  <Button
                    variant="text-link"
                    href={`/portfolio#${destination.slug}`}
                    className="mt-space-1 text-ds-small text-dk-blue-1"
                  >
                    View on site
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
