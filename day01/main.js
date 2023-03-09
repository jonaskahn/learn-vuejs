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
                return a.votes - b.votes
            })
        }
    },
    methods: {
        upvote(id) {
            alert(`You vote for item ${id}`)
            // Write your code to increase data here
            // The answer for ref: https://jsfiddle.net/6f749xv8/
        }
    }
};

Vue.createApp(upvoteApp).mount('#app');