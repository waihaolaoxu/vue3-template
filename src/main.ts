/*
 * @Author: xushilong 
 * @Date: 2024-09-24 09:48:51 
 * @Address: 无 
 * @Description: 无 
 */

// antd
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

// pinia
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)

// 国际化
import { i18n } from '@/locales/index'

// 公共css
import './assets/main.scss'

// vue
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(pinia)
app.use(i18n)
app.use(Antd)
app.use(router)
app.mount('#app')


// 一二级菜单自动从路由获取
// 国际化
// 状态持久化
// mock