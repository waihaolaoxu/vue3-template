/*
 * @Author: xushilong 
 * @Date: 2024-09-23 21:04:57 
 * @Address: 无 
 * @Description: 接口demo
 */

import http from '@/utils/http'

export async function demoApi(params: Object) {
    let response = await http.get('demo', { params });
    return Promise.resolve(response);
}

