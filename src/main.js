import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createStore } from './store';

const store = createStore(); 

createApp(App)
    .use(store)
    .mount('#app');