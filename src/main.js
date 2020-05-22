import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons  } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import DeckModel from './models/DeckModel'

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

const store = new Vuex.Store({
  state: {
    decks: {}
  },
  mutations: {
    addDeck(state, data) {
      if(!(data.deckName in state.decks)){
        Vue.set(state.decks, data.deckName, new DeckModel(data.deckName, data.description))
      }
    },
    deleteDeck(state, deckName) {
      console.log("here: " + deckName)
      if(deckName in state.decks)
      {
        Vue.delete(state.decks, deckName);
      }
    }
  },
  getters: {
    decks: state => {
      return state.decks
    }
  }
})

new Vue({
  router: router,
  render: h => h(App),
  store: store
}).$mount('#app')
