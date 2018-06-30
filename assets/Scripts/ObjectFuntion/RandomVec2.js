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
        loadSetting: true,
        cmponentNmae: "",
        valueName: "",
        x: cc.Vec2,
        y: cc.Vec2
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        if (this.loadSetting) {
            this.upSet();
        }

    },
    upSet() {
        
        let value = this.node.getComponent(this.cmponentNmae)[this.valueName];
        value.x = (cc.random0To1() * (this.x.y - this.x.x)) + this.x.x;
        value.y = (cc.random0To1() * (this.y.y - this.y.x)) + this.y.x;

        console.log(value);
    }
});
