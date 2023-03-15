<template>
  <div class="container">
    <button class="button is-danger is-light mr-4" @click="logout($router.currentRoute.path)">Logout</button>
    <router-link to="/form" class="button is-primary is-light" >Go to Form</router-link>
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
</template>

<script>
import NoteIntro from "@/components/NoteIntro.vue";
import NoteInput from "@/components/NoteInput.vue";
import NoteStore from "@/components/NoteStore.vue";
import logout from "@/service/logout";

export default {
  name: "Notes",
  components: {NoteStore, NoteInput, NoteIntro},
  methods: {
    logout
  }
}
</script>

<style scoped>

</style>