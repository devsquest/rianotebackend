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
                    v-on:click="loadSubSection(x.id, x.type)"
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
            <div
              class="col-lg-12"
              v-if="current_sub_section == 'questionnaire'"
            >
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
                      <h6
                        class="bold-heading"
                        v-if="x.only_show_options == false"
                      >
                        {{ x.question_text }}:
                      </h6>
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
                          v-on:click="addQuestionInResult(x, option, x.question_type)"
                          v-on:input="editableInput"
                          :contentEditable="option.editAble"
                        >
                          {{ option.option_text }}
                        </p>
                        <p class="d-none">{{ x.editAble }}</p>
                        <div v-if="option.editAble">
                          <button
                            class="note-btn-hover-edit-danger"
                            v-on:click="hideOption(x, option)"
                          >
                            <span><i class="fa-solid fa-xmark"></i></span>
                          </button>
                          <button
                            class="note-btn-hover-edit-success"
                            v-on:click="saveOption(x, option)"
                          >
                            <span><i class="fa-solid fa-floppy-disk"></i></span>
                          </button>
                        </div>
                        <div v-else>
                          <button
                            class="note-btn-hover-edit"
                            v-on:click="editOption(x, option)"
                          >
                            <span
                              ><i class="fa-solid fa-pen-to-square queston-action-icon"></i
                            ></span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="tools-option-add-new">
                      <h6 class="bold-heading">Customized phrases:</h6>
                      <button
                        v-on:click="addOwnCustomPhrase()"
                        class="btn btn-new-phrase"
                      >
                        <i class="fa-solid fa-plus"></i> Add your own custom
                        phrase
                      </button>
                    </div>
                    <div
                      class="tools-option-input-box"
                      v-if="new_phrase.isDisplay"
                    >
                      <input
                        type="text"
                        v-model="new_phrase.option_text"
                        class="form-control mt-3"
                        placeholder="Option Phrase"
                      />
                    </div>
                    <div
                      class="tools-option-input-box-btn mt-2"
                      v-if="new_phrase.isDisplay"
                    >
                      <button
                        class="btn btn-primary btn-14px"
                        v-on:click="saveNewPhrase(x)"
                      >
                        <i class="fa fa-save"></i>
                      </button>
                      <button
                        class="btn btn-danger btn-14px"
                        v-on:click="closeNewPhraseInput"
                      >
                        <i class="fa fa-times"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--col-->
            <div
              class="col-lg-12"
              v-else-if="current_sub_section == 'statements'"
            >
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
                      <h6
                        class="bold-heading"
                        v-if="x.only_show_options == false"
                      >
                        {{ x.question_text }}:
                      </h6>
                    </div>
                    <div class="tools-statement-lines">
                      <h6
                        class="bold-heading"
                        v-for="sm in x.statement_master"
                        :key="sm.id"
                      >
                        {{ sm.short_text }} = {{ sm.statement_text }}:
                      </h6>
                    </div>
                    <div class="tools-options">
                      <div
                        v-for="sd in x.statement_detail"
                        :key="sd.id"
                        class="single-tools-option"
                      >
                        <h6 class="bold-heading">{{ sd.title }}:</h6>
                        <div class="statement-lists">
                          <div
                            class="row"
                            v-for="option in sd.options"
                            :key="option.id"
                          >
                            <div class="col-3">
                              <button v-for="sm in x.statement_master" :key="sm.id" class="btn note-statement-btn m-1">{{ sm.short_text }}</button>
                            </div>
                            <div class="col-9">
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
                                v-on:click="addQuestionInResult(x, option, x.question_type)"
                              >
                                {{ option.option_text }}
                              </p>
                            </div>
                          </div>
                          <!--row-->
                        </div>
                      </div>
                    </div>
                    <div class="tools-option-add-new">
                      <h6 class="bold-heading">Customized phrases:</h6>
                      <button
                        v-on:click="addOwnCustomPhrase()"
                        class="btn btn-new-phrase"
                      >
                        <i class="fa-solid fa-plus"></i> Add your own custom
                        phrase
                      </button>
                    </div>
                    <div
                      class="tools-option-input-box"
                      v-if="new_phrase.isDisplay"
                    >
                      <input
                        type="text"
                        v-model="new_phrase.option_text"
                        class="form-control mt-3"
                        placeholder="Option Phrase"
                      />
                    </div>
                    <div
                      class="tools-option-input-box-btn mt-2"
                      v-if="new_phrase.isDisplay"
                    >
                      <button
                        class="btn btn-primary btn-14px"
                        v-on:click="saveNewPhrase(x)"
                      >
                        <i class="fa fa-save"></i>
                      </button>
                      <button
                        class="btn btn-danger btn-14px"
                        v-on:click="closeNewPhraseInput"
                      >
                        <i class="fa fa-times"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--col-->
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
      contentEditable_text: null,
      showByDefault: false,
      current_section_id: null,
      sub_sections_list: null,
      current_sub_section: null,
      new_phrase: {
        option_text: null,
        isDisplay: false,
      },
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
    async loadSubSection(id, type) {
      this.current_sub_section = type;
      this.$store.commit("note/changeSubSectionComponent", id);
      this.showByDefault = true;
      this.current_section_id = id;
      if (this.currentSectionQuestions.length <= 0) {
        this.$store.dispatch("note/getQuestions", { id: id, type: type });
      } else {
        this.$store.commit("note/changeQuestionsState", { id: id, type: type });
      }
    },
    addQuestionInResult(question, option, question_type) {
      console.log(question);
      console.log(option);
      console.log(question_type);
      this.$store.commit("note/addQuestionsOnResult", {
        question: question,
        option: option,
      });
    },
    addOwnCustomPhrase() {
      this.new_phrase.isDisplay =
        this.new_phrase.isDisplay == true ? false : true;
    },
    closeNewPhraseInput() {
      this.new_phrase.isDisplay = false;
    },
    saveNewPhrase(question) {
      if (
        this.new_phrase.option_text == null ||
        this.new_phrase.option_text == ""
      ) {
        this.$toastr.e("Required Option Text", "Option Text!");
        return false;
      }
      this.$store
        .dispatch("note/addQuestionNewOption", {
          question: question,
          option: this.new_phrase,
        })
        .then(() => {
          this.new_phrase.isDisplay = false;
          this.new_phrase.option_text = null;
        });
    },
    editOption(question, option) {
      // console.log(question, option);
      this.$store.commit("note/makeQuestionEditable", {
        question_id: question.id,
        option_id: option.id,
      });
    },
    hideOption(question, option) {
      // console.log(question, option);
      this.$store.commit("note/makeQuestionEditHide", {
        question_id: question.id,
        option_id: option.id,
      });
    },
    saveOption(question, option) {
      if (this.contentEditable_text != null) {
        this.$store.dispatch("note/saveExistingOption", {
          question_id: question.id,
          option_id: option.id,
          option_text: this.contentEditable_text,
        });
      }
    },
    editableInput(e) {
      this.contentEditable_text = null;
      this.contentEditable_text = e.target.innerText;
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