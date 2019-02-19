import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import state from './state'; //  .js 后缀可省略
import getters from './getter';
import mutations from './mutations';
import actions from './actions';

/* plugin  本地存储插件*/
import saveinLocal from './plugin/saveinLocal'

let store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    plugins: [ saveinLocal ]
});
export default store
