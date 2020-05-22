<template>
  <div id="app">
    <div class="container">
      <input v-model="deckName" type="text"/>
      <p class="h1">
        <a v-on:click="addDeck(deckName)" href="#" class="m-auto">
          <b-icon-plus-square variant="success"></b-icon-plus-square>
        </a>
      </p>
      <button v-on:click="viewDecks">View Decks!</button>
      <DeckList></DeckList>
    </div>
  </div>
</template>

<script>
import DeckList from './views/DeckList.vue'

export default {
  name: 'App',
  components: {
    DeckList
  },
  data() {
    return {
      deckName: ''
    }
  },
  props: {
  },
  methods: {
    addDeck() {
      this.$store.commit('addDeck', { deckName: this.deckName, description: 'temp description' })
    },
    viewDecks() {
      const decks = this.$store.getters.decks;

      console.log(decks);

      for(const [, deck] of Object.entries(decks)) {
        console.log(deck.deckName)
        console.log(deck.description)
        console.log(deck.cards)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import'~bootstrap/dist/css/bootstrap.css'
</style>
