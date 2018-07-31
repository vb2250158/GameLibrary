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
        _listMoveRepeat: []
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        window.BallEvent = this;
    },

    start() {

    },
    /**
     * 球与球撞击事件
     * @param {"MoveRepeat"} A 
     * @param {"MoveRepeat"} B 
     */
    ToHit(A, B) {
        self._listMoveRepeat.push(A);
        self._listMoveRepeat.push(B);

        let number = 0;
        for (let index = 0; index < self._listMoveRepeat.length; index++) {
            const element = self._listMoveRepeat[index];

        }
    }
    // update (dt) {},
});
