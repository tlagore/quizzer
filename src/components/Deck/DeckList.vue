<template>
  <div>
    <div v-for="(value, deckName) in decks" :key="deckName">
      <div class="d-inline-flex p-1 align-items-center">
        <div>
          <h3>
            {{ deckName }}
          </h3>
          <h6>
            {{ value.description}}
          </h6>
        </div>
        <div class="pl-3">
          <b-icon-trash variant="danger"></b-icon-trash>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      decks: []
    }
  },
  beforeMount() {
    this.decks = this.$store.getters.decks
    console.log(this.decks)
  }
}
</script>