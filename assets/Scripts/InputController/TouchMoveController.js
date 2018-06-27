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
        lockX: false,
        lockY: false,
        _isTouch: false
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
