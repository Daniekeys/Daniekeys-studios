import Image from "next/image";

import { cn } from "@/lib/utils";

interface Avatar {
  src: string;
  alt: string;
}

interface AvatarGroupProps {
  avatars: Avatar[];
  caption: string;
  theme?: "light" | "dark";
  className?: string;
}

export default function AvatarGroup({
  avatars,
  caption,
  theme = "light",
  className,
}: AvatarGroupProps) {
  const ringColor = theme === "dark" ? "ring-primary" : "ring-off-white";
  const text = theme === "dark" ? "text-primary-white" : "text-primary";

  return (
    <div className={cn("flex items-center gap-space-3", className)}>
      <div className="flex -space-x-3">
        {avatars.map((avatar, index) => (
          <div
            key={`${index}-${avatar.src}`}
            className={cn(
              "relative h-10 w-10 overflow-hidden rounded-radius-full ring-2",
              ringColor
            )}
          >
            <Image src={avatar.src} alt={avatar.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
      <p className={cn("text-ds-small", text)}>{caption}</p>
    </div>
  );
}
