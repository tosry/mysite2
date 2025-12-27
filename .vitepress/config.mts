import { defineConfig } from 'vitepress';
import { list } from './list.mjs';

export default defineConfig({
  lang: 'zh-CN',
  title: '时光绘梦集',
  description: '时光绘梦集是一个记录生活点滴、分享代码、中医知识和养生相关的个人博客。在这里，你可以找到关于个人成长、心理健康、健康养生和自然疗法的相关知识。',

  head: [
    ['link', { rel: 'bookmark', type: 'image/x-icon', href: '/icon/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/icon/logo.svg' }],
    ['link', { rel: 'stylesheet', href: '/my.css' }],
    ['meta', { name: 'keywords', content: '记录生活,代码分享,中医知识,健康养生,个人成长,人生感悟' }],
    ['meta', { name: 'author', content: '夏夜万年' }]  
    ],

  srcExclude: [ '**/README.md' ],
  markdown: { lineNumbers: true },
  sitemap: { hostname: 'https://www.tosry.cn' },
  
  themeConfig: {
        logo: '/icon/logo.svg',

        nav: [
           { text: '🏠', link: 'https://tosry.cn' },
          { text: '书籍', items: [
            { text: '四圣心源', link: '/si/1' },
            { text: '中药收藏', link: '/yao/1' },
            { text: '养生静心', link: '/yang/1' }
          ]},
          { text: '博文', items: [
            { text: '2025', link: '/post/2025/559' }
          ]},
          { text: '链接', items: [
            { text: '友情链接', link: '/qita/links' },
            { text: '收藏夹', link: '/qita/shou' },
            { text: '关于', link: '/qita/bian' }
        ]}
          ],

        footer: {
            message: '<a href="https://beian.miit.gov.cn/">豫ICP备2024089297号-2</a>|<a href="https://beian.mps.gov.cn/#/query/webSearch?code=41172602000215">豫公网安备41172602000215号</a>',
            copyright: `© 2025 时光绘梦集|EdgeOne提供免费加速服务|<a href='https://www.landui.com?refer_host=lanMjEwMDB1aQ=='>蓝队云提供免费虚拟主机</a>`
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