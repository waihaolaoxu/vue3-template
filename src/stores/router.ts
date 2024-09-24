/*
 * @Author: xushilong 
 * @Date: 2024-09-24 14:35:35 
 * @Address: 无 
 * @Description: 路由子菜单
 */

import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { RouteType } from '@/router/types'

export const useRouterStore = defineStore('routerStore', () => {
  const parentRoute = ref<RouteType>({} as RouteType)
  const subRoutes = ref<RouteType[]>([])
  return { parentRoute, subRoutes }
})
