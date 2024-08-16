<template>
    <section class="is-flex is-align-items-center is-justify-content-space-between">
        <Cronometro :tempoEmSegundos />
        <button @click="iniciar()" class="button" :disabled="cronometroRodando">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>
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
            }, 1 * 1)
            }
            this.cronometroRodando=true
            // console.log(this.cronometro)
        },
        finalizar(){
            // console.log(new Date(this.tempoEmSegundos*1000).toISOString().substr(11,8))
            clearInterval(this.cronometro)
            this.cronometro=0
            this.tempoEmSegundos=0
            this.cronometroRodando=false

            return new Date(this.tempoEmSegundos*1000).toISOString().substr(11,8)
        }
    },
    emits:[
        'temporizadorEncerrado'
    ]
})
</script>