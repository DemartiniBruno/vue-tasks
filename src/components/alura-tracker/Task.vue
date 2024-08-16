<template>
    <div class="columns task">
        <div class="column is-8">{{ task.title || 'Tarefa sem descrição' }}</div>
        <div class="column">
            <Cronometro :tempo-em-segundos="Number(task.time)"/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type ITask from '@/interface/ITask';
import Cronometro from './Cronometro.vue';


export default defineComponent({
    name: 'Task',
    components:{
        Cronometro
    },
    props:{
        task:{
            type: Object as PropType<ITask>,
            required: true
        }
    }
})
</script>

<style scoped>
    /* ul{
        padding: 0 2rem;
    }
    li{
        display: flex;
        justify-content: space-between;
    } */
     .task{
        box-sizing: border-box;
        background-color: rgb(170, 101, 10);
        padding: 1rem;
        margin: 1rem 0rem;
        border-radius: 1rem;
     }
</style>