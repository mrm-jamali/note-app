"use client";

import { useSearchParams } from "next/navigation";
import Page from "@/components/layout/Page";
import PageHeader from "@/components/layout/PageHeader";
import { useNotes } from "@/hooks/useNotes";
import SearchResultCard from "@/components/notes/SearchResultCard";

function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const { notes } = useNotes();

  const results = notes.filter(
    (note) =>
      !note.deleted &&
      (note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.description.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <Page>
      <PageHeader title="نتایج جستجو" />

      <div className="mt-6">
        <p className="mb-6 text-sm text-gray-500">
          نتایج جستجو برای:{" "}
          <span className="font-semibold text-gray-800">
            {query}
          </span>
        </p>

        {results.length === 0 ? (
          <div className="rounded-xl border border-gray-100 bg-white p-8 text-center text-gray-500">
            یادداشتی پیدا نشد.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
           {results.map((note) => (
  <SearchResultCard
    key={note.id}
    note={note}
  />
))}
          </div>
        )}
      </div>
    </Page>
  );
}

export default SearchPage;