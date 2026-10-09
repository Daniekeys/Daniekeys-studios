import Eyebrow from "@/components/shared/Eyebrow";
import StudioLoginForm from "@/components/StudioLoginForm";

export default function StudioLoginPage() {
  return (
    <div className="mx-auto max-w-sm">
      <Eyebrow theme="light">{"// Studio"}</Eyebrow>
      <h1 className="mt-space-3 text-ds-h2 font-heading text-primary">Team Sign In</h1>
      <p className="mt-space-3 text-ds-body text-light-dark">
        Enter the studio password to upload work.
      </p>

      <div className="mt-space-6">
        <StudioLoginForm />
      </div>
    </div>
  );
}
