import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  title: 'VitePres演示站点en-US',
  description: '适用于新手参考/学习/部署到EdgeOne-Pages',

  themeConfig: {
    nav: nav(),

    footer: {
      message: 'VitePres演示站点en-US',
      copyright: `Copyright © 2025`,
    },
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '🏡首页en-US', link: '/en/', activeMatch: '/' },
    { text: '✨案例鉴赏en-US', link: '/en/case', activeMatch: '/case' },
    { text: '💡关于我en-US', link: '/en/about' },
  ]
}