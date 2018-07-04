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

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    // update (dt) {},

    loadByPath() {
        let self=this;
        for (let index = 0; index < arguments.length; index++) {
            const element = arguments[index];
            if (typeof (element) == "string") {
                var absolutePath = element;
                cc.loader.loadRes(absolutePath, cc.SpriteFrame, function (err, spriteFrame) {
                    self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
                return;
            }
        }
    }
});
