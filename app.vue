<template>
  <!-- Nuxt 基于文件的路由系统-->
  <!-- 首页index/index.vue -->
  <!-- <NuxtLink to="/" :style="{ 'margin-right': '10px' }">首页</NuxtLink> -->
  <!-- 视频页video/video.vue -->
  <!-- <NuxtLink to="/video">视频页</NuxtLink> -->
  <!-- Nuxt页面路由，相当于vue中router-view -->
  <NuxtPage />
</template>
<script lang="ts" setup>
// seo优化信息
useSeoMeta({
  // 网站标题
  title: '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili',
  // 网站描述
  description:
    '哔哩哔哩（bilibili.com)是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。大家可以在这里找到许多欢乐。',
  // 搜索关键字
  keywords: 'B站,哔哩哔哩, bilibili, 动漫, 动画,电影',
  author: '哔哩哔哩',
  // 绕开 B 站的防盗链
  referrer: 'no-referrer',
});
</script>
<style lang="scss">
// 基础样式
@import './assets/style/base.scss';
// 字体图标
@import './assets/style/iconfont.scss';
:root {
  /* css变量设置组件库主题 */
  --van-primary-color: #fb7299 !important;
}
</style>
