import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import crx from "vite-plugin-crx-mv3";

export default defineConfig(({ mode }) => {
  return {
    define: {
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
    },
    plugins: [
      vue(),
      crx({
        manifest: "./src/manifest.json",
      }),
    ],
    build: {
      emptyOutDir: mode == "production",
    },
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  };
});
