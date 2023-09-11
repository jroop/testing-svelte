<script lang="ts">
  import { onMount } from "svelte";
  import { helloShared } from "../../../shared/shared";
  import type { Shared } from "../../../shared/shared";

  let data = {};
  const s: Shared = { name: "bob-svelte" };

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
  <p>Call shared function: {helloShared(s)}</p>
  <pre>
    {JSON.stringify(data, null, 2)}
  </pre>
</main>

<style>
</style>
