import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    {
      name: "private-regional-editorial-fields",
      enforce: "pre" as const,
      transform(source: string, id: string) {
        if (!/\/src\/data\/regionen\/[^/]+\.json(?:\?|$)/.test(id)) return;
        const data = JSON.parse(source);
        delete data.quellen;
        if (data.standort) delete data.standort.zusatz;
        if (typeof data.gbpUrl === "string" && data.gbpUrl.startsWith("<")) data.gbpUrl = null;
        for (const service of Object.values(data.leistungen ?? {}) as Record<string, unknown>[]) delete service.pruefen;
        return { code: JSON.stringify(data), map: null };
      },
    },
    react(), mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
