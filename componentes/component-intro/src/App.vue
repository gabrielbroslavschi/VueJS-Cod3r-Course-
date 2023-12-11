<!-- eslint-disable vue/valid-template-root -->

<template>
  <div>
    <h1>Contadores</h1>
    {{ contador }}
    <app-contador></app-contador>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 0,
    };
  },
};
</script>

<style></style>
