import { defineConfig } from 'vite';
import { resolve } from 'path';
import autoprefixer from 'autoprefixer';
import handlebars from 'vite-plugin-handlebars';
import { pageData } from './pageData';

export default defineConfig({
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/js/[name].js',
        chunkFileNames: 'assets/js/[name].js',
        assetFileNames: (assetInfo) => {
          const { name } = assetInfo;
          if (name === undefined) {
            return;
          }
          // 画像
          if (/\.( gif|jpeg|jpg|png|svg|webp| )$/.test(name)) {
            return 'assets/images/[name].[ext]';
          }
          // CSS
          if (/\.css$/.test(name)) {
            return 'assets/css/[name].[ext]';
          }
          return 'assets/js/[name].[ext]';
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  plugins: [
    handlebars({
      // コンポーネントのディレクトリ
      partialDirectory: resolve(__dirname, './src/components'),
      // ページ情報の読み込み
      context(pagePath) {
        return pageData[pagePath];
      },
    }),
  ],
});
