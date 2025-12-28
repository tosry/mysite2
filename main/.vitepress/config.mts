import { defineConfig } from 'vitepress';
import { list } from './list.mjs';

export default defineConfig({
  lang: 'zh-CN',
  title: '时光绘梦集',
  description: '这是一个记录生活点滴、分享兴趣爱好的个人文档兼博客站点。在这里，你可以找到关于个人经历和中医养生的相关内容。',

  head: [
    ['link', { rel: 'bookmark', type: 'image/x-icon', href: '/icon/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/icon/logo.svg' }],
    ['meta', { name: 'keywords', content: '记录生活,代码分享,中医知识,健康养生' }],
    ['meta', { name: 'author', content: '夏夜万年' }]  
  ],

  srcExclude: [ '**/README.md' ],
  markdown: { lineNumbers: true },
  
  themeConfig: {
        logo: '/icon/logo.svg',

        nav: [
          { text: '书籍', items: [
            { text: '四圣心源', link: '/si/1' },
            { text: '中药收藏', link: '/yao/1' }
          ]},
          { text: '文章', items: [
            { text: '2023-2025', link: '/post/2025/559' }
          ]},
          { text: '链接', items: [
            { text: '友情链接', link: '/qita/links' },
            { text: '收藏夹', link: '/qita/shou' }
        ]}
          ],

        footer: {
            message: '<a href="https://beian.miit.gov.cn/">豫ICP备2024089297号-2</a>|<a href="https://beian.mps.gov.cn/#/query/webSearch?code=41172602000215">豫公网安备41172602000215号</a>',
            copyright: `© 2025 时光绘梦集|EdgeOne提供免费加速服务|<a href='https://www.landui.com?refer_host=lanMjEwMDB1aQ=='>蓝队云提供免费虚拟主机</a>`
            },
            
        editLink: {
              pattern: 'https://cnb.cool/tosry/vitepress-demo/-/edit/main/main/:path',
              text: '在CNB上编辑此页面'
              },
            
        docFooter: { prev: '上一页', next: '下一页' },
        outline: { label: '页面导航' },

        notFound: {
          title: '页面未找到',quote: '您所访问的资源已经失效',
          linkLabel: '前往首页',linkText: '带我回首页'
        },
        
        search: { provider: 'local' },
        sidebar: list,
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        darkModeSwitchLabel: '主题'

  }

});