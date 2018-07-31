
cc.Class({
    extends: cc.Component,

    properties: {
        lockX: false,
        lockY: false,
        _isTouch: false,
        LN: cc.Node,
        RN: cc.Node,
        TN: cc.Node,
        BN: cc.Node,
        player: cc.Node,

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

        let self = this;
        window.playerSpeed = 0;
        window.playerNode = this.node;
        window.front = new cc.Vec2(1, 0);
        self.node.on(cc.Node.EventType.TOUCH_MOVE, function (ev) {
            if (!director.isGameEnd) {
                let moveSize = new cc.Vec2();

                if (!self.lockX) {
                    moveSize.x = ev.getDelta().x;
                }


                if (!self.lockY) {
                    moveSize.y = ev.getDelta().y;
                }

                if (moveSize.x > 0 &&
                    self.node.x + self.player.width / 2 + self.RN.width / 2 + moveSize.x >= self.RN.x) {
                    self.node.x = self.RN.x - (self.player.width / 2 + self.RN.width / 2);
                    moveSize.x = 0;
                }
                else if (moveSize.x < 0 &&
                    self.node.x <= self.LN.x + self.player.width / 2 + self.LN.width / 2 + moveSize.x) {
                    self.node.x = self.LN.x + self.player.width / 2 + self.LN.width / 2;
                    moveSize.x = 0;
                }


                if (moveSize.y > 0 &&
                    self.node.y + self.player.height / 2 + self.TN.height / 2 + moveSize.y >= self.TN.y) {
                    self.node.y = self.TN.y - (self.player.height / 2 + self.TN.height / 2);
                    moveSize.y = 0;
                }
                else if (moveSize.y < 0 &&
                    self.node.y <= self.BN.y + self.player.height / 2 + self.BN.height / 2 + moveSize.y) {
                    self.node.y = self.BN.y + self.player.height / 2 + self.BN.height / 2;
                    moveSize.y = 0;
                }

                window.playerSpeed = moveSize.mag();
                if (moveSize.x != 0 || moveSize.y != 0) {
                    window.front = moveSize.normalize();
                }

                self.node.position = self.node.position.add(moveSize);
            }
        });
    },


});
