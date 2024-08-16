<script lang="ts">

export default {
  name: 'input_default',
  data(){
    return{
      place:''
    }
  },

  props:[
    'place',
    'modelValue'
  ],

  emits: [
    'update:modelValue'
  ]
}
</script>

<template>
  <!-- <input class="inputDefault" type="text" :placeholder="place"> -->
  <input 
    class="inputDefault" 
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target)" 
  />

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