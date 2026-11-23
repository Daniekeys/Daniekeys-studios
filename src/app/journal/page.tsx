import type { Metadata } from "next";

import JournalList from "@/components/JournalList";

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes on branding, video, websites and getting more customers, from Daniekeys Studios.",
  alternates: { canonical: "/journal" },
};

export default function JournalPage() {
  return <JournalList />;
}
