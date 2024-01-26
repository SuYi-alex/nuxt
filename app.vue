<template>
  <!-- Nuxt 基于文件的路由系统-->
  <!-- 首页index/index.vue -->
  <NuxtLink to="/" :style="{ 'margin-right': '10px' }">首页</NuxtLink>
  <!-- 视频页video/video.vue -->
  <NuxtLink to="/video">视频页</NuxtLink>
  <!-- Nuxt页面路由，相当于vue中router-view -->
  <NuxtPage />
</template>
