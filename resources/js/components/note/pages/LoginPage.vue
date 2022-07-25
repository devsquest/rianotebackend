<template>
  <div class="vue-login-page">
    <div class="container-fluid">
      <div class="login-container">
        <div class="row login-row">
          <div class="col-sm col-md-6 text-white">
            <a href="#">
              <img
                :src="
                  this.$appConfig.asset_url +
                  '/note_assets/img/Faster_note logo.png'
                "
                alt="Logo"
                class="note-login-page-logo"
              />
            </a>
            <form
              method="post"
              v-on:submit="loginSubmit"
              class="ms-5 mb-6 note-login-form"
            >
              <h2>Login</h2>

              <div class="">
                <div class="input-group-label-lu">
                  <label for="email" class="form-label">Email*</label>
                </div>
                <div class="input-group">
                  <input
                    type="email"
                    class="login-u-input login-u-input-focus"
                    id="email"
                    name="email"
                    ref="email"
                    v-model="formData.email"
                  />
                  <i class="fa-solid fa-envelope login-form-input-icon"></i>
                </div>
              </div>
              <div class="">
                <div class="input-group-label-lu">
                  <label for="pwd" class="form-label">Password*</label>
                </div>
                <div class="input-group">
                  <input
                    type="password"
                    class="login-u-input login-u-input-focus"
                    id="pwd"
                    name="password"
                    ref="password"
                    v-model="formData.password"
                  />
                  <i class="fa-solid fa-eye login-form-input-icon"></i>
                </div>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input
                    class="form-check-input login-u-input login-page-checkbox"
                    type="checkbox"
                    name="remember"
                  />
                  Remember me
                  <label for="link" class="form-check-label float-end">
                    <a href="" class="note-login-link">
                      Forget Password?</a
                    ></label
                  >
                </label>
              </div>
              <button
                type="submit"
                class="btn btn-warning u-login-btn mt-3"
                :disabled="loginBtn.disable"
              >
                {{ loginBtn.text }}
              </button>
              <button
                type="button"
                class="btn btn-primary u-login-btn mt-3 purchase-u-btn"
              >
                Purchase a copy faster note
              </button>
            </form>
          </div>
          <div class="col-sm col-md-6 d-xs-none">
            <img
              :src="this.$appConfig.asset_url + '/note_assets/img/img_03.jpg'"
              class="d-block img-fluid float-end login-side-img"
              alt="Side Img"
            />
          </div>
        </div>
      </div>
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
      loginBtn: {
        disable: false,
        text: "Login",
      },
    };
  },
  mounted(){
    document.title = "Login";
  },
  methods: {
    async loginSubmit(e) {
      this.$store.state.login.loginInfo = null;
      e.preventDefault();
      if (this.formData.email == null || this.formData.email == "") {
        this.$toastr.e("Field is required", "Email");
        this.$refs.email.focus();
      } else if (
        this.formData.password == null ||
        this.formData.password == ""
      ) {
        this.$toastr.e("Password is required", "Password");
        this.$refs.password.focus();
      } else {
        this.$toastr.w("Try to Loging...", "Wait!");
        this.loginBtn.disable = true;
        this.loginBtn.text = "Login....";
        await this.$store.dispatch("login/login", this.formData).then(() => {
          if (this.$store.state.login.loginInfo != null) {
            this.$toastr.s("Loged in Successfully!", "Success!");
            this.$router.push({ name: "splash_page" });
          } else {
            this.loginBtn.disable = false;
            this.loginBtn.text = "Login";
            this.$toastr.e("Invalid Info", "Error!");
          }
        });
      }
    },
  },
};
</script>