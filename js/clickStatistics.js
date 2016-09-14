/**
 * Created by xylav on 2016/9/14.
 */
var request = 'http://www.ninestore.ru/access?f=';
$("#btnShare").click(function () {
    $.get(request +　'71_1_0_0_1');
});
$("#btnDownloadApk").click(function () {
    $.get(request +　'71_1_0_0_2');
});
$("#btnGetSth").click(function () {
    $.get(request +　'71_1_0_0_3');
});
$("#btnChallenge").click(function () {
    $.get(request +　'71_1_0_0_4');
});
$("#btnDownloadBottom").click(function () {
    $.get(request +　'71_1_0_0_5');
});
$("#btnFacebook").click(function () {
    $.get(request +　'71_2_0_0_1');
});
$("#btnVK").click(function () {
    $.get(request +　'71_2_0_0_2');
});
