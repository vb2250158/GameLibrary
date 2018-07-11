cc.Class({
    extends: cc.Component,

    properties: {
        lockX: false,
        lockY: false,
        _isTouch: false,
        XMaxSize: 300,
        YMaxSize: 500
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

                if (moveSize.x > 0 && self.node.x > self.XMaxSize) {
                    moveSize.x = 0;
                } else if (moveSize.x < 0 && self.node.x < -self.XMaxSize) {
                    moveSize.x = 0;
                }
                if (moveSize.y > 0 && self.node.y > self.YMaxSize) {
                    moveSize.y = 0;
                } else if (moveSize.y < 0 && self.node.y < -self.YMaxSize) {
                    moveSize.y = 0;
                }
                self.node.position = self.node.position.add(moveSize);
            }
        });


    },


});
