import requests from "./request";

// 注册模块接口
export const reqUserRegister = data => {
    return requests({
        url: '/blog/user/register',
        data,
        method: 'put'
    })
}

// 登录模块接口
export const reqUserLogin = data => {
    return requests({
        url: '/blog/user/login',
        data,
        method: 'post'
    })
}

// 获取验证码接口
export const reqEmailCode = email => {
    return requests({
        url: `/blog/user/getEmailCode/${email}`,
        method: 'get'
    })
}

//获取用户信息接口(需要带着用户的token向服务器要用户信息)
export const reqUserInfo = ()=>{
    return requests({
        url: '/blog/user/current',
        method: 'get'
    })
}

// 获取文章内容列表接口
export const reqArticleList = (page, limit, bodyParams)=>{
    return requests({
        url: `/blog/list/${page}/${limit}`,
        method: 'post',
        data: bodyParams
    })
}

// 获取文章具体内容接口
export const reqArticle = (id)=>{
    return requests({
        url: `/blog/publish/${id}`,
        method: 'get'
    })
}

// 发表博客的接口
export const publishBlog = (data) => {
    return requests({
        url: '/blog/publish',
        method: 'put',
        data
    })
}

// 保存草稿的接口
export const saveBlog = (data) => {
    return requests({
        url: '/blog/nopublish',
        method: 'put',
        data
    })
}


// 获取用于分类的博客标签的接口
export const reqTag = () => {
    return requests({
        url: '/blog/tag',
        method: 'get',
    })
}

// 获取点赞博客的接口
export const starBlog = (id) => {
    return requests({
        url: `/blog/starts/${id}`,
        method: 'post'
    })
}

// 获取在看博客的接口
export const viewBlog = (id) => {
    return requests({
        url: `/blog/view/${id}`,
        method: 'post'
    })
}

// 获取问题内容列表接口
export const questionList = (page, limit) => {
    return requests({
        url: `/blog/question/list/${page}/${limit}`,
        method: 'get'
    })
}

// 获取提问问题的接口
export const askQuestion = (obj) => {
    return requests({
        url: '/blog/question/ask',
        method: 'put',
        data: obj
    })
}

// 获取特定标签的博客
export const getTagBlog = (page, limit, id)=>{
    return requests({
        url: `/blog/tag/tagblog/${page}/${limit}/${id}`,
        method: 'get',
    })
}