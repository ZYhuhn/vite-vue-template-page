/*
 * @Description:
 * @Date: 2023-09-07 10:07:42
 * @LastEditTime: 2024-03-29 18:04:33
 */
import type { RouteRecordRaw } from 'vue-router'
export { basicRoutes } from './basic'

// import.meta.glob() 直接引入所有的路由模块
const modules: Recordable<{ default: RouteRecordRaw }> = import.meta.glob(
  './modules/*.ts',
  {
    // glob 默认是懒加载的，通过动态导入实现，并会在构建时分离为独立的 chunk, 设置 eager 直接引入所有的模块
    eager: true
  }
)
export const modulesRoutes: RouteRecordRaw[] = []

// 加入到路由集合中
for (const key in modules) {
  const module = modules[key].default
  const index: number = module?.meta?.menuOrderNo as number
  modulesRoutes[index] = module
}
