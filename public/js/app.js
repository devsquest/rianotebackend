"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "App"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/DashLayout.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/DashLayout.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DashLayout",
  data: function data() {
    return {
      current_active_component: this.$route.name
    };
  },
  methods: {
    logoutNote: function logoutNote() {
      var _this = this;

      this.$store.dispatch("login/logoutUser").then(function () {
        _this.$toastr.s("User Logout", "Success");

        _this.$router.push({
          name: "login_page"
        });
      });
    },
    updateNavParent: function updateNavParent(route_name) {
      this.current_active_component = route_name;
    }
  },
  computed: {
    userInfo: function userInfo() {
      var _this2 = this;

      if (this.$store.state.login.user != null) {
        return this.$store.state.login.user;
      } else {
        this.$store.dispatch("login/userInformation").then(function () {
          return _this2.$store.state.login.user;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/DashboardPage.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/DashboardPage.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DashboardPage",
  data: function data() {
    return {
      selected_note: null,
      notes_list: null
    };
  },
  mounted: function mounted() {
    this.$emit("updateNav", this.$route.name);
    document.title = "Dashboard";
    this.getNotesList();
  },
  methods: {
    newNoteBtn: function newNoteBtn() {
      $("#newNoteModal").modal("show");
    },
    getNotesList: function getNotesList() {
      var _this = this;

      var _JSON$parse = JSON.parse(localStorage.getItem("loginInfo")),
          token = _JSON$parse.token;

      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(token)
      };
      this.axios.get("https://fasternote.com" + "/api/notes", {
        headers: headers
      }).then(function (response) {
        _this.notes_list = response.data.data.notes;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    submitNewNote: function submitNewNote(e) {
      e.preventDefault();

      if (this.selected_note != null) {
        this.$router.push({
          name: "make_note",
          params: {
            type: this.selected_note,
            section: "Headings"
          }
        });
        $("#newNoteModal").modal("hide");
      } else {
        this.$toastr.e("Select Note Type", "Error!");
      }
    }
  },
  computed: {
    userInfo: function userInfo() {
      var _this2 = this;

      if (this.$store.state.login.user != null) {
        return this.$store.state.login.user;
      } else {
        this.$store.dispatch("login/userInformation").then(function () {
          return _this2.$store.state.login.user;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/GettingStartedPage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/GettingStartedPage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "GettingStartedPage",
  mounted: function mounted() {
    this.$emit("updateNav", this.$route.name);
    document.title = "Getting Started";
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MyNotificationsPage.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MyNotificationsPage.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MyNotificationsPage",
  mounted: function mounted() {
    this.$emit("updateNav", this.$route.name);
    document.title = "My Notifications";
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MyOrdersPage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MyOrdersPage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MyOrdersPage",
  mounted: function mounted() {
    this.$emit("updateNav", this.$route.name);
    document.title = "My Orders";
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MyProfilePage.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MyProfilePage.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MyProfilePage",
  data: function data() {
    return {
      user: null,
      password: {
        current: null,
        "new": null,
        new_conform: null
      }
    };
  },
  mounted: function mounted() {
    this.$emit("updateNav", this.$route.name);
    document.title = "My Profile";

    if (this.userInfo != null) {
      this.user = this.userInfo;
    }
  },
  methods: {
    updateProfile: function updateProfile(e) {
      var _this = this;

      e.preventDefault();

      if (this.user.email == null || this.user.email == "") {
        this.$toastr.e("Email is required", "Email");
        return false;
      }

      if (this.user.name == null || this.user.name == "") {
        this.$toastr.e("Name is required", "Name");
        return false;
      }

      var _JSON$parse = JSON.parse(localStorage.getItem("loginInfo")),
          token = _JSON$parse.token;

      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(token)
      };
      var url = "https://fasternote.com" + "/api/update-user";
      var payload = this.user;
      this.axios.post(url, payload, {
        headers: headers
      }).then(function (response) {
        _this.$toastr.s("User Updated", "Success!");
      })["catch"](function (error) {
        console.log(error);
      });
    },
    updatePassword: function updatePassword(e) {
      e.preventDefault();

      if (this.password.current == null || this.password.current == "") {
        this.$toastr.e("Current Password is required", "Current Password");
        return false;
      }

      if (this.password["new"] == null || this.password["new"] == "") {
        this.$toastr.e("New Password is required", "New Password");
        return false;
      }

      if (this.password.new_conform == null || this.password.new_conform == "") {
        this.$toastr.e("New Conform Password is required", "New Conform Password");
        return false;
      }

      if (this.password["new"] != this.password.new_conform) {
        this.$toastr.e("Conform Password Mismatch", "Conform Password");
        return false;
      }

      var _JSON$parse2 = JSON.parse(localStorage.getItem("loginInfo")),
          token = _JSON$parse2.token;

      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(token)
      };
      var url = "https://fasternote.com" + "/api/update-user";
      var payload = this.password;
      this.axios.post(url, payload, {
        headers: headers
      }).then(function (response) {
        //   this.$toastr.s("User Updated", "Success!");
        console.log(response);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  computed: {
    userInfo: function userInfo() {
      var _this2 = this;

      if (this.$store.state.login.user != null) {
        return this.$store.state.login.user;
      } else {
        this.$store.dispatch("login/userInformation").then(function () {
          return _this2.$store.state.login.user;
        });
      }
    }
  },
  watch: {
    userInfo: {
      handler: function handler(val) {
        this.user = val;
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MyRequestPage.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MyRequestPage.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MyRequestPage",
  mounted: function mounted() {
    this.$emit("updateNav", this.$route.name);
    document.title = "My Requests";
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MySubscriptionsPage.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MySubscriptionsPage.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MySubscriptionsPage",
  mounted: function mounted() {
    this.$emit("updateNav", this.$route.name);
    document.title = "My Subscriptions";
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/MasterLayout.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/MasterLayout.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_html2pdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-html2pdf */ "./node_modules/vue-html2pdf/dist/vue-html2pdf.esm.js");
/* harmony import */ var _parts_HeadingPart_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/HeadingPart.vue */ "./resources/js/components/note/parts/HeadingPart.vue");
/* harmony import */ var _parts_SectionPart_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/SectionPart.vue */ "./resources/js/components/note/parts/SectionPart.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MasterLayout",
  components: {
    VueHtml2pdf: vue_html2pdf__WEBPACK_IMPORTED_MODULE_0__["default"],
    HeadingPart: _parts_HeadingPart_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    SectionPart: _parts_SectionPart_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      section_type: null,
      section_slug: this.$route.params.section,
      current: "HeadingPart",
      notes_list: null,
      sections_list: null,
      loadHeadingsTab: {
        status: false,
        "class": "note-nav-a-click"
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
        comments: null
      }
    };
  },
  mounted: function mounted() {
    document.title = "Make A New Note";
    this.getNotesList();
    this.getSectionsList();
  },
  methods: {
    newNoteBtn: function newNoteBtn() {
      $("#newNoteModal").modal("show");
    },
    logoutNote: function logoutNote() {
      var _this = this;

      this.$store.dispatch("login/logoutUser").then(function () {
        _this.$toastr.s("User Logout", "Success");

        _this.$router.push({
          name: "login_page"
        });
      });
    },
    getNotesList: function getNotesList() {
      var _this2 = this;

      var _JSON$parse = JSON.parse(localStorage.getItem("loginInfo")),
          token = _JSON$parse.token;

      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(token)
      };
      this.axios.get("https://fasternote.com" + "/api/notes", {
        headers: headers
      }).then(function (response) {
        _this2.notes_list = response.data.data.notes;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getSectionsList: function getSectionsList() {
      var _this3 = this;

      var _JSON$parse2 = JSON.parse(localStorage.getItem("loginInfo")),
          token = _JSON$parse2.token;

      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(token)
      };
      this.axios.get("https://fasternote.com" + "/api/sections/" + this.selected_note, {
        headers: headers
      }).then(function (response) {
        _this3.sections_list = response.data.data.sections.map(function (val) {
          val.showStatus = false;
          return val;
        });
      })["catch"](function (error) {
        console.log(error);
      });
    },
    submitNewNote: function submitNewNote(e) {
      e.preventDefault();
      this.$router.push({
        name: "make_note",
        params: {
          type: this.selected_note,
          section: this.section_slug
        }
      });
      $("#newNoteModal").modal("hide");
      location.reload();
    },
    loadHeadings: function loadHeadings() {
      this.loadHeadingsTab.status = true;
      this.current = "HeadingPart";
      this.sections_list = this.sections_list.map(function (val) {
        val.showStatus = false;
        return val;
      });
      this.section_slug = "Headings";
      this.$router.push({
        name: "make_note",
        params: {
          type: this.selected_note,
          section: "Headings"
        }
      });
    },
    loadSections: function loadSections(id, index, type) {
      this.section_type = type;
      this.loadHeadingsTab.status = false;
      this.current = "SectionPart";
      this.sections_list = this.sections_list.map(function (val) {
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
            section: this.sections_list[index].id
          }
        });
      }
    },
    generatePDF: function generatePDF() {
      document.getElementById("pdf_to_append").innerHTML = "";
      var node = document.getElementById("note-result");
      var clone = node.cloneNode(true);
      document.getElementById("pdf_to_append").appendChild(clone);
      this.$refs.html2Pdf.generatePdf();
    },
    copyContent: function copyContent() {
      var noteresult = this.$refs.noteresult;
      this.$copyText(noteresult);
      this.$toastr.s("Copied!", "Success!");
    },
    clearContent: function clearContent() {
      var _this4 = this;

      this.$swal.fire({
        title: "Do you want to clear the whole content?",
        showCancelButton: true,
        confirmButtonText: "Clear"
      }).then(function (result) {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          _this4.$store.commit("note/clearContent");

          _this4.note.name = null;
          _this4.note.date = null;
          _this4.note.start_time = null;
          _this4.note.end_time = null;
          _this4.note.fee = null;
          _this4.note.intro_comments = null;
          _this4.note.closing_comments = null;

          _this4.$swal.fire("Cleared!", "", "success");
        } else if (result.isDenied) {
          _this4.$swal.fire("Not Cleared", "", "info");
        }
      });
    },
    finalEdit: function finalEdit() {
      document.getElementById("pdf_to_append_final_edit").innerHTML = "";
      var node = document.getElementById("note-result");
      var clone = node.cloneNode(true);
      console.log(clone);
      document.getElementById("pdf_to_append_final_edit").appendChild(clone);
      $("#finalEditModal").modal("show");
    },
    finalEditCopy: function finalEditCopy() {
      var noteresult = this.$refs.finaledit_noteresult;
      this.$copyText(noteresult);
      this.$toastr.s("Copied!", "Success!");
    },
    finalEditExport: function finalEditExport() {
      document.getElementById("pdf_to_append").innerHTML = "";
      var node = document.getElementById("pdf_to_append_final_edit");
      var clone = node.cloneNode(true);
      document.getElementById("pdf_to_append").appendChild(clone);
      this.$refs.html2Pdf.generatePdf(); //

      document.getElementById("pdf_to_append").innerHTML = "";
      node = document.getElementById("note-result");
      clone = node.cloneNode(true);
      document.getElementById("pdf_to_append").appendChild(clone);
    }
  },
  computed: {
    allHeadingsStore: function allHeadingsStore() {
      return this.$store.state.note.all_headings;
    },
    userInfo: function userInfo() {
      var _this5 = this;

      if (this.$store.state.login.user != null) {
        return this.$store.state.login.user;
      } else {
        this.$store.dispatch("login/userInformation").then(function () {
          return _this5.$store.state.login.user;
        });
      }
    },
    questionsData: function questionsData() {
      return this.$store.state.note.questions;
    },
    formQuestions: function formQuestions() {
      return this.$store.state.note.formQuestions;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/NotFound.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/NotFound.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NotFound"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/pages/LoginPage.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/pages/LoginPage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "LoginPage",
  data: function data() {
    return {
      formData: {
        email: null,
        password: null
      },
      loginBtn: {
        disable: false,
        text: "Login"
      }
    };
  },
  mounted: function mounted() {
    document.title = "Login";
  },
  methods: {
    loginSubmit: function loginSubmit(e) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.$store.state.login.loginInfo = null;
                e.preventDefault();

                if (!(_this.formData.email == null || _this.formData.email == "")) {
                  _context.next = 7;
                  break;
                }

                _this.$toastr.e("Field is required", "Email");

                _this.$refs.email.focus();

                _context.next = 16;
                break;

              case 7:
                if (!(_this.formData.password == null || _this.formData.password == "")) {
                  _context.next = 12;
                  break;
                }

                _this.$toastr.e("Password is required", "Password");

                _this.$refs.password.focus();

                _context.next = 16;
                break;

              case 12:
                _this.loginBtn.disable = true;
                _this.loginBtn.text = "Login....";
                _context.next = 16;
                return _this.$store.dispatch("login/login", _this.formData).then(function () {
                  if (_this.$store.state.login.error_log_text != null) {
                    _this.loginBtn.disable = false;
                    _this.loginBtn.text = "Login";

                    _this.$toastr.w("You are not allowed to login", "Warning!");
                  } else {
                    if (_this.$store.state.login.loginInfo != null) {
                      _this.$toastr.s("Loged in Successfully!", "Success!");

                      _this.$router.push({
                        name: "splash_page"
                      });
                    } else {
                      _this.loginBtn.disable = false;
                      _this.loginBtn.text = "Login";

                      _this.$toastr.e("Invalid Info", "Error!");
                    }
                  }
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/pages/SplashPage.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/pages/SplashPage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SplashPage",
  data: function data() {
    return {
      selected_note: null,
      notes_list: null
    };
  },
  mounted: function mounted() {
    document.title = "Welcome to " + this.$appConfig.app_name;
    this.getNotesList();
  },
  methods: {
    newNoteBtn: function newNoteBtn() {
      $("#newNoteModal").modal("show");
    },
    getNotesList: function getNotesList() {
      var _this = this;

      var _JSON$parse = JSON.parse(localStorage.getItem("loginInfo")),
          token = _JSON$parse.token;

      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(token)
      };
      this.axios.get("https://fasternote.com" + "/api/notes", {
        headers: headers
      }).then(function (response) {
        _this.notes_list = response.data.data.notes;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    submitNewNote: function submitNewNote(e) {
      e.preventDefault();

      if (this.selected_note != null) {
        this.$router.push({
          name: "make_note",
          params: {
            type: this.selected_note,
            section: "Headings"
          }
        });
        $("#newNoteModal").modal("hide");
      } else {
        this.$toastr.e("Select Note Type", "Error!");
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/parts/HeadingPart.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/parts/HeadingPart.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "HeadingPart",
  props: ["note_id"],
  data: function data() {
    return {
      selected_note: this.$route.params.type,
      headingsList: [{
        id: 1,
        heading_text: null,
        heading_content: null,
        status: 0,
        type: "local",
        db_id: null
      }],
      dbHeadingsList: []
    };
  },
  mounted: function mounted() {
    this.getSavedHeadings();
  },
  methods: {
    addNewHeadingRow: function addNewHeadingRow() {
      this.headingsList.push({
        id: this.dbHeadingsList.length + this.headingsList.length + 1,
        heading_text: null,
        heading_content: null,
        status: 0,
        type: "local",
        db_id: null
      });
    },
    makeHeadingActiveInactive: function makeHeadingActiveInactive(index, type) {
      if (type == "local") {
        var status = this.headingsList[index].status;

        if (status == 0) {
          this.headingsList[index].status = 1;
        } else {
          this.headingsList[index].status = 0;
        }
      } else if (type == "db") {
        var _status = this.dbHeadingsList[index].status;

        if (_status == 0) {
          this.dbHeadingsList[index].status = 1;
        } else {
          this.dbHeadingsList[index].status = 0;
        }
      }
    },
    getSavedHeadings: function getSavedHeadings() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _JSON$parse, token, headers, url;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _JSON$parse = JSON.parse(localStorage.getItem("loginInfo")), token = _JSON$parse.token;
                headers = {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: "Bearer ".concat(token)
                };
                url = "https://fasternote.com" + "/api/headings_all/" + _this.selected_note;
                _context.next = 5;
                return _this.axios.get(url, {
                  headers: headers
                }).then(function (response) {
                  response.data.success.forEach(function (v) {
                    _this.dbHeadingsList.push({
                      id: _this.dbHeadingsList.length + _this.headingsList.length + 1,
                      heading_text: v.heading_text,
                      heading_content: v.heading_content,
                      status: 0,
                      type: "db",
                      db_id: v.id
                    });
                  });
                })["catch"](function (error) {
                  console.log(error);

                  _this.$toastr.e("Something went wrong", "Error!");
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    deleteHeading: function deleteHeading(index, type) {
      var _arguments = arguments,
          _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var db_id, _JSON$parse2, token, headers, url;

        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                db_id = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : null;

                if (!(type == "local")) {
                  _context2.next = 5;
                  break;
                }

                _this2.headingsList.splice(index, 1);

                _context2.next = 11;
                break;

              case 5:
                if (!(type == "db")) {
                  _context2.next = 11;
                  break;
                }

                _JSON$parse2 = JSON.parse(localStorage.getItem("loginInfo")), token = _JSON$parse2.token;
                headers = {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: "Bearer ".concat(token)
                };
                url = "https://fasternote.com" + "/api/headings/" + db_id;
                _context2.next = 11;
                return _this2.axios["delete"](url, {
                  headers: headers
                }).then(function (response) {
                  _this2.$toastr.s("Saved heading deleted", "Success");

                  _this2.dbHeadingsList.splice(index, 1);
                })["catch"](function (error) {
                  console.log(error);

                  _this2.$toastr.e("Something went wrong", "Error!");
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    saveThisHeading: function saveThisHeading(index) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _JSON$parse3, token, headers, formBody, url;

        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _JSON$parse3 = JSON.parse(localStorage.getItem("loginInfo")), token = _JSON$parse3.token;
                headers = {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: "Bearer ".concat(token)
                };
                formBody = {
                  note_id: _this3.note_id,
                  heading_text: _this3.headingsList[index].heading_text,
                  heading_content: _this3.headingsList[index].heading_content
                };
                url = "https://fasternote.com" + "/api/headings/save";
                _context3.next = 6;
                return _this3.axios.post(url, formBody, {
                  headers: headers
                }).then(function (response) {
                  _this3.dbHeadingsList.push({
                    id: _this3.dbHeadingsList.length + _this3.headingsList.length + 1,
                    heading_text: _this3.headingsList[index].heading_text,
                    heading_content: _this3.headingsList[index].heading_content,
                    status: _this3.headingsList[index].status,
                    type: "db",
                    db_id: response.data.success.data.id
                  });

                  _this3.headingsList.splice(index, 1);

                  _this3.$toastr.s("New Heading saved", "Success");
                })["catch"](function (error) {
                  console.log(error);
                });

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    updateThisHeadingDB: function updateThisHeadingDB(index) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _JSON$parse4, token, headers, formBody, url;

        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _JSON$parse4 = JSON.parse(localStorage.getItem("loginInfo")), token = _JSON$parse4.token;
                headers = {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: "Bearer ".concat(token)
                };
                formBody = {
                  _method: "PUT",
                  heading_text: _this4.dbHeadingsList[index].heading_text,
                  heading_content: _this4.dbHeadingsList[index].heading_content
                };
                url = "https://fasternote.com" + "/api/headings/" + _this4.dbHeadingsList[index].db_id;
                _context4.next = 6;
                return _this4.axios.post(url, formBody, {
                  headers: headers
                }).then(function (response) {
                  _this4.$toastr.s("Heading updated", "Success");
                })["catch"](function (error) {
                  console.log(error);
                });

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  },
  watch: {
    headingsList: {
      handler: function handler(val) {
        var final_arr = this.dbHeadingsList.concat(this.headingsList);
        this.$store.commit("note/changeHeadings", final_arr);
      },
      deep: true
    },
    dbHeadingsList: {
      handler: function handler(val) {
        var final_arr = this.dbHeadingsList.concat(this.headingsList);
        this.$store.commit("note/changeHeadings", final_arr);
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/parts/SectionPart.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/parts/SectionPart.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SectionPart",
  props: ["note_id", "slug", "section_type"],
  data: function data() {
    return {
      contentEditable_text: null,
      showByDefault: false,
      current_section_id: null,
      sub_sections_list: null,
      current_sub_section: null,
      new_phrase: {
        option_text: null,
        isDisplay: false
      }
    };
  },
  mounted: function mounted() {
    this.$store.commit("note/changeParentComponent", {
      parent_id: this.slug
    });
    this.sectionContent();
  },
  methods: {
    sectionContent: function sectionContent() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.currentFormQuestions.length <= 0) {
                  _this.$store.dispatch("note/sectionContent", {
                    note_id: _this.note_id,
                    section_type: _this.section_type,
                    slug: _this.slug
                  });
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    loadSubSection: function loadSubSection(id, type) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.current_sub_section = type;

                _this2.$store.commit("note/changeSubSectionComponent", id);

                _this2.showByDefault = true;
                _this2.current_section_id = id;

                if (_this2.currentSectionQuestions.length <= 0) {
                  _this2.$store.dispatch("note/getQuestions", {
                    id: id,
                    type: type
                  });
                } else {
                  _this2.$store.commit("note/changeQuestionsState", {
                    id: id,
                    type: type
                  });
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    addQuestionInResult: function addQuestionInResult(question, option) {
      this.$store.commit("note/addQuestionsOnResult", {
        question: question,
        option: option
      });
    },
    addOwnCustomPhrase: function addOwnCustomPhrase() {
      this.new_phrase.isDisplay = this.new_phrase.isDisplay == true ? false : true;
    },
    closeNewPhraseInput: function closeNewPhraseInput() {
      this.new_phrase.isDisplay = false;
    },
    saveNewPhrase: function saveNewPhrase(question) {
      var _this3 = this;

      if (this.new_phrase.option_text == null || this.new_phrase.option_text == "") {
        this.$toastr.e("Required Option Text", "Option Text!");
        return false;
      }

      this.$store.dispatch("note/addQuestionNewOption", {
        question: question,
        option: this.new_phrase
      }).then(function () {
        _this3.new_phrase.isDisplay = false;
        _this3.new_phrase.option_text = null;
      });
    },
    editOption: function editOption(question, option) {
      // console.log(question, option);
      this.$store.commit("note/makeQuestionEditable", {
        question_id: question.id,
        option_id: option.id
      });
    },
    hideOption: function hideOption(question, option) {
      // console.log(question, option);
      this.$store.commit("note/makeQuestionEditHide", {
        question_id: question.id,
        option_id: option.id
      });
    },
    saveOption: function saveOption(question, option) {
      if (this.contentEditable_text != null) {
        this.$store.dispatch("note/saveExistingOption", {
          question_id: question.id,
          option_id: option.id,
          option_text: this.contentEditable_text
        });
      }
    },
    editableInput: function editableInput(e) {
      this.contentEditable_text = null;
      this.contentEditable_text = e.target.innerText;
    }
  },
  computed: {
    currentSectionQuestions: function currentSectionQuestions() {
      return this.$store.getters["note/currentSectionQuestions"];
    },
    currentSubSectionList: function currentSubSectionList() {
      return this.$store.state.note.sub_sections_list;
    },
    currentFormQuestions: function currentFormQuestions() {
      return this.$store.getters["note/currentSectionFormQuestions"];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/App.vue?vue&type=template&id=f348271a&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/App.vue?vue&type=template&id=f348271a& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "app-vue"
  }, [_c("router-view")], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/DashLayout.vue?vue&type=template&id=6c1dedbc&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/DashLayout.vue?vue&type=template&id=6c1dedbc& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "vue-dashlayout"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-2 p-0"
  }, [_c("div", {
    staticClass: "note-db-logo"
  }, [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_c("img", {
    staticStyle: {
      width: "50px",
      margin: "1rem",
      "margin-left": "4rem"
    },
    attrs: {
      src: this.$appConfig.asset_url + "/note_assets/img/Faster_note logo.png",
      alt: "Logo"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "nav"
  }, [_c("ul", {
    staticClass: "list-group border-0 m-3"
  }, [_c("li", {
    staticClass: "list-group-item border-less p-3 text-primary"
  }, [_c("router-link", {
    "class": ["note-db-link", {
      "note-db-link-active": _vm.current_active_component == "dashboard_page"
    }],
    attrs: {
      to: {
        name: "dashboard_page"
      }
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-database pe-4"
  }), _vm._v(" Dashboard\n              ")])], 1), _vm._v(" "), _c("li", {
    staticClass: "list-group-item border-less p-3"
  }, [_c("router-link", {
    "class": ["note-db-link", {
      "note-db-link-active": _vm.current_active_component == "getting_started_page"
    }],
    attrs: {
      to: {
        name: "getting_started_page"
      }
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-power-off pe-4"
  }), _vm._v(" Getting Started\n              ")])], 1), _vm._v(" "), _c("li", {
    staticClass: "list-group-item border-less p-3"
  }, [_c("router-link", {
    "class": ["note-db-link", {
      "note-db-link-active": _vm.current_active_component == "my_profile_page"
    }],
    attrs: {
      to: {
        name: "my_profile_page"
      }
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-user pe-4"
  }), _vm._v(" My Profile\n              ")])], 1), _vm._v(" "), _c("li", {
    staticClass: "list-group-item border-less p-3"
  }, [_c("router-link", {
    "class": ["note-db-link", {
      "note-db-link-active": _vm.current_active_component == "my_requests_page"
    }],
    attrs: {
      to: {
        name: "my_requests_page"
      }
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-arrow-up-right-dots pe-4"
  }), _vm._v(" My\n                Requests\n              ")])], 1), _vm._v(" "), _c("li", {
    staticClass: "list-group-item border-less p-3"
  }, [_c("router-link", {
    "class": ["note-db-link", {
      "note-db-link-active": _vm.current_active_component == "my_orders_page"
    }],
    attrs: {
      to: {
        name: "my_orders_page"
      }
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-square-poll-horizontal pe-4"
  }), _vm._v(" My\n                Orders\n              ")])], 1), _vm._v(" "), _c("li", {
    staticClass: "list-group-item border-less p-3"
  }, [_c("router-link", {
    "class": ["note-db-link", {
      "note-db-link-active": _vm.current_active_component == "my_subscriptions_page"
    }],
    attrs: {
      to: {
        name: "my_subscriptions_page"
      }
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-square-poll-vertical pe-4"
  }), _vm._v(" My\n                Subscriptions\n              ")])], 1), _vm._v(" "), _c("li", {
    staticClass: "list-group-item border-less p-3"
  }, [_c("router-link", {
    "class": ["note-db-link", {
      "note-db-link-active": _vm.current_active_component == "my_notifications_page"
    }],
    attrs: {
      to: {
        name: "my_notifications_page"
      }
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-bell pe-4"
  }), _vm._v(" My Notifications\n              ")])], 1), _vm._v(" "), _c("li", {
    staticClass: "list-group-item border-less p-3 log-out-left-nav-dashboard"
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-10"
  }, [_c("div", {
    staticClass: "row pt-2 pb-1"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col-md-11 col-6 text-right"
  }, [_c("div", [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "dropdown",
    staticStyle: {
      display: "inline-block"
    }
  }, [_vm.userInfo != null ? _c("img", {
    staticClass: "img-fluid border dropdown",
    staticStyle: {
      "border-radius": "50%",
      width: "35px"
    },
    attrs: {
      src: [_vm.userInfo.profile_picture == null || _vm.userInfo.profile_picture == "" ? this.$appConfig.asset_url + "/note_assets/img/icons/Basic-Note_42.jpg" : this.$appConfig.asset_url + "/uploads/images/" + _vm.userInfo.profile_picture],
      alt: "profile",
      lass: "btn btn-secondary dropdown-toggle",
      type: "button",
      id: "dropdownMenuButton",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }
  }) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "dropdown-menu dropdown-menu-right",
    attrs: {
      "aria-labelledby": "dropdownMenuButton"
    }
  }, [_c("span", {
    staticClass: "dropdown-item btn",
    attrs: {
      href: "#"
    },
    on: {
      click: _vm.logoutNote
    }
  }, [_vm._v("Logout")])])])])])]), _vm._v(" "), _c("router-view", {
    key: this.$route.name,
    on: {
      updateNav: function updateNav($event) {
        return _vm.updateNavParent($event);
      }
    }
  })], 1)])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-md-1 col-6 text-left"
  }, [_c("i", {
    staticClass: "fa-solid fa-bars fa-2x mt-1"
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticStyle: {
      display: "inline-block"
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-bell fa-2x dashboard-bell-icon"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/DashboardPage.vue?vue&type=template&id=0ff25362&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/DashboardPage.vue?vue&type=template&id=0ff25362& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "vue-dashboard-page"
  }, [_c("div", {
    staticClass: "row content-area p-4"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "db-section-1 pt-3 pb-3"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 text-left"
  }, [_c("p", [_c("b", [_vm._v("Welcome to your " + _vm._s(this.$appConfig.app_name) + " User\n                Dashboard")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 text-right"
  }, [_c("button", {
    staticClass: "btn btn-warning",
    on: {
      click: _vm.newNoteBtn
    }
  }, [_vm._v("\n              Start using your " + _vm._s(this.$appConfig.app_name) + " now\n              "), _c("i", {
    staticClass: "fas fa-arrow-alt-circle-right"
  })])])])])]), _vm._v(" "), _vm.userInfo != null ? _c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "row text-white db-section-2 pb-2"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pt-2 pb-2 pl-4 pr-4"
  }, [_c("div", {
    staticClass: "row"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 text-right"
  }, [_c("span", [_vm._v(_vm._s(_vm.userInfo.email))])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pt-2 pb-2 pl-4 pr-4"
  }, [_c("div", {
    staticClass: "row"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 text-right"
  }, [_c("span", [_vm._v(_vm._s(_vm.userInfo.signature))])])])]), _vm._v(" "), _vm._m(3)])]) : _vm._e(), _vm._v(" "), _vm._m(4)]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "newNoteModal",
      tabindex: "-1",
      role: "dialog",
      "aria-labelledby": "newNoteModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("form", {
    attrs: {
      method: "post"
    },
    on: {
      submit: _vm.submitNewNote
    }
  }, [_vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12"
  }, [_c("p", {
    staticClass: "modal-main-text"
  }, [_vm._v("Choose Note Type")]), _vm._v(" "), _vm._l(_vm.notes_list, function (note) {
    return _c("p", {
      key: note.id
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.selected_note,
        expression: "selected_note"
      }],
      attrs: {
        type: "radio",
        name: "note",
        id: "note-" + note.id
      },
      domProps: {
        value: note.id,
        checked: _vm._q(_vm.selected_note, note.id)
      },
      on: {
        change: function change($event) {
          _vm.selected_note = note.id;
        }
      }
    }), _vm._v(" "), _c("label", {
      attrs: {
        "for": "note-" + note.id
      }
    }, [_vm._v(_vm._s(note.name))])]);
  })], 2)])]), _vm._v(" "), _vm._m(6)])])])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-md-12 p-4"
  }, [_c("h6", [_vm._v("Basic Information")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-md-6 text-left"
  }, [_c("i", {
    staticClass: "fas fa-envelope"
  }), _vm._v(" "), _c("span", [_vm._v("Email: ")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-md-6 text-left"
  }, [_c("i", {
    staticClass: "fas fa-pen-nib"
  }), _vm._v(" "), _c("span", [_vm._v("Signature: ")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-md-12 pt-2 pb-2 pl-4 pr-4"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 text-left"
  }, [_c("i", {
    staticClass: "fas fa-file-invoice-dollar"
  }), _vm._v(" "), _c("span", [_vm._v("Billing Information: ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 text-right"
  }, [_c("button", {
    staticClass: "btn btn-warning",
    staticStyle: {
      "font-size": "14px"
    }
  }, [_vm._v("\n                Request to change signature\n              ")])])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "row white-bg mt-5"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("h6", {
    staticClass: "p-4 border-bottom"
  }, [_vm._v("\n            Active Subscriptions assigned to your account\n          ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "table-responsive mt-4"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Subscription type")]), _vm._v(" "), _c("th", [_vm._v("Is active?")]), _vm._v(" "), _c("th", [_vm._v("State")]), _vm._v(" "), _c("th", [_vm._v("Started from")]), _vm._v(" "), _c("th", [_vm._v("valid until")]), _vm._v(" "), _c("th", [_vm._v("Purchased by")]), _vm._v(" "), _c("th", [_vm._v("Action")])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v("Monthly individual")]), _vm._v(" "), _c("td", [_c("button", {
    staticClass: "btn btn-success btn-14px"
  }, [_vm._v("Action")])]), _vm._v(" "), _c("td", [_c("button", {
    staticClass: "btn btn-success btn-14px"
  }, [_vm._v("Action")])]), _vm._v(" "), _c("td", [_vm._v("2022-02-03")]), _vm._v(" "), _c("td", [_vm._v("2022-09-03")]), _vm._v(" "), _c("td", [_c("button", {
    staticClass: "btn btn-info btn-14px"
  }, [_vm._v("You")])]), _vm._v(" "), _c("td", [_c("button", {
    staticClass: "btn btn-danger btn-14px"
  }, [_vm._v("\n                      Unassigned me\n                    ")])])])])])])])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title",
    attrs: {
      id: "newNoteModalLabel"
    }
  }, [_vm._v("\n              Start a new note\n            ")]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("\n              Close\n            ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-success",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("\n              Start a new Note\n            ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/GettingStartedPage.vue?vue&type=template&id=1ad91a86&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/GettingStartedPage.vue?vue&type=template&id=1ad91a86& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm._m(0);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "vue-getting-started-page"
  }, [_c("div", {
    staticClass: "row content-area p-4"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("h5", {
    staticClass: "card-header"
  }, [_vm._v("Getting Started")]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("p", {
    staticClass: "card-text"
  }, [_vm._v("\n            To get started you need to do two things: (1) Assign your\n            subscription to yourself and then (2) set up your signature line.\n            Both of these can be done on the main DASHBOARD page, and should\n            not take more than a minute.\n          ")]), _vm._v(" "), _c("p", {
    staticClass: "card-text"
  }, [_c("ul", [_c("li", [_c("b", [_vm._v("Assigning subscription(s):")]), _vm._v(" Sometimes people purchase subscriptions for others, so first we ask you to confirm who the user will be, for each subscription you purchase. Scroll down to the bottom of your DASHBOARD, and click the button to assign the subscription to yourself. (Or, if you want to assign the subscription to someone else, just enter their email address.) If you are managing a group subscription you can eventually assign all the slots to others, or assign one to yourself and the rest to other members of your group.")]), _vm._v(" "), _c("li", [_c("b", [_vm._v("Signature line:")]), _vm._v(" Then once you have assigned a subscription to yourself you can set up your signature line. This should include your name, plus if you wish you can add your degree(s), certifications, and/or the name of your clinic. It’s up to you. Once you have entered it, if you later want to change it you just need to send us a change-request message (from the main DASHBOARD page) and we’ll do it for you.")])])]), _vm._v(" "), _c("p", {
    staticClass: "card-text"
  }, [_c("b", [_vm._v("Once you are set up")]), _vm._v(" you can click the green button on the DASHBOARD main page to start your first note! There is a help menu if you need it, but you should be able to just click buttons and type things in – and watch your note appear at the right of your screen.\n          ")]), _vm._v(" "), _c("p", {
    staticClass: "card-text"
  }, [_vm._v("\n              Eventually you may want to explore the other tabs on the dashboard menu:\n          ")]), _vm._v(" "), _c("p", {
    staticClass: "card-text"
  }, [_c("ul", [_c("li", [_c("b", [_vm._v("My Profile")]), _vm._v(" lists the basic information associated with your account. This is where you can change your password if you would like. Also you can subscribe to receive (infrequent) email relating to Note Designer upgrades or related product information.")]), _vm._v(" "), _c("li", [_c("b", [_vm._v("My Requests")]), _vm._v(" shows any requests you’ve sent to us, such as a request to change your signature line or for a refund (note that refunds are available only during the first 30 days after purchasing your subscription).")]), _vm._v(" "), _c("li", [_c("b", [_vm._v("My Orders")]), _vm._v(" shows you information about your subscriptions, including a link to the relevant invoice. If you wish more detailed information you can use the button near the top of the main DASHBOARD page to get a link to your account with Fastspring, our online retail partner. Fastspring is a popular international platform for managing subscriptions for digital products such as Note Designer. They handle all the billing-related issues for your account (including securely managing your credit card information).")]), _vm._v(" "), _c("li", [_c("b", [_vm._v("My Subscriptions")]), _vm._v(" is where you can see detailed information about your subscription(s). This will be particularly useful to you if you manage multiple subscriptions for a clinic.")]), _vm._v(" "), _c("li", [_c("b", [_vm._v("My Notifications")]), _vm._v(" lists any notifications we have sent to you, for example when you set up your account or assign subscriptions to yourself or others.")])])]), _vm._v(" "), _c("p", {
    staticClass: "card-text"
  }, [_vm._v("\n              Cancellation: We are confident that you will find Note Designer useful. That said, you may decide at some point that it is not what you need and you would like to cancel your subscription. If you started your subscription less than 30 days ago you can use the Refund button on your Dashboard. If it has been 30 days or more\n          ")])])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MyNotificationsPage.vue?vue&type=template&id=60e28e2a&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MyNotificationsPage.vue?vue&type=template&id=60e28e2a& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm._m(0);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "vue-my-notifications-page"
  }, [_c("div", {
    staticClass: "row content-area p-4"
  }, [_c("div", {
    staticClass: "col-md-12 mb-3"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("h5", {
    staticClass: "card-header"
  }, [_vm._v("Notifications")]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive mt-4"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Content")]), _vm._v(" "), _c("th", [_vm._v("Time")]), _vm._v(" "), _c("th", [_vm._v("Action")])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("b", [_c("i", {
    staticClass: "fas fa-calendar-check icon-success",
    staticStyle: {
      color: "green"
    }
  }), _vm._v(" Your subscription has been renewed successfully.")])]), _vm._v(" "), _c("td", [_c("b", [_vm._v("2022-08-03 09:47:34")])]), _vm._v(" "), _c("td", [_c("button", {
    staticClass: "btn btn-info btn-14px"
  }, [_vm._v("Detail")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-success btn-14px"
  }, [_vm._v("\n                      Mark as read\n                    ")])])]), _vm._v(" "), _c("tr", [_c("td", [_c("i", {
    staticClass: "fas fa-calendar-check icon-success",
    staticStyle: {
      color: "green"
    }
  }), _vm._v(" Your subscription has been renewed successfully.")]), _vm._v(" "), _c("td", [_vm._v("2022-07-03 09:22:41")]), _vm._v(" "), _c("td", [_c("button", {
    staticClass: "btn btn-info btn-14px"
  }, [_vm._v("Detail")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary btn-14px"
  }, [_vm._v("\n                      Mark as unread\n                    ")])])])])])])])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MyOrdersPage.vue?vue&type=template&id=0dc3b6de&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MyOrdersPage.vue?vue&type=template&id=0dc3b6de& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm._m(0);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "vue-my-orders-page"
  }, [_c("div", {
    staticClass: "row content-area p-4"
  }, [_c("div", {
    staticClass: "col-md-12 mb-3"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("h5", {
    staticClass: "card-header"
  }, [_vm._v("Orders")]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive mt-4"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Reference")]), _vm._v(" "), _c("th", [_vm._v("Invoice URL")]), _vm._v(" "), _c("th", [_vm._v("Total price")]), _vm._v(" "), _c("th", [_vm._v("is Completed?")]), _vm._v(" "), _c("th", [_vm._v("Purchased at")]), _vm._v(" "), _c("th", [_vm._v("Linked Subscription")])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v("NOT220203-5867-12130")]), _vm._v(" "), _c("td", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Invoice")])]), _vm._v(" "), _c("td", [_vm._v("USD 15")]), _vm._v(" "), _c("td", [_c("button", {
    staticClass: "btn btn-info btn-14px"
  }, [_vm._v("Completed")])]), _vm._v(" "), _c("td", [_vm._v("2022-02-03 15:40:54")]), _vm._v(" "), _c("td", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Monthly Individual")])])])])])])])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MyProfilePage.vue?vue&type=template&id=2347abaa&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MyProfilePage.vue?vue&type=template&id=2347abaa& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "vue-my-profile-page"
  }, [_vm.user != null ? _c("div", {
    staticClass: "row content-area p-4"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("h5", {
    staticClass: "card-header"
  }, [_vm._v("Update My Profile")]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("form", {
    attrs: {
      method: "post"
    },
    on: {
      submit: _vm.updateProfile
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col-md-10"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.email,
      expression: "user.email"
    }],
    staticClass: "form-control",
    attrs: {
      type: "email"
    },
    domProps: {
      value: _vm.user.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.user, "email", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "col-md-10"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.name,
      expression: "user.name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.user.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.user, "name", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("br"), _vm._v(" "), _vm._m(2)])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("h5", {
    staticClass: "card-header"
  }, [_vm._v("Update Password")]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("form", {
    attrs: {
      method: "post"
    },
    on: {
      submit: _vm.updatePassword
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "col-md-10"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.password.current,
      expression: "password.current"
    }],
    staticClass: "form-control",
    attrs: {
      type: "password"
    },
    domProps: {
      value: _vm.password.current
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.password, "current", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "col-md-10"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.password["new"],
      expression: "password.new"
    }],
    staticClass: "form-control",
    attrs: {
      type: "password"
    },
    domProps: {
      value: _vm.password["new"]
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.password, "new", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "col-md-10"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.password.new_conform,
      expression: "password.new_conform"
    }],
    staticClass: "form-control",
    attrs: {
      type: "password"
    },
    domProps: {
      value: _vm.password.new_conform
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.password, "new_conform", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("br"), _vm._v(" "), _vm._m(6)])])])])]) : _vm._e()]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-md-2"
  }, [_c("p", {
    staticClass: "card-text"
  }, [_vm._v("Email")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-md-2"
  }, [_c("p", {
    staticClass: "card-text"
  }, [_vm._v("Name")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("\n                  Update Information\n                ")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-md-2"
  }, [_c("p", {
    staticClass: "card-text"
  }, [_vm._v("Current Password")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-md-2"
  }, [_c("p", {
    staticClass: "card-text"
  }, [_vm._v("New Password")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-md-2"
  }, [_c("p", {
    staticClass: "card-text"
  }, [_vm._v("Conform New Password")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("\n                  Update Information\n                ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MyRequestPage.vue?vue&type=template&id=f69f65de&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MyRequestPage.vue?vue&type=template&id=f69f65de& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm._m(0);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "vue-my-request-page"
  }, [_c("div", {
    staticClass: "row content-area p-4"
  }, [_c("div", {
    staticClass: "col-md-12 mb-3"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("h5", {
    staticClass: "card-header"
  }, [_vm._v("Refund Requests")]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("p", {
    staticClass: "card-text"
  }, [_vm._v("You have not submitted any Refund Requests.")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mb-3"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("h5", {
    staticClass: "card-header"
  }, [_vm._v("Change Signature Requests")]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("p", {
    staticClass: "card-text"
  }, [_vm._v("You have not submitted any Requests to change you Signature.")])])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MySubscriptionsPage.vue?vue&type=template&id=ceae5390&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MySubscriptionsPage.vue?vue&type=template&id=ceae5390& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm._m(0);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "vue-my-subscriptions-page"
  }, [_c("div", {
    staticClass: "row content-area p-4"
  }, [_c("div", {
    staticClass: "col-md-12 mb-3"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("h5", {
    staticClass: "card-header"
  }, [_vm._v("Subscriptions")]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive mt-4"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Subscription type")]), _vm._v(" "), _c("th", [_vm._v("Is active")]), _vm._v(" "), _c("th", [_vm._v("State")]), _vm._v(" "), _c("th", [_vm._v("Occupied/Quantity")]), _vm._v(" "), _c("th", [_vm._v("Started from")]), _vm._v(" "), _c("th", [_vm._v("Valid until")]), _vm._v(" "), _c("th", [_vm._v("Action")])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v("Monthly individual")]), _vm._v(" "), _c("td", [_c("button", {
    staticClass: "btn btn-info btn-14px"
  }, [_vm._v("Active")])]), _vm._v(" "), _c("td", [_c("button", {
    staticClass: "btn btn-info btn-14px"
  }, [_vm._v("Active")])]), _vm._v(" "), _c("td", [_vm._v("1/1")]), _vm._v(" "), _c("td", [_vm._v("2022-02-03")]), _vm._v(" "), _c("td", [_vm._v("2022-09-03")]), _vm._v(" "), _c("td", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("View Details")])])])])])])])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/MasterLayout.vue?vue&type=template&id=2e9bc00e&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/MasterLayout.vue?vue&type=template&id=2e9bc00e& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "container-fluid make-note"
  }, [_c("div", {
    staticClass: "note-background"
  }, [_c("div", {
    staticClass: "note-header"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-2 col-md-2 col-sm-2 col-6 note-logo top-note-height"
  }, [_c("img", {
    staticClass: "logo-img mt-2",
    staticStyle: {
      "margin-left": "2.2rem !important"
    },
    attrs: {
      src: this.$appConfig.asset_url + "/note_assets/img/Faster_note logo.png",
      alt: ""
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-6 col-md-6 col-sm-6 col-6 top-note-height white-bg"
  }, [_c("div", {
    staticClass: "new-note-btn"
  }, [_c("button", {
    staticClass: "btn btn-success mt-3 ml-3",
    on: {
      click: _vm.newNoteBtn
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-plus"
  }), _vm._v(" New Note\n            ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-4 col-md-4 col-sm-4 col-12 top-note-height white-bg text-right"
  }, [_c("div", {
    staticClass: "dropdown"
  }, [_c("div", {
    staticClass: "user-profile",
    staticStyle: {
      "margin-top": "0.8em"
    }
  }, [_vm.userInfo != null ? _c("img", {
    staticStyle: {
      border: "3px solid #dee2e6 !important",
      "border-radius": "50%",
      width: "45px"
    },
    attrs: {
      src: [_vm.userInfo.profile_picture == null || _vm.userInfo.profile_picture == "" ? this.$appConfig.asset_url + "/note_assets/img/icons/Basic-Note_42.jpg" : this.$appConfig.asset_url + "/uploads/images/" + _vm.userInfo.profile_picture],
      alt: ""
    }
  }) : _vm._e(), _vm._v(" "), _vm.userInfo != null ? _c("span", {
    staticStyle: {
      "font-size": "14px"
    }
  }, [_vm._v(_vm._s(_vm.userInfo.name))]) : _vm._e(), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "dropdown-menu",
    attrs: {
      "aria-labelledby": "dropdownMenuButton"
    }
  }, [_c("router-link", {
    staticClass: "dropdown-item btn",
    attrs: {
      to: {
        name: "dashboard_page"
      }
    }
  }, [_vm._v("Dashboard")]), _vm._v(" "), _c("span", {
    staticClass: "dropdown-item btn",
    on: {
      click: _vm.logoutNote
    }
  }, [_vm._v("Logout")])], 1)])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12",
    staticStyle: {
      "background-color": "#0e386a"
    }
  }, [_c("div", {
    staticClass: "input-placeholder mt-1 mb-3",
    staticStyle: {
      "padding-left": "2%",
      "padding-right": "2%"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-3 col-md-3 col-6"
  }, [_c("div", {
    staticClass: "input-group-u"
  }, [_c("i", {
    staticClass: "fa fa-user u-input-icon"
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.note.name,
      expression: "note.name"
    }],
    staticClass: "u-input",
    attrs: {
      type: "text",
      placeholder: "Name"
    },
    domProps: {
      value: _vm.note.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.note, "name", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-3 col-6"
  }, [_c("div", {
    staticClass: "input-group-u"
  }, [_c("i", {
    staticClass: "fa-solid fa-calendar-days u-input-icon"
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.note.date,
      expression: "note.date"
    }],
    staticClass: "u-input",
    attrs: {
      type: "date",
      placeholder: "Date"
    },
    domProps: {
      value: _vm.note.date
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.note, "date", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-3 col-6"
  }, [_c("div", {
    staticClass: "input-group-u"
  }, [_c("i", {
    staticClass: "fa-solid fa-clock u-input-icon"
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.note.session_time,
      expression: "note.session_time"
    }],
    staticClass: "u-input",
    attrs: {
      type: "time",
      placeholder: "Session Time"
    },
    domProps: {
      value: _vm.note.session_time
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.note, "session_time", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-3 col-6"
  }, [_c("div", {
    staticClass: "input-group-u"
  }, [_c("i", {
    staticClass: "fa-solid fa-clock u-input-icon"
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.note.length_of_session,
      expression: "note.length_of_session"
    }],
    staticClass: "u-input",
    attrs: {
      type: "text",
      placeholder: "Length of Session"
    },
    domProps: {
      value: _vm.note.length_of_session
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.note, "length_of_session", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-3 col-6"
  }, [_c("div", {
    staticClass: "input-group-u"
  }, [_c("i", {
    staticClass: "fa-solid fa-sack-dollar u-input-icon"
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.note.diagnosis,
      expression: "note.diagnosis"
    }],
    staticClass: "u-input",
    attrs: {
      type: "text",
      placeholder: "Diagnosis"
    },
    domProps: {
      value: _vm.note.diagnosis
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.note, "diagnosis", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-3 col-6"
  }, [_c("div", {
    staticClass: "input-group-u"
  }, [_c("i", {
    staticClass: "fa-regular fa-message u-input-icon"
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.note.billing_code,
      expression: "note.billing_code"
    }],
    staticClass: "u-input",
    attrs: {
      type: "text",
      placeholder: "Billing Code"
    },
    domProps: {
      value: _vm.note.billing_code
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.note, "billing_code", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-3 col-6"
  }, [_c("div", {
    staticClass: "input-group-u"
  }, [_c("i", {
    staticClass: "fa-regular fa-message u-input-icon"
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.note.session_location,
      expression: "note.session_location"
    }],
    staticClass: "u-input",
    attrs: {
      type: "text",
      placeholder: "Session Location"
    },
    domProps: {
      value: _vm.note.session_location
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.note, "session_location", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-3 col-6"
  }, [_c("div", {
    staticClass: "input-group-u"
  }, [_c("i", {
    staticClass: "fa-regular fa-message u-input-icon"
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.note.comments,
      expression: "note.comments"
    }],
    staticClass: "u-input",
    attrs: {
      type: "text",
      placeholder: "Comments"
    },
    domProps: {
      value: _vm.note.comments
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.note, "comments", $event.target.value);
      }
    }
  })])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "note-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-7 col-md-7"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-12 bg-green"
  }, [_c("div", {
    staticClass: "scrollable-nav"
  }, [_c("nav", {
    staticClass: "navbar navbar-expand-lg navbar-light",
    staticStyle: {
      "overflow-x": "auto",
      padding: "0"
    }
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "collapse navbar-collapse",
    attrs: {
      id: "navbarSupportedContent"
    }
  }, [_c("ul", {
    staticClass: "navbar-nav mr-auto"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    "class": ["nav-link", "note-nav-link", "note-nav-link-headings", {
      "note-nav-a-click": _vm.loadHeadingsTab.status
    }],
    style: [_vm.loadHeadingsTab.status ? {
      color: "#ffff94"
    } : {
      color: "#06244c"
    }],
    on: {
      click: _vm.loadHeadings
    }
  }, [_vm._v("\n                          Headings")])]), _vm._v(" "), _vm._l(_vm.sections_list, function (x, index) {
    return _c("li", {
      key: x.id,
      staticClass: "nav-item"
    }, [_c("a", {
      "class": ["nav-link", "note-nav-link", "note-nav-link-headings", {
        "note-nav-a-click": x.showStatus
      }],
      style: [x.showStatus ? {
        color: "#ffff94"
      } : {
        color: "#06244c"
      }],
      on: {
        click: function click($event) {
          return _vm.loadSections(x.id, index, x.type);
        }
      }
    }, [_vm._v("\n                          " + _vm._s(x.name))])]);
  })], 2)])])])])]), _vm._v(" "), _c("div", {
    staticClass: "tools-box-complete"
  }, [_c("KeepAlive", {
    attrs: {
      include: "HeadingPart"
    }
  }, [_c(_vm.current, {
    key: this.section_slug,
    tag: "component",
    attrs: {
      note_id: _vm.selected_note,
      slug: this.section_slug,
      section_type: _vm.section_type
    }
  })], 1)], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-5 col-md-5"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-12 bg-green"
  }, [_c("div", {
    staticClass: "scrollable-nav"
  }, [_c("nav", {
    staticClass: "navbar navbar-expand-lg navbar-light",
    staticStyle: {
      "overflow-x": "auto",
      padding: "0"
    }
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "collapse navbar-collapse",
    attrs: {
      id: "navbarSupportedContent"
    }
  }, [_c("ul", {
    staticClass: "navbar-nav mr-auto"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link dark-blue",
    staticStyle: {
      color: "#06244c",
      "font-weight": "600",
      padding: "15px",
      cursor: "pointer"
    },
    on: {
      click: _vm.copyContent
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-copy"
  }), _vm._v(" Copy")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link dark-blue",
    staticStyle: {
      color: "#06244c",
      "font-weight": "600",
      padding: "15px",
      cursor: "pointer"
    },
    on: {
      click: _vm.generatePDF
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-file-export"
  }), _vm._v(" Export")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link dark-blue",
    staticStyle: {
      color: "#06244c",
      "font-weight": "600",
      padding: "15px",
      cursor: "pointer"
    },
    on: {
      click: _vm.clearContent
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-eraser"
  }), _vm._v(" Clear")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link dark-blue",
    staticStyle: {
      color: "#06244c",
      "font-weight": "600",
      padding: "15px",
      cursor: "pointer"
    },
    on: {
      click: _vm.finalEdit
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-pen-to-square"
  }), _vm._v(" Final\n                          Edit")])])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-12"
  }, [_c("div", {
    ref: "noteresult",
    staticClass: "note-result",
    attrs: {
      id: "note-result"
    }
  }, [_c("div", {
    staticClass: "section-1"
  }, [_vm.note.name != null && _vm.note.name != "" ? _c("p", [_c("span", {
    staticClass: "note-heading-text-title"
  }, [_vm._v("Name: ")]), _vm._v(" "), _c("span", {
    staticClass: "note-heading-text-value"
  }, [_vm._v(_vm._s(_vm.note.name))])]) : _vm._e(), _vm._v(" "), _vm.note.date != null && _vm.note.date != "" ? _c("p", [_c("span", {
    staticClass: "note-heading-text-title"
  }, [_vm._v("Date: ")]), _vm._v(" "), _c("span", {
    staticClass: "note-heading-text-value"
  }, [_vm._v(_vm._s(_vm._f("moment")(_vm.note.date, "dddd, MMMM Do YYYY")))])]) : _vm._e(), _vm._v(" "), _vm.note.session_time != null && _vm.note.session_time != "" ? _c("p", [_c("span", {
    staticClass: "note-heading-text-title"
  }, [_vm._v("Session Time:\n                    ")]), _vm._v(" "), _c("span", {
    staticClass: "note-heading-text-value"
  }, [_vm._v(_vm._s(_vm._f("customTime")(_vm.note.session_time)))])]) : _vm._e(), _vm._v(" "), _vm.note.length_of_session != null && _vm.note.length_of_session != "" ? _c("p", [_c("span", {
    staticClass: "note-heading-text-title"
  }, [_vm._v("Length of Session:\n                    ")]), _vm._v(" "), _c("span", {
    staticClass: "note-heading-text-value"
  }, [_vm._v(_vm._s(_vm.note.length_of_session))])]) : _vm._e(), _vm._v(" "), _vm.note.diagnosis != null && _vm.note.diagnosis != "" ? _c("p", [_c("span", {
    staticClass: "note-heading-text-title"
  }, [_vm._v("Diagnosis: ")]), _vm._v(" "), _c("span", {
    staticClass: "note-heading-text-value"
  }, [_vm._v(_vm._s(_vm.note.diagnosis))])]) : _vm._e(), _vm._v(" "), _vm.note.billing_code != null && _vm.note.billing_code != "" ? _c("p", [_c("span", {
    staticClass: "note-heading-text-title"
  }, [_vm._v("Billing Code:\n                    ")]), _vm._v(" "), _c("span", {
    staticClass: "note-heading-text-value"
  }, [_vm._v(_vm._s(_vm.note.billing_code))])]) : _vm._e(), _vm._v(" "), _vm.note.session_location != null && _vm.note.session_location != "" ? _c("p", [_c("span", {
    staticClass: "note-heading-text-title"
  }, [_vm._v("Session Location:\n                    ")]), _vm._v(" "), _c("span", {
    staticClass: "note-heading-text-value"
  }, [_vm._v(_vm._s(_vm.note.session_location))])]) : _vm._e(), _vm._v(" "), _vm.note.comments != null && _vm.note.comments != "" ? _c("p", [_c("span", {
    staticClass: "note-heading-text-title"
  }, [_vm._v("Comments: ")]), _vm._v(" "), _c("span", {
    staticClass: "note-heading-text-value"
  }, [_vm._v(_vm._s(_vm.note.comments))])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "heading-sections-note-result"
  }, _vm._l(_vm.allHeadingsStore, function (x) {
    return _c("div", {
      key: x.id,
      staticClass: "div"
    }, [x.status == 1 ? _c("h6", [_c("label", {
      staticClass: "ex-bold-heading"
    }, [_vm._v(_vm._s(x.heading_text) + ":")]), _vm._v(" "), _c("label", [_vm._v(_vm._s(x.heading_content))])]) : _vm._e()]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "heading-sections-note-result"
  }, [_vm._l(_vm.formQuestions.filter(function (x) {
    return x.formType == "form-inline";
  }), function (x) {
    return _c("div", {
      key: x.id,
      staticClass: "form-inline-note"
    }, [_c("div", [x.textInput != null && x.textInput != "" ? _c("h6", [_c("label", {
      staticClass: "ex-bold-heading"
    }, [_vm._v(_vm._s(x.question_text) + ":")]), _vm._v(" "), _c("label", [_vm._v(_vm._s(x.textInput))])]) : _vm._e()])]);
  }), _vm._v(" "), _vm._l(_vm.formQuestions.filter(function (x) {
    return x.formType == "form-nextline";
  }), function (x) {
    return _c("div", {
      key: x.id,
      staticClass: "form-nextline-note"
    }, [_c("div", [x.textInput != null && x.textInput != "" ? _c("div", [_c("h6", [_c("label", {
      staticClass: "ex-bold-heading"
    }, [_vm._v(_vm._s(x.question_text) + ":")])]), _vm._v(" "), _c("p", [_c("label", [_vm._v(_vm._s(x.textInput))])])]) : _vm._e()])]);
  })], 2), _vm._v(" "), _c("h6", {
    staticClass: "ex-bold-heading"
  }, [_vm._v("Session Note:")]), _vm._v(" "), _c("p", _vm._l(_vm.questionsData.filter(function (x) {
    return x.isDisplay;
  }), function (x) {
    return _c("span", {
      key: x.id
    }, [x.question_type == "text" || x.question_type == "tags" ? _c("span", [x.only_show_options == false ? _c("span", [_c("span", [_vm._v(_vm._s(x.question_text))]), _vm._v(" "), _vm._l(x.options, function (v, i) {
      return _c("span", {
        key: v.id
      }, [x.selectedOptions.indexOf(v.id) != -1 ? _c("span", [i >= 1 && x.options.length >= i ? _c("span", [_vm._v("\n                                ,")]) : _vm._e(), _vm._v("\n                              " + _vm._s(v.option_text))]) : _vm._e()]);
    }), _vm._v(".\n                        ")], 2) : _c("span", _vm._l(x.options, function (v) {
      return _c("span", {
        key: v.id
      }, [x.selectedOptions.indexOf(v.id) != -1 ? _c("span", [_vm._v(_vm._s(v.option_text) + ".\n                            ")]) : _vm._e()]);
    }), 0)]) : x.question_type == "tags-replacement-option" ? _c("span", [_c("span", [_vm._v(_vm._s(_vm._f("removeOptionString")(x.question_text, x)))]), _vm._v(" "), _vm._l(x.options, function (v, i) {
      return _c("span", {
        key: v.id,
        staticClass: "d-none"
      }, [x.selectedOptions.indexOf(v.id) != -1 ? _c("span", [i >= 1 && x.options.length >= i ? _c("span", [_vm._v("\n                              ,")]) : _vm._e(), _vm._v("\n                            " + _vm._s(v.option_text))]) : _vm._e()]);
    }), _vm._v(".\n                      ")], 2) : _vm._e()]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "section-2"
  }, [_c("p", {
    staticClass: "text-left note-hr-line"
  }), _vm._v(" "), _vm.userInfo != null ? _c("p", [_vm._v(_vm._s(_vm.userInfo.signature))]) : _vm._e()])]), _vm._v(" "), _c("VueHtml2pdf", {
    ref: "html2Pdf",
    attrs: {
      "show-layout": false,
      "float-layout": true,
      "enable-download": true,
      "preview-modal": true,
      "paginate-elements-by-height": 1400,
      filename: "myPDF",
      "pdf-quality": 2,
      "manual-pagination": false,
      "pdf-format": "a4",
      "pdf-orientation": "landscape",
      "pdf-content-width": "100%"
    }
  }, [_c("section", {
    attrs: {
      slot: "pdf-content",
      id: "pdf_to_append"
    },
    slot: "pdf-content"
  })])], 1)])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "newNoteModal",
      tabindex: "-1",
      role: "dialog",
      "aria-labelledby": "newNoteModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("form", {
    attrs: {
      method: "post"
    },
    on: {
      submit: _vm.submitNewNote
    }
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12"
  }, [_c("p", {
    staticClass: "modal-main-text"
  }, [_vm._v("Choose Note Type")]), _vm._v(" "), _vm._l(_vm.notes_list, function (note) {
    return _c("p", {
      key: note.id
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.selected_note,
        expression: "selected_note"
      }],
      attrs: {
        type: "radio",
        name: "note",
        id: "note-" + note.id
      },
      domProps: {
        value: note.id,
        checked: _vm._q(_vm.selected_note, note.id)
      },
      on: {
        change: function change($event) {
          _vm.selected_note = note.id;
        }
      }
    }), _vm._v(" "), _c("label", {
      attrs: {
        "for": "note-" + note.id
      }
    }, [_vm._v(_vm._s(note.name))])]);
  })], 2)])]), _vm._v(" "), _vm._m(4)])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "finalEditModal",
      tabindex: "-1",
      role: "dialog",
      "aria-labelledby": "finalEditModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-xl",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("h6", {
    staticClass: "card-header text-right"
  }, [_c("button", {
    staticClass: "btn btn-success",
    on: {
      click: _vm.finalEditExport
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-file-export"
  }), _vm._v(" Export\n                  ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-success",
    on: {
      click: _vm.finalEditCopy
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-copy"
  }), _vm._v(" Copy\n                  ")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    ref: "finaledit_noteresult",
    staticClass: "card-text",
    attrs: {
      id: "pdf_to_append_final_edit",
      contentEditable: "true"
    }
  })])])])])])])])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("span", {
    attrs: {
      lass: "btn btn-secondary dropdown-toggle",
      type: "button",
      id: "dropdownMenuButton",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-angle-down",
    staticStyle: {
      color: "#cbcbcb"
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("button", {
    staticClass: "navbar-toggler",
    attrs: {
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarSupportedContent",
      "aria-controls": "navbarSupportedContent",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }
  }, [_c("span", {
    staticClass: "navbar-toggler-icon"
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("button", {
    staticClass: "navbar-toggler",
    attrs: {
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarSupportedContent",
      "aria-controls": "navbarSupportedContent",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }
  }, [_c("span", {
    staticClass: "navbar-toggler-icon"
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title",
    attrs: {
      id: "newNoteModalLabel"
    }
  }, [_vm._v("\n              Start a new note\n            ")]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("\n              Close\n            ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-success",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("\n              Start a new Note\n            ")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title",
    attrs: {
      id: "finalEditModalLabel"
    }
  }, [_vm._v("Final edit")]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/NotFound.vue?vue&type=template&id=379ea3d1&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/NotFound.vue?vue&type=template&id=379ea3d1& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "vue-not-found"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-12"
  }, [_c("div", {
    staticClass: "notfound-img"
  }, [_c("img", {
    staticClass: "notfound-image",
    attrs: {
      src: this.$appConfig.asset_url + "/note_assets/img/404.jpg",
      alt: ""
    }
  })])])])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/pages/LoginPage.vue?vue&type=template&id=6b86f4ca&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/pages/LoginPage.vue?vue&type=template&id=6b86f4ca& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "vue-login-page"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "login-container"
  }, [_c("div", {
    staticClass: "row login-row"
  }, [_c("div", {
    staticClass: "col-sm col-md-6 text-white"
  }, [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_c("img", {
    staticClass: "note-login-page-logo",
    attrs: {
      src: this.$appConfig.asset_url + "/note_assets/img/Faster_note logo.png",
      alt: "Logo"
    }
  })]), _vm._v(" "), _c("form", {
    staticClass: "ms-5 mb-6 note-login-form",
    attrs: {
      method: "post"
    },
    on: {
      submit: _vm.loginSubmit
    }
  }, [_c("h2", [_vm._v("Login")]), _vm._v(" "), _c("div", {}, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.email,
      expression: "formData.email"
    }],
    ref: "email",
    staticClass: "login-u-input login-u-input-focus",
    attrs: {
      type: "email",
      id: "email",
      name: "email"
    },
    domProps: {
      value: _vm.formData.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.formData, "email", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("i", {
    staticClass: "fa-solid fa-envelope login-form-input-icon"
  })])]), _vm._v(" "), _c("div", {}, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.password,
      expression: "formData.password"
    }],
    ref: "password",
    staticClass: "login-u-input login-u-input-focus",
    attrs: {
      type: "password",
      id: "pwd",
      name: "password"
    },
    domProps: {
      value: _vm.formData.password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.formData, "password", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("i", {
    staticClass: "fa-solid fa-eye login-form-input-icon"
  })])]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("button", {
    staticClass: "btn btn-success u-login-btn mt-3",
    attrs: {
      type: "submit",
      disabled: _vm.loginBtn.disable
    }
  }, [_vm._v("\n              " + _vm._s(_vm.loginBtn.text) + "\n            ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary u-login-btn mt-3 purchase-u-btn",
    attrs: {
      type: "button"
    }
  }, [_vm._v("\n              Purchase a copy faster note\n            ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm col-md-6 d-xs-none"
  }, [_c("img", {
    staticClass: "d-block img-fluid float-end login-side-img",
    attrs: {
      src: this.$appConfig.asset_url + "/note_assets/img/img_03.jpg",
      alt: "Side Img"
    }
  })])])])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "input-group-label-lu"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "email"
    }
  }, [_vm._v("Email*")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "input-group-label-lu"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "pwd"
    }
  }, [_vm._v("Password*")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "form-check"
  }, [_c("div", {
    staticClass: "form-check-label"
  }, [_c("div", {
    staticClass: "text-left",
    staticStyle: {
      width: "50%",
      "float": "left"
    }
  }, [_c("input", {
    staticClass: "form-check-input login-u-input login-page-checkbox",
    attrs: {
      type: "checkbox",
      name: "remember"
    }
  }), _vm._v("\n                  Remember me\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "text-right",
    staticStyle: {
      width: "50%",
      "float": "left"
    }
  }, [_c("label", {
    staticClass: "form-check-label float-end",
    attrs: {
      "for": "link"
    }
  }, [_c("a", {
    staticClass: "note-login-link",
    attrs: {
      href: ""
    }
  }, [_vm._v("\n                      Forget Password?")])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/pages/SplashPage.vue?vue&type=template&id=b1eab5ba&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/pages/SplashPage.vue?vue&type=template&id=b1eab5ba& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "vue-splash-page"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-12"
  }, [_c("div", {
    staticClass: "note-background-img"
  }, [_c("div", {
    staticClass: "note-background-color"
  }, [_c("div", {
    staticClass: "splash-content-container"
  }, [_c("div", {
    staticClass: "logo-placement text-center"
  }, [_c("div", {
    staticClass: "inner-content-splash"
  }, [_c("div", {
    staticClass: "img-splash"
  }, [_c("img", {
    staticClass: "splash-logo",
    attrs: {
      src: this.$appConfig.asset_url + "/note_assets/img/Faster_note logo.png",
      alt: "logo"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "btn-section-splash mt-5"
  }, [_c("span", {
    staticClass: "btn splash-btn",
    on: {
      click: _vm.newNoteBtn
    }
  }, [_vm._v("Start a new Note")]), _vm._v(" "), _c("router-link", {
    staticClass: "btn splash-btn",
    attrs: {
      to: {
        name: "dashboard_page"
      }
    }
  }, [_vm._v("Go to Dashboard")])], 1)])])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    attrs: {
      id: "newNoteModal",
      tabindex: "-1",
      role: "dialog",
      "aria-labelledby": "newNoteModalLabel",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("form", {
    attrs: {
      method: "post"
    },
    on: {
      submit: _vm.submitNewNote
    }
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12"
  }, [_c("p", {
    staticClass: "modal-main-text"
  }, [_vm._v("Choose Note Type")]), _vm._v(" "), _vm._l(_vm.notes_list, function (note) {
    return _c("p", {
      key: note.id
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.selected_note,
        expression: "selected_note"
      }],
      attrs: {
        type: "radio",
        name: "note",
        id: "note-" + note.id
      },
      domProps: {
        value: note.id,
        checked: _vm._q(_vm.selected_note, note.id)
      },
      on: {
        change: function change($event) {
          _vm.selected_note = note.id;
        }
      }
    }), _vm._v(" "), _c("label", {
      attrs: {
        "for": "note-" + note.id
      }
    }, [_vm._v(_vm._s(note.name))])]);
  })], 2)])]), _vm._v(" "), _vm._m(1)])])])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title",
    attrs: {
      id: "newNoteModalLabel"
    }
  }, [_vm._v("\n              Start a new note\n            ")]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("\n              Close\n            ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-success",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("\n              Start a new Note\n            ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/parts/HeadingPart.vue?vue&type=template&id=0d25def4&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/parts/HeadingPart.vue?vue&type=template&id=0d25def4& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-12"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "note-heading-section"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "col-lg-12 col-md-12"
  }, _vm._l(_vm.headingsList, function (x, i) {
    return _c("div", {
      key: x.id,
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-lg-4"
    }, [_c("h6", {
      staticClass: "bold-heading"
    }, [_vm._v("Heading")]), _vm._v(" "), _c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.headingsList[i].heading_text,
        expression: "headingsList[i].heading_text"
      }],
      staticClass: "form-control textarea-heading-note",
      attrs: {
        rows: "1"
      },
      domProps: {
        value: _vm.headingsList[i].heading_text
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(_vm.headingsList[i], "heading_text", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col-lg-5"
    }, [_c("h6", {
      staticClass: "bold-heading"
    }, [_vm._v("Content")]), _vm._v(" "), _c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.headingsList[i].heading_content,
        expression: "headingsList[i].heading_content"
      }],
      staticClass: "form-control textarea-heading-note",
      attrs: {
        rows: "1"
      },
      domProps: {
        value: _vm.headingsList[i].heading_content
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(_vm.headingsList[i], "heading_content", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col-lg-3 icon-pack-heading-note"
    }, [_c("button", {
      staticClass: "btn-note-heading-pm",
      style: x.status == 1 ? {
        backgroundColor: "#0e386a",
        color: "white"
      } : {},
      on: {
        click: function click($event) {
          return _vm.makeHeadingActiveInactive(i, x.type);
        }
      }
    }, [_vm._v("\n                +/-\n              ")]), _vm._v(" "), _c("button", {
      staticClass: "btn-note-heading-save",
      on: {
        click: function click($event) {
          return _vm.saveThisHeading(i);
        }
      }
    }, [_c("i", {
      staticClass: "fa-solid fa-floppy-disk"
    })]), _vm._v(" "), _c("button", {
      staticClass: "btn-note-heading-del",
      on: {
        click: function click($event) {
          return _vm.deleteHeading(i, x.type);
        }
      }
    }, [_c("i", {
      staticClass: "fa-solid fa-trash-can"
    })])])]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-12 mt-2"
  }, [_c("button", {
    staticClass: "btn-heading-note-add-new",
    on: {
      click: _vm.addNewHeadingRow
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-plus"
  }), _vm._v(" Add another heading\n          ")])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "col-lg-12 col-md-12"
  }, _vm._l(_vm.dbHeadingsList, function (x, i) {
    return _c("div", {
      key: x.id,
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-lg-4"
    }, [_c("h6", {
      staticClass: "bold-heading"
    }, [_vm._v("Heading")]), _vm._v(" "), _c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: x.heading_text,
        expression: "x.heading_text"
      }],
      staticClass: "form-control textarea-heading-note",
      attrs: {
        rows: "1"
      },
      domProps: {
        value: x.heading_text
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(x, "heading_text", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col-lg-5"
    }, [_c("h6", {
      staticClass: "bold-heading"
    }, [_vm._v("Content")]), _vm._v(" "), _c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: x.heading_content,
        expression: "x.heading_content"
      }],
      staticClass: "form-control textarea-heading-note",
      attrs: {
        rows: "1"
      },
      domProps: {
        value: x.heading_content
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(x, "heading_content", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col-lg-3 icon-pack-heading-note"
    }, [_c("button", {
      staticClass: "btn-note-heading-pm",
      style: x.status == 1 ? {
        backgroundColor: "#0e386a",
        color: "white"
      } : {},
      on: {
        click: function click($event) {
          return _vm.makeHeadingActiveInactive(i, x.type);
        }
      }
    }, [_vm._v("\n                +/-\n              ")]), _vm._v(" "), _c("button", {
      staticClass: "btn-note-heading-save",
      on: {
        click: function click($event) {
          return _vm.updateThisHeadingDB(i);
        }
      }
    }, [_c("i", {
      staticClass: "fa-solid fa-pen-to-square"
    })]), _vm._v(" "), _c("button", {
      staticClass: "btn-note-heading-del",
      on: {
        click: function click($event) {
          return _vm.deleteHeading(i, x.type, x.db_id);
        }
      }
    }, [_c("i", {
      staticClass: "fa-solid fa-trash-can"
    })])])]);
  }), 0)])])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-2 col-md-2"
  }, [_c("p", [_c("i", {
    staticClass: "fa-solid fa-heading fa-3x"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-10 col-md-10"
  }, [_c("h3", [_vm._v("Add Headers")]), _vm._v(" "), _c("p", [_vm._v("\n            If you wish to add headings to the top of this note, such as\n            Diagnosis, Session Time, or Billing Code, you can do so here.\n          ")]), _vm._v(" "), _c("p", [_vm._v("\n            Type your own headings below, then use the +/- buttons to add them\n            to the current note. If you wish to save all of these headings so\n            you can use them in future progress notes AND treatment plans,\n            click 'Save' button next to the heading:\n          ")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-lg-12 col-md-12"
  }, [_c("hr"), _vm._v(" "), _c("h5", {
    staticClass: "bold-heading"
  }, [_vm._v("Temporary Headings")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-lg-12 col-md-12"
  }, [_c("hr"), _vm._v(" "), _c("h5", {
    staticClass: "bold-heading"
  }, [_vm._v("Saved Headings")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/parts/SectionPart.vue?vue&type=template&id=43dc4cd7&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/parts/SectionPart.vue?vue&type=template&id=43dc4cd7& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "vue-section-part"
  }, [_vm.section_type == "questionnaire" ? _c("div", {
    staticClass: "questionnaire"
  }, [_vm.currentSubSectionList != null && _vm.currentSubSectionList.length > 0 ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-4 col-md-4"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12"
  }, [_c("div", {
    staticClass: "note-section-left"
  }, _vm._l(_vm.currentSubSectionList, function (x) {
    return _c("div", {
      key: x.id,
      "class": ["note-section-left-li", {
        "note-section-left-li-selected": x.showStatus
      }]
    }, [_c("span", {
      staticClass: "note-section-left-text",
      on: {
        click: function click($event) {
          return _vm.loadSubSection(x.id, x.type);
        }
      }
    }, [_vm._v(_vm._s(x.name))])]);
  }), 0)])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-8 col-md-8"
  }, [_c("br"), _vm._v(" "), _vm.showByDefault ? _c("div", {
    staticClass: "row"
  }, [_vm.current_sub_section == "questionnaire" ? _c("div", {
    staticClass: "col-lg-12"
  }, [_c("div", {
    staticClass: "tools-area"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "questions"
  }, _vm._l(_vm.currentSectionQuestions, function (x) {
    return _c("div", {
      key: x.id,
      staticClass: "single-tools-area"
    }, [_c("div", {
      staticClass: "tools-heading mt-2"
    }, [x.only_show_options == false ? _c("h6", {
      staticClass: "bold-heading"
    }, [_vm._v("\n                      " + _vm._s(x.question_text) + ":\n                    ")]) : _vm._e()]), _vm._v(" "), _c("div", {
      staticClass: "tools-options"
    }, _vm._l(x.options, function (option) {
      return _c("div", {
        key: option.id,
        staticClass: "single-tools-option"
      }, [_c("p", {
        "class": ["note-questions-single-option-box", {
          "note-questions-single-option-box-selected": x.selectedOptions.indexOf(option.id) != -1 ? true : false
        }],
        attrs: {
          contentEditable: option.editAble
        },
        on: {
          click: function click($event) {
            return _vm.addQuestionInResult(x, option);
          },
          input: _vm.editableInput
        }
      }, [_vm._v("\n                        " + _vm._s(option.option_text) + "\n                      ")]), _vm._v(" "), _c("p", {
        staticClass: "d-none"
      }, [_vm._v(_vm._s(x.editAble))]), _vm._v(" "), option.editAble ? _c("div", [_c("button", {
        staticClass: "note-btn-hover-edit-danger",
        on: {
          click: function click($event) {
            return _vm.hideOption(x, option);
          }
        }
      }, [_vm._m(1, true)]), _vm._v(" "), _c("button", {
        staticClass: "note-btn-hover-edit-success",
        on: {
          click: function click($event) {
            return _vm.saveOption(x, option);
          }
        }
      }, [_vm._m(2, true)])]) : _c("div", [_c("button", {
        staticClass: "note-btn-hover-edit",
        on: {
          click: function click($event) {
            return _vm.editOption(x, option);
          }
        }
      }, [_vm._m(3, true)])])]);
    }), 0), _vm._v(" "), _c("div", {
      staticClass: "tools-option-add-new"
    }, [_c("h6", {
      staticClass: "bold-heading"
    }, [_vm._v("Customized phrases:")]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-new-phrase",
      on: {
        click: function click($event) {
          return _vm.addOwnCustomPhrase();
        }
      }
    }, [_c("i", {
      staticClass: "fa-solid fa-plus"
    }), _vm._v(" Add your own custom\n                      phrase\n                    ")])]), _vm._v(" "), _vm.new_phrase.isDisplay ? _c("div", {
      staticClass: "tools-option-input-box"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.new_phrase.option_text,
        expression: "new_phrase.option_text"
      }],
      staticClass: "form-control mt-3",
      attrs: {
        type: "text",
        placeholder: "Option Phrase"
      },
      domProps: {
        value: _vm.new_phrase.option_text
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(_vm.new_phrase, "option_text", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), _vm.new_phrase.isDisplay ? _c("div", {
      staticClass: "tools-option-input-box-btn mt-2"
    }, [_c("button", {
      staticClass: "btn btn-primary btn-14px",
      on: {
        click: function click($event) {
          return _vm.saveNewPhrase(x);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-save"
    })]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-danger btn-14px",
      on: {
        click: _vm.closeNewPhraseInput
      }
    }, [_c("i", {
      staticClass: "fa fa-times"
    })])]) : _vm._e()]);
  }), 0)])]) : _vm.current_sub_section == "statements" ? _c("div", {
    staticClass: "col-lg-12"
  }, [_c("div", {
    staticClass: "tools-area"
  }, [_vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "questions"
  }, _vm._l(_vm.currentSectionQuestions, function (x) {
    return _c("div", {
      key: x.id,
      staticClass: "single-tools-area"
    }, [_c("div", {
      staticClass: "tools-heading mt-2"
    }, [x.only_show_options == false ? _c("h6", {
      staticClass: "bold-heading"
    }, [_vm._v("\n                      " + _vm._s(x.question_text) + ":\n                    ")]) : _vm._e()]), _vm._v(" "), _c("div", {
      staticClass: "tools-statement-lines"
    }, _vm._l(x.statement_master, function (sm) {
      return _c("h6", {
        key: sm.id,
        staticClass: "bold-heading"
      }, [_vm._v("\n                      " + _vm._s(sm.short_text) + " = " + _vm._s(sm.statement_text) + ":\n                    ")]);
    }), 0), _vm._v(" "), _c("div", {
      staticClass: "tools-options"
    }, _vm._l(x.statement_detail, function (sd) {
      return _c("div", {
        key: sd.id,
        staticClass: "single-tools-option"
      }, [_c("h6", {
        staticClass: "bold-heading"
      }, [_vm._v(_vm._s(sd.title) + ":")]), _vm._v(" "), _c("div", {
        staticClass: "statement-lists"
      }, _vm._l(sd.options, function (option) {
        return _c("div", {
          key: option.id,
          staticClass: "row"
        }, [_vm._m(5, true), _vm._v(" "), _c("div", {
          staticClass: "col-9"
        }, [_c("p", {
          "class": ["note-questions-single-option-box", {
            "note-questions-single-option-box-selected": x.selectedOptions.indexOf(option.id) != -1 ? true : false
          }],
          on: {
            click: function click($event) {
              return _vm.addQuestionInResult(x, option);
            }
          }
        }, [_vm._v("\n                              " + _vm._s(option.option_text) + "\n                            ")])])]);
      }), 0)]);
    }), 0), _vm._v(" "), _c("div", {
      staticClass: "tools-option-add-new"
    }, [_c("h6", {
      staticClass: "bold-heading"
    }, [_vm._v("Customized phrases:")]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-new-phrase",
      on: {
        click: function click($event) {
          return _vm.addOwnCustomPhrase();
        }
      }
    }, [_c("i", {
      staticClass: "fa-solid fa-plus"
    }), _vm._v(" Add your own custom\n                      phrase\n                    ")])]), _vm._v(" "), _vm.new_phrase.isDisplay ? _c("div", {
      staticClass: "tools-option-input-box"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.new_phrase.option_text,
        expression: "new_phrase.option_text"
      }],
      staticClass: "form-control mt-3",
      attrs: {
        type: "text",
        placeholder: "Option Phrase"
      },
      domProps: {
        value: _vm.new_phrase.option_text
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(_vm.new_phrase, "option_text", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), _vm.new_phrase.isDisplay ? _c("div", {
      staticClass: "tools-option-input-box-btn mt-2"
    }, [_c("button", {
      staticClass: "btn btn-primary btn-14px",
      on: {
        click: function click($event) {
          return _vm.saveNewPhrase(x);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-save"
    })]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-danger btn-14px",
      on: {
        click: _vm.closeNewPhraseInput
      }
    }, [_c("i", {
      staticClass: "fa fa-times"
    })])]) : _vm._e()]);
  }), 0)])]) : _vm._e()]) : _vm._e()])]) : _c("div", {
    staticClass: "row"
  }, [_vm._m(6)])]) : _vm.section_type == "form-inline" ? _c("div", {
    staticClass: "form-inline"
  }, [_vm.currentFormQuestions != null && _vm.currentFormQuestions.length > 0 ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-12"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_vm._m(7), _vm._v(" "), _vm._l(_vm.currentFormQuestions, function (x) {
    return _c("div", {
      key: x.id,
      staticClass: "col-lg-12 col-md-12"
    }, [_c("div", {
      staticClass: "note-input-group"
    }, [_c("div", {
      staticClass: "note-input-group-head"
    }, [_c("h6", {
      staticClass: "bold-heading"
    }, [_vm._v(_vm._s(x.question_text) + ":")])]), _vm._v(" "), _c("div", {
      staticClass: "note-input-group-field"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: x.textInput,
        expression: "x.textInput"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "95%"
      },
      attrs: {
        type: "text"
      },
      domProps: {
        value: x.textInput
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(x, "textInput", $event.target.value);
        }
      }
    })])])]);
  })], 2)])]) : _c("div", {
    staticClass: "row"
  }, [_vm._m(8)])]) : _vm.section_type == "form-nextline" ? _c("div", {
    staticClass: "form-nextline"
  }, [_vm.currentFormQuestions != null && _vm.currentFormQuestions.length > 0 ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12 col-md-12"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_vm._m(9), _vm._v(" "), _vm._l(_vm.currentFormQuestions, function (x) {
    return _c("div", {
      key: x.id,
      staticClass: "col-lg-12 col-md-12"
    }, [_c("div", {
      staticClass: "note-input-group"
    }, [_c("div", {
      staticClass: "note-input-group-head"
    }, [_c("h6", {
      staticClass: "bold-heading"
    }, [_vm._v(_vm._s(x.question_text) + ":")])]), _vm._v(" "), _c("div", {
      staticClass: "note-input-group-field"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: x.textInput,
        expression: "x.textInput"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "95%"
      },
      attrs: {
        type: "text"
      },
      domProps: {
        value: x.textInput
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(x, "textInput", $event.target.value);
        }
      }
    })])])]);
  })], 2)])]) : _c("div", {
    staticClass: "row"
  }, [_vm._m(10)])]) : _vm._e()]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "search-box"
  }, [_c("input", {
    staticClass: "tool-input",
    attrs: {
      type: "text",
      placeholder: "Enter Search Here"
    }
  }), _vm._v(" "), _c("i", {
    staticClass: "fa-solid fa-magnifying-glass tool-input-icon"
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("span", [_c("i", {
    staticClass: "fa-solid fa-xmark"
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("span", [_c("i", {
    staticClass: "fa-solid fa-floppy-disk"
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("span", [_c("i", {
    staticClass: "fa-solid fa-pen-to-square queston-action-icon"
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "search-box"
  }, [_c("input", {
    staticClass: "tool-input",
    attrs: {
      type: "text",
      placeholder: "Enter Search Here"
    }
  }), _vm._v(" "), _c("i", {
    staticClass: "fa-solid fa-magnifying-glass tool-input-icon"
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-3"
  }, [_c("button", {
    staticClass: "btn note-statement-btn"
  }, [_vm._v("P")]), _vm._v(" "), _c("button", {
    staticClass: "btn note-statement-btn"
  }, [_vm._v("S")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-lg-12"
  }, [_c("br"), _vm._v(" "), _c("h2", [_vm._v("No Content Regarding this Catgeory")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-lg-12 col-md-12"
  }, [_c("p", {
    staticClass: "bold-heading"
  }, [_vm._v("\n              Add information as appropriate in the spaces below.\n            ")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-lg-12"
  }, [_c("br"), _vm._v(" "), _c("h2", [_vm._v("No Content Regarding this Catgeory")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-lg-12 col-md-12"
  }, [_c("p", {
    staticClass: "bold-heading"
  }, [_vm._v("\n              Add information as appropriate in the spaces below.\n            ")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-lg-12"
  }, [_c("br"), _vm._v(" "), _c("h2", [_vm._v("No Content Regarding this Catgeory")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue */ "./resources/js/App.vue");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration */ "./resources/js/configuration.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-axios */ "./node_modules/vue-axios/dist/vue-axios.esm.min.js");
/* harmony import */ var vue_sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-sweetalert2 */ "./node_modules/vue-sweetalert2/dist/vue-sweetalert.umd.js");
/* harmony import */ var vue_sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-toastr */ "./node_modules/vue-toastr/dist/vue-toastr.esm.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.min.css */ "./node_modules/sweetalert2/dist/sweetalert2.min.css");
/* harmony import */ var _sass_app_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../sass/app.scss */ "./resources/sass/app.scss");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes */ "./resources/js/routes.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store */ "./resources/js/store/index.js");
/* harmony import */ var _middleware_middlewarePipeline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./middleware/middlewarePipeline */ "./resources/js/middleware/middlewarePipeline.js");
/* harmony import */ var vue_clipboard2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-clipboard2 */ "./node_modules/vue-clipboard2/vue-clipboard.js");
/* harmony import */ var vue_clipboard2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(vue_clipboard2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./filters */ "./resources/js/filters.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















vue__WEBPACK_IMPORTED_MODULE_13__["default"].prototype.$appConfig = _configuration__WEBPACK_IMPORTED_MODULE_1__["default"];
vue__WEBPACK_IMPORTED_MODULE_13__["default"].config.productionTip = false;
vue__WEBPACK_IMPORTED_MODULE_13__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_14__["default"]);
vue__WEBPACK_IMPORTED_MODULE_13__["default"].use(vue_axios__WEBPACK_IMPORTED_MODULE_3__["default"], (axios__WEBPACK_IMPORTED_MODULE_2___default()));
vue__WEBPACK_IMPORTED_MODULE_13__["default"].use((vue_sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()));
vue__WEBPACK_IMPORTED_MODULE_13__["default"].use(vue_toastr__WEBPACK_IMPORTED_MODULE_5__["default"]);
vue__WEBPACK_IMPORTED_MODULE_13__["default"].use((vue_clipboard2__WEBPACK_IMPORTED_MODULE_11___default()));
vue__WEBPACK_IMPORTED_MODULE_13__["default"].use(__webpack_require__(/*! vue-moment */ "./node_modules/vue-moment/dist/vue-moment.js"));
var router = new vue_router__WEBPACK_IMPORTED_MODULE_14__["default"]({
  mode: 'history',
  routes: _routes__WEBPACK_IMPORTED_MODULE_8__["default"] // short for `routes: routes`

});
router.beforeEach(function (to, from, next) {
  /** Navigate to next if middleware is not applied */
  if (!to.meta.middleware) {
    return next();
  }

  var middleware = to.meta.middleware;
  var context = {
    to: to,
    from: from,
    next: next //   store  | You can also pass store as an argument

  };
  return middleware[0](_objectSpread(_objectSpread({}, context), {}, {
    next: (0,_middleware_middlewarePipeline__WEBPACK_IMPORTED_MODULE_10__["default"])(context, middleware, 1)
  }));
});
new vue__WEBPACK_IMPORTED_MODULE_13__["default"]({
  router: router,
  store: _store__WEBPACK_IMPORTED_MODULE_9__["default"],
  render: function render(h) {
    return h(_App_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }
}).$mount('#app');

/***/ }),

/***/ "./resources/js/configuration.js":
/*!***************************************!*\
  !*** ./resources/js/configuration.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  asset_url: "https://fasternote.com",
  app_name: "Faster Note"
});

/***/ }),

/***/ "./resources/js/filters.js":
/*!*********************************!*\
  !*** ./resources/js/filters.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

vue__WEBPACK_IMPORTED_MODULE_0__["default"].filter("removeOptionString", function (value, arg) {
  var txt = "";
  arg.options.forEach(function (v, i) {
    if (arg.selectedOptions.indexOf(v.id) != -1) {
      if (i <= 0) {
        txt = txt + v.option_text;
      } else {
        txt = txt + ", " + v.option_text;
      }
    }
  });
  return value.replace('*option*', txt);
});
vue__WEBPACK_IMPORTED_MODULE_0__["default"].filter("customTime", function (value) {
  return vue__WEBPACK_IMPORTED_MODULE_0__["default"].moment(value, "HH:mm").format('LT');
});

/***/ }),

/***/ "./resources/js/middleware/auth.js":
/*!*****************************************!*\
  !*** ./resources/js/middleware/auth.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ auth)
/* harmony export */ });
function auth(_ref) {
  var next = _ref.next,
      store = _ref.store;
  var isLoggedIn = localStorage.getItem('loginInfo'); // let isLoggedIn = store.getters['sessionData/isLoggedIn']

  if (isLoggedIn == null) {
    return next({
      name: 'login_page'
    });
  }

  return next();
}

/***/ }),

/***/ "./resources/js/middleware/middlewarePipeline.js":
/*!*******************************************************!*\
  !*** ./resources/js/middleware/middlewarePipeline.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function middlewarePipeline(context, middleware, index) {
  var nextMiddleware = middleware[index];

  if (!nextMiddleware) {
    return context.next;
  }

  return function () {
    var nextPipeline = middlewarePipeline(context, middleware, index + 1);
    nextMiddleware(_objectSpread(_objectSpread({}, context), {}, {
      next: nextPipeline
    }));
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (middlewarePipeline);

/***/ }),

/***/ "./resources/js/routes.js":
/*!********************************!*\
  !*** ./resources/js/routes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./middleware/auth */ "./resources/js/middleware/auth.js");
/* harmony import */ var _components_note_MasterLayout_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/note/MasterLayout.vue */ "./resources/js/components/note/MasterLayout.vue");
/* harmony import */ var _components_note_NotFound_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/note/NotFound.vue */ "./resources/js/components/note/NotFound.vue");
/* harmony import */ var _components_note_pages_LoginPage_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/note/pages/LoginPage.vue */ "./resources/js/components/note/pages/LoginPage.vue");
/* harmony import */ var _components_note_pages_SplashPage_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/note/pages/SplashPage.vue */ "./resources/js/components/note/pages/SplashPage.vue");
/* harmony import */ var _components_dashboard_DashLayout_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard/DashLayout.vue */ "./resources/js/components/dashboard/DashLayout.vue");
/* harmony import */ var _components_dashboard_pages_DashboardPage_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard/pages/DashboardPage.vue */ "./resources/js/components/dashboard/pages/DashboardPage.vue");
/* harmony import */ var _components_dashboard_pages_GettingStartedPage_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboard/pages/GettingStartedPage.vue */ "./resources/js/components/dashboard/pages/GettingStartedPage.vue");
/* harmony import */ var _components_dashboard_pages_MyProfilePage_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard/pages/MyProfilePage.vue */ "./resources/js/components/dashboard/pages/MyProfilePage.vue");
/* harmony import */ var _components_dashboard_pages_MyRequestPage_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dashboard/pages/MyRequestPage.vue */ "./resources/js/components/dashboard/pages/MyRequestPage.vue");
/* harmony import */ var _components_dashboard_pages_MyOrdersPage_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dashboard/pages/MyOrdersPage.vue */ "./resources/js/components/dashboard/pages/MyOrdersPage.vue");
/* harmony import */ var _components_dashboard_pages_MySubscriptionsPage_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dashboard/pages/MySubscriptionsPage.vue */ "./resources/js/components/dashboard/pages/MySubscriptionsPage.vue");
/* harmony import */ var _components_dashboard_pages_MyNotificationsPage_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dashboard/pages/MyNotificationsPage.vue */ "./resources/js/components/dashboard/pages/MyNotificationsPage.vue");













