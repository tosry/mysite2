import { defineConfig } from 'vitepress';
import { list } from './list.mjs';

export default defineConfig({
  lang: 'zh-CN',
  title: '时光绘梦集',
  description: '这是一个用来记录生活和编程中遇到的经历和感悟，以及偶尔收藏一些中医方面内容的个人站点。',

  head: [
    ['link', { rel: 'bookmark', type: 'image/x-icon', href: '/icon/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/icon/logo.svg' }],
    ['meta', { name: 'keywords', content: '生活,代码,中医,健康,养生,博客,笔记' }],
    ['meta', { name: 'author', content: '夏夜万年' }]
  ],

  markdown: { lineNumbers: true },

  sitemap: {
    hostname: 'https://www.tosry.cn',
    transformItems: (items) => {
    const filteredItems = items.filter(item => !item.url.startsWith('mi/'));
    return filteredItems;
    }
  },



  
  themeConfig: {
        logo: '/icon/logo.svg',

        nav: [
          { text: '书籍', items: [
            { text: '四圣心源', link: '/si/' },
            { text: '中药收藏', link: '/yao/' }
          ]},
          { text: '文章', items: [
            { text: '≤2025年', link: '/post/2025/' },
            { text: '2026年', link: '/post/2026/' }
          ]},
          { text: '链接', items: [
            { text: '友情链接', link: '/qita/links' },
            { text: '收藏夹', link: '/qita/shou' }
        ]}
          ],

        footer: {
            message: '<a href="https://beian.miit.gov.cn/">豫ICP备2024089297号-2</a><br><a href="https://beian.mps.gov.cn/#/query/webSearch?code=41172602000215"><img src="/110.png" alt="公安备案" height="20">豫公网安备41172602000215号</a>',
            copyright: `Copyright © 2021-2026 时光绘梦集 版权所有<br>EdgeOne提供免费加速服务｜<a href='https://www.landui.com?refer_host=lanMjEwMDB1aQ=='>蓝队云提供免费虚拟主机</a>`
            },
            
        docFooter: { prev: '上一页', next: '下一页' },
        aside: true,
        outline: { label: '页面导航', level: [ 2, 3 ] },
        notFound: {
          title: '页面未找到',quote: '您所访问的资源已经失效',
          linkLabel: '前往首页',linkText: '带我回首页'
        },
        
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索' 
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            },
            async _render(src, env, md) {
              const html = await md.renderAsync(src, env);
              if (env.relativePath.startsWith('mi/')) return '';
              return html;
            }
          }
        },
        sidebar: list,
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        darkModeSwitchLabel: '主题'

  }

});