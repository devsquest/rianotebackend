<template>
  <div class="vue-login-page">
    <div class="login-form">
      <form method="post" v-on:submit="loginSubmit">
        <div class="row">
          <div class="col-lg-1">
            <h5>Email:</h5>
          </div>
          <div class="col-lg-4">
            <input type="email" class="form-control" v-model="formData.email" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-1">
            <h5>Password:</h5>
          </div>
          <div class="col-lg-4">
            <input
              type="password"
              class="form-control"
              v-model="formData.password"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <button class="btn btn-primary">Login</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginPage",
  data() {
    return {
      formData: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    async loginSubmit(e) {
      e.preventDefault();
      this.$store.dispatch("login/login", this.formData);
      console.log(this.$store.state.login.loginInfo);
    },
  },
};
</script>