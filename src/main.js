import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/routes.js";

import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

createApp(App).use(VCalendar, {}).use(router).mount('#app')
