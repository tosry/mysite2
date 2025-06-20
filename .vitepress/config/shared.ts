import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  head: [
    ['link', { rel: 'bookmark', type: 'image/x-icon', href: '/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [
      { icon: {
        svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" style="height:30px; width:30px;"><path d="M512 85.333333a426.666667 426.666667 0 1 0 426.666667 426.666667A426.666667 426.666667 0 0 0 512 85.333333z m0 789.333334a362.666667 362.666667 0 1 1 362.666667-362.666667 363.093333 363.093333 0 0 1-362.666667 362.666667z" fill="#23A463"></path><path d="M549.546667 602.453333a128 128 0 0 1-37.546667 90.453334A128 128 0 1 1 331.093333 512a30.72 30.72 0 0 1 22.613334-9.386667 32.426667 32.426667 0 0 1 32 32 32.853333 32.853333 0 0 1-9.386667 22.613334 64 64 0 1 0 109.226667 45.226666l-11.093334-180.906666A128 128 0 0 1 512 331.093333 128 128 0 1 1 692.906667 512a30.72 30.72 0 0 1-22.613334 9.386667 32.426667 32.426667 0 0 1-32-32 32.853333 32.853333 0 0 1 9.386667-22.613334 64 64 0 1 0-109.226667-45.226666z" fill="#23A463"></path></svg>'
      }, link: '/index.html' }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
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
                  closeText: '关闭',
                }
              }
            }
          },
        }
      }
    },
  }
})