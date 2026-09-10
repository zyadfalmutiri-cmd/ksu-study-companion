import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/courses/$courseId")({
  component: CoursePage,
});

const TABS = [
  "Overview",
  "Materials",
  "Topics",
  "AI Tutor",
  "Practice",
  "Flashcards",
  "Mock Exam",
  "Progress",
];

function CoursePage() {
  const { courseId } = Route.useParams();

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Course: {courseId}</h1>
        <span className="text-sm text-slate-500">Progress: 0%</span>
      </header>

      <nav className="mt-6 flex flex-wrap gap-2 border-b pb-3 text-sm">
        {TABS.map((tab) => (
          <button
            key={tab}
            className="rounded-full px-3 py-1 text-slate-600 hover:bg-slate-100"
          >
            {tab}
          </button>
        ))}
      </nav>

      <section className="mt-6 rounded-lg border border-dashed border-slate-300 p-8 text-center text-slate-500">
        Upload course material to get started. (Wire this up to a real upload
        flow calling into `src/lib/api/ai.functions.ts` once the RAG pipeline
        exists — see docs/PRODUCT_SPEC.md §5.)
      </section>
    </main>
  );
}
