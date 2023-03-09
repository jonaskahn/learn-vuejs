const upvoteApp = {
    data() {
        return {
            appTitle: "Hello Voter",
            submissions: Seed.submissions,
        }
    },
    computed: {
        sortedSubmissions() {
            return this.submissions.sort((a, b) => {
                return b.votes - a.votes
            })
        }
    },
    methods: {
        upvote(id) {
            alert(`You vote for item ${id}`)
        }
    }
};

Vue.createApp(upvoteApp).mount('#app');