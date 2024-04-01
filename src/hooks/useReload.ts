/*
 * @Description: 点击导航刷新当前页面
 * @Date: 2023-09-18 14:17:00
 * @LastEditTime: 2024-04-01 11:41:39
 */
import { nextTick, ref } from 'vue'

const isRouterAlive = ref(true)
export default function useReload() {
  async function reloadNavPage() {
    isRouterAlive.value = false
    await nextTick()
    isRouterAlive.value = true
  }

  return { isRouterAlive, reloadNavPage }
}
