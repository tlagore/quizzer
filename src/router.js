import Vue from 'vue';
import Router from 'vue-router';

import DeckList from './views/DeckList.vue'
import DeckEdit from './views/DeckEdit.vue'
import Deck from './views/Deck.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'deckList',
      component: DeckList
    },
    {
      path: '/edit',
      name: 'deckEdit',
      component: DeckEdit
    },
    {
      path: '/deck',
      name: 'deck',
      component: Deck
    }
  ]
});