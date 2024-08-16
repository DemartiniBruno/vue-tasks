<script lang="ts">
export default {
    name:'btd_adicionar'
}
</script>

<template>
    <button class="round-button">+</button>
</template>

<style scoped>
.round-button {
    width: 60px;
    height: 60px;
    background-color: var(--color-primary); /* Cor de fundo do botão */
    color: white; /* Cor do texto */
    border: none;
    border-radius: 50%; /* Faz o botão ficar redondo */
    font-size: 24px; /* Tamanho da fonte */
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer; /* Muda o cursor para uma mãozinha ao passar sobre o botão */
    transition: background-color 0.3s ease; /* Transição suave para a mudança de cor de fundo */
}

.round-button:hover {
    background-color: var(--color-primary-dark); /* Cor de fundo do botão quando em hover */
}

.round-button:focus {
    outline: none; /* Remove o contorno padrão quando o botão está em foco */
}
</style>