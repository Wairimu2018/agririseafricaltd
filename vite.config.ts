// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/cultivate-digital-site/', // ✅ Must match GitHub repo name exactly
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
