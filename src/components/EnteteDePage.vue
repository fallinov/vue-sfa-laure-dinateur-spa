<template>
  <header class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
    <!-- Logo -->
    <router-link to="/"
       class="d-flex align-items-center text-dark text-decoration-none">
      <img src="../assets/img/sabre-laser.svg" alt="Logo Sabres Laser Sàrl"
           class="logo">
      <span class="fs-4">Sabres Lasers Sàrl</span>
    </router-link>

    <!-- Menu de navigation -->
    <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      <router-link class="me-3 py-2 text-dark text-decoration-none"
         to="/"
      >Accueil</router-link>

      <router-link class="me-3 py-2 text-dark text-decoration-none"
         to="/produits"
      >Nos Produits</router-link>

      <router-link class="me-3 py-2 text-dark text-decoration-none"
         to="panier"
      >Ton Panier ({{ totalPanier }} CHF)</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'EnteteDePage',
  props: {
    totalPanier: Number,
  }
}
</script>

<style scoped lang="scss">

</style>
