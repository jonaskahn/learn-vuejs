<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="container">
      <section class="section">
        <div class="title">
          <note-intro></note-intro>
        </div>
        <div class="subtitle is-three-fifths mt-5">
          <note-input></note-input>
          <note-store></note-store>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NoteIntro from "@/components/NoteIntro.vue";
import NoteInput from "@/components/NoteInput.vue";
import NoteStore from "@/components/NoteStore.vue";

export default {
  name: 'App',
  components: {
    NoteStore,
    NoteInput,
    NoteIntro
  },

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.mt-5 {
  margin-top: 5rem;
}
</style>
