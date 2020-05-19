<template>
  <div class="container">
    <div class="row" v-for="(deck, deckName) in decks" :key="deckName">
      <div class="col-lg-3 col-sm-12">
        <b-card
          :title="deckName"
          :sub-title="deck.description"
        >
          <div class="d-flex justify-content-around">
            <div>
              <a href="#"  class="m-auto">
                <b-icon-pencil variant="warning"></b-icon-pencil>
              </a>
            </div>
            <div>
              <div  v-if="deck.confirmDelete" class="d-flex flex-column">
                <h6>Confirm?</h6>
                <div class="d-flex">
                  <a v-on:click="deleteDeck(deckName)" href="#" class="m-auto">
                    <b-icon-check variant="success"></b-icon-check>
                  </a>
                  <a v-on:click="deleteCancel(deckName)" href="#" class="m-auto">
                    <b-icon-x variant="danger"></b-icon-x>
                  </a>
                </div>
              </div>
              <a v-else v-on:click="deleteConfirm(deckName)" href="#" class="m-auto">
                <b-icon-trash variant="danger"></b-icon-trash>
              </a>
            </div>
          </div>
        </b-card>
      </div>
      <!-- <div class="d-inline-flex p-2 align-items-center justify-content-center border">
        <div>
          <h3>
            {{ deckName }}
          </h3>
          <h6>
            {{ value.description}}
          </h6>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      decks: {},
    }
  },
  methods: {
    deleteCancel (deckName) {
      this.$set(this.decks[deckName], "confirmDelete", false);
    },
    deleteConfirm (deckName) {
      this.$set(this.decks[deckName], "confirmDelete", true);
    },
    deleteDeck (deckName) {
      this.$store.commit('deleteDeck', deckName);
    }
  },
  beforeMount() {
    this.decks = this.$store.getters.decks;

    // add a custom delete check per deck
    for(const [,deck] in this.decks) {
      this.decks[deck.deckName].confirmDelete = false;
    }
  }
}
</script>