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
          <li>
            <div class="columns">
              <div class="column">
                ID
              </div>
              <div class="column has-text-left">
                NAME
              </div>
              <div class="column">
                TIME
              </div>
              <div class="column">
                ACTION
              </div>
            </div>

          </li>
          <li v-for="item in sortedNotes" :key="item.id">
            <div class="columns">
              <div class="column">
                {{ item.id }}
              </div>
              <div class="column has-text-left">
                {{ item.name }}
              </div>
              <div class="column">
                {{ item.time }}
              </div>
              <div class="column">
                <button class="button is-danger" type="button" @click="deleteNote">Delete</button>
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
      savedNotes: this.$store.state.savedNotes
    }
  },
  computed: {
    sortedNotes() {
      return this.$store.getters.getNotes
    }
  },
  created() {
  },
  methods: {
    deleteNote(id) {
      // Delete Note By ID
    }
  }
}
</script>

<style scoped>
.mt-5 {
  margin-top: 5px;
}
</style>
