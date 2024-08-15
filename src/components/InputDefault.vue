<script lang="ts">
export default {
  name: 'input_default',
  data(){
    return{
      placeholder: 'teste'
    }
  },
  props:{
    placeholder: String
  }
}
</script>

<template>
  <input class="inputDefault" type="text" :placeholder>
</template>

<style scoped>
.inputDefault{
  height: 40px;
  width: 500px;

  border-color: var(--color-primary);
  border-radius: 0.4rem;

  font-size: 1rem;
  font-family: sans-serif;
}

.inputDefault:focus{
  outline: none;
}
</style>