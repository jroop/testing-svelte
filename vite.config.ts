import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import express from "./express-plugin";

export default defineConfig({
  plugins: [sveltekit(), express("/src/api/server.ts")]
});
