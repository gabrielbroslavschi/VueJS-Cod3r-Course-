<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="contadores" >
    <h1>Contadores</h1>
    <app-contador v-for='c in 5' :key="c"></app-contador>
  </div>
</template>

<script>

import contador from './contador'

export default {
    
    components: {
        'app-contador': contador
    }
  
};
</script>

<style>

  
</style>
