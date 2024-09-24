import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NProgress from 'nprogress'; // Import NProgress
import 'nprogress/nprogress.css';
import type { RouteType } from '@/router/types'

import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { h } from 'vue';
import { useRouterStore } from '@/stores/router';
const menus = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: "首页",
      icon: h(MenuUnfoldOutlined),
      roles: []
    },
  },
  {
    path: '/fruits',
    name: 'fruits',
    redirect: '/fruits/apple',
    component: () => import('@/views/layout/ContentLayout.vue'),
    meta: {
      title: "水果",
      icon: h(MenuUnfoldOutlined),
      roles: ['admin'],
      position: ['content']
    },
    children: [
      {
        path: 'apple',
        name: 'apple',
        meta: {
          title: "苹果",
          roles: ['admin'],
        },
        component: () => import('@/views/Apple.vue')
      },
      {
        path: 'banana',
        name: 'banana',
        meta: {
          title: "香蕉",
          roles: ['admin'],
        },
        component: () => import('@/views/Banana.vue')
      }
    ]
  }
] as RouteType[]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: menus
})

export default router

router.beforeEach((to, from, next) => {
  NProgress.start(); // Start the progress bar before navigating to a new route
  const routerStore = useRouterStore()
  const parentRoute = to.matched.length > 1 ? to.matched[to.matched.length - 2] : null;
  console.log("router-parent", parentRoute, to.matched)
  routerStore.parentRoute = parentRoute ? parentRoute as RouteType : {} as RouteType
  const position = parentRoute?.meta?.position as string[];
  if (position?.includes("content")) {
    routerStore.subRoutes = parentRoute?.children as RouteType[]
  } else {
    routerStore.subRoutes = []
  }
  next();
});

router.afterEach(() => {
  NProgress.done(); // Finish the progress bar after route change is complete
});
