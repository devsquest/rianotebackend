<template>
  <div class="vue-dashlayout">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2 p-0">
          <div class="note-db-logo">
            <a href="#">
              <img
                :src="
                  this.$appConfig.asset_url +
                  '/note_assets/img/Faster_note logo.png'
                "
                alt="Logo"
                style="width: 50px; margin: 1rem; margin-left: 4rem"
              />
            </a>
          </div>
          <div class="nav">
            <ul class="list-group border-0 m-3">
              <li class="list-group-item border-less p-3 text-primary">
                <a href="" class="note-db-link">
                  <i class="fa-solid fa-database pe-4"></i> Dashboard
                </a>
              </li>

              <li class="list-group-item border-less p-3">
                <a href="" class="note-db-link">
                  <i class="fa-solid fa-power-off pe-4"></i> Getting Start
                </a>
              </li>
              <li class="list-group-item border-less p-3">
                <a href="" class="note-db-link">
                  <i class="fa-solid fa-user pe-4"></i> My Profile
                </a>
              </li>

              <li class="list-group-item border-less p-3">
                <a href="" class="note-db-link">
                  <i class="fa-solid fa-arrow-up-right-dots pe-4"></i> My
                  Requests
                </a>
              </li>

              <li class="list-group-item border-less p-3">
                <a href="" class="note-db-link">
                  <i class="fa-solid fa-square-poll-horizontal pe-4"></i> My
                  Orders
                </a>
              </li>

              <li class="list-group-item border-less p-3">
                <a href="" class="note-db-link">
                  <i class="fa-solid fa-square-poll-vertical pe-4"></i> My
                  Subscriptions
                </a>
              </li>

              <li class="list-group-item border-less p-3">
                <a href="" class="note-db-link">
                  <i class="fa-solid fa-bell pe-4"></i> My Notifications
                </a>
              </li>

              <li
                class="
                  list-group-item
                  border-less
                  p-3
                  log-out-left-nav-dashboard
                "
              >
                <!-- <a href="" class="note-db-link">
                  <div class="border-top pb-3"></div>
                  <i class="fa-solid fa-power-off pe-4"></i> Log Out
                </a> -->
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-10">
          <div class="row pt-2 pb-1">
            <div class="col-md-1 col-6 text-left">
              <i class="fa-solid fa-bars fa-2x mt-1"></i>
            </div>
            <div class="col-md-11 col-6 text-right">
              <div>
                <div style="display: inline-block">
                  <i class="fa-solid fa-bell fa-2x dashboard-bell-icon"></i>
                </div>
                <div style="display: inline-block" class="dropdown">
                  <img
                    :src="
                      this.$appConfig.asset_url +
                      '/note_assets/img/imagetwo.png'
                    "
                    alt="profile"
                    class="img-fluid border dropdown"
                    style="border-radius: 50%; width: 35px"
                    lass="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  />
                  <div
                    class="dropdown-menu dropdown-menu-right"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <span
                      v-on:click="logoutNote"
                      class="dropdown-item btn"
                      href="#"
                      >Logout</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashLayout",
  methods: {
    logoutNote() {
      this.$store.dispatch("login/logoutUser").then(() => {
        this.$toastr.s("User Logout", "Success");
        this.$router.push({
          name: "login_page",
        });
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
};
</script>
