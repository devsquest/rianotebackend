import Vue from 'vue'

const state = {
    loginInfo: null,
    user: null,
    error_log_text: null,
};
const getters = {};
const mutations = {
    signup(state, payload) {
        console.log(payload);
    },
    login(state, payload) {
        state.error_log_text = null;
        if (payload.status == '200' && payload.data.data.user.isAdmin != 1) {
            state.loginInfo = {
                status: 'true',
                token: payload.data.data.token,
            };
            state.user = payload.data.data.user;
            localStorage.setItem("loginInfo", JSON.stringify(state.loginInfo));
        } else if (payload.status == '200' && payload.data.data.user.isAdmin == 1) {
            state.error_log_text = 'You are not allowed to Login!';
        } else {
            state.error_log_text = null;
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
    async signup(context, payload) {
        let url = process.env.MIX_API_URL + "/api/register";
        let headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
        };
        return Vue.axios.post(url, payload, { headers: headers }).then((response) => {
            context.commit('signup', response);
        }).catch((error) => {
            console.log(error);
        });
    },
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