<!-- eslint-disable vue/valid-template-root -->

<template>
  <div>
    <app-contadores></app-contadores>

    <button>?</button>
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

<style>

div{
  border: 1px solid red;
}


</style>
