import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Importa Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Importa Bootstrap JS (opcional, si necesitas funcionalidad interactiva como modales, dropdowns, etc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';


import store from './store';

createApp(App).use(router).use(store).mount('#app');