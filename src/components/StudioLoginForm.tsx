"use client";

import { useFormState, useFormStatus } from "react-dom";

import { login, type LoginState } from "@/app/studio/actions";
import Button from "@/components/shared/Button";
import { TextField } from "@/components/shared/FormFields";

const initialState: LoginState = {};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button variant="primary" type="submit" disabled={pending}>
      {pending ? "Checking…" : "Sign In"}
    </Button>
  );
}

export default function StudioLoginForm() {
  const [state, formAction] = useFormState(login, initialState);

  return (
    <form action={formAction} className="space-y-space-5">
      <TextField
        label="Password"
        id="studio-password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        autoFocus
        aria-describedby={state.error ? "studio-login-error" : undefined}
      />

      {state.error && (
        <p id="studio-login-error" role="alert" className="text-ds-small text-primary">
          {state.error}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}
