<script lang="ts">
import BotaoAdicionar from '../components/BotaoAdicionar.vue'
import InputDefault from '../components/InputDefault.vue'
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
      <!-- <p v-else>Não tem tasks</p> -->
      <!-- 
          adicionar card da task
        -->
      <!-- <p>teste</p> -->


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
  /* text-align: center; */
  align-items: center;
  padding: 5rem;
  box-sizing: border-box;

  height: 100vh;
  width: 30vw;
  /* background-color: lightblue; */
}

section {
  margin: 2rem 0;
  height: 100%;
  width: 100%;
}

.btn {
  /* float: left; */
  display: flex;
  justify-content: end;
  width: 100%;
  /* background-color:aq;ua ; */
}
</style>
