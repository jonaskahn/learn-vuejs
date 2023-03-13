<template>
  <input class="input is-medium" type="text" v-model="inputData" @keyup.enter="pushNote"/>
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
    pushNote() {
      console.log(`You submit a new note ${this.inputData}`)
      this.$store.dispatch('addNote', this.inputData)
      this.inputData = null
    }
  }
}
</script>

<style scoped>

</style>
