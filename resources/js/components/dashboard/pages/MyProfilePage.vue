<template>
  <div class="vue-my-profile-page">
    <div class="row content-area p-4" v-if="user != null">
      <div class="col-md-12">
        <div class="card">
          <h5 class="card-header">Update My Profile</h5>
          <div class="card-body">
            <form method="post" v-on:submit="updateProfile">
              <div class="row">
                <div class="col-md-2">
                  <p class="card-text">Email</p>
                </div>
                <div class="col-md-10">
                  <input
                    type="email"
                    class="form-control"
                    v-model="user.email"
                  />
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-md-2">
                  <p class="card-text">Name</p>
                </div>
                <div class="col-md-10">
                  <input type="text" class="form-control" v-model="user.name" />
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-md-12">
                  <button type="submit" class="btn btn-primary">
                    Update Information
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="card">
          <h5 class="card-header">Update Password</h5>
          <div class="card-body">
            <form method="post" v-on:submit="updatePassword">
              <div class="row">
                <div class="col-md-2">
                  <p class="card-text">Current Password</p>
                </div>
                <div class="col-md-10">
                  <input
                    type="password"
                    class="form-control"
                    v-model="password.current"
                  />
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-md-2">
                  <p class="card-text">New Password</p>
                </div>
                <div class="col-md-10">
                  <input
                    type="password"
                    class="form-control"
                    v-model="password.new"
                  />
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-md-2">
                  <p class="card-text">Conform New Password</p>
                </div>
                <div class="col-md-10">
                  <input
                    type="password"
                    class="form-control"
                    v-model="password.new_conform"
                  />
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-md-12">
                  <button type="submit" class="btn btn-primary">
                    Update Information
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyProfilePage",
  data() {
    return {
      user: null,
      password: {
        current: null,
        new: null,
        new_conform: null,
      },
    };
  },
  mounted() {
    this.$emit("updateNav", this.$route.name);
    document.title = "My Profile";
    if (this.userInfo != null) {
      this.user = this.userInfo;
    }
  },
  methods: {
    updateProfile(e) {
      e.preventDefault();
      if (this.user.email == null || this.user.email == "") {
        this.$toastr.e("Email is required", "Email");
        return false;
      }
      if (this.user.name == null || this.user.name == "") {
        this.$toastr.e("Name is required", "Name");
        return false;
      }
      const { token } = JSON.parse(localStorage.getItem("loginInfo"));
      let headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      let url = process.env.MIX_API_URL + "/api/update-user";
      let payload = this.user;
      this.axios
        .post(url, payload, { headers: headers })
        .then((response) => {
          this.$toastr.s("User Updated", "Success!");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updatePassword(e) {
      e.preventDefault();
      if (this.password.current == null || this.password.current == "") {
        this.$toastr.e("Current Password is required", "Current Password");
        return false;
      }
      if (this.password.new == null || this.password.new == "") {
        this.$toastr.e("New Password is required", "New Password");
        return false;
      }
      if (this.password.new_conform == null || this.password.new_conform == "") {
        this.$toastr.e("New Conform Password is required", "New Conform Password");
        return false;
      }
      const { token } = JSON.parse(localStorage.getItem("loginInfo"));
      let headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      let url = process.env.MIX_API_URL + "/api/update-user";
      let payload = this.password;
      this.axios
        .post(url, payload, { headers: headers })
        .then((response) => {
          //   this.$toastr.s("User Updated", "Success!");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    userInfo() {
      if (this.$store.state.login.user != null) {
        return this.$store.state.login.user;
      } else {
        this.$store.dispatch("login/userInformation").then(() => {
          return this.$store.state.login.user;
        });
      }
    },
  },
  watch: {
    userInfo: {
      handler(val) {
        this.user = val;
      },
      deep: true,
    },
  },
};
</script>