import { createApp, ref, nextTick } from "vue";
import { useCounter } from "@/composables/useCounter.ts";

test("useCounter", async () => {
  let count = ref(9999);

  const app = createApp({
    setup() {
      count = useCounter();
      // suppress missing template warning
      return () => {};
    },
  });

  const div = document.createElement("div");
  document.body.appendChild(div);
  app.mount(div);
  div.click(); // increment
  expect(count.value).toBe(1);
  app.unmount();
});
