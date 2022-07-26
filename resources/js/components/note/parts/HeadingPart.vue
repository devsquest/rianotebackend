<template>
  <div class="row">
    <div class="col-lg-12 col-md-12">
      <br />
      <div class="note-heading-section">
        <div class="row">
          <div class="col-lg-2 col-md-2">
            <p><i class="fa-solid fa-heading fa-3x"></i></p>
          </div>
          <div class="col-lg-10 col-md-10">
            <h3>Add Headers</h3>
            <p>
              If you wish to add headings to the top of this note, such as
              Diagnosis, Session Time, or Billing Code, you can do so here.
            </p>
            <p>
              Type your own headings below, then use the +/- buttons to add them
              to the current note. If you wish to save all of these headings so
              you can use them in future progress notes AND treatment plans,
              click 'Save' button next to the heading:
            </p>
          </div>
        </div>
        <!--row-->
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <hr />
            <h5 class="bold-heading">Temporary Headings</h5>
          </div>
          <div class="col-lg-12 col-md-12">
            <div class="row" v-for="(x, i) in headingsList" :key="x.id">
              <div class="col-lg-4">
                <h6 class="bold-heading">Heading</h6>
                <textarea
                  class="form-control textarea-heading-note"
                  rows="1"
                  v-model="headingsList[i].heading_text"
                ></textarea>
              </div>
              <div class="col-lg-5">
                <h6 class="bold-heading">Content</h6>
                <textarea
                  class="form-control textarea-heading-note"
                  rows="1"
                  v-model="headingsList[i].heading_content"
                ></textarea>
              </div>
              <div class="col-lg-3 icon-pack-heading-note">
                <button
                  v-on:click="makeHeadingActiveInactive(i, x.type)"
                  class="btn-note-heading-pm"
                  :style="
                    x.status == 1
                      ? { backgroundColor: '#0e386a', color: 'white' }
                      : {}
                  "
                >
                  +/-
                </button>
                <button class="btn-note-heading-save">
                  <i class="fa-solid fa-floppy-disk"></i>
                </button>
                <button class="btn-note-heading-del">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
            <!--row-->
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 col-md-12 mt-2">
            <button
              v-on:click="addNewHeadingRow"
              class="btn-heading-note-add-new"
            >
              <i class="fa-solid fa-plus"></i> Add another heading
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <hr />
            <h5 class="bold-heading">Saved Headings</h5>
          </div>
          <div class="col-lg-12 col-md-12">
            <div class="row" v-for="(x, i) in dbHeadingsList" :key="x.id">
              <div class="col-lg-4">
                <h6 class="bold-heading">Heading</h6>
                <textarea
                  class="form-control textarea-heading-note"
                  rows="1"
                  v-model="x.heading_text"
                ></textarea>
              </div>
              <div class="col-lg-5">
                <h6 class="bold-heading">Content</h6>
                <textarea
                  class="form-control textarea-heading-note"
                  rows="1"
                  v-model="x.heading_content"
                ></textarea>
              </div>
              <div class="col-lg-3 icon-pack-heading-note">
                <button
                  v-on:click="makeHeadingActiveInactive(i, x.type)"
                  class="btn-note-heading-pm"
                  :style="
                    x.status == 1
                      ? { backgroundColor: '#0e386a', color: 'white' }
                      : {}
                  "
                >
                  +/-
                </button>
                <button class="btn-note-heading-save">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="btn-note-heading-del">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
            <!--row-->
          </div>
        </div>
        <!--row-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeadingPart",
  data() {
    return {
      selected_note: this.$route.params.type,
      headingsList: [
        {
          id: 1,
          heading_text: null,
          heading_content: null,
          status: 0,
          type: "local",
          db_id: null,
        },
      ],
      dbHeadingsList: [],
    };
  },
  mounted() {
    this.getSavedHeadings();
  },
  methods: {
    addNewHeadingRow() {
      this.headingsList.push({
        id: this.dbHeadingsList.length + this.headingsList.length + 1,
        heading_text: null,
        heading_content: null,
        status: 0,
        type: "local",
        db_id: null,
      });
      console.log(this.dbHeadingsList, this.headingsList);
    },
    makeHeadingActiveInactive(index, type) {
      if (type == "local") {
        let status = this.headingsList[index].status;
        if (status == 0) {
          this.headingsList[index].status = 1;
        } else {
          this.headingsList[index].status = 0;
        }
      } else if (type == "db") {
        let status = this.dbHeadingsList[index].status;
        if (status == 0) {
          this.dbHeadingsList[index].status = 1;
        } else {
          this.dbHeadingsList[index].status = 0;
        }
      }
    },
    async getSavedHeadings() {
      const { token } = JSON.parse(localStorage.getItem("loginInfo"));
      let headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      let url =
        process.env.MIX_API_URL + "/api/headings_all/" + this.selected_note;
      await this.axios
        .get(url, { headers: headers })
        .then((response) => {
          response.data.success.forEach((v) => {
            this.dbHeadingsList.push({
              id: this.dbHeadingsList.length + this.headingsList.length + 1,
              heading_text: v.heading_text,
              heading_content: v.heading_content,
              status: 0,
              type: "db",
              db_id: v.id,
            });
          });
        })
        .catch((error) => {
          console.log(error);
          this.$toastr.e("Something went wrong", "Error!");
        });
    },
  },
  watch: {
    headingsList: {
      handler(val) {
        let final_arr = this.dbHeadingsList.concat(this.headingsList);
        this.$store.commit('note/changeHeadings', final_arr);
      },
      deep: true,
    },
    dbHeadingsList: {
      handler(val) {
        let final_arr = this.dbHeadingsList.concat(this.headingsList);
        this.$store.commit('note/changeHeadings', final_arr);
      },
      deep: true,
    },
  },
};
</script>