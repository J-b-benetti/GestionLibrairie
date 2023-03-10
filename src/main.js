import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import JsonCSV from 'vue-json-csv'

import './assets/main.css'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faTrash  } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


library.add(faPhone, faTrash, faPlus, faMinus, faDownload);


const app = createApp(App)

app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)
app.component('downloadCsv', JsonCSV)

app.mount('#app')

//createApp(App).mount('#app')
