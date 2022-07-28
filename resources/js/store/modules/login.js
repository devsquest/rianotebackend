import Vue from 'vue'

const state = {
    loginInfo: null,
    user: null,
};
const getters = {};
const mutations = {
    login(state, payload) {
        if (payload.status == '200') {
            state.loginInfo = {
                status: 'true',
                token: payload.data.success.token,
            }
            localStorage.setItem("loginInfo", JSON.stringify(state.loginInfo));
        }
    },
    userInformation(state, payload) {
        state.user = payload;
    },
    logoutUser(state, payload) {
        if (payload.status == "success") {
            state.loginInfo = null;
            state.user = null;
            localStorage.removeItem('loginInfo');
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
    },
    async userInformation(context) {
        const { token } = JSON.parse(localStorage.getItem("loginInfo"));
        let url = process.env.MIX_API_URL + "/api/details";
        let headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        };
        return Vue.axios.get(url, { headers: headers }).then((response) => {
            context.commit('userInformation', response.data.user);
        }).catch((error) => {
            console.log(error);
        });
    },
    async logoutUser(context) {
        const { token } = JSON.parse(localStorage.getItem("loginInfo"));
        let url = process.env.MIX_API_URL + "/api/logout";
        let headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        };
        return Vue.axios.get(url, { headers: headers }).then((response) => {
            context.commit('logoutUser', response.data);
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