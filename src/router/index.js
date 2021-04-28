import Vue from 'vue';
import VueRouter from 'vue-router';
import PageAccueil from '@/views/PageAccueil.vue';
import PageInformations from '@/views/PageInformations.vue';
import PageContact from '@/views/PageContact.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageAccueil,
  },
  {
    path: '/infos',
    name: 'infos',
    component: PageInformations,
  },
  {
    path: '/contact',
    name: 'contact',
    component: PageContact,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
