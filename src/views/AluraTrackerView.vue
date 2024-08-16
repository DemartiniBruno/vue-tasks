<template>
    <main class="columns is-gapless is-multiline">
        <div class="column is-one-quarter">
            <BarraLateral />
        </div>
        <div class="column is-three-quarter">
            <Formulario />
        </div>
    </main>
</template>

<script lang="ts">
import BarraLateral from '@/components/alura-tracker/BarraLateral.vue';
import Formulario from '@/components/alura-tracker/Formulario.vue';

    export default{
        name:'aluratracker',
        components:{
            BarraLateral,
            Formulario
        }
    }
</script>