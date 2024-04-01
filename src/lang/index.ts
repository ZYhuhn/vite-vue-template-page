/*
 * @Description: 多语言
 * @Date: 2023-09-11 14:53:16
 * @LastEditTime: 2024-04-01 10:46:27
 */
import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import { getAppLocalConfig } from '@/utils/cache'
import { LocaleEnum } from '@/enums/appEnum'

// 创建 i18n 实例
const i18nInstance = createI18n({
  locale: '', // 当前使用的语言（先不设置，后续再懒加载）
  legacy: false, // 设置 false 使用 Composition API 模式
  messages: {} // 所有语言的文本内容
})

// 通过 vite 的 glob 获取 lang 文件夹下各个语言的 import 语句
const modules = import.meta.glob('./*.ts')
const localesMap = Object.fromEntries(
  Object.entries(modules).map(([path, loadLocale]) => [
    path.match(/([\w-]*)\.ts$/)?.[1],
    loadLocale
  ])
) as Record<string, () => Promise<{ default: Record<string, string> }>>

// 所有可用的语言
export const availableLocales = Object.keys(localesMap)
// 已加载的语言
const loadedLanguages: string[] = []

/**
 * @description: 设置/更新语言
 */
function setI18nLanguage(lang: LocaleEnum) {
  i18nInstance.global.locale.value = lang

  if (typeof document !== 'undefined')
    document.querySelector('html')?.setAttribute('lang', lang)

  return lang
}

/**
 * @description: 懒加载语言
 */
export async function loadLanguageAsync(lang: LocaleEnum): Promise<LocaleEnum> {
  // If the same language
  if (i18nInstance.global.locale.value === lang) return setI18nLanguage(lang)

  // If the language was already loaded
  if (loadedLanguages.includes(lang)) return setI18nLanguage(lang)

  // If the language hasn't been loaded yet
  const messages = await localesMap[lang]()

  // set locale and locale message
  i18nInstance.global.setLocaleMessage(lang, messages.default)

  loadedLanguages.push(lang)

  return setI18nLanguage(lang)
}
export default async function setupI18n(app: App<Element>) {
  app.use(i18nInstance)
  const locale = getAppLocalConfig().locale // 从 localStorage 中获取语言
  loadLanguageAsync(locale)
}
