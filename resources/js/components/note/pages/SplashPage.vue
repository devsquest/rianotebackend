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
                      <img :src="this.$appConfig.asset_url + '/note_assets/img/Faster_note logo.png'" alt="logo" class="splash-logo"></img>
                    </div>
                    <div class="btn-section-splash mt-5">
                      <button class="splash-btn" v-on:click="newNoteBtn">Start a new Note</button>
                      <button class="splash-btn">Go to Dashboard</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <!--model start-->
    <div
      class="modal fade"
      id="newNoteModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="newNoteModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <form method="post" v-on:submit="submitNewNote">
            <div class="modal-header">
              <h5 class="modal-title" id="newNoteModalLabel">
                Start a new note
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-lg-12">
                  <p class="modal-main-text">Choose Note Type</p>
                  <p v-for="note in notes_list" :key="note.id">
                    <input
                      type="radio"
                      name="note"
                      :value="note.id"
                      v-model="selected_note"
                    />
                    <span>{{ note.name }}</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" class="btn btn-success">
                Start a new Note
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!--model end-->
  </div>
</template>
<script>
export default {
  name: "SplashPage",
  data() {
    return {
      selected_note: null,
      notes_list: null,
    };
  },
  mounted() {
    document.title = "Welcome to "+ this.$appConfig.app_name;
    this.getNotesList();
  },
  methods: {
    newNoteBtn() {
      $("#newNoteModal").modal("show");
    },
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
          this.notes_list = response.data.success;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    submitNewNote(e) {
      e.preventDefault();
      if (this.selected_note != null) {
        this.$router.push({
          name: "make_note",
          params: { type: this.selected_note },
        });
        $("#newNoteModal").modal("hide");
      } else {
        this.$toastr.e("Select Note Type", "Error!");
      }
    },
  },
};
</script>