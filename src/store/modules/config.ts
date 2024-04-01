/*
 * @Description: 系统配置 store
 * @Date: 2023-09-15 14:32:32
 * @LastEditTime: 2024-04-01 10:09:29
 */
import { defineStore } from 'pinia'
import { getAppLocalConfig, setAppLocalConfig } from '@/utils/cache'
import { ThemeModeEnum, LocaleEnum } from '@/enums/appEnum'

const localConfig = getAppLocalConfig()

export const useAppConfigStore = defineStore('appConfig', {
  state: () => ({
    ...localConfig
  }),
  actions: {
    setTheme(theme: ThemeModeEnum) {
      this.themeMode = theme
    },
    setLocale(lacale: LocaleEnum) {
      this.locale = lacale
      // 更新 localStorage
      setAppLocalConfig({ ...getAppLocalConfig(), locale: lacale })
    }
  }
})
