import Vuex from 'vuex'
import Vue from "vue";

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    savedNotes: []
  },
  mutations: {
    ADD_NOTE (state, payload) {
      state.savedNotes.push({
        name: payload,
        time: new Date().toLocaleTimeString(),
        id:  0 // TODO
      })
    },
  },
  actions: {
    addNote(context, payload) {
      context.commit('ADD_NOTE', payload)
    }
  },
  getters: {
    getNotes(state) {
      return state.savedNotes.sort((a, b) => b.id - a.id);
    },
  }
})

export default store;