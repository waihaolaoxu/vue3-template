/*
 * @Author: xushilong 
 * @Date: 2024-09-24 14:39:09 
 * @Address: 无 
 * @Description: 菜单
 */

import type { RouteRecord } from "vue-router";

export interface RouteType extends RouteRecord {
    path: string
    name: string
    meta: {
        title?: string,
        icon?: any,
        roles?: string[]
        position?: string[]
    }
    component?: any
    children: RouteType[]
}
