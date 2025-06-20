import { defineConfig, type DefaultTheme } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-CN',
  title: 'VitePres演示站点',
  description: '适用于新手参考/学习/部署到EdgeOne-Pages',

  themeConfig: {
    nav: nav(),

    footer: {
      message: 'VitePres演示站点',
      copyright: `Copyright © 2025`,
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '本页目录'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '🏡首页', link: '/', activeMatch: '/' },
    { text: '✨案例鉴赏', link: '/case', activeMatch: '/case' },
    { text: '💡关于我', link: '/about' },
  ]
}