import vue from '@vitejs/plugin-vue'
// import svgPlugin
import markdownPlugin from 'vite-plugin-markdown'

import markdownIt from 'markdown-it'


/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [
    vue(),

    markdownPlugin({
      mode: ['vue'],
      markdownIt: markdownIt({
        html: true,
        breaks: false,
        typographer: true
      }).use(require('markdown-it-attrs'))
        .use(require('markdown-it-deflist'))
        .use(require('markdown-it-emoji'))
        .use(require('markdown-it-footnote'))
        .use(require('markdown-it-mark'))
        .use(require('markdown-it-prism'))
        .use(require('markdown-it-sub'))
        .use(require('markdown-it-sup'))
    })
  ]
}
