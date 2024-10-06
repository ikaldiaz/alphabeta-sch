import { defineConfig, loadEnv } from 'vite';

import path from 'path';
import framework7 from 'rollup-plugin-framework7';


import { createHtmlPlugin } from 'vite-plugin-html';

 
const SRC_DIR = path.resolve(__dirname, './src');
const PUBLIC_DIR = path.resolve(__dirname, './public');
const BUILD_DIR = path.resolve(__dirname, './www',);
export default defineConfig(({ command, mode }) => {
  // console.log('command',command);
  // console.log('mode',mode);
  // console.log('NODE_ENV',process.env.NODE_ENV); 
  // console.log('TARGET',process.env.TARGET);
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return  {
    plugins: [
      framework7({ emitCss: false }),
      createHtmlPlugin({
        minify: false,
        inject: {
          data: {
            TARGET: process.env.TARGET,
          },
        },
      }),

    ],
    root: SRC_DIR,
    base: '',
    publicDir: PUBLIC_DIR,
    build: {
      outDir: BUILD_DIR,
      assetsInlineLimit: 0,
      emptyOutDir: true,
      chunkSizeWarningLimit: 8000,
      rollupOptions: {
        treeshake: false,
        output: {
          minifyInternalExports: true,
          sourcemap: false,
          inlineDynamicImports: false,
          entryFileNames: "[name].js",
          chunkFileNames: "[name].js",
          assetFileNames: "[name].[ext]",
          manualChunks: {
            // 'localforage':['localforage'],
            'framework7':['framework7'],
            'firebase':[ 'firebase/app', 'firebase/auth', 'firebase/database', 'firebase/storage','firebase/analytics' ],
          }
        }
      },
    },
    resolve: {
      alias: {
        '@': SRC_DIR,
      },
    },
    server: {
      host: true,
    },
    esbuild: {
      jsxFactory: '$jsx',
      jsxFragment: '"Fragment"',
    },
  };
})
