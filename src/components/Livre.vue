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
    listeLivres: []
});

function chargeLivre() {
    let dataOptions = {
        "method": "GET"
    };
    fetch(BACKEND, dataOptions)
        .then((response) => {
            return response.json();
        })
        .then((dataJson) => {
            //console.log(dataJson);
            data.listeLivres = dataJson;
        })
        .catch((error) => {
            console.log(error);
        })
}

function ajouteLivre() {
    // Ajouter une catégorie avec les données du formulaire
    const options = {
        method: "POST", // Verbe HTTP POST pour ajouter un enregistrement
        body: JSON.stringify(data.formulaireLivre),
        headers: {
            "Content-Type": "application/json",
        }
    };
    fetch(BACKEND + "?sort=id,desc", options)
        .then((response) => {
            return response.json();
        })
        .then((dataJson) => {
            //console.log(dataJson);
            data.listeLivres = dataJson;
            chargeLivre();
        })
        .catch((error) => {
            console.log(error);
        })
}

function modifierQuantite(entityRef) {
    let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: entityRef, titre: data.formulaireLivre.titre, qtestock: 1, prix: data.formulaireLivre.prix})
    };
    fetch(BACKEND + "/" + entityRef, options)
        .then((response) => {
            return response.json();
        })
        .then((dataJson) => {
            //console.log(dataJson);
            chargeLivre();
        })
        .catch((error) => {
            console.log(error);
        })
}

function supprimerLivre(entityRef) {
    let options = {
        "method": "DELETE"
    };
    fetch(BACKEND + "/" + entityRef, options)
        .then((response) => {
            return response.json();
        })
        .then((dataJson) => {
            /*console.log(dataJson);
            data.listeLivres = dataJson;*/
            chargeLivre();
        })
        .catch((error) => {
            console.log(error);
        })
}

onMounted(chargeLivre);

</script>


<template>
    <div class="formulaire">
        <!-- Un formulaire pour saisir les valeurs de la catégorie à ajouter -->
        <form @submit.prevent="ajouteLivre">
            <h1>Formulaire d'ajout de livre</h1>
            <div>
                <label for="titre">Titre</label><br>
                <input id="titre" class="input" name="titre" v-model="data.formulaireLivre.titre" placeholder="Titre" />
            </div><br>
            <div>
                <label for="qtStock">Quantité en stock</label><br>
                <input id="quantiteEnStock" class="input" name="qtStock" v-model="data.formulaireLivre.qtestock"
                    placeholder="Quantité en stock" />
            </div><br>
            <div>
                <label for="prix">Prix</label><br>
                <input id="prix" class="input" name="prix" v-model="data.formulaireLivre.prix" placeholder="Prix" />
            </div><br>
            <button class="boutonSubmit" type="submit">Ajouter</button>
        </form>
    </div><br><br>

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
                <td>{{ livre.qtestock }}</td>
                <td>{{ livre.prix }}</td>
                <td>
                    <button class="boutonModifier" @click="modifierQuantite(livre.id)"><font-awesome-icon
                            icon="pen" />Modifier</button>
                </td>
                <td>
                    <button class="boutonSupprimer" @click="supprimerLivre(livre.id)"><font-awesome-icon
                            icon="trash" />Supprimer</button>
                </td>
            </tr>
        </table>
    </div>


</template>


<style scoped>
h1 {
    color: #25592d;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
}

h1:hover {
    color: #3a2885;
}

label {
    color: #fdfdfd;
}

.formulaire {
    margin-left: 25%;
    display: inline-block;
    justify-content: center;
}

.input {
    height: 30px;
    border-radius: 5px;
    background-color: #232623;
    color: #fdfdfd;
}

::placeholder {
    color: rgba(253, 253, 253, 0.5);

}

.boutonSubmit {
    height: 30px;
    border-radius: 5px;
    background-image: linear-gradient(0.25turn, #3a2885, #2ba14b);
    cursor: pointer;
}

.boutonSubmit:hover {
    background-image: linear-gradient(0.25turn, #2ba14b, #3a2885);
}

.boutonSupprimer {
    border-radius: 5px white;
    height: 25px;
    cursor: pointer;
}

.boutonModifier {
    border-radius: 5px white;
    height: 25px;
    cursor: pointer;
}

.tab {
    margin-left: 30%;
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