import { ref, onMounted, onUnmounted } from "vue";

export function useCounter() {
  const n = ref(0);

  function increment() {
    n.value++;
  }

  onMounted(() => window.addEventListener("click", increment));
  onUnmounted(() => window.removeEventListener("click", increment));

  return n;
}
