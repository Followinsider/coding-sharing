import {reqArticleList, publishBlog, reqTag, } from '@/api';

const state = {
    articleList: [],
    tagList: [],
};

const actions = {

    // 获取文章列表
    async getArticleList({commit}, page, limit) {
        let result = await reqArticleList(page, limit);
        if (result.code == 20000) {
            commit('GETARTICLELIST',result.data)
        }else {
            return Promise.reject(new Error('faile'));
        }
    },

    // 发表博客
    async publish({commit}, data) {
        let result = await publishBlog(data);
        if (result.code == 20000) {
            return 'ok';
        }else {
            return Promise.reject(new Error('faile'));
        }
    },

    // 获取用于分类的博客标签
    async getTag({commit}) {
        let result = await reqTag();
        if (result.code == 20000) {
            commit('GETTAG',result.data)
        }else {
            return Promise.reject(new Error('faile'));
        }
    }
};

const mutations = {
    GETARTICLELIST(state, articleList) {
        state.articleList = articleList;
    },
    GETTAG(state, data) {
        state.tagList = data.tags;
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