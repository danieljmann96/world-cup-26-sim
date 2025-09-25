// vite.config.ts
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import eslint from '@nabla/vite-plugin-eslint';

export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [eslint(), tsConfigPaths(), tanstackStart(), viteReact()]
});
