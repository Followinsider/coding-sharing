import { reqUserRegister, reqUserLogin, reqEmailCode, reqUserInfo } from "@/api";

const state = {
    token: localStorage.getItem('TOKEN'),
    userInfo: {}
};

const actions = {

    //用户注册
    async userRegister({commit},user){
        let result = await reqUserRegister(user);
        if(result.code == 20000){
            return 'ok';
        }else if (result.code == 20001){
            return result.message
        }else {
            return Promise.reject(new Error('faile'));
        }
    },
    //用户登录
    async userLogin({commit},data){
        let result = await reqUserLogin(data);
        //服务区下发token,用户唯一标识符(uuid)
        //将来经常通过带token找服务器要用户信息进行展示
        if(result.code == 20000){
            commit('USERLOGIN',result.data.token);
            //持久化存储
            localStorage.setItem('TOKEN',result.data.token);
            // localStorage.setItem('TOKEN',result.data.token);
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },

    // 获取邮箱验证码
    async emailCode({commit},email){
        let result = await reqEmailCode(email);
        if(result.code == 20000){
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },

    // 获取用户信息
    async userInfo({commit}) {
        let result = await reqUserInfo();
        if (result.code == 20000) {
            commit('USERINFO',result.data);
            return 'ok';
        }else {
            return Promise.reject(new Error('faile'));
        }
    }
};

const mutations = {
    USERLOGIN(state, token) {
        state.token = token;
    },
    USERINFO(state, userInfo) {
        state.userInfo = userInfo;
    }
};



const getters = {

};

export default {
    state,
    mutations,
    actions,
    getters
}