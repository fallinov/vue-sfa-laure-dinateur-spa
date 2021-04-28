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
    meta: { titre: "Laure Dinateur | Graphiste"}
  },
  {
    path: '/infos',
    name: 'infos',
    component: PageInformations,
    meta: { titre: "Informations | Laure Dinateur"}
  },
  {
    path: '/contact',
    name: 'contact',
    component: PageContact,
    meta: { titre: "Me contacter | Laure Dinateur"}
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// Changement du tire <title> de la page
router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.titre
  });
});

export default router;
