import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteCompression from 'vite-plugin-compression'
import eslintPlugin from '@nabla/vite-plugin-eslint'

import configHtmlPlugin from './html'
import antDesignVueResolverPlugin from './antDesignVueResolver'
import configWebUpdateNotificationPlugin from './webUpdate'
import configVisualizerPlugin from './visualizer'

export default function createVitePlugins(env: ViteEnv, isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    vue(),
    vueJsx(),
    configHtmlPlugin(env), // vite-plugin-html
    configVisualizerPlugin(), // rollup-plugin-visualizer
    antDesignVueResolverPlugin(), // unplugin-vue-components 自动按需引入组件
    eslintPlugin() // 开发过程中在控制台实时输出 lint 信息
  ]

  if (isBuild) {
    // @plugin-web-update-notification/vite
    vitePlugins.push(configWebUpdateNotificationPlugin())

    //  vite-plugin-compression gzip 压缩 生产环境生成 .gz 文件
    vitePlugins.push(
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz'
      })
    )
  }

  return vitePlugins
}
