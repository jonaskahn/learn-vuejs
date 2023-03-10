const firstComponent = {
    template: `
        <input class="input is-medium" type="text" placeholder="Medium input" v-model="magicName"/>
        <div>Hello My Friend, {{ magicName }} </div>
    
    `,
    data() {
        return {
            magicName: "Tom",
        };
    },
    computed() {
        // Question reverse magicName in html display ?
    }
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
        "my-component": firstComponent,
    },
};

Vue.createApp(upvoteApp).mount('#app');