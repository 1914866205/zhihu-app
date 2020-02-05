import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: '111',
        baseUrl: 'http://localhost:9090/api',
        user: {
            id: 1,
            url: 'tao-ran-ran-42',
            nickname: '小胖胖',
            avatar: 'https://niit-soft.oss-cn-hangzhou.aliyuncs.com/avatar/me.jpg'
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