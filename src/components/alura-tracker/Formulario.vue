<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="form para criação">
                <input type="text" class="input" placeholder="Tarefa">
            </div>
            <div class="column">
                <Temporizador />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Temporizador from './Temporizador.vue';

export default defineComponent({
    name: 'Formulario',
    components:{
        Temporizador
    },
})
</script>