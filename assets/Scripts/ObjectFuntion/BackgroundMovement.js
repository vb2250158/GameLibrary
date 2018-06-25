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
        //  enemyPool: cc.Prefab
        bg: cc.Node,
        /**
         * 背景合集
         */
        _bgs: [],
        speed: 10,
        /**
         * 重置时位置大小
         */
        _resetSize: 0
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this._bgs.push(this.bg);
        this._resetSize = -this.bg.height / 2;
        //位置初始化
        for (let index = 0; index < 2; index++) {
            let newBg = cc.instantiate(this.bg);
            newBg.parent = this.bg.parent;
            newBg.y = newBg.height * (index + 1);
            this._bgs.push(newBg);
        }



    },
    /**
     * 重置背景
     */
    resetBg(bg) {
        bg.y = bg.height * 2;
    },
    update(dt) {
        //移动更新
        for (let index = 0; index < this._bgs.length; index++) {
            const element = this._bgs[index];
            element.y -= dt * this.speed;
            console.log(element.position);
            if (element.y < this._resetSize) {
                this.resetBg(element);
            }
        }
    },
});
