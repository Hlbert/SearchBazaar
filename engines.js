var engines = [{
    category: '信息',
    entries: [{
        name: 'Bing',
        url: function(keyword) {
            return 'https://cn.bing.com/search?mkt=zh-CN&q=' + keyword;
        }
    }, {
        name: '百度',
        url: function(keyword) {
            return 'https://www.baidu.com/s?wd=' + keyword;
        }
    }, {
        name: '360',
        url: function(keyword) {
            return 'https://www.so.com/s?q=' + keyword;
        }
    }, {
        name: 'bilibili',
        url: function(keyword) {
            return 'https://search.bilibili.com/all?keyword=' + keyword;
        }
    }]
}, {
    category: '编程',
    entries: [{
        name: 'Github',
        url: function(keyword) {
            return 'https://github.com/search?q=' + keyword;
        }
    }, {
        name: '栈溢出',
        url: function(keyword) {
            return 'https://stackoverflow.com/search?q=' + keyword;
        }
    }, {
        name: '博客园',
        url: function(keyword) {
            return 'https://zzk.cnblogs.com/s?w=' + keyword;
        }
    }, {
        name: '腾讯视频',
        url: function(keyword) {
            return 'https://v.qq.com/x/search/?q=' + keyword;
        }
    }]
}, {
    category: '知识',
    entries: [{
        name: '知乎',
        url: function(keyword) {
            return 'https://www.zhihu.com/search?type=content&q=' + keyword;
        }
    }, {
        name: '豆瓣读书',
        url: function(keyword) {
            return 'https://book.douban.com/subject_search?search_text=' + keyword;
        }
    }, {
        name: 'epubee',
        url: function(keyword) {
            return 'http://cn.epubee.com/files.aspx?skeyinput=' + keyword;
        }
    }, {
        name: '豆瓣电影',
        url: function(keyword) {
            return 'https://movie.douban.com/subject_search?search_text=' + keyword;
        }
    }]
}, {
    category: '购物',
    entries: [{
        name: '淘宝',
        url: function(keyword) {
            return 'https://s.taobao.com/search?q=' + keyword;
        }
    }, {
        name: '京东',
        url: function(keyword) {
            return 'https://search.jd.com/Search?enc=utf-8&keyword=' + keyword;
        }
    }, {
        name: '亚马逊',
        url: function(keyword) {
            return 'https://www.amazon.cn/s?k=' + keyword;
        }
    }, {
        name: '网易考拉',
        url: function(keyword) {
            return 'https://search.kaola.com/search.html?zn=top&key=' + keyword;
        }
    }]
}
// , {
//     category: '视频',
//     entries: [{
//         name: '哔哩哔哩',
//         url: function(keyword) {
//             return 'https://search.bilibili.com/all?keyword=' + keyword;
//         }
//     }, {
//         name: '腾讯视频',
//         url: function(keyword) {
//             return 'https://v.qq.com/x/search/?q=' + keyword;
//         }
//     }, {
//         name: '优酷',
//         url: function(keyword) {
//             return 'https://so.youku.com/search_video/q_' + keyword;
//         }
//     }, {
//         name: '爱奇艺',
//         url: function(keyword) {
//             return 'https://www.youtube.com/results?search_query=' + keyword;
//         }
//     }]
// }
]

var getEngine = function(name) {
    if (!name) {
        return null;
    }

    for (var i = 0; i < engines.length; i++) {
        var entries = engines[i].entries;
        for (var j = 0; j < entries.length; j++) {
            var engine = entries[j];
            if (name == engine.name) {
                return engine;
            }
        }
    }

    return null;
}

var searchWithEngines = function(keyword, engines) {
    var next = engines.shift();
    var nextEngine = getEngine(next);
    if (nextEngine) {
        var url = nextEngine.url(keyword);
        tag = '?from=searchbazaar&' + (engines.length ? 'rest=' + engines.join(',') + '&' : '');
        url = url.replace('?', tag);
        window.open(url);
    }
}