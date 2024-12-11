declare interface ViteEnv {
  // Dev
  VITE_PORT: number // dev 启动端口
  VITE_USE_MOCK: boolean

  // Build
  VITE_PUBLIC_PATH: string // 打包公共基础路径
  VITE_API_BASE_URL: string // 接口请求地址
  VITE_APP_TITLE: string // 系统名称
  VITE_USE_PWA: boolean
  VITE_USE_CDN: boolean
  VITE_DROP_CONSOLE: boolean // 打包是否移除 console
  VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none'
  VITE_LEGACY: boolean
}

declare type Recordable<T = any> = Record<string, T>