var node = "/" + "note";
var routes = [{
  path: '*',
  name: 'notfound_page',
  component: _components_note_NotFound_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  path: node + '/login',
  name: 'login_page',
  component: _components_note_pages_LoginPage_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: node + '/splash',
  name: 'splash_page',
  component: _components_note_pages_SplashPage_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
  meta: {
    middleware: [_middleware_auth__WEBPACK_IMPORTED_MODULE_0__["default"]]
  }
}, {
  path: node + '/makenote/:type/:section?',
  name: 'make_note',
  component: _components_note_MasterLayout_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  meta: {
    middleware: [_middleware_auth__WEBPACK_IMPORTED_MODULE_0__["default"]]
  }
}, {
  path: node + '/user',
  name: 'dash_layout',
  component: _components_dashboard_DashLayout_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
  meta: {
    middleware: [_middleware_auth__WEBPACK_IMPORTED_MODULE_0__["default"]]
  },
  children: [{
    path: node + '/user/dashboard',
    name: 'dashboard_page',
    component: _components_dashboard_pages_DashboardPage_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    meta: {
      middleware: [_middleware_auth__WEBPACK_IMPORTED_MODULE_0__["default"]]
    }
  }, {
    path: node + '/user/getting-started',
    name: 'getting_started_page',
    component: _components_dashboard_pages_GettingStartedPage_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    meta: {
      middleware: [_middleware_auth__WEBPACK_IMPORTED_MODULE_0__["default"]]
    }
  }, {
    path: node + '/user/my-profile',
    name: 'my_profile_page',
    component: _components_dashboard_pages_MyProfilePage_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    meta: {
      middleware: [_middleware_auth__WEBPACK_IMPORTED_MODULE_0__["default"]]
    }
  }, {
    path: node + '/user/my-requests',
    name: 'my_requests_page',
    component: _components_dashboard_pages_MyRequestPage_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    meta: {
      middleware: [_middleware_auth__WEBPACK_IMPORTED_MODULE_0__["default"]]
    }
  }, {
    path: node + '/user/my-orders',
    name: 'my_orders_page',
    component: _components_dashboard_pages_MyOrdersPage_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    meta: {
      middleware: [_middleware_auth__WEBPACK_IMPORTED_MODULE_0__["default"]]
    }
  }, {
    path: node + '/user/my-subscriptions',
    name: 'my_subscriptions_page',
    component: _components_dashboard_pages_MySubscriptionsPage_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    meta: {
      middleware: [_middleware_auth__WEBPACK_IMPORTED_MODULE_0__["default"]]
    }
  }, {
    path: node + '/user/my-notifications',
    name: 'my_notifications_page',
    component: _components_dashboard_pages_MyNotificationsPage_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    meta: {
      middleware: [_middleware_auth__WEBPACK_IMPORTED_MODULE_0__["default"]]
    }
  }]
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ "./resources/js/store/index.js":
/*!*************************************!*\
  !*** ./resources/js/store/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _modules_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/login */ "./resources/js/store/modules/login.js");
/* harmony import */ var _modules_note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/note */ "./resources/js/store/modules/note.js");




