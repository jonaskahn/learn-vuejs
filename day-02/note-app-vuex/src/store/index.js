import Vuex from 'vuex'
import Vue from "vue";

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    savedNotes: [],
    increment: 0
  },
  mutations: {
    ADD_NOTE (state, payload) {
      state.savedNotes.push({
        name: payload,
        time: new Date().toLocaleTimeString(),
        id:  state.increment
      })
    },
    INCREASE_COUNT(state) {
      state.increment++
    }
  },
  actions: {
    addNote(context, payload) {
      context.commit('INCREASE_COUNT')
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