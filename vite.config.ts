// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // ✅ Netlify needs this to be '/' or removed completely
  base: '/',
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

