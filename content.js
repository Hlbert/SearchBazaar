var parseUrl = function(url) {
    var obj = {};
    var reg = /[?&][^?&]+=[^?&]+/g;
    var arr = url.match(reg)
    if (arr) {
        arr.forEach((item) => {
            var tempArr = item.substr(1).split('=')
            var key = tempArr[0]
            var val = tempArr[1]
            obj[key] = val
        })
    }
    return obj
}

var getKeyword = function(url) {
    var index = url.lastIndexOf('&');
    var tempArr = url.substr(index + 1).split('=');
    return decodeURIComponent(tempArr[1]);
}

var url = decodeURIComponent(window.location.href);

var param = parseUrl(url);
var keyword = getKeyword(url);
if (param.rest) {
    var rests = param.rest.split(',');
    searchWithEngines(keyword, rests);
}