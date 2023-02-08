<script setup>
import { reactive } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/Header.vue';

</script>

<template>
    <Header></Header>
    <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/livre">Nos livres</RouterLink>
        <RouterLink to="/recherche">Rechercher</RouterLink>
    </nav><br><br>
    <RouterView></RouterView>

</template>

<style scoped>

nav a{
    text-align: center;
    margin-top: 5rem;
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
    margin-top: 4rem;
    text-decoration: none;
}
</style>
