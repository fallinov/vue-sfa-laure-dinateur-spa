<template>
  <li>
    <a :href="image">
      <figure>
        <img :src="image" :alt="titre">
        <figcaption>{{ description }}</figcaption>
      </figure>
    </a>
  </li>
</template>

<script>
export default {
  name: 'Realisation',
  props: ['image', 'titre', 'description'],
};
</script>

<style scoped>

</style>