vue__WEBPACK_IMPORTED_MODULE_2__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new vuex__WEBPACK_IMPORTED_MODULE_3__["default"].Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login: _modules_login__WEBPACK_IMPORTED_MODULE_0__["default"],
    note: _modules_note__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}));

/***/ }),

/***/ "./resources/js/store/modules/login.js":
/*!*********************************************!*\
  !*** ./resources/js/store/modules/login.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var state = {
  loginInfo: null,
  user: null,
  error_log_text: null
};
var getters = {};
var mutations = {
  login: function login(state, payload) {
    state.error_log_text = null;

    if (payload.status == '200' && payload.data.data.user.isAdmin != 1) {
      state.loginInfo = {
        status: 'true',
        token: payload.data.data.token
      };
      state.user = payload.data.data.user;
      localStorage.setItem("loginInfo", JSON.stringify(state.loginInfo));
    } else if (payload.status == '200' && payload.data.data.user.isAdmin == 1) {
      state.error_log_text = 'You are not allowed to Login Man';
    } else {
      state.error_log_text = null;
    }
  },
  userInformation: function userInformation(state, payload) {
    state.user = payload;
  },
  logoutUser: function logoutUser(state, payload) {
    if (payload.status == "success") {
      state.loginInfo = null;
      state.user = null;
      localStorage.removeItem('loginInfo');
    }
  }
};
var actions = {
  login: function login(context, payload) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var url, headers;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = "https://fasternote.com" + "/api/login";
              headers = {
                "Accept": "application/json",
                "Content-Type": "application/json"
              };
              return _context.abrupt("return", vue__WEBPACK_IMPORTED_MODULE_0__["default"].axios.post(url, payload, {
                headers: headers
              }).then(function (response) {
                context.commit('login', response);
              })["catch"](function (error) {
                console.log(error);
              }));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  userInformation: function userInformation(context) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _JSON$parse, token, url, headers;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _JSON$parse = JSON.parse(localStorage.getItem("loginInfo")), token = _JSON$parse.token;
              url = "https://fasternote.com" + "/api/details";
              headers = {
                "Accept": "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token)
              };
              return _context2.abrupt("return", vue__WEBPACK_IMPORTED_MODULE_0__["default"].axios.get(url, {
                headers: headers
              }).then(function (response) {
                context.commit('userInformation', response.data.user);
              })["catch"](function (error) {
                console.log(error);
              }));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  logoutUser: function logoutUser(context) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _JSON$parse2, token, url, headers;

      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _JSON$parse2 = JSON.parse(localStorage.getItem("loginInfo")), token = _JSON$parse2.token;
              url = "https://fasternote.com" + "/api/logout";
              headers = {
                "Accept": "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token)
              };
              return _context3.abrupt("return", vue__WEBPACK_IMPORTED_MODULE_0__["default"].axios.get(url, {
                headers: headers
              }).then(function (response) {
                context.commit('logoutUser', response.data);
              })["catch"](function (error) {
                console.log(error);
              }));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
});

/***/ }),

