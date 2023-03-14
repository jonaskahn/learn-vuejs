<template>
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
</template>

<script>
import NoteIntro from "@/components/NoteIntro.vue";
import NoteInput from "@/components/NoteInput.vue";
import NoteStore from "@/components/NoteStore.vue";

export default {
  name: "Notes",
  components: {NoteStore, NoteInput, NoteIntro}
}
</script>

<style scoped>

</style>