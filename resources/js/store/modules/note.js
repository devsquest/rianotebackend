const state = {
    all_headings: []
};
const getters = {};
const mutations = {
    changeHeadings(state, payload) {
        state.all_headings = payload;
    },
};
const actions = {
    removeCart(context, payload) {
        context.commit('removeCart', payload);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}