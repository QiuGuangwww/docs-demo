import { defineConfig } from 'vitepress'
import { set_sidebar } from './utils/auto_sidebar.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs-demo/",
  head: [["link", { rel: "icon", href: "https://s21.ax1x.com/2025/03/15/pEawREV.png" }]],
  title: "秋光の学习笔记",
  description: "A VitePress Site",
  themeConfig: {
    outlineTitle: "目录",
    outline: [2, 6],
    logo: 'https://s21.ax1x.com/2025/03/15/pEawREV.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      {
        text: '人工智能', items: [
          { text: '机器学习', link: '/frount-end/机器学习' },
          { text: '深度学习', link: '/ai/dl' }
        ]
      },
      {
        text: '数学', items: [
          { text: '矩阵论与数值分析', link: '/ai/ml1' },
          { text: '概率论与数理统计', link: '/ai/dl' }
        ]
      }
    ],
    //sidebar: { "/frount-end/机器学习": set_sidebar("frount-end/机器学习") },
    sidebar: false,//关闭侧边栏
    aside: "left",//设置侧边栏在左边



    socialLinks: [
      { icon: 'github', link: 'https://github.com/QiuGuangwww' }
    ],
    footer: {
      copyright: "Copyright © 2025 by QiuGuang"
    },
     // 设置搜索框的样式
  search: {
    provider: "local",
    options: {
      translations: {
        button: {
          buttonText: "搜索文档",
          buttonAriaLabel: "搜索文档",
        },
        modal: {
          noResultsText: "无法找到相关结果",
          resetButtonTitle: "清除查询条件",
          footer: {
            selectText: "选择",
            navigateText: "切换",
          },
        },
      },
    },
  },
  }
})
