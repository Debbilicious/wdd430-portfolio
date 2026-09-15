export default function Loading() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 animate-pulse">
      <div className="h-8 w-48 rounded bg-gray-200 mb-4" />
      <div className="space-y-2">
        <div className="h-6 w-2/3 rounded bg-gray-200" />
        <div className="h-6 w-1/2 rounded bg-gray-200" />
        <div className="h-6 w-3/5 rounded bg-gray-200" />
      </div>
    </main>
  );
}