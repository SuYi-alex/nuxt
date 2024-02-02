// get api/chnnel
import Chnnel from '@/database/chnnel';
// 通过defineEventHandler定义接口
export default defineEventHandler(() => {
  return Chnnel;
});
