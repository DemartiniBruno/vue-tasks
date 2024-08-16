<script lang="ts">
import BotaoAdicionar from '../components/old/BotaoAdicionar.vue'
import InputDefault from '../components/old/InputDefault.vue'
export default {
  components: { BotaoAdicionar, InputDefault },
  name: 'homeView',
  data(){
    return{
      tasks:[
        'lorem',
        'lorem',
        'lorem',
        'lorem',
      ]
    }
  }
}
</script>

<template>
  <div id="principal">
    <InputDefault placeholder="teste" />
    <section>

      <ul v-if="tasks">
        <li v-for="task in tasks" :key="task">
          {{ task }}
        </li>
      </ul>

    </section>
    <div class="btn">
      <botao-adicionar />
    </div>
  </div>
</template>

<style scoped>
#principal {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5rem;
  box-sizing: border-box;
  height: 100vh;
  width: 600px;
}

section {
  margin: 2rem 0;
  height: 100%;
  width: 100%;
}

.btn {
  display: flex;
  justify-content: end;
  width: 100%;
}
</style>
