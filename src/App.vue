/*
* @Author: xushilong
* @Date: 2024-09-24 10:17:09
* @Address: 无
* @Description: 布局组件
*/

<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo">
        前端老徐
      </div>
      <a-menu theme="dark" mode="inline" :selectedKeys=selectedKeys :items="navs" @click=onMenuClick class="menu" />

      <!-- <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline"
        style="height: calc(100vh - 64px);overflow-y: auto;">
        <a-menu-item>
          <user-outlined />
          <span>首页</span>
        </a-menu-item>
        <a-menu-item>
          <user-outlined />
          <span>苹果</span>
        </a-menu-item>
        <a-menu-item>
          <user-outlined />
          <span>香蕉</span>
        </a-menu-item>
      </a-menu> -->
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0 20px">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <RouterView />
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { defineAsyncComponent, h, onBeforeMount, ref, onMounted, computed } from 'vue'
import { useRouter, RouterLink, RouterView } from 'vue-router'
const router = useRouter()
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';

const selectedKeys = computed<string[]>(() => {
  const a = router.currentRoute.value.path.split("/");
  let b = "";
  if (a.length > 1) {
    b = '/' + a[1]
  } else {
    b = "/"
  }
  return [b]
});
const collapsed = ref<boolean>(false);

interface MenuItem {
  key: string;
  icon: any;
  label: string;
  children?: MenuItem[];
}
const navs = ref<MenuItem[]>([])
onMounted(() => {
  navs.value = router.options.routes.filter(item => {
    // TODO 权限控制
    return true
  }).map(item => {
    let obj: MenuItem = {
      key: item.path,
      icon: item.meta?.icon,
      label: item.meta?.title as string
    }
    return obj
  })
})
const onMenuClick = ({ item, key, keyPath }: any) => {
  router.push(key)
}
</script>

<style lang='scss' scoped>
.logo {
  text-align: center;
  font-size: 18px;
  color: #fff;
  line-height: 64px;
}

.menu {
  height: calc(100vh - 64px);
  overflow-y: auto;
}
</style>
