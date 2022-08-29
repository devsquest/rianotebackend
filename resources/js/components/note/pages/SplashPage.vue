<template>
  <div class="vue-splash-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <div class="note-background-img">
            <div class="note-background-color">
              <div class="splash-content-container">
                <div class="logo-placement text-center">
                  <div class="inner-content-splash">
                    <div class="img-splash">
                      <img :src="this.$appConfig.asset_url + '/note_assets/img/Faster_note logo.png'" alt="logo"
                        class="splash-logo"></img>
                    </div>
                    <div class="btn-section-splash mt-5">
                      <span class="btn splash-btn" v-on:click="submitNewNote">Start a new Note</span>
                      <!-- <button class="splash-btn">Go to Dashboard</button> -->
                      <router-link class="btn splash-btn" :to="{ name: 'dashboard_page' }">Go to Dashboard</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SplashPage",
  data() {
    return {
      notes_list: null,
    };
  },
  mounted() {
    document.title = "Welcome to " + this.$appConfig.app_name;
    this.getNotesList();
  },
  methods: {
    getNotesList() {
      const { token } = JSON.parse(localStorage.getItem("loginInfo"));
      let headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      this.axios
        .get(process.env.MIX_API_URL + "/api/notes", { headers: headers })
        .then((response) => {
          this.notes_list = response.data.data.notes;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    submitNewNote() {
      if (this.notes_list != null && this.notes_list.length > 0) {
        this.$router.push({
          name: "make_note",
          params: { type: this.notes_list[0].id, section: "MyPhrase" },
        });
      } else {
        this.$toastr.e("No notes available for you", "Error!");
      }
    },
  },
};
</script>