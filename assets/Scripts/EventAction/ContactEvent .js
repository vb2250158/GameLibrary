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
        tag: 0,
        enterEvenList: {
            default: [],
            type: cc.Component.EventHandler
        },
        exitEvenList: {
            default: [],
            type: cc.Component.EventHandler
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },
    onBeginContact: function (contact, selfCollider, otherCollider) {
        let self = this;
        if (otherCollider.tag == self.tag) {
            for (let index = 0; index < self.enterEvenList.length; index++) {
                const element = self.enterEvenList[index];
                element.emit([element.customEventData, otherCollider]);
            }
        }

    },

    // 只在两个碰撞体结束接触时被调用一次
    onEndContact: function (contact, selfCollider, otherCollider) {
        let self = this;
        if (otherCollider.tag == self.tag) {
            for (let index = 0; index < self.exitEvenList.length; index++) {
                const element = self.exitEvenList[index];
                element.emit([element.customEventData, otherCollider]);
            }
        }
    },

});
