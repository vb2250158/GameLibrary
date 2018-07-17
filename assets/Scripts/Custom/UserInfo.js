
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // var link = location.href;
        // let self = this;
        // $.ajax({
        //     url: "your_url",//后台给你提供的接口
        //     type: "GET",
        //     data: { "url": link },
        //     async: true,
        //     dataType: "json",
        //     success: function (msg) {
        //         msg.ticket
        //         let data = {
        //             configMap: {
        //                 appId: "wx2b8656105572063a",
        //                 timestamp: 2000,
        //                 nonceStr: "喵",
        //                 signature: "喵喵喵"
        //             }
        //         }
        //         self.config(data);
        //     },

        // });
        //window.wx = require("jweixin-1.2.0");



        //  window.location = "www.baidu.com";
    },

    start() {

    },


    config(data) {
        wx.config({
            debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来
            appId: data.configMap.appId, // 必填，公众号的唯一标识
            timestamp: data.configMap.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.configMap.nonceStr, // 必填，生成签名的随机串
            signature: data.configMap.signature,// 必填，签名，见附录1
            jsApiList: [
                "onMenuShareTimeline",//分享朋友圈接口
                "onMenuShareAppMessage"//分享给朋友接口
            ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        wx.ready(function () {
            alert("emmm");
            // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
        });
        wx.error(function (res) {
            alert("错误:" + res);
            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        });
        wx.onMenuShareAppMessage({
            title: '喵喵', // 分享标题
            desc: '9999', // 分享描述
            link: 'www.baidu.com', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            //   imgUrl: '', // 分享图标
            //  type: '', // 分享类型,music、video或link，不填默认为link
            // dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                // 用户点击了分享后执行的回调函数
            }
        });
    }
    // update (dt) {},
});
