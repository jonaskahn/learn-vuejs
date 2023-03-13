<template>
  <input class="input is-medium" type="text" v-model="inputData" @keyup.enter="pushNote"/>
</template>

<script>
import {store} from "@/store";
export default {
  name: "NoteInput",
  data() {
    return {
      inputData: null
    }
  },
  methods: {
    pushNote() {
      console.log(`You submit a new note ${this.inputData}`)
      store.addNote({
          name: this.inputData,
          time: new Date().toLocaleTimeString()
      })
      this.inputData = null
    }
  }
}
</script>

<style scoped>

</style>
