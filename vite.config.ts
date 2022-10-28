/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: `jsdom`,
    setupFiles: "./src/__test__/setup.ts",
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
});
