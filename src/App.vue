<script setup lang="ts">
import Counter from "./components/Counter.vue";
import CounterV2 from "./components/CounterV2.vue";
import Emit from "./components/Emit.vue";
import List from "./components/List.vue";
import Form from "./components/Form.vue";
import Watch from "./components/Watch.vue";
import Property from "./components/Property.vue";
import Routing from "./components/Routing.vue";
import State from "./components/State.vue";
import { sq } from "./utils";
</script>

<template>
  <!-- this is used by e2e test -->
  <p id="elemnt-for-test">find me!</p>

  <Counter />
  <CounterV2 />
  <List />
  <Form />
  <Watch />
  <Emit @custom-event="console.log('received custom-event!')" />
  <Property text="pass as props">pass as slot</Property>
  <p>Routing.vue</p>
  <Routing />
  <p>State.vue</p>
  <State />
  <p>utils.ts</p>
  <p>sq: {{ sq(2) }}</p>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
