import Vue from 'vue'

const state = {
    all_headings: [],
    questions: [],
    current_section_questions: [],
    formQuestions: [],
    sub_sections_list: [],
    current_parent_section_id: null,
    current_sub_section_id: null,
    activeSectionName: null,
    terminology_client: [
        { id: 1, name: "client", status: 1 },
        { id: 2, name: "patient", status: 0 },
        { id: 3, name: "person", status: 0 },
        { id: 4, name: "student", status: 0 },
        { id: 5, name: "youth", status: 0 },
    ],
    terminology_psycho: [
        { id: 1, name: "psychodynamic", status: 1 },
        { id: 2, name: "psychoanalytic", status: 0 },
    ],
    terminology_behavior: [
        { id: 1, name: "behavior", status: 1 },
        { id: 2, name: "behaviour", status: 0 },
    ],
    opening_heading: [
        { id: 1, name: "Session Note", status: 1 },
        { id: 2, name: "Progressive Note", status: 0 },
        { id: 3, name: "no heading", status: 0 },
    ],
    section_breaks: [
        { id: 1, name: "no paragraph breaks", status: 1 },
        { id: 2, name: "paragraph breaks", status: 0 },
    ],
    spacing_options: [
        { id: 1, name: 1, value:"-2.1em", status: 1 },
        { id: 2, name: 2, value:"-2.0em", status: 0 },
        { id: 3, name: 3, value:"-1.9em", status: 0 },
        { id: 4, name: 4, value:"-1.8em", status: 0 },
        { id: 5, name: 5, value:"-1.7em", status: 0 },
    ],
    font_style: [
        { id: 1, name: "Arial", status: 1 },
        { id: 2, name: "Times", status: 0 },
        { id: 3, name: "Courier", status: 0 },
        { id: 4, name: "DejaVu*", status: 0 },
    ],
    font_size: [
        { id: 1, name: 12, status: 1 },
        { id: 2, name: 14, status: 0 },
        { id: 3, name: 16, status: 0 },
        { id: 4, name: 18, status: 0 },
        { id: 5, name: 20, status: 0 },
    ],
    date_format: [
        { id: 1, name: "September 23, 1939", format: "MMMM DD, YYYY", status: 1 },
        { id: 2, name: "09/23/1939", format: "MM/DD/YYYY", status: 0 },
        { id: 3, name: "23/09/1939", format: "DD/MM/YYYY", status: 0 },
        { id: 4, name: "1939-09-23", format: "YYYY-MM-DD", status: 0 },
        { id: 5, name: "Saturday, 23 September, 1939", format: "dddd, DD, MMMM, YYYY", status: 0 },
        { id: 6, name: "Saturday, September 23, 1939", format: "dddd, MMMM DD, YYYY", status: 0 },
        { id: 7, name: "23 September, 1939", format: "DD MMMM YYYY", status: 0 },
    ],
    color_opacity: [
        { id: 1, name: 0.1, status: 1 },
        { id: 2, name: 0.3, status: 0 },
        { id: 3, name: 0.5, status: 0 },
        { id: 4, name: 0.7, status: 0 },
        { id: 5, name: 0.9, status: 0 },
        { id: 6, name: 1.0, status: 0 },
    ],
};
const getters = {
    currentSectionFormQuestions(state) {
        return state.formQuestions.filter(form => form.parent_section_id == state.current_parent_section_id);
    },
    currentSectionQuestions(state) {
        return state.questions.filter(question => question.section_id == state.current_sub_section_id);
    },
};
const mutations = {
    changeTerminology(state, payload) {
        if (payload.user.terminology_client && payload.user.terminology_client != null) {
            state.terminology_client.map((value) => {
                if (payload.user.terminology_client == value.id) {
                    value.status = 1;
                } else {
                    value.status = 0;
                }
                return value;
            });
        }
        if (payload.user.terminology_psycho && payload.user.terminology_psycho != null) {
            state.terminology_psycho.map((value) => {
                if (payload.user.terminology_psycho == value.id) {
                    value.status = 1;
                } else {
                    value.status = 0;
                }
                return value;
            });
        }
        if (payload.user.terminology_behavior && payload.user.terminology_behavior != null) {
            state.terminology_behavior.map((value) => {
                if (payload.user.terminology_behavior == value.id) {
                    value.status = 1;
                } else {
                    value.status = 0;
                }
                return value;
            });
        }
        if (payload.user.opening_heading && payload.user.opening_heading != null) {
            state.opening_heading.map((value) => {
                if (payload.user.opening_heading == value.id) {
                    value.status = 1;
                } else {
                    value.status = 0;
                }
                return value;
            });
        }
        if (payload.user.section_breaks && payload.user.section_breaks != null) {
            state.section_breaks.map((value) => {
                if (payload.user.section_breaks == value.id) {
                    value.status = 1;
                } else {
                    value.status = 0;
                }
                return value;
            });
        }
        if (payload.user.spacing_options && payload.user.spacing_options != null) {
            state.spacing_options.map((value) => {
                if (payload.user.spacing_options == value.id) {
                    value.status = 1;
                } else {
                    value.status = 0;
                }
                return value;
            });
        }
        if (payload.user.font_style && payload.user.font_style != null) {
            state.font_style.map((value) => {
                if (payload.user.font_style == value.id) {
                    value.status = 1;
                } else {
                    value.status = 0;
                }
                return value;
            });
        }
        if (payload.user.font_size && payload.user.font_size != null) {
            state.font_size.map((value) => {
                if (payload.user.font_size == value.id) {
                    value.status = 1;
                } else {
                    value.status = 0;
                }
                return value;
            });
        }
        if (payload.user.date_format && payload.user.date_format != null) {
            state.date_format.map((value) => {
                if (payload.user.date_format == value.id) {
                    value.status = 1;
                } else {
                    value.status = 0;
                }
                return value;
            });
        }
        if (payload.user.color_opacity && payload.user.color_opacity != null) {
            state.color_opacity.map((value) => {
                if (payload.user.color_opacity == value.id) {
                    value.status = 1;
                } else {
                    value.status = 0;
                }
                return value;
            });
        }
    },
    clearContent(state) {
        state.all_headings = [];
        state.questions = [];
        state.formQuestions = [];
        state.sub_sections_list = [];

    },
    changeParentComponent(state, payload) {
        state.current_parent_section_id = payload.parent_id;
    },
    changeSubSectionComponent(state, payload) {
        state.current_sub_section_id = payload.id;
        state.activeSectionName = payload.section_name
    },
    changeHeadings(state, payload) {
        state.all_headings = payload;
    },
    getQuestions(state, payload) {
        state.sub_sections_list = state.sub_sections_list.map((val) => {
            if (payload.section_id == val.id) {
                val.showStatus = true
            } else {
                val.showStatus = false;
            }
            return val;
        });
        payload.data.forEach((val) => {
            val.isDisplay = false;
            val.editAble = false;
            val.revision = 0;
            val.section_name = null;
            val.selectedOptions = [];
            state.questions.push(val);
        });
        // console.log(state.questions);
    },
    changeQuestionsState(state, payload) {
        state.sub_sections_list = state.sub_sections_list.map((val) => {
            if (payload.id == val.id) {
                val.showStatus = true;
            } else {
                val.showStatus = false;
            }
            return val;
        });
    },
    currentSelectedSection(state, payload) {
        state.current_section_questions = payload;
    },
    setFormQuestions(state, payload) {
        state.current_parent_section_id = payload.parent_section_id;
        if (payload.section_type == 'form-inline') {
            payload.data.forEach((value) => {
                value.textInput = null;
                value.formType = 'form-inline';
                value.parent_section_id = payload.parent_section_id;
                state.formQuestions.push(value);
            });
        } else if (payload.section_type == 'form-nextline') {
            payload.data.forEach((value) => {
                value.textInput = null;
                value.formType = 'form-nextline';
                value.parent_section_id = payload.parent_section_id;
                state.formQuestions.push(value);
            });
        } else if (payload.section_type == 'questionnaire') {
            state.sub_sections_list = payload.data.map((val) => {
                val.showStatus = false;
                return val;
            });
        }
    },
    addQuestionsOnResult(state, payload) {
        // console.log(payload);
        let index = state.questions.findIndex(x => x.id == payload.question.id);
        if (payload.question_type == 'tags' || payload.question_type == 'text' || payload.question_type == 'tags-replacement-option') {
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
                let selected_options_index = state.questions[index].selectedOptions.indexOf(payload.option.id);
                if (selected_options_index == -1) {
                    state.questions[index].selectedOptions.push(payload.option.id);
                    state.questions[index].isDisplay = true;
                } else {
                    state.questions[index].selectedOptions.splice(selected_options_index, 1);
                }
                if (state.questions[index].selectedOptions.length == 0) {
                    state.questions[index].isDisplay = false;
                }
            }
        } else {
            state.questions[index].section_name = state.activeSectionName;
            state.questions[index].revision = state.questions[index].revision == undefined ? 1 : ++state.questions[index].revision;
            let sel_index = state.questions[index].statement_master.findIndex(x => x.short_text == payload.sm.short_text);
            if (state.questions[index].statement_master[sel_index].selectedOptions == undefined) {
                state.questions[index].statement_master[sel_index].selectedOptions = [];
            }
            if (state.questions[index].statement_master[sel_index].selectedOptions.indexOf(payload.option.id) == -1) {
                state.questions[index].statement_master.forEach((val) => {
                    if (val.selectedOptions != undefined && val.selectedOptions.indexOf(payload.option.id) != -1) {
                        let tempIndex = val.selectedOptions.findIndex(x => x == payload.option.id);
                        val.selectedOptions.splice(tempIndex, 1);
                    }
                })
                state.questions[index].statement_master[sel_index].selectedOptions.push(payload.option.id);
            } else {
                let removedIndex = state.questions[index].statement_master[sel_index].selectedOptions.findIndex(x => x == payload.option.id);
                state.questions[index].statement_master[sel_index].selectedOptions.splice(removedIndex, 1);
            }
            if (state.questions[index].statement_master[sel_index].selectedOptions.length == 0) {
                state.questions[index].isDisplay = false;
            } else {
                state.questions[index].isDisplay = true;
            }
        }
        // console.log(state.questions);
    },
    addQuestionNewOption(state, payload) {
        let index = state.questions.findIndex(x => x.id == payload.data.data.option.question_id);
        state.questions[index].options.push(payload.data.data.option);
    },
    makeQuestionEditable(state, payload) {
        let qindex = state.questions.findIndex(x => x.id == payload.question_id);
        let oindex = state.questions[qindex].options.findIndex(x => x.id == payload.option_id);
        state.questions[qindex].editAble = true;
        state.questions[qindex].options[oindex].editAble = true;
        // console.log(state.questions);
    },
    makeQuestionEditHide(state, payload) {
        let qindex = state.questions.findIndex(x => x.id == payload.question_id);
        let oindex = state.questions[qindex].options.findIndex(x => x.id == payload.option_id);
        state.questions[qindex].editAble = false;
        state.questions[qindex].options[oindex].editAble = false;
        // console.log(state.questions);
    },
    saveExistingOption(state, payload) {
        let qindex = state.questions.findIndex(x => x.id == payload.question_id);
        let oindex = state.questions[qindex].options.findIndex(x => x.id == payload.option_id);
        state.questions[qindex].editAble = false;
        state.questions[qindex].options[oindex].editAble = false;
        state.questions[qindex].options[oindex].option_text = payload.option_text;
    },
    changeTerminologyDefault(state, payload) {
        if (payload.type == 'terminology_client') {
            state.terminology_client.map((val) => {
                if (val.id == payload.id) {
                    val.status = 1;
                } else {
                    val.status = 0;
                }
                return val;
            });
        } else if (payload.type == 'terminology_psycho') {
            state.terminology_psycho.map((val) => {
                if (val.id == payload.id) {
                    val.status = 1;
                } else {
                    val.status = 0;
                }
                return val;
            });
        } else if (payload.type == 'terminology_behavior') {
            state.terminology_behavior.map((val) => {
                if (val.id == payload.id) {
                    val.status = 1;
                } else {
                    val.status = 0;
                }
                return val;
            });
        } else if (payload.type == 'opening_heading') {
            state.opening_heading.map((val) => {
                if (val.id == payload.id) {
                    val.status = 1;
                } else {
                    val.status = 0;
                }
                return val;
            });
        } else if (payload.type == 'section_breaks') {
            state.section_breaks.map((val) => {
                if (val.id == payload.id) {
                    val.status = 1;
                } else {
                    val.status = 0;
                }
                return val;
            });
        } else if (payload.type == 'spacing_options') {
            state.spacing_options.map((val) => {
                if (val.id == payload.id) {
                    val.status = 1;
                } else {
                    val.status = 0;
                }
                return val;
            });
        } else if (payload.type == 'font_style') {
            state.font_style.map((val) => {
                if (val.id == payload.id) {
                    val.status = 1;
                } else {
                    val.status = 0;
                }
                return val;
            });
        } else if (payload.type == 'font_size') {
            state.font_size.map((val) => {
                if (val.id == payload.id) {
                    val.status = 1;
                } else {
                    val.status = 0;
                }
                return val;
            });
        } else if (payload.type == 'date_format') {
            state.date_format.map((val) => {
                if (val.id == payload.id) {
                    val.status = 1;
                } else {
                    val.status = 0;
                }
                return val;
            });
        }
        else if (payload.type == 'color_opacity') {
            state.color_opacity.map((val) => {
                if (val.id == payload.id) {
                    val.status = 1;
                } else {
                    val.status = 0;
                }
                return val;
            });
        }
    }
};
const actions = {
    changeTerminology(context) {
        context.commit('changeTerminology', { user: context.rootState.login.user });
    },
    async getQuestions(context, payload) {
        const { token } = JSON.parse(localStorage.getItem("loginInfo"));
        let url = process.env.MIX_API_URL + "/api/questions/" + payload.id + "/" + payload.type;
        let headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        };
        return Vue.axios.get(url, { headers: headers }).then((response) => {
            context.commit('getQuestions', { section_id: payload.id, data: response.data.data.questions });
        }).catch((error) => {
            console.log(error);
        });
    },
    async sectionContent(context, payload) {
        const { token } = JSON.parse(localStorage.getItem("loginInfo"));
        let headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        };
        return Vue.axios
            .get(
                process.env.MIX_API_URL +
                "/api/sections/" +
                payload.note_id +
                "/" +
                payload.section_type +
                "/" +
                payload.slug,
                {
                    headers: headers,
                }
            )
            .then((response) => {
                context.commit("setFormQuestions", {
                    parent_section_id: payload.slug,
                    section_type: payload.section_type,
                    data: response.data.data.sections,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    },
    async addQuestionNewOption(context, payload) {
        const { token } = JSON.parse(localStorage.getItem("loginInfo"));
        let headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        };
        let bodyData = {
            question_id: payload.question.id,
            option_text: payload.option.option_text,
        };
        return Vue.axios
            .post(
                process.env.MIX_API_URL +
                "/api/option/add-new-option",
                bodyData,
                {
                    headers: headers,
                }
            )
            .then((response) => {
                context.commit("addQuestionNewOption", response);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    async saveExistingOption(context, payload) {
        const { token } = JSON.parse(localStorage.getItem("loginInfo"));
        let headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        };
        let bodyData = {
            id: payload.option_id,
            option_text: payload.option_text,
        };
        return Vue.axios
            .post(
                process.env.MIX_API_URL +
                "/api/option/update-existing-option",
                bodyData,
                {
                    headers: headers,
                }
            )
            .then((response) => {
                context.commit("saveExistingOption", payload);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    async changeTerminologyDefault(context, payload) {
        const { token } = JSON.parse(localStorage.getItem("loginInfo"));
        let headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        };
        return Vue.axios
            .post(
                process.env.MIX_API_URL +
                "/api/update-user-keywords",
                payload,
                {
                    headers: headers,
                }
            )
            .then((response) => {
                if (response.data == true) {
                    context.commit("changeTerminologyDefault", payload);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}