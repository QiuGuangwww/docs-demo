import { defineConfig } from 'vitepress'
//import { set_sidebar } from './utils/auto_sidebar.mjs'
import mathjax3 from 'markdown-it-mathjax3';

const customElements = [
  'mjx-container',
  'mjx-assistive-mml',
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml',
];


// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    mermaid: true,
    config: (md) => {
      md.use(mathjax3);
    },

  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
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
          { text: '复变函数与积分变换', link: '/frount-end/复变函数与积分变换' },
          { text: '矩阵论与数值分析', link: '/frount-end/矩阵论与数值分析' },
          { text: '高等数学', link: '/frount-end/高等数学' },
          { text: '线性代数复习', link: '/frount-end/线性代数' },
          //{ text: '概率论与数理统计', link: '/frount-end/概率论与数理统计' }
        ]
      },
      {
        text: '代码语言', items: [
          { text: 'C/C++', link: '/frount-end/C/C++' },
          { text: '数据结构与算法', link: '/frount-end/数据结构与算法' },
          { text: 'Python进阶', link: '/frount-end/Python进阶' },
          {text: '数据结构作业', link: '/frount-end/数据结构作业'},
        ]
      }
    ],
    //sidebar: { "/frount-end/机器学习": set_sidebar("frount-end/机器学习") },
    sidebar: false,//关闭侧边栏
    aside: "left",//设置侧边栏在左边

    markdown: {
      math: true
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/QiuGuangwww' },
      {
        icon: { svg: '<svg t="1742028907167" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2628" width="200" height="200"><path d="M306.005333 117.632L444.330667 256h135.296l138.368-138.325333a42.666667 42.666667 0 1 1 60.373333 60.373333l-78.037333 77.952L789.333333 256A149.333333 149.333333 0 0 1 938.666667 405.333333v341.333334a149.333333 149.333333 0 0 1-149.333334 149.333333h-554.666666A149.333333 149.333333 0 0 1 85.333333 746.666667v-341.333334A149.333333 149.333333 0 0 1 234.666667 256h88.96L245.632 177.962667a42.666667 42.666667 0 0 1 60.373333-60.373334zM789.333333 341.333333h-554.666666a64 64 0 0 0-63.701334 57.856L170.666667 405.333333v341.333334a64 64 0 0 0 57.856 63.701333L234.666667 810.666667h554.666666a64 64 0 0 0 63.701334-57.813334L853.333333 746.666667v-341.333334A64 64 0 0 0 789.333333 341.333333zM341.333333 469.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v85.333333a42.666667 42.666667 0 1 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666666-42.666667z m341.333334 0a42.666667 42.666667 0 0 1 42.666666 42.666667v85.333333a42.666667 42.666667 0 1 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666667-42.666667z" p-id="2629"></path></svg>' },
        link: 'https://space.bilibili.com/433800846'
      },
      {
        icon: { svg: '<svg t="1742029136926" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3602" width="200" height="200"><path d="M544.949 561.422s0-71.387-34.779-75.050c-34.779-3.663-142.775 0-142.775 0v-219.654h161.078s-1.83-73.219-32.949-73.219h-261.755l43.93-117.148s-65.897 3.663-89.692 45.761-98.844 252.604-98.844 252.604 25.627 10.983 67.726-20.134c42.101-31.116 56.743-86.033 56.743-86.033l76.879-3.663 1.83 223.316s-133.621-1.83-161.078 0c-27.457 1.83-42.101 75.050-42.101 75.050h203.182s-18.307 124.47-69.557 214.164c-53.085 89.692-151.929 161.078-151.929 161.078s71.387 29.287 140.947-10.983c69.557-42.101 120.811-223.316 120.811-223.316l162.912 203.182s14.643-97.013-1.83-124.47c-18.307-27.457-113.49-137.283-113.49-137.283l-42.101 36.607 29.287-120.811h177.552zM587.050 188.010l-1.83 660.793h65.897l23.795 82.37 115.321-82.37h162.912v-660.793h-366.091zM879.92 775.584h-76.879l-97.013 75.050-21.965-75.050h-20.134v-512.527h215.991v512.527z" fill="" p-id="3603"></path></svg>' },
        link: 'https://www.zhihu.com/people/qiu-guang-de-zhu-fu'
      },
    ],
    footer: {
      copyright: "CopyRight © 2025 by QiuGuang"
    },
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
  },
},

)
