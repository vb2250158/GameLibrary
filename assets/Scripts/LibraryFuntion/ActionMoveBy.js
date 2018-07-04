
cc.Class({
    extends: cc.Component,

    properties: {
       timer:0.5,
       postsion:cc.Vec2,
       startRun:true
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        if (this.startRun) {
            this.RunAciton();
        }
    },

    RunAciton() {
        // 创建一个移动动作
        var action = cc.moveBy(this.timer, this.postsion.x, this.postsion.y);
        // 执行动作
        this.node.runAction(action);
    }
});
