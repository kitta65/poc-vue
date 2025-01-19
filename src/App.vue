<script setup lang="ts">
import Counter from "./components/Counter.vue";
import CounterV2 from "./components/CounterV2.vue";
import Emit from "./components/Emit.vue";
import List from "./components/List.vue";
import Form from "./components/Form.vue";
import Watch from "./components/Watch.vue";
import Property from "./components/Property.vue";
import Routing from "./components/Routing.vue";
import SlotSingle from "./components/SlotSingle.vue";
import SlotMultiple from "./components/SlotMultiple.vue";
import State from "./components/State.vue";
import { sq } from "./utils";
</script>

<template>
  <!-- this is used by e2e test -->
  <p id="elemnt-for-test">find me!</p>

  <h1>Counter</h1>
  <Counter />

  <h1>CounterV2</h1>
  <CounterV2 />

  <h1>List</h1>
  <List />

  <h1>Form</h1>
  <Form />

  <h1>Watch</h1>
  <Watch />

  <h1>Emit</h1>
  <Emit @custom-event="console.log('received custom-event!')" />

  <h1>Property</h1>
  <Property text="pass as props">pass as slot</Property>

  <h1>Routing</h1>
  <Routing />

  <h1>Slot</h1>
  <SlotSingle>signle</SlotSingle>
  <SlotMultiple>
    <template v-slot:first>foo</template>
    <template #second>bar</template>
  </SlotMultiple>

  <h1>State</h1>
  <State />

  <h1>Utils</h1>
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
