import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token:true,
        baseUrl: 'http://localhost:9090/api',
        user: {
            id: 1,
            url: 'ntt',
            nickname: '小胖',
            avatar: 'https://pic1.zhimg.com/v2-4673ae105cb32dbc5471e77660eaf950_im.jpg'
        }
    },
    mutations: {
        setToken(state, data) {
            state.token = data;
        },
        setUser(state, data) {
            state.user = data;
        }
    },
    getters: {
    },
    actions: {
    },
    modules: {}
})