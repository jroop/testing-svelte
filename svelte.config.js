import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),

    /* moved default locations */
    files: {
      assets: "src/ui/static",
      hooks: {
        client: "src/ui/hooks.client",
        server: "src/ui/hooks.server"
      },
      lib: "src/ui/lib",
      params: "src/ui/params",
      routes: "src/ui/routes",
      serviceWorker: "/src/ui/service-worker",
      appTemplate: "src/ui/app.html",
      errorTemplate: "src/ui/error.html"
    }
  }
};

export default config;
