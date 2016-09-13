function testApp() {
    var url = 'nineapps://CommonWebView?url=http://192.168.0.40:8080/Mc/index.html?_ijt=nctkv6ckuddcuvvj4v0kjbeocl';
    var timeout, t = 1000, hasApp = true;
    setTimeout(function () {
        if (hasApp) {

        } else {
            window.location.href = "http://www.ninestore.ru/down/cpkbru.apk";
            xyPop({title: 'Присоединяйся к борьбе！', content: '', bottom: false});
        }
        document.body.removeChild(ifr);
    }, 2000)

    var t1 = Date.now();
    var ifr = document.createElement("iframe");
    ifr.setAttribute('src', url);
    ifr.setAttribute('style', 'display:none');
    document.body.appendChild(ifr);
    timeout = setTimeout(function () {
        var t2 = Date.now();
        if (!t1 || t2 - t1 < t + 100) {
            hasApp = false;
        }
    }, t);
}
    buildFastDown_new('nineapps://Main', 'http://www.ninestore.ru/down/cpkbru.apk');


var url = window.location.href;
var userId = url.substring(url.lastIndexOf("userId=") + 7, url.length);
if (userId.length > 15) {
    userId = 0;
}

$.ajax({
    async: false,
    url: "http://dev.sandboxol.cn:8945/minigame/api/v1/ranks/g1001/public?userId=" + userId + "&type=week&name=kills",
    method: "GET",
    dataType: 'jsonp',
    jsonp: 'jsoncallback',
    timeout: 1000,
    contentType: "application/json;utf-8",
    success: function (result) {
        if (userId != "0") {
            $(document).ready(function () {
                $('.defaultData').remove();
            });
            var obj2 = eval(result);
            $.each(obj2, function (i) {
                $("#tableData").append(
                    '<tr style="height: 10px" class="data_' + i + '"></tr><tr><td style="text-align: center" width="30%">' + rank(obj2[i].rank) +
                    '</td><td style="text-align: left"><img src="' + pic(obj2[i].picUrl) +
                    '"/><span>' + cut(obj2[i].nickName) +
                    '</span></td><td width="35%">' + obj2[i].kills + '</td></tr>');
            });
            function cut(cutString) {
                if (cutString.length > 10) {
                    cutString = cutString.substring(0, 9) + "...";
                }
                return cutString;
            }

            function pic(cutString) {
                if (cutString == null) {
                    return "img/tou.png"
                }
                return cutString;
            }

            function rank(rank) {
                if (rank == 0) {
                    return "∞";
                }
                return rank;
            }
        }
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.log("error", textStatus);
    }
});