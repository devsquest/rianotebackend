<template>
  <div class="container-fluid make-note">
    <div class="note-background">
      <div class="note-header">
        <div class="row">
          <div class="col-lg-2 col-md-2 col-sm-2 col-6 note-logo top-note-height">
            <img style="margin-left: 2.2rem !important" class="logo-img mt-2" :src="
              this.$appConfig.asset_url +
              '/note_assets/img/Faster_note logo.png'
            " alt="" />
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-12 top-note-height white-bg">
            <div class="new-note-btn">
              <button v-for="note in notes_list" :key="note.id" :class="[
                'btn',
                'btn-success',
                'mt-2',
                'ml-3',
                'btn-14px',
                { 'btn-success-active': selected_note == note.id },
              ]" v-on:click="submitNewNote(note.id)">
                {{ note.name }}
              </button>
            </div>
          </div>
          <div class="
              col-lg-4 col-md-4 col-sm-4 col-12
              top-note-height
              white-bg
              text-right
            ">
            <div class="dropdown" style="float: right">
              <div class="user-profile mt-2">
                <img v-if="userInfo != null" style="
                    border: 3px solid #dee2e6 !important;
                    border-radius: 50%;
                    width: 35px;
                  " :src="[
                    userInfo.profile_picture == null ||
                      userInfo.profile_picture == ''
                      ? this.$appConfig.asset_url +
                      '/note_assets/img/icons/Basic-Note_42.jpg'
                      : userInfo.profile_picture,
                  ]" alt="" />
                <span v-if="userInfo != null" style="font-size: 14px">{{
                userInfo.name
                }}</span>
                <span lass="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa-solid fa-angle-down" style="color: #cbcbcb"></i>
                </span>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <!-- <span class="dropdown-item btn">Dashboard</span> -->
                  <router-link class="dropdown-item btn" :to="{ name: 'dashboard_page' }">Dashboard</router-link>
                  <span v-on:click="logoutNote" class="dropdown-item btn">Logout</span>
                </div>
              </div>
            </div>
            <div style="float: right">
              <a class="btn mt-1" v-on:click="helpNoteBtn" style="font-size: 17px;"><i
                  class="fa-solid fa-circle-question"></i> Help</a>
              <a class="btn mt-1" v-on:click="preferencesNoteBtn" style="font-size: 17px;"><i
                  class="fa-solid fa-gear"></i> Preferences</a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12" style="background-color: #0e386a">
            <div class="input-placeholder mb-2">
              <div class="row">
                <div class="col-lg-3 col-md-3 col-6">
                  <div class="input-group-u">
                    <i class="fa fa-user u-input-icon"></i>
                    <input type="text" placeholder="Name" class="u-input" v-model="note.name" />
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-6">
                  <div class="input-group-u">
                    <i class="fa-solid fa-calendar-days u-input-icon"></i>
                    <input type="date" placeholder="Date" class="u-input" v-model="note.date" />
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-6">
                  <div class="input-group-u">
                    <i class="fa-solid fa-clock u-input-icon"></i>
                    <input type="time" placeholder="Session Time" class="u-input" v-model="note.session_time" />
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-6">
                  <div class="input-group-u">
                    <i class="fa-solid fa-clock u-input-icon"></i>
                    <input type="text" placeholder="Length of Session" class="u-input"
                      v-model="note.length_of_session" />
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-6">
                  <div class="input-group-u">
                    <i class="fa-solid fa-comment-medical u-input-icon"></i>
                    <input type="text" placeholder="Diagnosis" class="u-input" v-model="note.diagnosis" />
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-6">
                  <div class="input-group-u">
                    <i class="fa-solid fa-file-invoice u-input-icon"></i>
                    <input type="text" placeholder="Billing Code" class="u-input" v-model="note.billing_code" />
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-6">
                  <div class="input-group-u">
                    <i class="fa-solid fa-location-arrow u-input-icon"></i>
                    <input type="text" placeholder="Session Location" class="u-input" v-model="note.session_location" />
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-6">
                  <div class="input-group-u">
                    <i class="fa-regular fa-message u-input-icon"></i>
                    <input type="text" placeholder="Comments" class="u-input" v-model="note.comments" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="note-body">
        <div class="row">
          <div class="col-lg-7 col-md-7">
            <div class="row">
              <div class="col-lg-12 col-md-12 bg-green">
                <div class="scrollable-nav">
                  <nav class="navbar navbar-expand-lg navbar-light" style="overflow-x: auto; padding: 0">
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                      data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                      aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav mr-auto">
                        <!-- <li class="nav-item">
                          <a
                            :class="[
                              'nav-link',
                              'note-nav-link',
                              'note-nav-link-headings',
                              {
                                'note-nav-a-click': loadHeadingsTab.status,
                              },
                            ]"
                            :style="[
                              loadHeadingsTab.status
                                ? { color: '#ffff94' }
                                : { color: '#06244c' },
                            ]"
                            v-on:click="loadHeadings"
                          >
                            Headings</a
                          >
                        </li> -->
                        <li v-for="(x, index) in sections_list" :key="x.id" class="nav-item">
                          <a :class="[
                            'nav-link',
                            'note-nav-link',
                            'note-nav-link-headings',
                            {
                              'note-nav-a-click': x.showStatus,
                            },
                          ]" :style="[
                            x.showStatus
                              ? { color: '#ffff94' }
                              : { color: '#06244c' },
                          ]" v-on:click="loadSections(x.id, index, x.type)">
                            {{ x.name }}</a>
                        </li>
                        <li class="nav-item">
                          <a :class="[
                            'nav-link',
                            'note-nav-link',
                            'note-nav-link-headings',
                            {
                              'note-nav-a-click': loadMyPhraseTab.status,
                            },
                          ]" :style="[
                            loadMyPhraseTab.status
                              ? { color: '#ffff94' }
                              : { color: '#06244c' },
                          ]" v-on:click="loadMyPhrase">
                            My Phrases
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div class="tools-box-complete">
              <KeepAlive include="MyPhrase">
                <component :is="current" :note_id="selected_note" :key="this.section_slug" :slug="this.section_slug"
                  :section_type="section_type"></component>
              </KeepAlive>
            </div>
          </div>
          <div class="col-lg-5 col-md-5">
            <div class="row">
              <div class="col-lg-12 col-md-12 bg-green">
                <div class="scrollable-nav">
                  <nav class="navbar navbar-expand-lg navbar-light" style="overflow-x: auto; padding: 0">
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                      data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                      aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                          <a class="nav-link dark-blue" style="
                              color: #06244c;
                              font-weight: 600;
                              padding: 15px;
                              cursor: pointer;
                            " v-on:click="copyContent">
                            <i class="fa-solid fa-copy"></i> Copy</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link dark-blue" style="
                              color: #06244c;
                              font-weight: 600;
                              padding: 15px;
                              cursor: pointer;
                            " v-on:click="generatePDF">
                            <i class="fa-solid fa-file-export"></i> Export</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link dark-blue" style="
                              color: #06244c;
                              font-weight: 600;
                              padding: 15px;
                              cursor: pointer;
                            " v-on:click="clearContent">
                            <i class="fa-solid fa-eraser"></i> Clear</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 col-md-12">
                <div class="note-result" id="note-result" ref="noteresult" contentEditable="true">
                  <div class="section-1">
                    <p v-if="note.name != null && note.name != ''">
                      <span class="note-heading-text-title">Name: </span>
                      <span class="note-heading-text-value">{{
                      note.name
                      }}</span>
                    </p>
                    <p v-if="note.date != null && note.date != ''">
                      <span class="note-heading-text-title">Date: </span>
                      <span class="note-heading-text-value">{{
                      note.date | moment("dddd, MMMM Do YYYY")
                      }}</span>
                    </p>
                    <p v-if="
                      note.session_time != null && note.session_time != ''
                    ">
                      <span class="note-heading-text-title">Session Time:
                      </span>
                      <span class="note-heading-text-value">{{
                      note.session_time | customTime
                      }}</span>
                    </p>
                    <p v-if="
                      note.length_of_session != null &&
                      note.length_of_session != ''
                    ">
                      <span class="note-heading-text-title">Length of Session:
                      </span>
                      <span class="note-heading-text-value">{{
                      note.length_of_session
                      }}</span>
                    </p>
                    <p v-if="note.diagnosis != null && note.diagnosis != ''">
                      <span class="note-heading-text-title">Diagnosis: </span>
                      <span class="note-heading-text-value">{{
                      note.diagnosis
                      }}</span>
                    </p>
                    <p v-if="
                      note.billing_code != null && note.billing_code != ''
                    ">
                      <span class="note-heading-text-title">Billing Code:
                      </span>
                      <span class="note-heading-text-value">{{
                      note.billing_code
                      }}</span>
                    </p>
                    <p v-if="
                      note.session_location != null &&
                      note.session_location != ''
                    ">
                      <span class="note-heading-text-title">Session Location:
                      </span>
                      <span class="note-heading-text-value">{{
                      note.session_location
                      }}</span>
                    </p>
                    <p v-if="note.comments != null && note.comments != ''">
                      <span class="note-heading-text-title">Comments: </span>
                      <span class="note-heading-text-value">{{
                      note.comments
                      }}</span>
                    </p>
                    <div class="heading-sections-note-result">
                      <div class="div" v-for="x in allHeadingsStore" :key="x.id">
                        <h6 v-if="x.status == 1">
                          <label class="ex-bold-heading">{{ x.heading_text }}:</label>
                          <label>{{ x.heading_content }}</label>
                        </h6>
                      </div>
                    </div>
                    <div class="heading-sections-note-result">
                      <div class="form-inline-note" v-for="x in formQuestions.filter(
                        (x) => x.formType == 'form-inline'
                      )" :key="x.id">
                        <div>
                          <h6 v-if="x.textInput != null && x.textInput != ''">
                            <label class="ex-bold-heading">{{ x.question_text }}:</label>
                            <label>{{ x.textInput }}</label>
                          </h6>
                        </div>
                      </div>
                      <!--form-inline-note-->
                      <div class="form-nextline-note" v-for="x in formQuestions.filter(
                        (x) => x.formType == 'form-nextline'
                      )" :key="x.id">
                        <div>
                          <div v-if="x.textInput != null && x.textInput != ''">
                            <h6>
                              <label class="ex-bold-heading">{{ x.question_text }}:</label>
                            </h6>
                            <p>
                              <label>{{ x.textInput }}</label>
                            </p>
                          </div>
                        </div>
                      </div>
                      <!--form-nextline-->
                      <div class="statement-questions-note">
                        <div class="statement-single-question" v-for="x in questionsData.filter(
                          (x) =>
                            x.isDisplay && x.question_type == 'statements'
                        )" :key="x.id">
                          <span class="d-none">{{ x.revision }}</span>
                          <h6>
                            <label class="ex-bold-heading">{{ x.section_name }}:</label>
                          </h6>
                          <p v-for="sm in x.statement_master" :key="sm.id" class="sm">
                            <span v-if="
                              sm.selectedOptions &&
                              sm.selectedOptions.length > 0
                            ">
                              <span>{{ sm.statement_text | removeStringClient(terminologyClient) }}</span>
                              <span v-for="sd in x.statement_detail" :key="sd.id" class="sd">
                                <span v-for="dop in sd.options" :key="dop.id">
                                  <span v-if="
                                    sm.selectedOptions &&
                                    sm.selectedOptions.find(
                                      (fi) => fi == dop.id
                                    )
                                  ">{{ dop.option_text }}.</span>
                                </span>
                              </span>
                            </span>
                          </p>
                        </div>
                      </div>
                      <!--statement-questions-->
                    </div>
                    <h6 class="ex-bold-heading">Session Note:</h6>
                    <p>
                      <span v-for="x in questionsData.filter(
                        (x) => x.isDisplay && x.question_type != 'statements'
                      )" :key="x.id">
                        <span v-if="
                          x.question_type == 'text' ||
                          x.question_type == 'tags'
                        ">
                          <span v-if="x.only_show_options == false">
                            <span>{{ x.question_text | removeStringClient(terminologyClient) }}</span>
                            <span v-for="(v, i) in x.options" :key="v.id">
                              <span v-if="x.selectedOptions.indexOf(v.id) != -1">
                                <span v-if="i >= 1 && x.options.length >= i">
                                  ,</span>
                                {{ v.option_text }}</span> </span>.
                          </span>
                          <span v-else>
                            <span v-for="v in x.options" :key="v.id">
                              <span v-if="x.selectedOptions.indexOf(v.id) != -1">{{ v.option_text }}.
                              </span>
                            </span>
                          </span>
                        </span>
                        <span v-else-if="
                          x.question_type == 'tags-replacement-option'
                        ">
                          <span>{{
                          x.question_text | removeOptionString(x)
                          }}</span>
                          <span v-for="(v, i) in x.options" :key="v.id" class="d-none">
                            <span v-if="x.selectedOptions.indexOf(v.id) != -1">
                              <span v-if="i >= 1 && x.options.length >= i">
                                ,</span>
                              {{ v.option_text }}</span> </span>.
                        </span>
                      </span>
                    </p>
                  </div>
                  <div class="section-2">
                    <p class="text-left note-hr-line"></p>
                    <p v-if="userInfo != null">{{ userInfo.signature }}</p>
                  </div>
                </div>
                <VueHtml2pdf :show-layout="false" :float-layout="true" :enable-download="true" :preview-modal="true"
                  :paginate-elements-by-height="1400" filename="myPDF" :pdf-quality="2" :manual-pagination="false"
                  pdf-format="a4" pdf-orientation="landscape" pdf-content-width="100%" ref="html2Pdf">
                  <section slot="pdf-content" id="pdf_to_append">
                    <!-- PDF Content Here -->
                  </section>
                </VueHtml2pdf>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--model start-->
    <div class="modal fade" id="preferencesNoteModal" tabindex="-1" role="dialog" aria-labelledby="newNoteModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="newNoteModalLabel">
              Preferences and Advanced Options
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="system-settings">
              <div class="single-setting">
                <div class="row">
                  <div class="col-lg-12">
                    <h6 class="font-weight-600">Terminology</h6>
                    <h6>Which terms do you prefer (current selections are highlighted)?</h6>
                  </div>
                </div>
                <!--row-->
                <div class="row text-center">
                  <div class="col-lg-12 mt-1 mb-1">
                    <div class="buttons">
                      <button v-for="btn in terminologyClient" :key="btn.id" :class="['btn', 'btn-success', 'btn-14px', 'ml-1', 'mr-1', {
                        'btn-success-active': btn.status == 1
                      }]" v-on:click="changeTerminologyDefault(btn.id, 'client')">
                        {{ btn.name }}
                      </button>
                    </div>
                  </div>
                  <div class="col-lg-12 mt-1 mb-1">
                    <div class="buttons">
                      <button v-for="btn in terminologyPsycho" :key="btn.id" :class="['btn', 'btn-success', 'btn-14px', 'ml-1', 'mr-1', {
                        'btn-success-active': btn.status == 1
                      }]" v-on:click="changeTerminologyDefault(btn.id, 'psycho')">
                        {{ btn.name }}
                      </button>
                    </div>
                  </div>
                  <div class="col-lg-12 mt-1 mb-1">
                    <div class="buttons">
                      <button v-for="btn in terminologyBehavior" :key="btn.id" :class="['btn', 'btn-success', 'btn-14px', 'ml-1', 'mr-1', {
                        'btn-success-active': btn.status == 1
                      }]" v-on:click="changeTerminologyDefault(btn.id, 'behavior')">
                        {{ btn.name }}
                      </button>
                    </div>
                  </div>
                </div>
                <!--row-->
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <!-- <button type="submit" class="btn btn-success">
              Save
            </button> -->
          </div>
        </div>
      </div>
    </div>
    <!--model end-->
    <!--model start-->
    <div class="modal fade" id="helpNoteModal" tabindex="-1" role="dialog" aria-labelledby="newNoteModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="newNoteModalLabel">
              Help with {{ this.$appConfig.app_name }}
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="note-help">
              <p class="note-help-modal-para">Welcome to {{ this.$appConfig.app_name }}:</p>
              <p class="note-help-modal-para">
                {{ this.$appConfig.app_name }} was created by two psychologists who wanted a method for efficiently
                creating clinical
                notes that would be thorough and useful, as well as consistent with standard regulatory guidelines.</p>
              <br>
              <p class="note-help-modal-para note-help-modal-para-bold">Introduction:</p>
              <br>
              <p class="note-help-modal-para note-help-modal-para-bold">
              <ul>
                <li>If this is your first time using {{ this.$appConfig.app_name }}, the easiest way to get started is
                  to familiarize
                  yourself with the steps for creating a basic note, which are actually quite simple. You can read some
                  or all of the detailed instructions and information below, or just close this window and get started.
                  Type a few things in, click a few buttons, and see what happens. If you find anything unclear, simply
                  use the Help menu at the top of your screen to return to this window.
                </li>
              </ul>
              </p>
              <br>
              <p class="note-help-modal-para">To create a basic session note:</p>
              <p class="note-help-modal-para">
              <ul>
                <li>Name and Date: Type the client/patient's name (or other identifer; e.g., initials) and the session
                  date in the lines at the top left.</li>
                <li>Duration and Fee: If you wish to, you can add Session Duration (Start and End times) and Fee, using
                  the fields next to Name and Date.</li>
                <li>Selecting Statements to Describe the Session: Click on the tabs to find statements relating to the
                  person's affective and mental STATE, the THEMES of the session, the interventions made ('TREATMENT')
                  and the PROGRESS made and plans for future treatment. Simply scroll through the statements listed and
                  click on the statements that apply. As you do, you will see the statements appear as the note is
                  generated to the right of the screen. When a statement is highlighted on the left, it is selected and
                  should appear in the note on the right. You may select as many of the statements as you like. When you
                  first use Note Designer, you may find it takes a few moments to locate the statements you want, but
                  after awhile you will become familiar with the statements and their location on each tab and sub-tab.
                  Or you can use the search function, above the statements, to find particular items.</li>
                <li>Removing Statements: If you wish to remove it just click the statement again and it will be
                  deselected. For each section of statements you also have the option to add your own 'custom'
                  observations if you do not find a standard statement that is suitable.</li>
                <li>Introductory and Concluding Statements: If you have additional introductory or concluding comments
                  to add, you can type them in the spaces indicated near the top of the screen and then press the +/-
                  button to add them in to (or remove them from) your note, or the X button to delete them.</li>
              </ul>
              </p>
              <br>
              <p class="note-help-modal-para">Exporting and copying:</p>
              <p class="note-help-modal-para">
              <ul>
                <li>When your note is finished, click the "EXPORT" button above the note and this will send it to
                  temporary window, from which you can download (as pdf) or print the note. If the format of the printed
                  note does not appear quite as you would like it, use "OPTIONS / PREFERENCES" (see below) to make
                  modifications.</li>
                <li>If you would like to edit or format the note further, or save it to your regular files, you can use
                  the "COPY" button to copy it to your system clipboard. Then you should be able to paste the note into
                  Word or your regular text-editing program: just open an empty document and choose edit/paste. Any of
                  the styling done by Note Designer (e.g., font size and style) may be lost in this operation; the note
                  will likely take on whatever formatting that you have set up in your word processor, where you can
                  then format the note however you like.</li>
              </ul>
              </p>
              <br>
              <p class="note-help-modal-para">Clearing your work:</p>
              <p class="note-help-modal-para">
              <ul>
                <li>Use the "CLEAR" button when you have finished printing, copying, or saving the note and you wish to
                  start a new one. This will completely clear the note and all statement choices from the workspace so
                  you
                  can start fresh.</li>
              </ul>
              </p>
              <p class="note-help-modal-para">Customization:</p>
              <p class="note-help-modal-para">
              <ul>
                <li>Each section of statements includes blank lines where you can add your own phrases and sentences.
                  Format your choices according to the style of the section (i.e., whether single words or phrases or
                  sentences). Then click the button at the right of the item to save your addition (which will also make
                  it available for future notes). Then click the item to add your choice into the note.</li>
              </ul>
              </p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <!--model end-->
  </div>
