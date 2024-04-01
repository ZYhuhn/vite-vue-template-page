/*
 * @Description: 对应 src/config 目录配置声明
 * @Date: 2023-09-15 11:55:41
 * @LastEditTime: 2024-04-01 11:12:05
 */

import { ThemeModeEnum, LocaleEnum } from '@/enums'

export interface AppConfig {
  locale: LocaleEnum
  themeMode: ThemeModeEnum
  themeConfig: Record<string, string>
}
