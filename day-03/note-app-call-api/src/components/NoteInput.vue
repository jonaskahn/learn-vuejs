<template>
  <input class="input is-medium" type="text" v-model="inputData" @keyup.enter="pushNote"/>
</template>

<script>
import http from "@/service";

export default {
  name: "NoteInput",
  data() {
    return {
      inputData: null
    }
  },
  methods: {
    async pushNote() {
      console.log(`You submit a new note ${this.inputData}`)
     try {
       const res = await http.post("/note/add", {
         name: this.inputData,
         createdAt: new Date().toLocaleTimeString()
       }, {
         headers: {
           token: `${localStorage.getItem("token")}`
         }
       })
       await this.$store.dispatch('loadNotes')
       alert(res.data)
     }catch (e) {
        alert(e.response.data)
     }
      this.inputData = null
    }
  }
}
</script>

<style scoped>

</style>
