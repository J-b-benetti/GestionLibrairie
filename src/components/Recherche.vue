<script setup>
import { reactive, onMounted } from "vue";
import { BACKEND } from '../api.js';

const listeVide = {
    titre: "",
    qtestock: "",
    prix: ""
};

let data = reactive({
    formulaireLivre: { ...listeVide },
    listeLivres: [],
    motcle: ""
});


function rechercherLivre() {
    let options = {
        "method": "GET"
    };
    fetch(BACKEND + "?search=" + data.motcle, options)
        .then((response) => {
            return response.json();
        })
        .then((dataJson) => {
            console.log(dataJson);
            data.listeLivres = dataJson;
            if (data.motcle.length == 0) {
                alert("Veuillez saisir un mot clé dans la barre de recherche");
            }
        })
        .catch((error) => {
            console.log(error);
        })
}

//onMounted(rechercherLivre);

</script>

<template>
    <div class="forulaireRecherche">
        <form @submit.prevent="rechercherLivre">
            <h1>Rechercher un livre</h1>
            <div>
                <label for="titre">Entrer un titre de livre</label><br>
                <input id="recherche" class="input" name="titre" v-model="data.motcle" placeholder="Rechercher" />
                <button class="boutonSearch" type="submit">Rechercher</button>
            </div>
        </form>
    </div>

    <div class="tab">
        <table>
            <caption class="titreTab">Liste des livres</caption>
            <tr>
                <th>Code</th>
                <th>Titre</th>
                <th>Quantité en stock</th>
                <th>Prix</th>
            </tr>
            <tr v-for="livre in data.listeLivres" :key="livre.id">
                <td>{{ livre.id }}</td>
                <td>{{ livre.titre }}</td>
                <td>{{ livre.qtestock }} </td>
                <td>{{ livre.prix }}</td>
            </tr>
        </table>
    </div>

</template>

<style scoped>
h1 {
    color: #25592d;
    font-size: 25px;
    font-weight: bold;
    text-align: left;
}

h1:hover {
    color: #3a2885;
}

label {
    font-size: 18px;
    color: #fdfdfd;
}

.forulaireRecherche {
    margin-left: 5%;
    display: inline-block;
    justify-content: center;
}

.input {
    height: 30px;
    margin-top: 5px;
    border-radius: 5px;
    background-color: #232623;
    color: #fdfdfd;
}

::placeholder {
    color: rgba(253, 253, 253, 0.5);

}

.boutonSearch {
    height: 30px;
    border-radius: 5px;
    margin-left: 4px;
    background-image: linear-gradient(0.25turn, #fdfdfd, #2ba14b);
    cursor: pointer;
}

.boutonSearch:hover {
    background-image: linear-gradient(0.25turn, #2ba14b, #3a2885);
}

.tab {
    display: inline-block;
    margin-left: 10%;
    position: absolute;
    justify-content: center;
}

td,
th {
    border: 1px solid #ddd;
    padding: 8px;
    color: #fdfdfd;
    text-align: center;
}

th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #232623;
    color: rgb(255, 255, 255);
}

.titreTab {
    font-size: 30px;
    font-weight: bold;
    font-style: oblique;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: #fdfdfd;
}
</style>