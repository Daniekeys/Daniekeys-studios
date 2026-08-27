import { cn } from "@/lib/utils";

interface TimelineEntryProps {
  year: string;
  title: string;
  description: string;
  align?: "left" | "right";
  isLast?: boolean;
  theme?: "light" | "dark";
  className?: string;
}

export default function TimelineEntry({
  year,
  title,
  description,
  align = "left",
  isLast = false,
  theme = "light",
  className,
}: TimelineEntryProps) {
  const heading = theme === "dark" ? "text-primary-white" : "text-primary";
  const rule = theme === "dark" ? "bg-white/[0.08]" : "bg-primary/[0.08]";

  const content = (
    <div className="space-y-space-2">
      <p className="text-ds-small font-semibold text-dk-blue-1">{`// ${year}`}</p>
      <h4 className={cn("text-ds-h4", heading)}>{title}</h4>
      <p className="text-ds-body text-light-dark">{description}</p>
    </div>
  );

  return (
    <div className={cn("relative pb-space-8 pl-space-6 md:pb-space-9 md:pl-0", className)}>
      <span
        aria-hidden
        className="absolute left-0 top-1 z-10 h-3 w-3 flex-none rounded-radius-full bg-dk-blue-1 md:left-1/2 md:-translate-x-1/2"
      />
      {!isLast && (
        <span
          aria-hidden
          className={cn(
            "absolute left-[5px] top-1 h-full w-px md:left-1/2 md:-translate-x-1/2",
            rule
          )}
        />
      )}

      <div className="md:grid md:grid-cols-2 md:gap-space-8">
        {align === "left" ? (
          <>
            <div className="md:pr-space-8 md:text-right">{content}</div>
            <div aria-hidden />
          </>
        ) : (
          <>
            <div aria-hidden />
            <div className="md:pl-space-8">{content}</div>
          </>
        )}
      </div>
    </div>
  );
}
