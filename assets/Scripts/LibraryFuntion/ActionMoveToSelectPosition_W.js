
cc.Class({
    extends: cc.Component,

    properties: {
        timer: 0.5,
        startRun: true,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        if (this.startRun) {
            this.RunAciton();
        }
    },

    RunAciton() {

        try {


            let selectXY = director._selectObject.convertToWorldSpace(cc.v2(0, 0));
            // 创建一个移动动作
            var action = cc.moveTo(this.timer, selectXY.x + director._selectObject.width / 2, selectXY.y + director._selectObject.height / 2);
            // 执行动作
            this.node.runAction(action);

        } catch (error) {
            console.log("找不到选中中的目标");
        }

    }
});
