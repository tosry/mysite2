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
     '/post/': [{
        text: '2025',
        collapsed: false,
        items: [
            {text:"termux设置登陆密码",link: '/post/2025/559'},
            {text: '多开关控制电灯',link: '/post/2025/763' },
            {text:"tencentos用tc设置限速",link: '/post/2025/992'},
            {text: 'centos系列ssh安全登陆',link: '/post/2025/994' },
            {text:"人为什么想异性",link: '/post/2025/996'},
            {text: '推箱子用js实现自动寻路',link: '/post/2025/1006' },
            {text:"cnb一键部署到edgeone",link: '/post/2025/1007'},
            {text: '论博客系统框架的自用局限性',link: '/post/2025/1011' },
            {text:"边缘函数操作请求主体",link: '/post/2025/1012'}



            ]
        }
    ]

};