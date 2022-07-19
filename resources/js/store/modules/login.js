import Vue from 'vue'

const state = {
    loginInfo: null,
};
const getters = {};
const mutations = {
    login(state, payload){
        if(payload.status == '200'){
            state.loginInfo = {
                status: 'true',
                token: payload.data.success.token,
            }
            localStorage.setItem("loginInfo", JSON.stringify(state.loginInfo));
        }
    }
};
const actions = {
    async login(context, payload) {
        let url = process.env.MIX_API_URL + "/api/login";
        let headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
        };
        return Vue.axios.post(url, payload, { headers: headers }).then((response) => {
            context.commit('login', response);
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