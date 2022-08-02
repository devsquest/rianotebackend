import Vue from 'vue'

const state = {
    all_headings: [],
    questions: new Map(),
    current_section_questions: [],
    questions_on_result: [],
    formQuestions: new Map(),
};
const getters = {};
const mutations = {
    changeHeadings(state, payload) {
        state.all_headings = payload;
    },
    getQuestions(state, payload) {
        state.questions.set('s' + payload.section_id, payload.data);
    },
    currentSelectedSection(state, payload) {
        state.current_section_questions = payload;
    },
    addQuestionsOnResult(state, payload){
        console.log(payload);
        state.questions_on_result.push(payload);
    }
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
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}