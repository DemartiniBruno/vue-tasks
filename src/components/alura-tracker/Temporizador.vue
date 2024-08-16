<template>
    <section class="is-flex is-align-items-center is-justify-content-space-between">
        <Cronometro :tempoEmSegundos />
        <button @click="iniciar()" class="button" :disabled="cronometroRodando">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>
        <!-- <button @click="$emit('temporizadorEncerrado',finalizar())" class="button" :disabled="!cronometroRodando"> -->
        <button @click="finalizar()" class="button" :disabled="!cronometroRodando">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
        </button>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cronometro from './Cronometro.vue';

export default defineComponent({

    name: 'Temporizador',
    components:{
        Cronometro
    },
    data(){
        return{
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false
        }
    },
    methods:{
        iniciar(){
            if(this.cronometro===0){
                this.cronometro=setInterval(()=>{
                this.tempoEmSegundos++
            }, 1 * 100)
            }
            this.cronometroRodando=true
        },
        finalizar(){
            clearInterval(this.cronometro)
            this.$emit('temporizadorEncerrado',this.tempoEmSegundos)
            this.cronometroRodando=false
            this.tempoEmSegundos=0
            this.cronometro=0


        }
    },
    emits:[
        'temporizadorEncerrado'
    ]
})
</script>