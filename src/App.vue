<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/infos">Informations</router-link>  |
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'LaureDinateur',
};
</script>

<style>

</style>
