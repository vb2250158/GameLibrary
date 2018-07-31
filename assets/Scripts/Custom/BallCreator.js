/**
 * 球创建器
 */
cc.Class({
    extends: cc.Component,

    properties: {
        reset: require("ResetNode")
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        let self = this;
        /**
         * 重置球创建器函数
         */
        window.ResetBallCreator = function () {
            self.reset.reset();
        }
    },

    // update (dt) {},
});
