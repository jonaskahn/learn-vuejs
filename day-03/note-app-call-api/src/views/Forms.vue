<template>
  <form class="container is-max-desktop">
    <div class="columns">
      <div class="column">
        <div class="field has-text-left	">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" placeholder="Text input" type="text" />
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field has-text-left	">
          <label class="label">Username</label>
          <div class="control has-icons-left has-icons-right">
            <input
                class="input is-success"
                placeholder="Text input"
                type="text"
                value="bulma"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
          <p class="help is-success">This username is available</p>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <div class="field has-text-left	">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input
                class="input is-danger"
                placeholder="Email input"
                type="email"
                value="hello@"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          <p class="help is-danger">This email is invalid</p>
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
  methods: {
    logout
  },
};
</script>

<style scoped></style>
