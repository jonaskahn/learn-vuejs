<template>
  <input class="input is-medium" type="text" v-model="inputData" @keyup.enter="addNote"/>
</template>

<script>
export default {
  name: "NoteInput",
  data() {
    return {
      inputData: null
    }
  },
  methods: {
    addNote() {
      console.log(`You submit a new note ${this.inputData}`)
      // TODO Add to list
      this.inputData = null
    }
  }
}
</script>

<style scoped>

</style>