/***/ "./resources/js/store/modules/note.js":
/*!********************************************!*\
  !*** ./resources/js/store/modules/note.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var state = {
  all_headings: [],
  questions: [],
  current_section_questions: [],
  formQuestions: [],
  sub_sections_list: [],
  current_parent_section_id: null,
  current_sub_section_id: null
};
var getters = {
  currentSectionFormQuestions: function currentSectionFormQuestions(state) {
    return state.formQuestions.filter(function (form) {
      return form.parent_section_id == state.current_parent_section_id;
    });
  },
  currentSectionQuestions: function currentSectionQuestions(state) {
    return state.questions.filter(function (question) {
      return question.section_id == state.current_sub_section_id;
    });
  }
};
var mutations = {
  clearContent: function clearContent(state) {
    state.all_headings = [];
    state.questions = [];
    state.formQuestions = [];
    state.sub_sections_list = [];
  },
  changeParentComponent: function changeParentComponent(state, payload) {
    state.current_parent_section_id = payload.parent_id;
  },
  changeSubSectionComponent: function changeSubSectionComponent(state, payload) {
    state.current_sub_section_id = payload;
  },
  changeHeadings: function changeHeadings(state, payload) {
    state.all_headings = payload;
  },
  getQuestions: function getQuestions(state, payload) {
    state.sub_sections_list = state.sub_sections_list.map(function (val) {
      if (payload.section_id == val.id) {
        val.showStatus = true;
      } else {
        val.showStatus = false;
      }

      return val;
    });
    payload.data.forEach(function (val) {
      val.isDisplay = false;
      val.editAble = false;
      val.selectedOptions = [];
      state.questions.push(val);
    });
    console.log(state.questions);
  },
  changeQuestionsState: function changeQuestionsState(state, payload) {
    state.sub_sections_list = state.sub_sections_list.map(function (val) {
      if (payload.id == val.id) {
        val.showStatus = true;
      } else {
        val.showStatus = false;
      }

      return val;
    });
  },
  currentSelectedSection: function currentSelectedSection(state, payload) {
    state.current_section_questions = payload;
  },
  setFormQuestions: function setFormQuestions(state, payload) {
    state.current_parent_section_id = payload.parent_section_id;

    if (payload.section_type == 'form-inline') {
      payload.data.forEach(function (value) {
        value.textInput = null;
        value.formType = 'form-inline';
        value.parent_section_id = payload.parent_section_id;
        state.formQuestions.push(value);
      });
    } else if (payload.section_type == 'form-nextline') {
      payload.data.forEach(function (value) {
        value.textInput = null;
        value.formType = 'form-nextline';
        value.parent_section_id = payload.parent_section_id;
        state.formQuestions.push(value);
      });
    } else if (payload.section_type == 'questionnaire') {
      state.sub_sections_list = payload.data.map(function (val) {
        val.showStatus = false;
        return val;
      });
    }
  },
  addQuestionsOnResult: function addQuestionsOnResult(state, payload) {
    var index = state.questions.findIndex(function (x) {
      return x.id == payload.question.id;
    });

    if (payload.question.selection_type == 'single') {
      if (state.questions[index].selectedOptions.length > 0 && state.questions[index].selectedOptions[0] == payload.option.id) {
        state.questions[index].selectedOptions.splice(0, 1);
        state.questions[index].isDisplay = false;
      } else {
        state.questions[index].selectedOptions = [];
        state.questions[index].selectedOptions.push(payload.option.id);
        state.questions[index].isDisplay = true;
      }
    } else if (payload.question.selection_type == 'multiple') {
      var selected_options_index = state.questions[index].selectedOptions.indexOf(payload.option.id);

      if (selected_options_index == -1) {
        state.questions[index].selectedOptions.push(payload.option.id);
        state.questions[index].isDisplay = true;
      } else {
        state.questions[index].selectedOptions.splice(selected_options_index, 1);
      }

      if (state.questions[index].selectedOptions.length == 0) {
        state.questions[index].isDisplay = false;
      }
    } // console.log(state.questions);

  },
  addQuestionNewOption: function addQuestionNewOption(state, payload) {
    var index = state.questions.findIndex(function (x) {
      return x.id == payload.data.data.option.question_id;
    });
    state.questions[index].options.push(payload.data.data.option);
  },
  makeQuestionEditable: function makeQuestionEditable(state, payload) {
    var qindex = state.questions.findIndex(function (x) {
      return x.id == payload.question_id;
    });
    var oindex = state.questions[qindex].options.findIndex(function (x) {
      return x.id == payload.option_id;
    });
    state.questions[qindex].editAble = true;
    state.questions[qindex].options[oindex].editAble = true; // console.log(state.questions);
  },
  makeQuestionEditHide: function makeQuestionEditHide(state, payload) {
    var qindex = state.questions.findIndex(function (x) {
      return x.id == payload.question_id;
    });
    var oindex = state.questions[qindex].options.findIndex(function (x) {
      return x.id == payload.option_id;
    });
    state.questions[qindex].editAble = false;
    state.questions[qindex].options[oindex].editAble = false; // console.log(state.questions);
  },
  saveExistingOption: function saveExistingOption(state, payload) {
    var qindex = state.questions.findIndex(function (x) {
      return x.id == payload.question_id;
    });
    var oindex = state.questions[qindex].options.findIndex(function (x) {
      return x.id == payload.option_id;
    });
    state.questions[qindex].editAble = false;
    state.questions[qindex].options[oindex].editAble = false;
    state.questions[qindex].options[oindex].option_text = payload.option_text;
  }
};
var actions = {
  getQuestions: function getQuestions(context, payload) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _JSON$parse, token, url, headers;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(payload);
              _JSON$parse = JSON.parse(localStorage.getItem("loginInfo")), token = _JSON$parse.token;
              url = "https://fasternote.com" + "/api/questions/" + payload.id + "/" + payload.type;
              headers = {
                "Accept": "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token)
              };
              return _context.abrupt("return", vue__WEBPACK_IMPORTED_MODULE_0__["default"].axios.get(url, {
                headers: headers
              }).then(function (response) {
                context.commit('getQuestions', {
                  section_id: payload.id,
                  data: response.data.data.questions
                });
              })["catch"](function (error) {
                console.log(error);
              }));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  sectionContent: function sectionContent(context, payload) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _JSON$parse2, token, headers;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _JSON$parse2 = JSON.parse(localStorage.getItem("loginInfo")), token = _JSON$parse2.token;
              headers = {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token)
              };
              return _context2.abrupt("return", vue__WEBPACK_IMPORTED_MODULE_0__["default"].axios.get("https://fasternote.com" + "/api/sections/" + payload.note_id + "/" + payload.section_type + "/" + payload.slug, {
                headers: headers
              }).then(function (response) {
                context.commit("setFormQuestions", {
                  parent_section_id: payload.slug,
                  section_type: payload.section_type,
                  data: response.data.data.sections
                });
              })["catch"](function (error) {
                console.log(error);
              }));

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  addQuestionNewOption: function addQuestionNewOption(context, payload) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _JSON$parse3, token, headers, bodyData;

      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _JSON$parse3 = JSON.parse(localStorage.getItem("loginInfo")), token = _JSON$parse3.token;
              headers = {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token)
              };
              bodyData = {
                question_id: payload.question.id,
                option_text: payload.option.option_text
              };
              return _context3.abrupt("return", vue__WEBPACK_IMPORTED_MODULE_0__["default"].axios.post("https://fasternote.com" + "/api/option/add-new-option", bodyData, {
                headers: headers
              }).then(function (response) {
                context.commit("addQuestionNewOption", response);
              })["catch"](function (error) {
                console.log(error);
              }));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  saveExistingOption: function saveExistingOption(context, payload) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _JSON$parse4, token, headers, bodyData;

      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _JSON$parse4 = JSON.parse(localStorage.getItem("loginInfo")), token = _JSON$parse4.token;
              headers = {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token)
              };
              bodyData = {
                id: payload.option_id,
                option_text: payload.option_text
              };
              return _context4.abrupt("return", vue__WEBPACK_IMPORTED_MODULE_0__["default"].axios.post("https://fasternote.com" + "/api/option/update-existing-option", bodyData, {
                headers: headers
              }).then(function (response) {
                context.commit("saveExistingOption", payload);
              })["catch"](function (error) {
                console.log(error);
              }));

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
});

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/App.vue":
/*!******************************!*\
  !*** ./resources/js/App.vue ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=f348271a& */ "./resources/js/App.vue?vue&type=template&id=f348271a&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./resources/js/App.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__.render,
  _App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/App.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/DashLayout.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/dashboard/DashLayout.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DashLayout_vue_vue_type_template_id_6c1dedbc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashLayout.vue?vue&type=template&id=6c1dedbc& */ "./resources/js/components/dashboard/DashLayout.vue?vue&type=template&id=6c1dedbc&");
