export const list={
    '/books/su/': [
        { text:"概述",link: '/books/su/' },
        { text: '上古天真论',link: '/books/su/1' },
        { text: '四气调神大论',link: '/books/su/2' },
        { text: '生气通天论',link: '/books/su/3' },
        { text: '金匮真言论',link: '/books/su/4' },
        { text: '阴阳应象大论',link: '/books/su/5' }
    ],
    '/books/si/': [
        { text:"概述",link: '/books/si/' },
        { text: '天人解',link: '/books/si/2' },
        { text: '六气解',link: '/books/si/3' },
        { text: '劳伤解',link: '/books/si/4' },
        { text: '杂病解上',link: '/books/si/5' }
    ],
    '/books/yao/': [
        {text: '概述', link: '/books/yao/' },
        {
            text: '脾胃部',
            collapsed: true,
            items: [
                { text: '甘草', link: '/books/yao/1' },
                { text: '茯苓', link: '/books/yao/2' },
                { text: '砂仁', link: '/books/yao/3' },
                { text: '干姜', link: '/books/yao/4' },
                { text: '大枣', link: '/books/yao/5' },
                { text: '半夏', link: '/books/yao/6' },
                { text: '白术', link: '/books/yao/7' },
                { text: '人参', link: '/books/yao/8' },
                { text: '大黄', link: '/books/yao/9' }
            ]
        },
        {
            text: '肝胆部',
            collapsed: true,
            items: [
                { text: '桂枝', link: '/books/yao/10' },
                { text: '芍药', link: '/books/yao/11' },
                { text: '柴胡', link: '/books/yao/12' },
                { text: '丹皮', link: '/books/yao/13' },
                { text: '桃仁', link: '/books/yao/14' },
                { text: '首乌', link: '/books/yao/15' },
                { text: '丹参', link: '/books/yao/16' },
                { text: '当归', link: '/books/yao/17' },
                { text: '黄芩', link: '/books/yao/18' },
                { text: '黄柏', link: '/books/yao/19' }
            ]
        },
        {
            text:'肺部',
            collapsed: true,
            items:[
                { text: '橘皮', link:'/books/yao/301'},
                { text: '桔梗', link:'/books/yao/302'},
                { text: '杏仁', link:'/books/yao/303'},
                { text: '五味子', link:'/books/yao/304'},
                { text: '元参、贝母', link:'/books/yao/305'},
                { text: '黄芪', link:'/books/yao/306'},
                { text: '麦冬', link:'/books/yao/307'},
                { text: '生姜', link:'/books/yao/308'}
            ]
        },
        {
            text:'心肾部',
            collapsed: true,
            items:[
                { text: '附子', link:'/books/yao/401'},
                { text: '牡蛎', link:'/books/yao/402'},
                { text: '泽泻、苁蓉、枸杞子', link:'/books/yao/403'},
                { text: '猪苓', link:'/books/yao/404'},
                { text: '龙骨', link:'/books/yao/405'},
                { text: '黄连', link:'/books/yao/406'},
                { text: '地黄', link:'/books/yao/407'}
            ]
        }
    ]

};