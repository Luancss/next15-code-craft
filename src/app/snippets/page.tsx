"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useState } from "react";
import { SnippetsPageSkeleton } from "./_components/SnippetsPageSkeleton";
import NavigationHeader from "@/components/NavigationHeader";

export default function SnippetPage() {
  const snippets = useQuery(api.snippets.getSnippets);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [view, setView] = useState<"list" | "grid">("grid");

  if (snippets === undefined) {
    return (
      <div className="min-w-screen">
        <NavigationHeader />
        <SnippetsPageSkeleton />
      </div>
    );
  }

  return <div>Snippet</div>;
}