/* harmony import */ var _DashLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashLayout.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/DashLayout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashLayout_vue_vue_type_template_id_6c1dedbc___WEBPACK_IMPORTED_MODULE_0__.render,
  _DashLayout_vue_vue_type_template_id_6c1dedbc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/DashLayout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/pages/DashboardPage.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/dashboard/pages/DashboardPage.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DashboardPage_vue_vue_type_template_id_0ff25362___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardPage.vue?vue&type=template&id=0ff25362& */ "./resources/js/components/dashboard/pages/DashboardPage.vue?vue&type=template&id=0ff25362&");
/* harmony import */ var _DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardPage.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/pages/DashboardPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardPage_vue_vue_type_template_id_0ff25362___WEBPACK_IMPORTED_MODULE_0__.render,
  _DashboardPage_vue_vue_type_template_id_0ff25362___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/pages/DashboardPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/pages/GettingStartedPage.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/dashboard/pages/GettingStartedPage.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GettingStartedPage_vue_vue_type_template_id_1ad91a86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GettingStartedPage.vue?vue&type=template&id=1ad91a86& */ "./resources/js/components/dashboard/pages/GettingStartedPage.vue?vue&type=template&id=1ad91a86&");
/* harmony import */ var _GettingStartedPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GettingStartedPage.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/pages/GettingStartedPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GettingStartedPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GettingStartedPage_vue_vue_type_template_id_1ad91a86___WEBPACK_IMPORTED_MODULE_0__.render,
  _GettingStartedPage_vue_vue_type_template_id_1ad91a86___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/pages/GettingStartedPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/pages/MyNotificationsPage.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/dashboard/pages/MyNotificationsPage.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MyNotificationsPage_vue_vue_type_template_id_60e28e2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyNotificationsPage.vue?vue&type=template&id=60e28e2a& */ "./resources/js/components/dashboard/pages/MyNotificationsPage.vue?vue&type=template&id=60e28e2a&");
