const upvoteApp = {
    data() {
        return {
            appTitle: "Hello Voter",
            submissions: Seed.submissions,
        }
    }
};

Vue.createApp(upvoteApp).mount('#app');