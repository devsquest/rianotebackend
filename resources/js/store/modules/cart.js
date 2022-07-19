const state = {
    cart: []
};
const getters = {};
const mutations = {
    addToCart(state, payload) {
        // console.log(state);
        // console.log(payload.item.id);
        const indexOfObject = state.cart.findIndex(object => {
            return object.id == payload.item.id;
        });
        if (indexOfObject < 0) {
            state.cart.push(payload.item);
        }
    },
    removeCart(state, payload) {
        const indexOfObject = state.cart.findIndex(object => {
            return object.id == payload.pro_id;
        });
        state.cart.splice(indexOfObject, 1);
    }
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