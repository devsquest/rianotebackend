<template>
  <div class="vue-section-part">
    <div class="row" v-if="sub_sections_list != null">
      <div class="col-lg-4 col-md-4">
        <br />
        <div class="row">
          <div class="col-lg-12">
            <div class="note-section-left">
              <div
                class="note-section-left-li"
                v-for="x in sub_sections_list"
                :key="x.id"
              >
                <span
                  class="note-section-left-text"
                  v-on:click="loadSubSection(x.id)"
                  >{{ x.name }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-8 col-md-8">
        <br />
        <div class="row" v-if="showByDefault">
          <div class="col-lg-12">
            <div class="tools-area">
              <div class="search-box">
                <input
                  type="text"
                  placeholder="Enter Search Here"
                  class="tool-input"
                />
                <i class="fa-solid fa-magnifying-glass tool-input-icon"></i>
              </div>
              <div class="questions">
                <div
                  class="single-tools-area"
                  v-for="x in currentSelectedSection"
                  :key="x.id"
                >
                  <div class="tools-heading mt-2">
                    <h6 class="bold-heading">{{ x.question_text }}</h6>
                  </div>
                  <div class="tools-options">
                    <div
                      class="single-tools-option"
                      v-for="option in x.options"
                      :key="option.id"
                    >
                      <p class="note-questions-single-option-box" v-on:click="addQuestionInResult(x, option)">
                        {{ option.option_text }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-lg-12">
        <br />
        <h2>No Content Regarding this Catgeory</h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SectionPart",
  props: ["note_id", "slug"],
  data() {
    return {
      showByDefault: false,
      current_section_id: null,
      sub_sections_list: null,
    };
  },
  mounted() {
    this.sectionContent();
  },
  methods: {
    async sectionContent() {
      const { token } = JSON.parse(localStorage.getItem("loginInfo"));
      let headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      await this.axios
        .get(
          process.env.MIX_API_URL +
            "/api/sections/" +
            this.note_id +
            "/" +
            this.slug,
          {
            headers: headers,
          }
        )
        .then((response) => {
          if (response.data.data.sections.length > 0) {
            this.sub_sections_list = response.data.data.sections;
          } else {
            this.sub_sections_list = null;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async loadSubSection(id) {
      this.showByDefault = true;
      this.current_section_id = id;
      this.$store.dispatch("note/getQuestions", id).then(() => {
        let store = this.$store.state.note.questions;
        this.$store.commit(
          "note/currentSelectedSection",
          store.get("s" + this.current_section_id)
        );
      });
    },
    addQuestionInResult(question_id, option_id){
      this.$store.commit('note/addQuestionsOnResult', {
        qid: question_id.id,
        question_text: question_id.question_text,
        oid: option_id.id,
        option_text: option_id.option_text
      });
    }
  },
  computed: {
    currentSelectedSection() {
      return this.$store.state.note.current_section_questions;
    },
  },
};
</script>