import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counterStore', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
},
  // 启用持久化存储配置
  {
    // 第一种方式：直接设置布尔值默认key为store id，默认存储为localStorage
    // persist: true,

    // 第二种方式：设置存储的key以及存储方式
    persist: {
      key: 'counter',
      storage: sessionStorage
    }
  })
