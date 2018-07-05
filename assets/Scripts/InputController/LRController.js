// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

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
        targetNode: cc.Node,
        speed: 0,
        _speed: 0,
        ev: null

    },

    start() {
        let self = this;
        self.node.on('touchstart', function (ev) {
            //     console.log(self.speed);
            self.ev = ev;
        });

        self.node.on('touchend', function (ev) {
            self.ev = null;
        });




    },
    update(dt) {
        let self = this;
        this.targetNode.x += this._speed * dt;
        if (self.ev != null) {
            let touchSize = self.ev.getLocationX() - (self.node.convertToWorldSpace(cc.v2(0, 0)).x + self.node.width / 2);
            if (Math.abs(touchSize) > 5) {
                if (touchSize > 0) {
                    self._speed = self.speed;
                } else {
                    self._speed = -self.speed;
                }
            } else if (self._speed != 0) {
                self._speed = 0;
            }
        } else if (self.ev == null && self._speed != 0) {
            self._speed = 0;
        }

    },


});
