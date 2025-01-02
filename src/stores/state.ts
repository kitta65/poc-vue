import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

const globalCount = ref(0);
function globalIncrement() {
  globalCount.value++;
}

export function useSimpleCountStore() {
  return { count: globalCount, increment: globalIncrement };
}

export const usePiniaCountStore = defineStore("counter", () => {
  const count = ref(0);

  function increment() {
    count.value++;
  }

  return { count, increment };
});
