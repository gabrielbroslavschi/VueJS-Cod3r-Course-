<template>
  <div  id="app"> {{ titulo }}

    <button @click="titulo += '#'"> Alterar</button>
  </div>
  
</template>

<script>
  export default{
    //watch
    //computer
    //data
    //methods

    data: function(){
      return {
        titulo: 'Teste Data usando VueJS'
      }
    }
  }
</script>

<style>
  #app{
    background-color: chocolate;
    color: white;
  }
</style>
