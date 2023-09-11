<script>
  import { onMount } from "svelte";
  import { helloShared } from "../../../shared/shared";

  let data = {};

  onMount(async () => {
    try {
      /* this is an express endpoint */
      const res = await fetch("/api");
      data = await res.json();
    } catch (e) {
      console.error(e);
    }
  });
</script>

<main>
  <h1>Call express api endpoints</h1>
  <p>Call shared function: {helloShared("svelte")}</p>
  <pre>
    {JSON.stringify(data, null, 2)}
  </pre>
</main>

<style>
</style>
