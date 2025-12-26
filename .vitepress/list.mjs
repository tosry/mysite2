import { data as posts } from './posts.data.js';
const blogs = posts.map(post => {
  return {
    text: post.frontmatter.title,
    link: post.url
  };
});
export const list={
    '/yang/': [{
        text: '养生',
        collapsed: false,
        items: [{ text: '养生', link: '/yang/1' },
                { text: '上古天真论', link: '/yang/2' },
                { text: '阴阳颠倒篇', link: '/yang/3' }
                ]
            },{
        text: '静心',
        collapsed: true,
        items: [{ text: '清静经', link: '/yang/4' },
                { text: '说了心经', link: '/yang/5' },
                { text: '日用妙经', link: '/yang/6' }
                ]
            },{text: '太上九要',link: '/yang/7' }
            ],
     '/si/': [{text:"概述",link: '/si/1'},
            {text: '天人解',link: '/si/2' }
     ],
     '/yao/': [{
        text: '脾胃部',
        collapsed: false,
        items: [{ text: '甘草', link: '/yao/1' },
                { text: '茯苓', link: '/yao/2' },
                { text: '砂仁', link: '/yao/3' }
                ]
            }
     ], 
     '/post/': blogs

};