/* harmony import */ var _MyNotificationsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyNotificationsPage.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/pages/MyNotificationsPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MyNotificationsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyNotificationsPage_vue_vue_type_template_id_60e28e2a___WEBPACK_IMPORTED_MODULE_0__.render,
  _MyNotificationsPage_vue_vue_type_template_id_60e28e2a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/pages/MyNotificationsPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/pages/MyOrdersPage.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/dashboard/pages/MyOrdersPage.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MyOrdersPage_vue_vue_type_template_id_0dc3b6de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyOrdersPage.vue?vue&type=template&id=0dc3b6de& */ "./resources/js/components/dashboard/pages/MyOrdersPage.vue?vue&type=template&id=0dc3b6de&");
/* harmony import */ var _MyOrdersPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyOrdersPage.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/pages/MyOrdersPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MyOrdersPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyOrdersPage_vue_vue_type_template_id_0dc3b6de___WEBPACK_IMPORTED_MODULE_0__.render,
  _MyOrdersPage_vue_vue_type_template_id_0dc3b6de___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/pages/MyOrdersPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/pages/MyProfilePage.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/dashboard/pages/MyProfilePage.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MyProfilePage_vue_vue_type_template_id_2347abaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyProfilePage.vue?vue&type=template&id=2347abaa& */ "./resources/js/components/dashboard/pages/MyProfilePage.vue?vue&type=template&id=2347abaa&");
