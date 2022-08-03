import Vue from 'vue'

const state = {
    all_headings: [],
    questions: [],
    current_section_questions: [],
    questions_on_result: [],
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
    },
    currentSelectedSection(state, payload) {
        state.current_section_questions = payload;
    },
    setFormQuestions(state, payload) {
        state.current_parent_section_id = payload.parent_section_id;
        if (payload.section_type == 'form-inline') {
            payload.data.forEach((value) => {
                value.textInput = null;
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
            state.questions[index].selectedOptions = [];
            state.questions[index].selectedOptions.push(payload.option.id);
            state.questions[index].isDisplay = true;
        } else if (payload.question.selection_type == 'multiple') {

        }
        console.log(state.questions);
    },
};
const actions = {
    async getQuestions(context, payload) {
        const { token } = JSON.parse(localStorage.getItem("loginInfo"));
        let url = process.env.MIX_API_URL + "/api/questions/" + payload;
        let headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        };
        return Vue.axios.get(url, { headers: headers }).then((response) => {
            context.commit('getQuestions', { section_id: payload, data: response.data.data.questions });
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
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}