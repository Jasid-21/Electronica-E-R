import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faClock, faBars } from '@fortawesome/free-solid-svg-icons';

import './assets/tailwind.css';

library.add(faWhatsapp, faLocationDot, faPhone, faClock, faBars);

const app = createApp(App);
app.component('fai', FontAwesomeIcon);
app.use(router);
app.mount('#app');
