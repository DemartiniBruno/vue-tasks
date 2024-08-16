<template>
    <header>
        <h1>
             Titulo bonito
        </h1>
        <button @click="qualomodo()" class="button">
          <span v-if="modo">Claro</span>
          <span v-else>Escuro</span>
        </button>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name:'BarraLateral',
    data(){
      return{
        modo:true
      }
    },
    methods:{
      qualomodo(){
        this.modo = !this.modo
        this.$emit('modoDeCor', this.modo)
      }
    },
    emits:[
      'modoDeCor'
    ]
    // props:{
    //   modo:{
    //     type: Boolean,
    //     default: false
    //   }
    // }
})
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>