function startApp(mode) {
    var openUrl = 'nineapps://Main';
    var downloadUrl = 'http://www.ninestore.ru/down/cpkbru.apk';

    if(mode == 'preheat'){
    }else {
        openUrl = 'nineapps://CommonWebView?url=http://www.baidu.com';
        downloadUrl = 'http://www.ninestore.ru/down/cpkbru.apk';
    }

    var timeout, t = 1000, hasApp = true;
    setTimeout(function () {
        if (hasApp) {

        } else {
            window.location.href = downloadUrl;
            xyPop({title: 'Присоединяйся к борьбе！', content: '', bottom: false});
        }
        document.body.removeChild(ifr);
    }, 2000)

    var t1 = Date.now();
    var ifr = document.createElement("iframe");
    ifr.setAttribute('src', openUrl);
    ifr.setAttribute('style', 'display:none');
    document.body.appendChild(ifr);
    timeout = setTimeout(function () {
        var t2 = Date.now();
        if (!t1 || t2 - t1 < t + 100) {
            hasApp = false;
        }
    }, t);
}
    // buildFastDown_new('nineapps://Main', 'http://www.ninestore.ru/down/cpkbru.apk');