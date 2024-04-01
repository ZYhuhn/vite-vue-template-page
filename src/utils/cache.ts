/*
 * @Description: localStorage 相关方法
 * @Date: 2023-09-15 14:41:31
 * @LastEditTime: 2024-03-29 18:25:47
 */
import { appConfig } from '@/config/appConfig'
import { APP_CONFIG_KEY } from '@/enums/cacheEnum'
import type { AppConfig } from '#/config'

/**
 * @description: localStorage 获取 App 本地配置
 */
export function getAppLocalConfig() {
  const localAppConfig: AppConfig = JSON.parse(
    window.localStorage.getItem(APP_CONFIG_KEY) || '{}'
  )

  // 设置多语言默认语言
  localAppConfig.locale = localAppConfig.locale || appConfig.locale

  return localAppConfig
}

/**
 * @description: localStorage 存储 App 本地配置
 */
export function setAppLocalConfig(localAppConfig: AppConfig) {
  window.localStorage.setItem(APP_CONFIG_KEY, JSON.stringify(localAppConfig))
}

/**
 * @description: 批量删除 localStorage 缓存
 * @demo removeStorage(TOKEN_KEY, USER_INFO_KEY)
 */
export function removeStorage(...keys: string[]) {
  keys.forEach((key) => window.localStorage.removeItem(key))
}
