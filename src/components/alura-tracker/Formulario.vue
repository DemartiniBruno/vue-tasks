<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="form para criação">
                <input v-model="input" type="text" class="input" placeholder="Tarefa">
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
            input: '',
        }
    },
    components: {
        Temporizador
    },
    methods: {
        finalizarTarefa(e: string) {
            this.$emit('novaTarefa', {
                title: this.input,
                time: e
            })
            this.input = ''
        }
    },
    emits: [
        'novaTarefa'
    ]
})
</script>

<style scoped>
div,
input {
    background-color: var(--bg-primario);
    color: var(--texto-primario);
}

input::placeholder{
    color: var(--texto-primario);;
}
</style>