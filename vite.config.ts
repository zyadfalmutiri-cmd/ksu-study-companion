import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

// NOTE: if Vercel's build reports a peer-dependency conflict on `vite` or the
// TanStack packages, this ecosystem ships fast — bump the version the error
// message names in package.json and redeploy. See README.md.
export default defineConfig({
  plugins: [
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tailwindcss(),
    tanstackStart({
      nitro: {
        preset: "vercel",
      },
    }),
  ],
});
