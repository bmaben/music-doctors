import { createRouter as createRouter, createWebHistory } from 'vue-router'
import { useStore } from 'vuex'

//import components
import AboutView from '../views/AboutView.vue';
import HomeView from '../views/HomeView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    }
];

//create the router
const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

router.beforeEach((to) => {
    //get the Vuex store
    const store = useStore();
});

const app = Vue.createApp({})

app.use(router)

app.mount('#app')

export default router;
