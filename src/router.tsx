import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// لازم يكون اسم الدالة "getRouter" بالضبط
export function getRouter() {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: "intent",
  });

  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
