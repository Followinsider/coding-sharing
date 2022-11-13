import {reqArticleList, publishBlog, reqTag, starBlog, viewBlog, reqArticle, saveBlog, } from '@/api';

const state = {
    articleList: [],
    tagList: [],
};

const actions = {

    // 获取文章列表
    async getArticleList({commit}, {page, limit, bodyParams}) {
        let result = await reqArticleList(page, limit, bodyParams);
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

    async saveBlog({commit},data) {
        let result = await saveBlog(data);
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
    },

    // 点赞博客
    async starBlog({commit},id) {
        let result = await starBlog(id);
        if (result.code == 20000) {
            return 'ok';
        }else {
            return Promise.reject(new Error('faile'));
        }
    },

    // 在看博客
    async viewBlog({commit},id) {
        let result = await viewBlog(id);
        if (result.code == 20000) {
            return 'ok';
        }else {
            return Promise.reject(new Error('faile'));
        }
    },

    // 获取博客具体内容
    async getBlogContent({commit},id) {
        let result = await reqArticle(id);
        if (result.code === 20000) {
            return result.data;
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