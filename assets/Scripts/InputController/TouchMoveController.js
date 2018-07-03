cc.Class({
    extends: cc.Component,

    properties: {
        lockX: false,
        lockY: false,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

        let self = this;
        self.node.on(cc.Node.EventType.TOUCH_MOVE, function (ev) {
            if (!director.isGameEnd) {
                let moveSize = new cc.Vec2();
                if (!self.lockX) {
                    moveSize.x = ev.getDelta().x;

                }
                if (!self.lockY) {
                    moveSize.y = ev.getDelta().y;
                }
                self.node.position = self.node.position.add(moveSize);
            }
        });


    },


});
