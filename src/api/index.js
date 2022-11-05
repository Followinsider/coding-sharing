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
export const reqArticleList = (page = 1, limit = 10)=>{
    return requests({
        url: `/blog/list/${page}/${limit}`,
        method: 'post'
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
export const publishBlog = data => {
    return requests({
        url: '/blog/publish',
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