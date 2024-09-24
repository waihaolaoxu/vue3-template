/*
 * @Author: xushilong 
 * @Date: 2024-09-23 20:59:38 
 * @Address: 无 
 * @Description: axios 请求拦截器
 */

import axios from 'axios'
import { message } from 'ant-design-vue'

const http = axios.create({
    baseURL: '/api',
    // timeout: 5000
})

// 请求拦截器
http.interceptors.request.use((config) => {
    return config
})

// 响应拦截器
http.interceptors.response.use((response) => {
    if (response.status === 200) {
        return response.data
    } else {
        message.error(`请求错误 ${response.status}`)
    }
})


export default http