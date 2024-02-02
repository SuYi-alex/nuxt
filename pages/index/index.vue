<template>
  <!-- 公共头部 -->
  <app-header></app-header>
  <!-- 频道模块 -->
  <van-tabs v-model:active="active">
    <van-tab v-for="item in chnnelList" :key="item.id" :title="item.name" />
  </van-tabs>
  <!-- 视频列表 -->
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div class="video-list">
        <app-video
          v-for="item in list"
          :key="item.aid"
          :item="item"
        ></app-video>
      </div>
    </van-list>
  </van-pull-refresh>
</template>
<script setup lang="ts">
// 导入ts接口类型生成文件
import type { VideoItem } from '@/types/video';
// 通过useFetch获取列表数据，data是响应式数据，可以直接用于页面渲染
const { data: chnnelList } = await useFetch('/api/chnnel');
// 获取视频数据
const { data: videoList } = await useFetch('/api/video');
//显示的列表
const list = ref<VideoItem[]>([]);
// 默认选中的频道
const defaultText = ref('推荐');
const activeText = computed(() => {
  return chnnelList.value?.findIndex((item) => item.name === defaultText.value);
});
const active = ref(activeText);

// 加载状态
const loading = ref(false);
// 是否完成
const finished = ref(false);
// 下啦刷新
const refreshing = ref(false);
// 页码
let page = 1;
let pageSize = 20;
// 滚动触底触发
const onLoad = () => {
  // 表示正在加载
  loading.value = false;
  //判断是否正在下拉刷新，如果是则重置refreshing
  if (refreshing.value) {
    refreshing.value = false;
    page = 1;
    list.value = [];
  }
  // 根据页码提取数据
  const data = videoList.value?.slice(
    (page - 1) * pageSize,
    page * pageSize
  ) as VideoItem[];
  // 追加到用于渲染的数据
  list.value.push(...data);
  // 页码累加
  page++;
  // 加载结束
  if (videoList.value?.length === list.value.length) {
    finished.value = true;
  }
};
const onRefresh = () => {
  // 清空列表数据
  finished.value = false;

  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true;
  onLoad();
};
// 初始化加载-主动请求前20条数据，用于首屏渲染，方便seo抓取到数据
onLoad();
</script>

<style lang="scss">
// tab标签样式
.van-tabs {
  position: sticky;
  top: 0px;
  z-index: 9999999;
}
.van-tab--active {
  color: #ea7a99;
  font-weight: 600;
  transform: scale(1.07);
}
.van-tab__text {
  font-size: 16px;
}
// 视频列表
.video-list {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 5px;
}
</style>
