<template>
  <div class="vue-section-part">
    <div class="questionnaire" v-if="section_type == 'questionnaire'">
      <div
        class="row"
        v-if="currentSubSectionList != null && currentSubSectionList.length > 0"
      >
        <div class="col-lg-4 col-md-4">
          <br />
          <div class="row">
            <div class="col-lg-12">
              <div class="note-section-left">
                <div
                  v-for="x in currentSubSectionList"
                  :key="x.id"
                  :class="[
                    'note-section-left-li',
                    { 'note-section-left-li-selected': x.showStatus },
                  ]"
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
                    v-for="x in currentSectionQuestions"
                    :key="x.id"
                  >
                    <div class="tools-heading mt-2">
                      <h6 class="bold-heading" v-if="x.only_show_options == false">{{ x.question_text }}:</h6>
                    </div>
                    <div class="tools-options">
                      <div
                        v-for="option in x.options"
                        :key="option.id"
                        class="single-tools-option"
                      >
                        <p
                          :class="[
                            'note-questions-single-option-box',
                            {
                              'note-questions-single-option-box-selected':
                                x.selectedOptions.indexOf(option.id) != -1
                                  ? true
                                  : false,
                            },
                          ]"
                          v-on:click="addQuestionInResult(x, option)"
                        >
                          {{ option.option_text }}
                        </p>
                      </div>
                    </div>
                    <div class="tools-option-add-new">
                      <button class="btn btn-new-phrase"> <i class="fa-solid fa-plus"></i> Add your own custom phrase</button>
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
    <div class="form-inline" v-else-if="section_type == 'form-inline'">
      <div
        class="row"
        v-if="currentFormQuestions != null && currentFormQuestions.length > 0"
      >
        <div class="col-lg-12 col-md-12">
          <br />
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <p class="bold-heading">
                Add information as appropriate in the spaces below.
              </p>
            </div>
            <div
              class="col-lg-12 col-md-12"
              v-for="x in currentFormQuestions"
              :key="x.id"
            >
              <div class="note-input-group">
                <div class="note-input-group-head">
                  <h6 class="bold-heading">{{ x.question_text }}:</h6>
                </div>
                <div class="note-input-group-field">
                  <input
                    type="text"
                    class="form-control"
                    style="width: 95%"
                    v-model="x.textInput"
                  />
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
    <div class="form-nextline" v-else-if="section_type == 'form-nextline'">
      <div
        class="row"
        v-if="currentFormQuestions != null && currentFormQuestions.length > 0"
      >
        <div class="col-lg-12 col-md-12">
          <br />
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <p class="bold-heading">
                Add information as appropriate in the spaces below.
              </p>
            </div>
            <div
              class="col-lg-12 col-md-12"
              v-for="x in currentFormQuestions"
              :key="x.id"
            >
              <div class="note-input-group">
                <div class="note-input-group-head">
                  <h6 class="bold-heading">{{ x.question_text }}:</h6>
                </div>
                <div class="note-input-group-field">
                  <input
                    type="text"
                    class="form-control"
                    style="width: 95%"
                    v-model="x.textInput"
                  />
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
  </div>
</template>
<script>
export default {
  name: "SectionPart",
  props: ["note_id", "slug", "section_type"],
  data() {
    return {
      showByDefault: false,
      current_section_id: null,
      sub_sections_list: null,
    };
  },
  mounted() {
    this.$store.commit("note/changeParentComponent", {
      parent_id: this.slug,
    });
    this.sectionContent();
  },
  methods: {
    async sectionContent() {
      if (this.currentFormQuestions.length <= 0) {
        this.$store.dispatch("note/sectionContent", {
          note_id: this.note_id,
          section_type: this.section_type,
          slug: this.slug,
        });
      }
    },
    async loadSubSection(id) {
      this.$store.commit("note/changeSubSectionComponent", id);
      this.showByDefault = true;
      this.current_section_id = id;
      if (this.currentSectionQuestions.length <= 0) {
        this.$store.dispatch("note/getQuestions", id);
      }
    },
    addQuestionInResult(question, option) {
      this.$store.commit("note/addQuestionsOnResult", {
        question: question,
        option: option,
      });
    },
  },
  computed: {
    currentSectionQuestions() {
      return this.$store.getters["note/currentSectionQuestions"];
    },
    currentSubSectionList() {
      return this.$store.state.note.sub_sections_list;
    },
    currentFormQuestions() {
      return this.$store.getters["note/currentSectionFormQuestions"];
    },
  },
};
</script>