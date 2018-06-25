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
        moveSizeLock: false,
        XSize: cc.Vec2,
        YSize: cc.Vec2,
        _isTouch: false
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

        let self = this;
        self.node.on(cc.Node.EventType.TOUCH_MOVE, function (ev) {
            if (!director.isGameEnd) {
                let moveSize = new cc.Vec2();
                //移动锁
                if (!self.lockX) {
                    moveSize.x = ev.getDelta().x;

                }
                if (!self.lockY) {
                    moveSize.y = ev.getDelta().y;
                }
                //移动大小锁（边距）
                if (self.moveSizeLock) {
                    //移动限制
                    if (self.node.position.x < self.XSize.x && moveSize.x < 0) {
                        moveSize.x = 0;
                    } else if (self.node.position.x > self.XSize.y && moveSize.x > 0) {
                        moveSize.x = 0;
                    }

                    if (self.node.position.y < self.YSize.x && moveSize.y < 0) {
                        moveSize.y = 0;
                    } else if (self.node.position.y > self.YSize.y && moveSize.y > 0) {
                        moveSize.y = 0;
                    }

                }


                self.node.position = self.node.position.add(moveSize);
            }
        });


    },


});
