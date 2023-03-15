<template>
  <form class="container is-max-desktop" @submit.prevent="submit">
    <div class="columns">
      <div class="column">
        <div class="field has-text-left	">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input
                class="input"
                :class="[emailValid ? 'is-success' : 'is-danger']"
                placeholder="Enter your email"
                type="text"
                v-model="email"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i v-if="emailValid" class="fas fa-check"></i>
              <i v-else class="fas fa-exclamation-triangle"></i>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <div class="field has-text-left	">
          <label class="label">Password</label>
          <div class="control has-icons-left has-icons-right">
            <input
                class="input"
                :class="[passwordValid ? 'is-success' : 'is-danger']"
                placeholder="Enter your password"
                type="password"
                v-model="password"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-key"></i>
            </span>
            <span class="icon is-small is-right">
               <i v-if="passwordValid" class="fas fa-check"></i>
              <i v-else class="fas fa-exclamation-triangle"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class=" column has-text-center">
        <button class="button is-link mr-6">Submit</button>
        <button class="button is-link is-light mr-6" @click.prevent="$router.go(-1)">Back</button>
        <button class="button is-danger is-light mr-4" @click.prevent="logout($router.currentRoute.path)">Logout</button>
      </div>
    </div>

  </form>
</template>

<script>
import logout from "@/service/logout";

export default {
  name: "Forms",
  data() {
    return {
      email: "demo@example.com",
      password: "demopassword",
    }
  },
  computed: {
    emailValid() {
      return /^[^@]+@\w+(\.\w+)+\w$/.test(this.email);
    },
    passwordValid() {
      return this.password.length > 10;
    }
  },
  methods: {
    logout,
    submit() {
      if(!this.emailValid) {
        alert(" Email is not valid ")

      } else if (!this.passwordValid) {
        alert( " Password is not valid")
      }
    }
  },
};
</script>

<style scoped></style>
