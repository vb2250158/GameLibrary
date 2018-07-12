/**
 * 
 * 选中的对象控制
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
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },
    /**
     * 当前对象设置为选中状态
     */
    selectObject() {
        console.log(this.node.name);
        director._selectObject = this.node;
    },
    addX(value) {
        director._selectObject.x += parseInt(value);
    },
    /**
     * 添加Y位移
     */
    addY(value) {
        director._selectObject.y += parseInt(value);
    }

    // update (dt) {},
});
