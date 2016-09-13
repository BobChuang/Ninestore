/**
 * 调起客户端，如果调起不成功则进行下载
 * @param storeUrl1 scheme方式才传
 * @param downUrl 下载地址，apk/music/wallpaper
 * @param param music/wallpaer/apk等也传json
 */
buildFastDown_new = function(storeUrl1, downUrl, param) {
    var $fastdownload = $(".btn-fast-download");
    var storeUrl2 = "ws://localhost:6269/websocket";
    if (storeUrl1 == ''){//非APK情况
        storeUrl2 = "ws://localhost:6271/websocket";
    }
    // 按钮为禁用状态时不往下执行
    if ($fastdownload && $fastdownload.hasClass("disabled")) {
        return;
    }

    function onMessage(event) {
        if (event.data != 'SUCCESS') {
            console.log(event.data + "!= 'SUCCESS'");
            window.location.href = downUrl;
        }
        socket.close();
    }

    function onError(event) {
        console.log("websocket error");
        window.location.href = downUrl;
    }
    function onError1(event) {
        console.log("websocket error");
    }
    function onOpen() {
    }

    function onClose() {
    }
    if ($fastdownload){
        $fastdownload.addClass("disabled");
    }

    setTimeout(function () {
        if ($fastdownload){
            $fastdownload.removeClass("disabled")
        }
    }, 5000);

    var isDownloadAppDirect = false;

    //为下载链接增加参数
    function buildDownloadUrl(originalUrl) {
        if(originalUrl.indexOf('?') > -1) {
            return originalUrl + '&client='
        } else {
            return originalUrl + '?client='
        }
    }

    if (navigator.userAgent.match(/android/i) && (navigator.userAgent.match(/UCBrowser.+U3/) || navigator.userAgent.match(/Chrome/) || navigator.userAgent.match(/Opera/))) {
        if (window.WebSocket) {
            try {
                socket = new WebSocket(storeUrl2);
            } catch (ex) {
                console.log(ex);
                window.location.href = downUrl;
            }
            var message = "";
            socket.onmessage = onMessage;
            socket.onopen = onOpen;
            socket.onclose = onClose;
            if(navigator.userAgent.match(/Chrome/)){
                socket.onerror = onError1;
            }else{
                socket.onerror = onError;
            }
            if (socket.readyState == WebSocket.CONNECTING) {
                setTimeout(function () {
                    if (socket.readyState == WebSocket.OPEN) {
                        if(isDownloadAppDirect) {
                            var newDownloadUrl = buildDownloadUrl(downUrl) +'1';
                            window.location.href = newDownloadUrl;
                            return;
                        }
                        if (storeUrl1 != ''){
                            window.location.href = storeUrl1;
                            socket.send(message);
                        }else{
                            socket.send(param);
                        }
                    } else {
                        socket = new WebSocket(storeUrl2);
                        if (socket.readyState != WebSocket.OPEN) {
                            window.location.href = downUrl;
                        }
                    }
                }, 1000);
            }
        }
    } else {
        window.location.href = downUrl;
    }
};