/*
 * @Description: provide/inject key 统一管理
 * @Date: 2024-04-01 10:20:11
 */
import type { InjectionKey } from 'vue'

/*
 * @Description: 滚动组件重置
 */
export const RESET_SCROLLBAR: InjectionKey<() => void> = Symbol()

/*
 * @Description: 滚动组件滚动事件
 */
export const SCROLL_BAR_WRAP: InjectionKey<any> = Symbol()
