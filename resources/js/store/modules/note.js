import Vue from 'vue'

const state = {
    all_headings: [],
    questions: [],
    current_section_questions: [],
    formQuestions: [],
    sub_sections_list: [],
    current_parent_section_id: null,
    current_sub_section_id: null,
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
        state.current_sub_section_id = payload;
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
            val.selectedOptions = [];
            state.questions.push(val);
        });
        console.log(state.questions);
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
        let index = state.questions.findIndex(x => x.id == payload.question.id);
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
        // console.log(state.questions);
    },
    addQuestionNewOption(state, payload) {
        let index = state.questions.findIndex(x => x.id == payload.data.data.option.question_id);
        state.questions[index].options.push(payload.data.data.option);
    },
    makeQuestionEditable(state, payload){
        let qindex = state.questions.findIndex(x => x.id == payload.question_id);
        let oindex = state.questions[qindex].options.findIndex(x => x.id == payload.option_id);
        state.questions[qindex].options[oindex].editAble = true;
        console.log(state.questions);
    }
};
const actions = {
    async getQuestions(context, payload) {
        console.log(payload);
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
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}