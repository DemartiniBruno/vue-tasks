<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="form para criação">
                <input v-model="input" type="text" class="input" placeholder="Tarefa">

                <div>
                    <ul>
                        <li v-for="task in tasks">
                            <p>{{ task.title }}</p>
                            <p>{{ task.time }}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="column">
                <Temporizador @temporizadorEncerrado="finalizarTarefa($event)" />
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Temporizador from './Temporizador.vue';

export default defineComponent({
    name: 'Formulario',
    data() {
        return {
            input:'',
            tasks: [
                {
                    title: 'teste',
                    time: '00:00:00'
                },
            ]
        }
    },
    components: {
        Temporizador
    },
    methods: {
        finalizarTarefa(e:string) {
            this.tasks.push({
                title:this.input,
                time:e
            })

            this.input=''
        }
    }
})
</script>