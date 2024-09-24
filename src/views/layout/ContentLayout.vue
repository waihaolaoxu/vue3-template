/*
* @Author: xushilong
* @Date: 2024-09-24 10:17:09
* @Address: 无
* @Description: 布局组件
*/

<template>
    <a-layout-content class="layout-content">
        <slot name="header">
            <div class="nav">
                <RouterLink :to="item.path" v-for="item in routerStore.subRoutes">{{ item.meta?.title }}</RouterLink>
            </div>
        </slot>
        <RouterView />
    </a-layout-content>
</template>

<script setup lang="ts">
import { defineAsyncComponent, h, onBeforeMount, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useRouterStore } from '@/stores/router';
const routerStore = useRouterStore()
</script>

<style lang='scss' scoped>
.layout-content {
    height: calc(100vh - 104px);
    box-sizing: border-box;
    background-color: #fff;
    padding: 20px;
    margin: 20px;
    overflow: auto;
}

.nav {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
}

.router-link-active {
    color: red;
}
</style>