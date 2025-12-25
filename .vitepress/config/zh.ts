import { defineConfig, type DefaultTheme } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-CN',
  title: '古文收藏',
  description: '古文，四圣心源，中医，经典',

  themeConfig: {
    nav: nav(),
lastUpdated: {
      text: '最后更新于:',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
}},
    footer: {
      message: '经典收藏',
      copyright: `Copyright © 2025`,
    },
editLink: {
      pattern: 'https://cnb.cool/tosry/vitepress-demo/-/edit/betas/:path',
      text: '在CNB上编辑此页面'
      },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '本页目录'
    },

    
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