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

function augmenterQuantite(entityRef, titleref, qtRef, prixRef) {
    let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: entityRef, titre: titleref, qtestock: qtRef += 1, prix: prixRef })
    };
    fetch(BACKEND, options)
        .then((response) => {
            return response.json();
        })
        .then((dataJson) => {
            //console.log(dataJson);
            //console.log(entityRef, titleref, qtRef);
            chargeLivre();
        })
        .catch((error) => {
            console.log(error);
        })
}

function diminuerQuantite(entityRef, titleref, qtRef, prixRef) {
    let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: entityRef, titre: titleref, qtestock: qtRef -= 1, prix: prixRef })
    };
    fetch(BACKEND, options)
        .then((response) => {
            return response.json();
        })
        .then((dataJson) => {
            //console.log(dataJson);
            if (qtRef <= 0) {
                supprimerLivre(entityRef);
            }
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
            <download-csv class="export" :data="data.listeLivres" name="liste_livres.csv"><button class="boutonExport"><font-awesome-icon class="downloadIcon"
                            icon="download" />Export CSV</button></download-csv>
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
                <td><button class="boutonModifier"
                        @click="diminuerQuantite(livre.id, livre.titre, livre.qtestock, livre.prix)"><font-awesome-icon
                            icon="minus" /></button> {{ livre.qtestock }} <button class="boutonModifier"
                        @click="augmenterQuantite(livre.id, livre.titre, livre.qtestock, livre.prix)"><font-awesome-icon
                            icon="plus" /></button></td>
                <td>{{ livre.prix }}</td>
                <td>
                    <button class="boutonSupprimer" @click="supprimerLivre(livre.id)"><font-awesome-icon class="trashIcon"
                            icon="trash" />Supprimer</button>
                </td>
            </tr>
        </table>
    </div>


</template>


<style scoped>
.export {
    margin-right: 2rem;
    display: inline-block;
    margin-left: 0.6rem;
}
.boutonExport {
    cursor: pointer;
    height: 30px;
    padding-left: 3px;
    padding-right: 10px;
    border-radius: 5px;
    background-image: linear-gradient(0.25turn, #3a2885, #2ba14b);
}

.downloadIcon {
    padding-right: 5px;
}

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

.trashIcon {
    padding-right: 5px;
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