/*
 * @Description: config 目录配置对应声明
 * @Date: 2023-09-15 11:55:41
 * @LastEditTime: 2024-04-01 10:15:44
 */

import { ThemeModeEnum, LocaleEnum } from '@/enums'

export interface AppConfig {
  locale: LocaleEnum
  themeMode: ThemeModeEnum
  themeConfig: Record<string, string>
}
