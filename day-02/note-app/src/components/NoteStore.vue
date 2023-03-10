<template>
  <div class="card mt-5">
    <header class="card-header">
      <p class="card-header-title">
        Your saved notes
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <ul id="savedNotesId">
          <li v-for="item in savedNotes" :key="item.id">
            <div class="columns">
              <div class="column">
                {{ item.name }}
              </div>
              <div class="column">
                {{ item.time }}
              </div>
            </div>

          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoteStore",
  data() {
    return {
      /**
       * savedNotes = [
       *  {
       *    id: 1,
       *    name: "Go home",
       *    time: "11:12 AM"
       *  }
       * ]
       */
      savedNotes: [],
      increment: 0
    }
  }
}
</script>

<style scoped>
.mt-5 {
  margin-top: 5px;
}
</style>
