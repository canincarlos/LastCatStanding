<script setup>
import {ref, computed} from 'vue'
import { storeToRefs } from 'pinia'
import { useStore } from '@/stores/counter'
 
import Challenger from './Challenger.vue'

const vueStore = useStore()
const {challenger_1, challenger_2, counter } = storeToRefs(vueStore)

vueStore.getIMGs()

function reset () {
  vueStore.$reset();
  vueStore.getIMGs()
}

</script>

<template>
  <div v-if="counter != 0">
    <h1>Round: {{ counter }} </h1>
    <h3>Gladiators Remaining: {{ vueStore.images.length }}</h3>
  </div>
  <div v-if="counter == 0">
    <h1>THE VICTOR IS ... </h1>
  </div>
  
  
  <Challenger msg="Challenger #1" :challenger="challenger_1"/>
  
  <Challenger msg="Challenger #2" :challenger="challenger_2" v-if="counter != 0"/>

  <div class="reset" v-if="counter == 0">
    <button @click="reset">
      Reset Game
    </button>
  </div>
  
</template>

<style scoped>

.reset {
  position: absolute;
  padding: 25px;
}
.item {
  margin-top: 2rem;
  display: flex;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>