import type { Metadata } from "next";

// Private team area — never indexed, and not linked from the public site.
export const metadata: Metadata = {
  title: "Studio — Daniekeys Studios",
  robots: { index: false, follow: false },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-off-white px-space-4 py-space-9 text-primary md:px-space-6">
      {children}
    </main>
  );
}
