import { Suspense } from "react";
import SchoolProjectList from "@/components/SchoolProjectList";

function ListSkeleton() {
  return (
    <div className="space-y-2 animate-pulse">
      <div className="h-6 w-2/3 rounded bg-gray-200" />
      <div className="h-6 w-1/2 rounded bg-gray-200" />
      <div className="h-6 w-3/5 rounded bg-gray-200" />
      <div className="h-6 w-2/5 rounded bg-gray-200" />
    </div>
  );
}

export default function SchoolProjects() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">School Projects</h2>
      <Suspense fallback={<ListSkeleton />}>
        <SchoolProjectList />
      </Suspense>
    </main>
  );
}