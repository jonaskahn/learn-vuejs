import Vuex from 'vuex'
import Vue from "vue";
import http from "@/service";

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    savedNotes: []
  },
  mutations: {
    ADD_NOTE (state, payload) {
      state.savedNotes.push({
        name: payload.name,
        time: payload.createdAt,
        id: payload.id
      })
    },
    DELETE_NOTE(state, payload) {
      //
      state.savedNotes
    }
  },
  actions: {
    addNote(context, payload) {
      context.commit('ADD_NOTE', payload)
    },
    async loadNotes(context) {
      const noteResponse = await http.get("/note/list")
      const data = noteResponse.data
      data.forEach(note => {
        context.commit('ADD_NOTE', note)
      })
      return Promise.resolve()
    },
  },
  getters: {
    getNotes(state) {
      return state.savedNotes.sort((a, b) => b.id - a.id);
    },
  }
})

export default store;