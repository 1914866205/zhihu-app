import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token:true,
        baseUrl: 'http://localhost:9090/api',
        user: {
            id: 1,
            mobile:'18851855106',
            email:'1914866205@qq.com',
            password:'123',
            name: '小胖',
            url_token:'divinites',
            avatar: 'https://pic1.zhimg.com/v2-4673ae105cb32dbc5471e77660eaf950_im.jpg',
            url:'https://api.zhihu.com/people/06916ab5292b620917a7be1b4945a19d',
            headline:'三国英雄士，四朝经济臣',
            description:'我有个每天讲历史萌故事的公众号:hisecon101,欢迎关注！<br/><br/>天地开辟，日月重光。<br/>遭遇际会，毕力遐方。<br/>将扫群秽，还过故乡。<br/>肃清万里，总齐八荒。<br/>告成归老，待罪舞阳。',
            gender:null,
            location:null,
            business:null,
            employment:null,
            education:5,
            user_cover:'https://pic2.zhimg.com/v2-c3a39b43163af8b284c53292ae9277de_is.jpg',
            created:'2020-02-09 10:01:38'
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
