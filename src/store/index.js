import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';

const state = {
    gridData:[]
};

const mutations = {
    [types.GET_DATA](store, data) {
        state.gridData = data;
    },
};

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
});