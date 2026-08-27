import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import GridOverlay from "@/components/shared/GridOverlay";
import {
  getPortfolioProject,
  portfolioProjects,
} from "@/lib/portfolio-projects";

// Stub detail route — case-study content (challenge / approach / results) does
// not exist yet, so this is name + category + image + a "get a project like
// this" CTA, ready to hold real case studies as they're written (per
// 22-PAGE-portfolio.md, option b). Static-generated for the 6 known slugs.
export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

interface PageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getPortfolioProject(params.slug);
  if (!project) return { title: "Project Not Found — Daniekeys Studios" };

  return {
    title: `${project.title} — Daniekeys Studios Portfolio`,
    description: project.blurb,
    alternates: {
      canonical: `https://www.daniekeysstudios.com/portfolio/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — Daniekeys Studios`,
      description: project.blurb,
      type: "article",
      url: `https://www.daniekeysstudios.com/portfolio/${project.slug}`,
      siteName: "Daniekeys Studios",
    },
    robots: { index: true, follow: true },
  };
}

export default function PortfolioProjectPage({ params }: PageProps) {
  const project = getPortfolioProject(params.slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-primary">
      <Navigation />
      <main>
        {/* Compact page header — same pattern as /portfolio, /about, /services. */}
        <section className="relative overflow-hidden bg-primary pb-space-8 pt-24 lg:pb-space-9 lg:pt-32">
          <GridOverlay />
          <div className="relative z-10 mx-auto max-w-[1280px] px-space-4 md:px-space-6">
            <Link
              href="/portfolio"
              className="text-ds-small font-semibold text-light-dark underline-offset-4 hover:text-primary-white hover:underline"
            >
              ← Back to all work
            </Link>
            <div className="mt-space-5">
              <Eyebrow theme="dark">{`// ${project.categories.join(" · ")}`}</Eyebrow>
            </div>
            <h1 className="mt-space-4 max-w-4xl text-ds-hero font-heading text-primary-white">
              {project.title}
            </h1>
            <p className="mt-space-5 max-w-xl text-ds-body-lg text-light-dark">
              {project.blurb}
            </p>
          </div>
        </section>

        {/* Project image + CTA. No challenge/approach/results yet — flagged as a
            stub pending real case-study copy. */}
        <section className="relative overflow-hidden bg-off-white py-space-8 lg:py-space-10">
          <GridOverlay />
          <div className="relative z-10 mx-auto max-w-[1280px] px-space-4 md:px-space-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-radius-xl">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(min-width: 1024px) 1216px, 100vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="mt-space-8 flex flex-col gap-space-5">
              <p className="max-w-2xl text-ds-body text-light-dark">
                A full case study for this project — the challenge, our approach,
                and the results — is on the way. In the meantime, if this is the
                kind of work you need, let&apos;s talk.
              </p>
              <div>
                <Button variant="primary" href="/contact">
                  Get a project like this
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