</template>

<script>
import VueHtml2pdf from "vue-html2pdf";
import HeadingPart from "./parts/HeadingPart.vue";
import MyPhrase from "./parts/MyPhrase.vue";
import SectionPart from "./parts/SectionPart.vue";

export default {
  name: "MasterLayout",
  components: {
    VueHtml2pdf,
    HeadingPart,
    SectionPart,
    MyPhrase,
  },
  data() {
    return {
      section_type: null,
      section_slug: this.$route.params.section,
      current: "MyPhrase",
      notes_list: null,
      sections_list: null,
      loadHeadingsTab: {
        status: false,
        class: "note-nav-a-click",
      },
      loadMyPhraseTab: {
        status: false,
        class: "note-nav-a-click",
      },
      sectionTab: {},
      selected_note: this.$route.params.type,
      note: {
        name: null,
        date: null,
        session_time: null,
        length_of_session: null,
        diagnosis: null,
        billing_code: null,
        session_location: null,
        comments: null,
      },
    };
  },
  mounted() {
    document.title = "Make A New Note";
    this.getNotesList();
    this.getSectionsList();
  },
  methods: {
    preferencesNoteBtn() {
      $("#preferencesNoteModal").modal("show");
    },
    helpNoteBtn() {
      $("#helpNoteModal").modal("show");
    },
    logoutNote() {
      this.$store.dispatch("login/logoutUser").then(() => {
        this.$toastr.s("User Logout", "Success");
        this.$router.push({
          name: "login_page",
        });
      });
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
    getSectionsList() {
      const { token } = JSON.parse(localStorage.getItem("loginInfo"));
      let headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      this.axios
        .get(process.env.MIX_API_URL + "/api/sections/" + this.selected_note, {
          headers: headers,
        })
        .then((response) => {
          this.sections_list = response.data.data.sections.map((val) => {
            val.showStatus = false;
            return val;
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    submitNewNote(id) {
      this.selected_note = id;
      this.$router.push({
        name: "make_note",
        params: { type: this.selected_note, section: this.section_slug },
      });
      location.reload();
    },
    loadHeadings() {
      this.loadHeadingsTab.status = true;
      this.current = "HeadingPart";
      this.sections_list = this.sections_list.map((val) => {
        val.showStatus = false;
        return val;
      });
      this.section_slug = "Headings";
      this.$router.push({
        name: "make_note",
        params: { type: this.selected_note, section: "Headings" },
      });
    },
    loadMyPhrase() {
      this.loadMyPhraseTab.status = true;
      this.current = "MyPhrase";
      this.sections_list = this.sections_list.map((val) => {
        val.showStatus = false;
        return val;
      });
      this.section_slug = "MyPhrase";
      this.$router.push({
        name: "make_note",
        params: { type: this.selected_note, section: "MyPhrase" },
      });
    },
    loadSections(id, index, type) {
      this.section_type = type;
      this.loadHeadingsTab.status = false;
      this.loadMyPhraseTab.status = false;
      this.current = "SectionPart";
      this.sections_list = this.sections_list.map((val) => {
        val.showStatus = false;
        return val;
      });
      this.sections_list[index].showStatus = true;
      if (this.sections_list[index].id != this.section_slug) {
        this.section_slug = this.sections_list[index].id;
        this.$router.push({
          name: "make_note",
          params: {
            type: this.selected_note,
            section: this.sections_list[index].id,
          },
        });
      }
    },
    generatePDF() {
      document.getElementById("pdf_to_append").innerHTML = "";
      let node = document.getElementById("note-result");
      let clone = node.cloneNode(true);
      document.getElementById("pdf_to_append").appendChild(clone);
      this.$refs.html2Pdf.generatePdf();
    },
    copyContent() {
      let noteresult = this.$refs.noteresult;
      this.$copyText(noteresult);
      this.$toastr.s("Copied!", "Success!");
    },
    clearContent() {
      this.$swal
        .fire({
          title: "Do you want to clear the whole content?",
          showCancelButton: true,
          confirmButtonText: "Clear",
        })
        .then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.$store.commit("note/clearContent");
            this.note.name = null;
            this.note.date = null;
            this.note.start_time = null;
            this.note.end_time = null;
            this.note.fee = null;
            this.note.intro_comments = null;
            this.note.closing_comments = null;
            this.$swal.fire("Cleared!", "", "success");
          } else if (result.isDenied) {
            this.$swal.fire("Not Cleared", "", "info");
          }
        });
    },
    changeTerminologyDefault(id, type) {
      this.$store.commit("note/changeTerminologyDefault", {
        id: id,
        type: type
      });
    }
  },
  computed: {
    allHeadingsStore() {
      return this.$store.state.note.all_headings;
    },
    userInfo() {
      if (this.$store.state.login.user != null) {
        return this.$store.state.login.user;
      } else {
        this.$store.dispatch("login/userInformation").then(() => {
          return this.$store.state.login.user;
        });
      }
    },
    questionsData() {
      return this.$store.state.note.questions;
    },
    formQuestions() {
      return this.$store.state.note.formQuestions;
    },
    terminologyClient() {
      return this.$store.state.note.terminology_client;
    },
    terminologyPsycho() {
      return this.$store.state.note.terminology_psycho;
    },
    terminologyBehavior() {
      return this.$store.state.note.terminology_behavior;
    },
  },
};
</script>
