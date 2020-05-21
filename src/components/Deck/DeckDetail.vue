<template>
  <b-card
    :title="deckName"
    :sub-title="deck.description"
    class="deck"
  >
    <div class="d-flex justify-content-around">
      <div>
        <p class="h1" style="margin-top:-5px;">
          <a href="#"  class="m-auto">
            <b-icon-play-fill variant="success"></b-icon-play-fill>
          </a>
        </p>
      </div>
      <div>
        <p class="h3">
          <a href="#"  class="m-auto">
            <b-icon-pencil variant="warning"></b-icon-pencil>
          </a>
        </p>
      </div>
      <div>
        <!-- if we haven't tried to delete the deck yet, this will be undefined / false -->
        <div v-if="confirmDelete" class="d-flex flex-column">
          <small>Delete?</small>
          <div class="d-flex">
            <p class="h4">
              <a v-on:click="deleteDeck" href="#" class="m-auto">
                <b-icon-check variant="success"></b-icon-check>
              </a>
            </p>
            <p class="h4">
              <a v-on:click="deleteCancel" href="#" class="m-auto">
                <b-icon-x variant="danger"></b-icon-x>
              </a>
            </p>
          </div>
        </div>
        <p v-else class="h3">
          <a v-on:click="deleteConfirm" href="#" class="m-auto">
            <b-icon-trash variant="danger"></b-icon-trash>
          </a>
        </p>
      </div>
    </div>
  </b-card>
</template>


<script>
export default {
  data() {
    return {
      confirmDelete: false
    }
  },
  props: [
    'deckName',
    'deck'
  ],
  methods: {
    deleteCancel () {
      this.confirmDelete = false;
    },
    deleteConfirm () {
      this.confirmDelete = true;
    },
    deleteDeck () {
      this.$store.commit('deleteDeck', this.deckName);
    }
  }
}
</script>