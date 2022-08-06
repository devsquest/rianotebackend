<template>
  <div class="vue-dashboard-page">
    <div class="row content-area p-4">
      <div class="col-md-12">
        <div class="db-section-1 pt-3 pb-3">
          <div class="row">
            <div class="col-md-6 text-left">
              <p>
                <b
                  >Welcome to your {{ this.$appConfig.app_name }} User
                  Dashboard</b
                >
              </p>
            </div>
            <div class="col-md-6 text-right">
              <button class="btn btn-warning" v-on:click="newNoteBtn">
                Start using your {{ this.$appConfig.app_name }} now
                <i class="fas fa-arrow-alt-circle-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12" v-if="userInfo != null">
        <div class="row text-white db-section-2 pb-2">
          <div class="col-md-12 p-4">
            <h6>Basic Information</h6>
          </div>
          <div class="col-md-12 pt-2 pb-2 pl-4 pr-4">
            <div class="row">
              <div class="col-md-6 text-left">
                <i class="fas fa-envelope"></i>
                <span>Email: </span>
              </div>
              <div class="col-md-6 text-right">
                <span>{{ userInfo.email }}</span>
              </div>
            </div>
          </div>
          <div class="col-md-12 pt-2 pb-2 pl-4 pr-4">
            <div class="row">
              <div class="col-md-6 text-left">
                <i class="fas fa-pen-nib"></i>
                <span>Signature: </span>
              </div>
              <div class="col-md-6 text-right">
                <span>{{ userInfo.signature }}</span>
              </div>
            </div>
          </div>
          <div class="col-md-12 pt-2 pb-2 pl-4 pr-4">
            <div class="row">
              <div class="col-md-6 text-left">
                <i class="fas fa-file-invoice-dollar"></i>
                <span>Billing Information: </span>
              </div>
              <div class="col-md-6 text-right">
                <button class="btn btn-warning" style="font-size: 14px">
                  Request to change signature
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="row white-bg mt-5">
          <div class="col-md-12">
            <h6 class="p-4 border-bottom">
              Active Subscriptions assigned to your account
            </h6>
          </div>
          <div class="col-md-12">
            <div class="table-responsive mt-4">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Subscription type</th>
                    <th>Is active?</th>
                    <th>State</th>
                    <th>Started from</th>
                    <th>valid until</th>
                    <th>Purchased by</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monthly individual</td>
                    <td>
                      <button class="btn btn-success btn-14px">Action</button>
                    </td>
                    <td>
                      <button class="btn btn-success btn-14px">Action</button>
                    </td>
                    <td>2022-02-03</td>
                    <td>2022-09-03</td>
                    <td>
                      <button class="btn btn-info btn-14px">You</button>
                    </td>
                    <td>
                      <button class="btn btn-danger btn-14px">
                        Unassigned me
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
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
                      :id="'note-' + note.id"
                    />
                    <label :for="'note-' + note.id">{{ note.name }}</label>
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
  name: "DashboardPage",
  data() {
    return {
      selected_note: null,
      notes_list: null,
    };
  },
  mounted() {
    this.$emit("updateNav", this.$route.name);
    document.title = "Dashboard";
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
          this.notes_list = response.data.data.notes;
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
          params: { type: this.selected_note, section: "Headings" },
        });
        $("#newNoteModal").modal("hide");
      } else {
        this.$toastr.e("Select Note Type", "Error!");
      }
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