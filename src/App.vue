<script setup>
import { reactive } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/Header.vue';

</script>

<template>
    <Header></Header>
    <nav>
        <RouterLink class="nav" to="/">Accueil</RouterLink>
        <RouterLink class="nav" to="/livre">Nos livres</RouterLink>
        <RouterLink class="nav" to="/recherche">Rechercher</RouterLink>
    </nav><br><br>
    <RouterView></RouterView>

</template>

<style scoped>

.nav {
    display: inline-flex;
    justify-content: center;
    margin-top: 4rem;
    padding-left: 250px;
    font-size: 25px;
    font-family: 'Times New Roman', Times, serif;
    color: #fdfdfd;
}

.nav:hover {
    color: #3a2885;
}
</style>
