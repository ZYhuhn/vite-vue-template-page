import type { AppConfig } from '#/config'
import { ThemeModeEnum, LocaleEnum } from '@/enums'

// 系统默认设置
export const appConfig: AppConfig = {
  // 系统默认语言
  locale: LocaleEnum.ZH_CN,
  // 系统默认语亮暗主题
  themeMode: ThemeModeEnum.LIGHT,
  // 系统默认主题颜色配置
  themeConfig: {
    primary: '#1677ff',
    warning: '#faad14',
    success: '#52c41a',
    error: '#ff4d4f'
  }
}