/* harmony import */ var _MyProfilePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyProfilePage.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/pages/MyProfilePage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MyProfilePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyProfilePage_vue_vue_type_template_id_2347abaa___WEBPACK_IMPORTED_MODULE_0__.render,
  _MyProfilePage_vue_vue_type_template_id_2347abaa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/pages/MyProfilePage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/pages/MyRequestPage.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/dashboard/pages/MyRequestPage.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MyRequestPage_vue_vue_type_template_id_f69f65de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyRequestPage.vue?vue&type=template&id=f69f65de& */ "./resources/js/components/dashboard/pages/MyRequestPage.vue?vue&type=template&id=f69f65de&");
/* harmony import */ var _MyRequestPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyRequestPage.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/pages/MyRequestPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MyRequestPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyRequestPage_vue_vue_type_template_id_f69f65de___WEBPACK_IMPORTED_MODULE_0__.render,
  _MyRequestPage_vue_vue_type_template_id_f69f65de___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/pages/MyRequestPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/pages/MySubscriptionsPage.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/dashboard/pages/MySubscriptionsPage.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MySubscriptionsPage_vue_vue_type_template_id_ceae5390___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MySubscriptionsPage.vue?vue&type=template&id=ceae5390& */ "./resources/js/components/dashboard/pages/MySubscriptionsPage.vue?vue&type=template&id=ceae5390&");
