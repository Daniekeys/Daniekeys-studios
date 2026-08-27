import { Award, Medal, Trophy } from "lucide-react";

import { cn } from "@/lib/utils";

const PLACEHOLDER_ICONS = [Award, Medal, Trophy];

interface AwardBadgesProps {
  className?: string;
}

// Neutral outlined placeholders for the laurel/award marks in the
// reference — no real award or certification assets have been provided.
// Swap PLACEHOLDER_ICONS for actual badge artwork once Daniel confirms
// what (if anything) Daniekeys Studios actually holds.
export default function AwardBadges({ className }: AwardBadgesProps) {
  return (
    <div className={cn("flex items-center gap-space-5", className)} aria-hidden="true">
      {PLACEHOLDER_ICONS.map((Icon, index) => (
        <Icon key={index} className="h-7 w-7 flex-none text-light-dark/70" strokeWidth={1.5} />
      ))}
    </div>
  );
}
