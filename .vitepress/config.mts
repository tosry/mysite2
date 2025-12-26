import { defineConfig } from 'vitepress';
import { list } from './list.mjs';

export default defineConfig({
  lang: 'zh-CN',
  title: '时光绘梦集',
  description: '一个个人的站点，记录生活，分享知识',

  head: [
    ['link', { rel: 'bookmark', type: 'image/x-icon', href: '/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' }],
    ['link', { rel: 'stylesheet', href: '/my.css' }],
    ['meta', { name: 'keywords', content: '生活,中医,养生' }],
    ['meta', { name: 'author', content: '夏夜万年' }]  
    ],

  srcExclude: [ '**/README.md' ],
  markdown: { lineNumbers: true },
  sitemap: { hostname: 'https://chang.tosry.cn' },
  
  themeConfig: {
        logo: '/logo.svg',

        nav: [
          { text: '书籍', items: [
            { text: '四圣心源', link: '/si/1' },
            { text: '中药收藏', link: '/yao/1' },
            { text: '养生静心', link: '/yang/1' }
          ]},
          { text: '博文', items: [
            { text: '2025', link: '/post/2025/559' }
          ]},
          { text: '链接', items: [
            { text: '友情链接', link: '/links' },
            { text: '收藏夹', link: '/shou' }
          ]},
          { text: '其他', items: [
            { text: '时间线', link: '/qita/bian' }

        ]}
          ],

        footer: {
            message: '<a href="https://beian.miit.gov.cn/">豫ICP备2024089297号-2</a>|<a href="https://beian.mps.gov.cn/#/query/webSearch?code=41172602000215">豫公网安备41172602000215号</a>',
            copyright: `© 2025 时光绘梦集|EdgeOne提供加速服务`
            },
            
        editLink: {
              pattern: 'https://cnb.cool/tosry/vitepress-demo/-/edit/main/:path',
              text: '在CNB上编辑此页面'
              },
              
        docFooter: { prev: '上一页', next: '下一页' },
        outline: { label: '页面导航' },
        
        lastUpdated: {
          text: '最后更新于',
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