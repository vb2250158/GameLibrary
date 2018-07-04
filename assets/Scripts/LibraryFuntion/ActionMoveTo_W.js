
cc.Class({
    extends: cc.Component,

    properties: {
        timer: 0.5,
        postsion: cc.Vec2,
        startRun: true,
        upRoot: false
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        if (this.startRun) {
            this.RunAciton();
        }
    },

    RunAciton() {
        let move = new cc.Vec2();

        console.log(this.upRoot);
        if (this.upRoot) {

            try {
                move = this.node.convertToNodeSpace(cc.v2(this.postsion.x, this.postsion.y));
                // let theParent = this.node.parent;
                console.log(move);

            } catch (error) {

            }


        } else {
            move.x = this.postsion.x;
            move.y = this.postsion.y;
        }

        // 创建一个移动动作
        var action = cc.moveTo(this.timer, move.x, move.y);
        // 执行动作
        this.node.runAction(action);
    }
});
