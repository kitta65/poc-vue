import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

export const simpleGlobalState = reactive({
  value: 0,
  increment() {
    this.value++;
  },
});

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});
