import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const FIELD_BASE =
  "w-full rounded-radius-md border border-primary/[0.12] bg-transparent px-space-4 py-space-3 text-ds-body text-primary placeholder:text-light-dark transition-colors duration-150 focus:border-dk-blue-1 focus:outline-none";

interface FieldWrapperProps {
  label: string;
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}

function FieldWrapper({ label, htmlFor, className, children }: FieldWrapperProps) {
  return (
    <div className={cn("space-y-space-2", className)}>
      <label htmlFor={htmlFor} className="text-ds-small text-light-dark">
        {label}
      </label>
      {children}
    </div>
  );
}

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  wrapperClassName?: string;
}

export function TextField({ label, id, wrapperClassName, className, ...props }: TextFieldProps) {
  return (
    <FieldWrapper label={label} htmlFor={id} className={wrapperClassName}>
      <input id={id} className={cn(FIELD_BASE, className)} {...props} />
    </FieldWrapper>
  );
}

interface TextAreaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  wrapperClassName?: string;
}

export function TextAreaField({
  label,
  id,
  wrapperClassName,
  className,
  rows = 5,
  ...props
}: TextAreaFieldProps) {
  return (
    <FieldWrapper label={label} htmlFor={id} className={wrapperClassName}>
      <textarea
        id={id}
        rows={rows}
        className={cn(FIELD_BASE, "resize-none", className)}
        {...props}
      />
    </FieldWrapper>
  );
}

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  options: { label: string; value: string }[];
  placeholder?: string;
  wrapperClassName?: string;
}

export function SelectField({
  label,
  id,
  options,
  placeholder,
  wrapperClassName,
  className,
  ...props
}: SelectFieldProps) {
  return (
    <FieldWrapper label={label} htmlFor={id} className={wrapperClassName}>
      <select id={id} className={cn(FIELD_BASE, className)} {...props}>
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
}
