<template>
  <div class="row p-2">
    <div class="col-lg-3 col-sm-12 p-1 cardBackground" v-for="(deck, deckName) in decks" :key="deckName">
      <DeckDetail :deck="deck" :deckName="deckName"></DeckDetail>
    </div>
  </div>
</template>

<script>
import DeckDetail from '../components/Deck/DeckDetail.vue';

export default {
  components: {
    DeckDetail
  },
  data() {
    return {
      decks: this.$store.getters.decks,
    }
  },
  beforeMount() {
  }
}
</script>


<style>
  .cardBackground {
    background-color: cornflowerblue
  }
</style>