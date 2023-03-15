<template>
  <form class="container is-max-desktop" @submit.prevent="submit">
    <div class="columns">
      <div class="column">
        <div class="field has-text-left	">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input
                class="input"
                placeholder="Enter your email"
                type="email"
                ref="email"
                @keyup="onEmailChange"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i v-if="validationErrors.email" class="fas fa-check"></i>
              <i v-else class="fas fa-exclamation-triangle"></i>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <div class="field has-text-left">
          <label class="label">Password</label>
          <div class="control has-icons-left has-icons-right">
            <input
                class="input"
                placeholder="Enter your password"
                type="password"
                ref="password"
                @keyup="onPasswordChange"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-key"></i>
            </span>
            <span class="icon is-small is-right">
               <i v-if="validationErrors.password" class="fas fa-check"></i>
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
      validationErrors: {
        email: false,
        password: false
      }
    }
  },
  methods: {
    logout,
    submit() {
      this.onPasswordChange()
      this.onEmailChange()
    },
    onEmailChange() {
      const emailRefs = this.$refs.email
      this.validationErrors.email = /^[^@]+@\w+(\.\w+)+\w$/.test(emailRefs.value)
      if(this.validationErrors.email) {
        emailRefs.classList.remove('is-danger')
        emailRefs.classList.add('is-success')
      } else {
        emailRefs.focus();
        emailRefs.classList.add('is-danger')
      }
    },
    onPasswordChange() {
      const passwordRefs = this.$refs.password
      this.validationErrors.password = passwordRefs.value.length > 10
      if(this.validationErrors.password) {
        passwordRefs.classList.remove('is-danger')
        passwordRefs.classList.add('is-success')
      } else {
        passwordRefs.focus();
        passwordRefs.classList.add('is-danger')
      }
    }
  },
};
</script>

<style scoped></style>
