
var TimeUnit = cc.Enum({
    not: 0, M: 1, S: 2, MM: 3
});

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
        _liveTimerUI: cc.Label,
        onlyLoad: {
            default: TimeUnit.not,
            type: cc.Enum(TimeUnit)
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this._liveTimerUI = this.node.getComponent(cc.Label);
    },
    upDateUI() {
        let timerText = "";
        let dotIndex = -1;
        //分，秒，毫秒
        let m = "", s = "", mm = "";
        timerText = director.gameFraction.liveTimer + "";

        m = parseInt(director.gameFraction.liveTimer / 60) + "";
        s = parseInt(director.gameFraction.liveTimer % 60) + "";
        dotIndex = timerText.indexOf('.');

        if (dotIndex != -1) {
            mm = timerText.slice(dotIndex + 1, dotIndex + 3);
        }
        //补零
        if (s.length < 2) {
            s = '0' + s;
        }
        if (mm.length < 2) {
            mm = '0' + mm;
        }
        switch (this.onlyLoad) {
            case TimeUnit.not:
                this._liveTimerUI.string = m + ":" + s + "." + mm;
                break;
            case TimeUnit.M:
                this._liveTimerUI.string = m;
                break;
            case TimeUnit.S:
                this._liveTimerUI.string = s;
                break;
            case TimeUnit.MM:
                this._liveTimerUI.string = mm;
                break;
            default:
                break;
        }


    }
    // update (dt) {},
});
