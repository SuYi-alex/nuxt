import video from '@/database/video';
export default defineEventHandler((event) => {
  // 获取路有参数
  const { id } = event.context.params || {};
  //  根据id查询视频
  return video.find((v) => v.bvid === id);
});
