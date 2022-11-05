import axios from "axios";
import nprogress from 'nprogress';

//引入进度条样式
import "nprogress/nprogress.css";

//在当前仓库中引入store
import store from '@/store';

const requests = axios.create({
    baseURL:'/api',
    timeout:3000,
})

requests.interceptors.request.use((config) => {
    if(store.state.user.token){
        config.headers.Authorization = store.state.user.token;
    }
    //进度条开始
    nprogress.start();
    return config;
})

//响应拦截器
requests.interceptors.response.use((res) =>{

    //进度条结束
    nprogress.done();
    return res.data;
},(error) =>{
    nprogress.done();
    return Promise.reject(new Error('请求数据失败唉',error));
})

export default requests