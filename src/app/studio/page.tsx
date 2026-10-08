import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";

import { logout } from "./actions";

export default function StudioPage() {
  return (
    <div className="mx-auto max-w-[1280px]">
      <div className="flex items-start justify-between gap-space-4">
        <div>
          <Eyebrow theme="light">{"// Studio"}</Eyebrow>
          <h1 className="mt-space-3 text-ds-h2 font-heading text-primary">Upload Work</h1>
        </div>

        <form action={logout}>
          <Button variant="secondary" type="submit">
            Log Out
          </Button>
        </form>
      </div>
    </div>
  );
}
