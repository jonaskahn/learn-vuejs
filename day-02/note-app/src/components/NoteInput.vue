<template>
  <input class="input is-medium" type="text" v-model="inputData" @keyup.enter="pushNote"/>
</template>

<script>

import eventBus from "@/eventBus";

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
      eventBus.emit('enter-note-input', {
        name: this.inputData,
        createdAt: new Date().toLocaleTimeString()
      })
      this.inputData = null
    }
  }
}
</script>

<style scoped>

</style>