/* harmony import */ var _MySubscriptionsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MySubscriptionsPage.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/pages/MySubscriptionsPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MySubscriptionsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MySubscriptionsPage_vue_vue_type_template_id_ceae5390___WEBPACK_IMPORTED_MODULE_0__.render,
  _MySubscriptionsPage_vue_vue_type_template_id_ceae5390___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/pages/MySubscriptionsPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/note/MasterLayout.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/note/MasterLayout.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MasterLayout_vue_vue_type_template_id_2e9bc00e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MasterLayout.vue?vue&type=template&id=2e9bc00e& */ "./resources/js/components/note/MasterLayout.vue?vue&type=template&id=2e9bc00e&");
/* harmony import */ var _MasterLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MasterLayout.vue?vue&type=script&lang=js& */ "./resources/js/components/note/MasterLayout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MasterLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MasterLayout_vue_vue_type_template_id_2e9bc00e___WEBPACK_IMPORTED_MODULE_0__.render,
  _MasterLayout_vue_vue_type_template_id_2e9bc00e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/note/MasterLayout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/note/NotFound.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/note/NotFound.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NotFound_vue_vue_type_template_id_379ea3d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotFound.vue?vue&type=template&id=379ea3d1& */ "./resources/js/components/note/NotFound.vue?vue&type=template&id=379ea3d1&");
/* harmony import */ var _NotFound_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotFound.vue?vue&type=script&lang=js& */ "./resources/js/components/note/NotFound.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotFound_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotFound_vue_vue_type_template_id_379ea3d1___WEBPACK_IMPORTED_MODULE_0__.render,
  _NotFound_vue_vue_type_template_id_379ea3d1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/note/NotFound.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/note/pages/LoginPage.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/note/pages/LoginPage.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoginPage_vue_vue_type_template_id_6b86f4ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginPage.vue?vue&type=template&id=6b86f4ca& */ "./resources/js/components/note/pages/LoginPage.vue?vue&type=template&id=6b86f4ca&");
/* harmony import */ var _LoginPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginPage.vue?vue&type=script&lang=js& */ "./resources/js/components/note/pages/LoginPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LoginPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoginPage_vue_vue_type_template_id_6b86f4ca___WEBPACK_IMPORTED_MODULE_0__.render,
  _LoginPage_vue_vue_type_template_id_6b86f4ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/note/pages/LoginPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/note/pages/SplashPage.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/note/pages/SplashPage.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SplashPage_vue_vue_type_template_id_b1eab5ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SplashPage.vue?vue&type=template&id=b1eab5ba& */ "./resources/js/components/note/pages/SplashPage.vue?vue&type=template&id=b1eab5ba&");
/* harmony import */ var _SplashPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SplashPage.vue?vue&type=script&lang=js& */ "./resources/js/components/note/pages/SplashPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SplashPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SplashPage_vue_vue_type_template_id_b1eab5ba___WEBPACK_IMPORTED_MODULE_0__.render,
  _SplashPage_vue_vue_type_template_id_b1eab5ba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/note/pages/SplashPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/note/parts/HeadingPart.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/note/parts/HeadingPart.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeadingPart_vue_vue_type_template_id_0d25def4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeadingPart.vue?vue&type=template&id=0d25def4& */ "./resources/js/components/note/parts/HeadingPart.vue?vue&type=template&id=0d25def4&");
/* harmony import */ var _HeadingPart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeadingPart.vue?vue&type=script&lang=js& */ "./resources/js/components/note/parts/HeadingPart.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HeadingPart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeadingPart_vue_vue_type_template_id_0d25def4___WEBPACK_IMPORTED_MODULE_0__.render,
  _HeadingPart_vue_vue_type_template_id_0d25def4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/note/parts/HeadingPart.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/note/parts/SectionPart.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/note/parts/SectionPart.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SectionPart_vue_vue_type_template_id_43dc4cd7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SectionPart.vue?vue&type=template&id=43dc4cd7& */ "./resources/js/components/note/parts/SectionPart.vue?vue&type=template&id=43dc4cd7&");
/* harmony import */ var _SectionPart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionPart.vue?vue&type=script&lang=js& */ "./resources/js/components/note/parts/SectionPart.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SectionPart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SectionPart_vue_vue_type_template_id_43dc4cd7___WEBPACK_IMPORTED_MODULE_0__.render,
  _SectionPart_vue_vue_type_template_id_43dc4cd7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/note/parts/SectionPart.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/App.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./resources/js/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/App.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/DashLayout.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/dashboard/DashLayout.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/DashLayout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/pages/DashboardPage.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/dashboard/pages/DashboardPage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashboardPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/DashboardPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/pages/GettingStartedPage.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/pages/GettingStartedPage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GettingStartedPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GettingStartedPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/GettingStartedPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GettingStartedPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/pages/MyNotificationsPage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/pages/MyNotificationsPage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyNotificationsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyNotificationsPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MyNotificationsPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyNotificationsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/pages/MyOrdersPage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/dashboard/pages/MyOrdersPage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyOrdersPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyOrdersPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MyOrdersPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyOrdersPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/pages/MyProfilePage.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/dashboard/pages/MyProfilePage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfilePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyProfilePage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MyProfilePage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfilePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/pages/MyRequestPage.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/dashboard/pages/MyRequestPage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyRequestPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyRequestPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MyRequestPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyRequestPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/pages/MySubscriptionsPage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/pages/MySubscriptionsPage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MySubscriptionsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MySubscriptionsPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MySubscriptionsPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MySubscriptionsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/note/MasterLayout.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/note/MasterLayout.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MasterLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MasterLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/MasterLayout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MasterLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/note/NotFound.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/note/NotFound.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NotFound.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/NotFound.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/note/pages/LoginPage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/note/pages/LoginPage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoginPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/pages/LoginPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/note/pages/SplashPage.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/note/pages/SplashPage.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SplashPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SplashPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/pages/SplashPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SplashPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/note/parts/HeadingPart.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/note/parts/HeadingPart.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeadingPart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeadingPart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/parts/HeadingPart.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeadingPart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/note/parts/SectionPart.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/note/parts/SectionPart.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionPart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SectionPart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/parts/SectionPart.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionPart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/App.vue?vue&type=template&id=f348271a&":
/*!*************************************************************!*\
  !*** ./resources/js/App.vue?vue&type=template&id=f348271a& ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=template&id=f348271a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/App.vue?vue&type=template&id=f348271a&");


/***/ }),

/***/ "./resources/js/components/dashboard/DashLayout.vue?vue&type=template&id=6c1dedbc&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/dashboard/DashLayout.vue?vue&type=template&id=6c1dedbc& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashLayout_vue_vue_type_template_id_6c1dedbc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashLayout_vue_vue_type_template_id_6c1dedbc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashLayout_vue_vue_type_template_id_6c1dedbc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashLayout.vue?vue&type=template&id=6c1dedbc& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/DashLayout.vue?vue&type=template&id=6c1dedbc&");


/***/ }),

/***/ "./resources/js/components/dashboard/pages/DashboardPage.vue?vue&type=template&id=0ff25362&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/pages/DashboardPage.vue?vue&type=template&id=0ff25362& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_template_id_0ff25362___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_template_id_0ff25362___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_template_id_0ff25362___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashboardPage.vue?vue&type=template&id=0ff25362& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/DashboardPage.vue?vue&type=template&id=0ff25362&");


/***/ }),

/***/ "./resources/js/components/dashboard/pages/GettingStartedPage.vue?vue&type=template&id=1ad91a86&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/pages/GettingStartedPage.vue?vue&type=template&id=1ad91a86& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GettingStartedPage_vue_vue_type_template_id_1ad91a86___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GettingStartedPage_vue_vue_type_template_id_1ad91a86___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GettingStartedPage_vue_vue_type_template_id_1ad91a86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GettingStartedPage.vue?vue&type=template&id=1ad91a86& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/GettingStartedPage.vue?vue&type=template&id=1ad91a86&");


/***/ }),

/***/ "./resources/js/components/dashboard/pages/MyNotificationsPage.vue?vue&type=template&id=60e28e2a&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/pages/MyNotificationsPage.vue?vue&type=template&id=60e28e2a& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyNotificationsPage_vue_vue_type_template_id_60e28e2a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyNotificationsPage_vue_vue_type_template_id_60e28e2a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyNotificationsPage_vue_vue_type_template_id_60e28e2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyNotificationsPage.vue?vue&type=template&id=60e28e2a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MyNotificationsPage.vue?vue&type=template&id=60e28e2a&");


/***/ }),

/***/ "./resources/js/components/dashboard/pages/MyOrdersPage.vue?vue&type=template&id=0dc3b6de&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/pages/MyOrdersPage.vue?vue&type=template&id=0dc3b6de& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyOrdersPage_vue_vue_type_template_id_0dc3b6de___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyOrdersPage_vue_vue_type_template_id_0dc3b6de___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyOrdersPage_vue_vue_type_template_id_0dc3b6de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyOrdersPage.vue?vue&type=template&id=0dc3b6de& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MyOrdersPage.vue?vue&type=template&id=0dc3b6de&");


/***/ }),

/***/ "./resources/js/components/dashboard/pages/MyProfilePage.vue?vue&type=template&id=2347abaa&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/pages/MyProfilePage.vue?vue&type=template&id=2347abaa& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfilePage_vue_vue_type_template_id_2347abaa___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfilePage_vue_vue_type_template_id_2347abaa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfilePage_vue_vue_type_template_id_2347abaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyProfilePage.vue?vue&type=template&id=2347abaa& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MyProfilePage.vue?vue&type=template&id=2347abaa&");


/***/ }),

/***/ "./resources/js/components/dashboard/pages/MyRequestPage.vue?vue&type=template&id=f69f65de&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/pages/MyRequestPage.vue?vue&type=template&id=f69f65de& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyRequestPage_vue_vue_type_template_id_f69f65de___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyRequestPage_vue_vue_type_template_id_f69f65de___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyRequestPage_vue_vue_type_template_id_f69f65de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyRequestPage.vue?vue&type=template&id=f69f65de& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MyRequestPage.vue?vue&type=template&id=f69f65de&");


/***/ }),

/***/ "./resources/js/components/dashboard/pages/MySubscriptionsPage.vue?vue&type=template&id=ceae5390&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/pages/MySubscriptionsPage.vue?vue&type=template&id=ceae5390& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MySubscriptionsPage_vue_vue_type_template_id_ceae5390___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MySubscriptionsPage_vue_vue_type_template_id_ceae5390___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MySubscriptionsPage_vue_vue_type_template_id_ceae5390___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MySubscriptionsPage.vue?vue&type=template&id=ceae5390& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/pages/MySubscriptionsPage.vue?vue&type=template&id=ceae5390&");


/***/ }),

/***/ "./resources/js/components/note/MasterLayout.vue?vue&type=template&id=2e9bc00e&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/note/MasterLayout.vue?vue&type=template&id=2e9bc00e& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MasterLayout_vue_vue_type_template_id_2e9bc00e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MasterLayout_vue_vue_type_template_id_2e9bc00e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MasterLayout_vue_vue_type_template_id_2e9bc00e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MasterLayout.vue?vue&type=template&id=2e9bc00e& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/MasterLayout.vue?vue&type=template&id=2e9bc00e&");


/***/ }),

/***/ "./resources/js/components/note/NotFound.vue?vue&type=template&id=379ea3d1&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/note/NotFound.vue?vue&type=template&id=379ea3d1& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_template_id_379ea3d1___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_template_id_379ea3d1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_template_id_379ea3d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NotFound.vue?vue&type=template&id=379ea3d1& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/NotFound.vue?vue&type=template&id=379ea3d1&");


/***/ }),

/***/ "./resources/js/components/note/pages/LoginPage.vue?vue&type=template&id=6b86f4ca&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/note/pages/LoginPage.vue?vue&type=template&id=6b86f4ca& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_template_id_6b86f4ca___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_template_id_6b86f4ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_template_id_6b86f4ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoginPage.vue?vue&type=template&id=6b86f4ca& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/pages/LoginPage.vue?vue&type=template&id=6b86f4ca&");


/***/ }),

/***/ "./resources/js/components/note/pages/SplashPage.vue?vue&type=template&id=b1eab5ba&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/note/pages/SplashPage.vue?vue&type=template&id=b1eab5ba& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SplashPage_vue_vue_type_template_id_b1eab5ba___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SplashPage_vue_vue_type_template_id_b1eab5ba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SplashPage_vue_vue_type_template_id_b1eab5ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SplashPage.vue?vue&type=template&id=b1eab5ba& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/pages/SplashPage.vue?vue&type=template&id=b1eab5ba&");


/***/ }),

/***/ "./resources/js/components/note/parts/HeadingPart.vue?vue&type=template&id=0d25def4&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/note/parts/HeadingPart.vue?vue&type=template&id=0d25def4& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeadingPart_vue_vue_type_template_id_0d25def4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeadingPart_vue_vue_type_template_id_0d25def4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeadingPart_vue_vue_type_template_id_0d25def4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeadingPart.vue?vue&type=template&id=0d25def4& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/parts/HeadingPart.vue?vue&type=template&id=0d25def4&");


/***/ }),

/***/ "./resources/js/components/note/parts/SectionPart.vue?vue&type=template&id=43dc4cd7&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/note/parts/SectionPart.vue?vue&type=template&id=43dc4cd7& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionPart_vue_vue_type_template_id_43dc4cd7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionPart_vue_vue_type_template_id_43dc4cd7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionPart_vue_vue_type_template_id_43dc4cd7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SectionPart.vue?vue&type=template&id=43dc4cd7& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/note/parts/SectionPart.vue?vue&type=template&id=43dc4cd7&");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/sass/app.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);