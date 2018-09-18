cc.Class({
    extends: cc.Component,

    properties: {
        lockX: false,
        lockY: false,
        limit: cc.Vec2
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
                if (moveSize.x > 0 && self.node.x >= self.limit.x) {
                    moveSize.x = 0;
                  //  self.node.x=self.limit.x;
                }
                if (moveSize.x < 0 && self.node.x <= -self.limit.x) {
                    moveSize.x = 0;
                  //  self.node.x=-self.limit.x;
                }
                if (moveSize.y > 0 && self.node.y >= self.limit.y) {
                    moveSize.y = 0;
                  //  self.node.x=self.limit.x;
                }
                if (moveSize.y < 0 && self.node.y <= -self.limit.y) {
                    moveSize.y = 0;
                  //  self.node.x=-self.limit.x;
                }
                self.node.position = self.node.position.add(moveSize);
            }
        });


    },


});
