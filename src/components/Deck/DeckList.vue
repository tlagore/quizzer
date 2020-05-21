<template>
  <div class="row p-2">
    <div class="col-lg-3 col-sm-12 p-1 cardBackground" v-for="(deck, deckName) in decks" :key="deckName">
      <DeckDetail :deck="deck" :deckName="deckName"></DeckDetail>
    </div>
  </div>
</template>

<script>
import DeckDetail from './DeckDetail.vue';

export default {
  components: {
    DeckDetail
  },
  data() {
    return {
      decks: {},
    }
  },
  beforeMount() {
    this.decks = this.$store.getters.decks;
  }
}
</script>


<style>
  .cardBackground {
    background-color: cornflowerblue
  }
</style>