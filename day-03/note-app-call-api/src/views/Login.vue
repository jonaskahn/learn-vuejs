<template>
  <div>
    <button class="button is-primary" @click="login">Login</button>
  </div>
</template>

<script>
import http from "@/service";

export default {
  name: "Login",
  methods: {
    async login() {
      try {
        const res = await http.get("/login")
        localStorage.setItem("token", res.data)
        alert("Login success")
        await this.$router.push("/")
      }catch (e) {
        alert(e)
      }
    }
  }
}


</script>

<style scoped>

</style>