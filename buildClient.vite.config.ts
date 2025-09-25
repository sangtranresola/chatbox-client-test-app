import path from 'node:path';
import react from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';
/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const getCdnPrefix = () => {
  if (process.env.AWS_PULL_REQUEST_ID) {
    console.log('[getCdnPrefix] load .env.preview file');
    const previewEnvironmentVariables = dotenv.configDotenv({
      path: '.env.preview',
    });
    return previewEnvironmentVariables.parsed!.VITE_CDN_PREFIX;
  }
  return process.env.VITE_CDN_PREFIX ?? undefined;
};

const cdnPrefix = getCdnPrefix();

export default defineConfig(({ mode }) => {
  return {
    plugins: [tsconfigPaths(), react()],
    define: {
      'process.env': loadEnv(mode, process.cwd()),
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
    build: {
      target: 'es2015',
      assetsInlineLimit: 0,
      rollupOptions: {
        treeshake: 'smallest',
        output: [
          {
            format: 'umd',
            name: '__DECA_CLIENT__',
            entryFileNames: 'chatbox.umd.js',
            inlineDynamicImports: true,
          },
          {
            format: 'es',
            entryFileNames: 'chatbox.mjs',
            inlineDynamicImports: true,
            chunkFileNames: 'chunks/[name]-[hash].mjs',
          },
        ],
      },
      lib: {
        entry: path.resolve(__dirname, 'src/client/index.tsx'),
        name: '__DECA_CLIENT__',
        fileName: 'chatbox',
      },
      outDir: path.resolve(__dirname, 'dist-client'),
    },
  };
});
