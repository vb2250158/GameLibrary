cc.Class({
    extends: cc.Component,

    properties: {
        timer:0.5,
        size:1
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},    

    start () {

    },
    RunAciton() {
        // 创建一个移动动作
        var action = cc.moveTo(this.timer, this.size);
        // 执行动作
        this.node.runAction(action);
    }
    // update (dt) {},
});
