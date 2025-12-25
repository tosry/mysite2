import { defineConfig } from 'vitepress';
import { list } from './list.mjs';

export default defineConfig({
  lang: 'zh-CN',
  title: '古文收藏',
  description: '古文，四圣心源，中医，经典',

  head: [
    ['link', { rel: 'bookmark', type: 'image/x-icon', href: '/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' }]
    ],

  themeConfig: {
        logo: '/logo.svg',

        nav: [
            { text: '🏡首页', link: '/'},
            { text: '四圣心源', link: '/si/1'},
            { text: '养生静心', link: '/yang/1' },
          ],
          
          footer: {
            message: '经典收藏',
            copyright: `Copyright © 2025`
            },
            
          editLink: {
              pattern: 'https://cnb.cool/tosry/vitepress-demo/-/edit/main/:path',
              text: '在CNB上编辑此页面'
              },
  docFooter: { prev: '上一页', next: '下一页' },
  outline: { label: '本页目录' },

  lastUpdated: {
    text: '最后更新于:',
    formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
        }
  },

  search: { provider: 'local' },
  sidebar: list,
  returnToTopLabel: '回到顶部',
  sidebarMenuLabel: '菜单',
  darkModeSwitchLabel: '主题',
  lightModeSwitchTitle: '切换到浅色模式',
  darkModeSwitchTitle: '切换到深色模式'


  }

});