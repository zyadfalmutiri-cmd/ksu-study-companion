import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-semibold">KSU Study Companion</h1>
      <p className="mt-2 text-slate-600">
        Phase 1 prototype scaffold — course upload + grounded Q&amp;A comes
        next. See docs/PRODUCT_SPEC.md for the full plan.
      </p>
      <Link
        to="/courses/$courseId"
        params={{ courseId: "demo" }}
        className="mt-6 inline-block rounded-md bg-slate-900 px-4 py-2 text-white"
      >
        Open demo course
      </Link>
    </main>
  );
}
