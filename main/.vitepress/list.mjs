export const list={
     '/books/si/': [{text:"概述",link: '/books/si/' },
            {text: '天人解',link: '/books/si/2' },
            {text: '六气解',link: '/books/si/3' },
            {text: '劳伤解',link: '/books/si/4' }
     ],
     '/books/yao/': [
        {text: '概述', link: '/books/yao/' },
        {
        text: '脾胃部',
        collapsed: true,
        items: [{ text: '甘草', link: '/books/yao/1' },
                { text: '茯苓', link: '/books/yao/2' },
                { text: '砂仁', link: '/books/yao/3' },
                { text: '干姜', link: '/books/yao/4' },
                { text: '大枣', link: '/books/yao/5' },
                { text: '半夏', link: '/books/yao/6' },
                { text: '白术', link: '/books/yao/7' },
                { text: '人参', link: '/books/yao/8' },
                { text: '大黄', link: '/books/yao/9' }
                ]
            },{
        text: '肝胆部',
        collapsed: true,
        items: [{ text: '桂枝', link: '/books/yao/10' },
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
            }

     ]

};