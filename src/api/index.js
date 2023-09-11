/**
 * not touched by tsc just copied over
 * adds svelte handler to our node server
 */

import { app } from "./server.js";

/* built by sveltekit */
import { handler } from "../../build/handler.js";

app.use(handler);

/* use this server for prod */
app.listen(3000, "0.0.0.0", () => {
  console.log("express on 3000");
});
