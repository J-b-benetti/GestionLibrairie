<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/Header.vue';

</script>

<template>
    <Header></Header>
    <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/livre">Nos livres</RouterLink>
    </nav>
    <RouterView></RouterView>

</template>

<style scoped>
nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
    font-size: 20px;
    color: green;
}
nav a.router-link-exact-active {
    color: #fdfdfd;
}
nav a.router-link-exact-active:hover {
    background-color: transparent;
}

</style>
