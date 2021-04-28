<template>
  <div id="app">
    <entete-de-page />
    <router-view/>
    <pied-de-page />
  </div>
</template>

<script>
import PiedDePage from '@/components/PiedDePage.vue';
import EnteteDePage from '@/components/EnteteDePage.vue';

export default {
  name: 'LaureDinateur',
  components: { EnteteDePage, PiedDePage },
};
</script>

<style>

</style>
