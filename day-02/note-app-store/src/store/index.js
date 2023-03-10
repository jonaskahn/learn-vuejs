export const store = {
  sharedState: {
    savedNotes: [],
    increment: 0
  },
  addNote(data) {
    const nextId = ++this.sharedState.increment
    this.sharedState.savedNotes.push({
      name: data.name,
      time: data.time,
      id: nextId
    })
  }
}
