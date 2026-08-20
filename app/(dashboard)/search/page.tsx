import { Suspense } from "react";
import SearchPageContent from "./SearchPageContent";

export default function SearchPage() {
  return (
    <Suspense fallback={<div>در حال بارگذاری...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}