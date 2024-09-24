import { fileURLToPath, URL } from 'node:url'
import { viteMockServe } from 'vite-plugin-mock';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(), // Vue DevTools 插件
    viteMockServe({
      mockPath: 'src/mock', // mock 文件目录
      enable: true, // 是否开启 mock 功能
      logger: true, // 是否在终端控制台输出请求日志
    })
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'], // 使用路径别名时想要省略的后缀名
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
