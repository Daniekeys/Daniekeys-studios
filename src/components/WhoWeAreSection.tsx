"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";

import AvatarGroup from "@/components/shared/AvatarGroup";
import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import GridOverlay from "@/components/shared/GridOverlay";
import WatermarkGlyph from "@/components/shared/WatermarkGlyph";

// Placeholder headshots — no real client photos supplied yet, per
// 03-IMAGE-SOURCING-GUIDE.md's testimonial-avatar guidance. Swap for real
// client photos when available; the "5.0 / 30+ clients" figures are real.
const clientAvatars = [
  {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80",
    alt: "Placeholder client headshot",
  },
  {
    src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100&q=80",
    alt: "Placeholder client headshot",
  },
  {
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&h=100&q=80",
    alt: "Placeholder client headshot",
  },
];

interface Pillar {
  title: string;
  description: string;
  image: string;
}

// Copy is unchanged from the original pillars list. Each now carries an
// image so the scroll-aligned visual has something to show per pillar.
const pillars: Pillar[] = [
  {
    title: "Creative Excellence",
    description: "World-class design rooted in strategy and storytelling.",
    image: "/images/who-we-are/creative-excellence.png",
  },
  {
    title: "AI-Powered",
    description: "We use AI to deliver faster, smarter, and more scalable results.",
    image: "/images/who-we-are/ai-powered.png",
  },
  {
    title: "Growth-Focused",
    description: "Every deliverable is tied to a business outcome.",
    image: "/images/who-we-are/growth-focused.png",
  },
  {
    title: "Pan-African",
    description: "Built in Africa, built for Africa — and the world.",
    image: "/images/who-we-are/pan-african.png",
  },
];

function pad(index: number) {
  return String(index + 1).padStart(2, "0");
}

// Cronix-style TEXT/IMAGE ALIGNMENT interaction, scoped to the pillars list
// only — everything above (H2, intro paragraph, CTA, avatar row) is
// untouched. Desktop: the image column goes sticky while the numbered
// pillar text progresses beside it; scroll position through the stack picks
// which pillar is "active" and the sticky image crossfades to match. Mobile
// drops the sticky/scroll-linked behaviour entirely (see the block below)
// and just stacks each pillar with its own inline image, per the brief's
// "simplify on mobile, never force the desktop interaction" rule.
function PillarScrollStack({
  prefersReducedMotion,
}: {
  prefersReducedMotion: boolean | null;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = Math.min(
      pillars.length - 1,
      Math.max(0, Math.floor(value * pillars.length))
    );
    setActiveIndex((current) => (current === next ? current : next));
  });

  const activePillar = pillars[activeIndex];

  return (
    <div
      ref={containerRef}
      className="relative hidden lg:block"
      style={{ height: `${pillars.length * 70}vh` }}
    >
      <div className="grid grid-cols-[1fr_420px] gap-space-8">
        <div>
          {pillars.map((pillar, index) => (
            <div key={pillar.title} className="flex h-[70vh] flex-col justify-center">
              <motion.div
                animate={{ opacity: activeIndex === index ? 1 : 0.35 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-ds-h4 tabular-nums text-dk-blue-1">
                  {`// ${pad(index)}`}
                </span>
                <h3 className="mt-space-3 text-ds-h3 text-primary">{pillar.title}</h3>
                <p className="mt-space-3 max-w-md text-ds-body-lg text-light-dark">
                  {pillar.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="sticky top-32 h-[420px] self-start overflow-hidden rounded-radius-lg">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={prefersReducedMotion ? "static" : activePillar.image}
              className="absolute inset-0"
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={activePillar.image}
                alt={activePillar.title}
                fill
                sizes="420px"
                className="object-cover"
                priority={activeIndex === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function PillarMobileStack({
  prefersReducedMotion,
}: {
  prefersReducedMotion: boolean | null;
}) {
  return (
    <div className="mt-space-2 flex flex-col gap-space-8 lg:hidden">
      {pillars.map((pillar, index) => (
        <motion.div
          key={pillar.title}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }
          }
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-radius-lg">
            <Image
              src={pillar.image}
              alt={pillar.title}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <span className="mt-space-4 block text-ds-h4 tabular-nums text-dk-blue-1">
            {`// ${pad(index)}`}
          </span>
          <h3 className="mt-space-2 text-ds-h3 text-primary">{pillar.title}</h3>
          <p className="mt-space-2 text-ds-body text-light-dark">{pillar.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

// Compact landing teaser of the full "Who We Are" story on /about. Mirrors
// /reference's "Why Choose Clonix?" section proportions — a narrow label
// column (eyebrow) beside a wider content column (H2/body/CTA/accordion) —
// via a fixed-width label column sized to the ~17.5%-of-container band the
// mockup's grid lines mark out, rather than a fluid fraction.
export default function WhoWeAreSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-off-white pt-space-8 pb-space-6 lg:pt-space-10 lg:pb-space-7">
      <GridOverlay />
      <WatermarkGlyph className="pointer-events-none absolute -right-24 bottom-0 hidden lg:block" size={420} />

      <motion.div
        className="relative z-10 mx-auto grid max-w-[1280px] gap-space-6 px-space-4 md:px-space-6 lg:grid-cols-[220px_1fr] lg:gap-space-8"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
      >
        <Eyebrow theme="light">{"// Who We Are"}</Eyebrow>

        <div>
          <h2 className="text-ds-h2 font-heading text-primary">
            We Don&apos;t Just Make Things Look Good. We Make Your Business Grow.
          </h2>
          <p className="mt-space-5 max-w-2xl text-ds-body-lg text-light-dark">
            We bring together three things most agencies separate: creative excellence,
            AI engineering, and growth strategy. Whether you&apos;re a startup finding
            your identity or an established business ready to scale, we become your
            creative and technology partner from day one.
          </p>

          <div className="mt-space-6 flex flex-col gap-space-4 sm:flex-row-reverse sm:items-center sm:justify-between">
            <Button
              variant="secondary"
              href="/about"
              className="w-full justify-between sm:w-auto"
            >
              Learn More About Us
            </Button>

            <AvatarGroup
              avatars={clientAvatars}
              caption="Rated 5.0 by 30+ clients on Google"
              theme="light"
            />
          </div>

          <div className="mt-space-8">
            <PillarScrollStack prefersReducedMotion={prefersReducedMotion} />
            <PillarMobileStack prefersReducedMotion={prefersReducedMotion} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
