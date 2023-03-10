const firstComponent = {
    template: `<div>Hello My Friend, {{ name }} </div>`,
    props: ['name']
};
const upvoteApp = {
    data() {
        return {
            appTitle: "Hello Voter",
            submissions: Seed.submissions,
            parentName: null,
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
        upvote(submissionId) {
            alert(`You vote for item ${submissionId}`)
            const submission = this.submissions.find(
                (submission) => submission.id === submissionId
            );
            submission.votes++;
        }
    },
    components: {
        "my-component": firstComponent,
    },
};

Vue.createApp(upvoteApp).mount('#app');