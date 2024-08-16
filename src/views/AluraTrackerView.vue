<template>
    <main class="columns is-gapless is-multiline" :class="{'modo-escuro': modo}">
        <div class="column is-one-quarter">
            <BarraLateral @modo-de-cor="modo=$event"/>
        </div>
        <div class="column is-three-quarter conteudo">
            <Formulario @nova-tarefa="novaTarefa($event)" />
            <div>
                <Task v-for="(task, index) in tasks" :key="index" :task />
                <p v-show="listaVazia" class="center">Sem tarefas</p>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import BarraLateral from '@/components/alura-tracker/BarraLateral.vue';
import Formulario from '@/components/alura-tracker/Formulario.vue';
import Task from '@/components/alura-tracker/Task.vue';
import type ITask from '@/interface/ITask';

export default {
    name: 'aluratracker',
    components: {
        BarraLateral,
        Formulario,
        Task
    },
    data() {
        return {
            tasks: [] as ITask[],
            modo:true
        }
    },
    computed: {
        listaVazia(): boolean {
            return this.tasks.length === 0
        },
        // modo(){

        // }
    },
    methods: {
        novaTarefa(e: ITask) {
            this.tasks.push(e)
        }
    }
}
</script>

<style>
main {
    --bg-primario: #fff;
    --texto-primario: #000;
}

main.modo-escuro {
    --bg-primario: #2b2d42;
    --texto-primario: #ddd;
}

.conteudo {
    background-color: var(--bg-primario);
    color: var(--texto-primario)
}

.center {
    /* padding: 28% 50%; */
    margin-top: 30%;
    margin-left: 50%;
    font-size: 2rem;
    font-weight: bolder;
}
</style>