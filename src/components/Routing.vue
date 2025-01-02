<script setup lang="ts">
import { ref, computed } from "vue";
import Home from "./RoutingHome.vue";
import News from "./RoutingNews.vue";

const routes = {
  "/": Home,
  "/news": News,
};

type Route = keyof typeof routes;

const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  const route = (currentPath.value.slice(1) || "/") as Route;
  return routes[route];
});
</script>

<template>
  <a href="#/">Home</a> | <a href="#/news">News</a>
  <component :is="currentView" />
</template>
