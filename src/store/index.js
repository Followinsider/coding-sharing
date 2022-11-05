import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);

import user from './user';
import article from './article';

export default new Vuex.Store({
    modules:{
        user,
        article,
    }
})