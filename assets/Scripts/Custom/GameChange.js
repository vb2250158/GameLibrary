/**
 * 游戏改变，概率控制
 */
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
        areaCreator: require("AreaCreator"),
        jibk: cc.Prefab,
  
    },

    // LIFE-CYCLE CALLBACKS:

    bkbuilt() {
        this.areaCreator.buildObject(this.jibk);
    }
});
