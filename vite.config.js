import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/medi-track/", // Add this line
  plugins: [react()],
  server: {
    port: 8080, // Changed to use port 8080
    strictPort: true, // Ensures Vite fails if port 8080 is unavailable
  },
  resolve: {
    alias: [
      {
        find: "@/components/ui",
        replacement: path.resolve(__dirname, "src/components/Reception/ui"),
      },
      {
        find: "@/hooks",
        replacement: path.resolve(__dirname, "src/hooks/Reception-hooks"),
      },
      {
        find: "@/lib",
        replacement: path.resolve(__dirname, "src/lib/Reception-lib"),
      },
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
});
