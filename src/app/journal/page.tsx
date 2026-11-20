import type { Metadata } from "next";

import JournalList from "@/components/JournalList";

export const metadata: Metadata = {
  title: "Journal",
  description: "Studio notes, process and case notes from Daniekeys Studios.",
};

export default function JournalPage() {
  return <JournalList />;
}
