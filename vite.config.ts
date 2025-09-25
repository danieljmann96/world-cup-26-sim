// vite.config.ts
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import eslint from '@nabla/vite-plugin-eslint';
import { nitroV2Plugin } from '@tanstack/nitro-v2-vite-plugin';

export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [
    eslint(),
    tsConfigPaths(),
    tanstackStart(),
    nitroV2Plugin(),
    viteReact()
  ]
});
