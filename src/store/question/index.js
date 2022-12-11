import {askQuestion, questionList, } from '@/api';

const state = {
    questionMsg: {}
};

const actions = {
    async askQuestion({commit}, obj) {
        let result = await askQuestion(obj);
        if (result.code == 20000) {
            return 'ok';
        }else {
            return Promise.reject(new Error('faile'));
        }
    },

    async getQuestionList({commit},  {page, limit}) {
        let result = await questionList(page, limit);
        if (result.code == 20000) {
            // console.log(result.data);
            commit('GETQUESTIONLIST',result.data);
        }else {
            return Promise.reject(new Error('faile'));
        }
    }
    
};

const mutations = {
    GETQUESTIONLIST(state, questionMsg) {
        state.questionMsg = questionMsg;
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