<script lang="ts">
import InputDefault from '../components/InputDefault.vue'

export default {
    components: { InputDefault },
    name: 'login',
    data() {
        return {
            email:'',
            senha: ''
        }
    },
    methods: {
        printData() {
            console.log(this.email, this.senha)
        }
    }

}
</script>

<template>
    <main>
        <img src="../assets/28755812_christmas_2012_new_6518.svg" alt="img bonita">
        <div>

            <label for="email">Email</label>
            <InputDefault 
                class="inpt" 
                id="email" 
                placeholder="email" 
                v-model="email" 
            />

            <label for="senha">Senha</label>
            <InputDefault 
                class="inpt"
                id="senha"
                placeholder="senha"
                v-model="senha"
            />

            <input 
                class="botao"
                type="submit" 
                value="Entrar" 
                @click="printData()"
            />
        </div>
    </main>
</template>

<style scoped>
main {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 100vh;
}

div {
    display: flex;
    flex-direction: column;
}

.inpt {
    margin: 1rem 0 2rem
}

.botao {
    background-color: var(--color-primary);
    color: white;
    font-size: 1rem;
    font-family: sans-serif;
    height: 40px;
    width: 500px;
    border: none;
    border-radius: 0.4rem;
}

.botao:hover {
    background-color: var(--color-primary-dark);
    cursor: pointer;
}


.botao:focus {
    border: none;
}

img {
    height: 400px;
    width: auto;
}
</style>