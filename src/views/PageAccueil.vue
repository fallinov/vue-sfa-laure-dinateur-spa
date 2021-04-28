<template>
  <main class="page-index">
    <!-- Titre principal du site, il ne doit y en avoir qu'un dans la page et
         il faut le placer dans <main> -->
    <h1>Mes réalisations</h1>

    <ul class="realisations">
      <realisation
        v-for="realisation in realisations"
        :key="realisation.image"
        :image="realisation.image"
        :titre="realisation.titre"
        :description="realisation.description"
      />
    </ul>
  </main>
</template>

<script>
import Realisation from '@/components/Realisation';
export default {
  name: 'PageAccueil',
  components: { Realisation },
  data() {
    return {
      realisations: [
        {
          image: 'img/numbers-01.jpg',
          titre: 'Tableau le chiffre 1',
          description: 'Expérimentation de couleurs'
        },
        {
          image: 'img/numbers-02.jpg',
          titre: 'Tableau le chiffre 2',
          description: 'Jeu de fondus'
        },
        {
          image: 'img/numbers-06.jpg',
          titre: 'Tableau le chiffre 6',
          description: '80\'s style'
        },
        {
          image: 'img/numbers-09.jpg',
          titre: 'Tableau le chiffre 9',
          description: 'Travail avec les pinceaux'
        },
        {
          image: 'img/numbers-12.jpg',
          titre: 'Tableau le chiffre 12',
          description: 'Répétition de formes'
        }
      ]
    };
  }
};
</script>
