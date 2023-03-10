const firstComponent = {
    template: ` <div>Hello My Friend, {{ magicName }} </div>`,
    data() {
        return {
            magicName: "Tom",
        };
    },
};
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
        upvote(submissionId) {
            alert(`You vote for item ${submissionId}`)
            const submission = this.submissions.find(
                (submission) => submission.id === submissionId
            );
            submission.votes++;
        }
    },
    components: {
        firstComponent,
        "my-component": firstComponent,
    },
};

Vue.createApp(upvoteApp).mount('#app');