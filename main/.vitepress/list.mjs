export const list={
     '/si/': [{text:"概述",link: '/si/' },
            {text: '天人解',link: '/si/2' },
            {text: '六气解',link: '/si/3' },
            {text: '劳伤解',link: '/si/4' }
     ],
     '/yao/': [
        {text: '概述', link: '/yao/' },
        {
        text: '脾胃部',
        collapsed: true,
        items: [{ text: '甘草', link: '/yao/1' },
                { text: '茯苓', link: '/yao/2' },
                { text: '砂仁', link: '/yao/3' },
                { text: '干姜', link: '/yao/4' },
                { text: '大枣', link: '/yao/5' },
                { text: '半夏', link: '/yao/6' },
                { text: '白术', link: '/yao/7' },
                { text: '人参', link: '/yao/8' },
                { text: '大黄', link: '/yao/9' }
                ]
            },{
        text: '肝胆部',
        collapsed: true,
        items: [{ text: '桂枝', link: '/yao/10' },
                { text: '芍药', link: '/yao/11' },
                { text: '柴胡', link: '/yao/12' },
                { text: '丹皮', link: '/yao/13' },
                { text: '桃仁', link: '/yao/14' },
                { text: '首乌', link: '/yao/15' },
                { text: '丹参', link: '/yao/16' },
                { text: '当归', link: '/yao/17' },
                { text: '黄芩', link: '/yao/18' },
                { text: '黄柏', link: '/yao/19' }
                ]
            }

     ]

};