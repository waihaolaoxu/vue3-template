<template>
  <main class="home">
    <a-card title="mock" style="width: 300px">
      <a-button type="primary" @click="getData">获取数据</a-button>
      <div style="margin-top: 20px;">
        获取到的数据：{{ data }}
      </div>
    </a-card>
    <a-card title="pinia+持久化" style="width: 300px">
      <a-button type="primary" @click="store.increment()">增加</a-button>
      {{ store.count }}
    </a-card>
    <a-card title="国际化" style="width: 300px">
      <p>{{ $t('hello') }}</p>
      <p>{{ $t('welcome') }}</p>
      <div class="btns">
        <a-button type="primary" @click="changeLang('en')">英语</a-button>
        <a-button type="primary" @click="changeLang('zh-CN')"> 简体中文 </a-button>
        <a-button type="primary" @click="helloI18n()"> js获取 </a-button>
      </div>
    </a-card>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { demoApi } from '@/api/api_demo';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();

import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()

const data = ref({})
const getData = async () => {
  const res = await demoApi({});
  data.value = res
}

const helloI18n = () => {
  alert(t('hello'))
}

const changeLang = (type: string) => {
  locale.value = type
  localStorage.setItem('selected-language', type);
}
</script>

<style lang="scss" scoped>
.home {
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.btns {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
