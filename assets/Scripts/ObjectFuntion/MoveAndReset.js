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

        speed: 10,
        /**
         * 重置时位置大小
         */
        resetSize: 0,
        vertical: true
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },
    /**
     * 重置背景
     */
    resetBg() {
        if (this.vertical) {
            this.node.y = 0;
        } else {
            this.node.x = 0;
        }
    },
    update(dt) {
        if (this.vertical) {
            this.node.y -= dt * this.speed;

            if (this.node.y <= this.resetSize) {
                this.resetBg();
            }
        } else {
          //  console.log("?!",  this.speed);
            this.node.x -= dt * this.speed;
            if (this.node.x <= this.resetSize) {
                
                this.resetBg();
            }
        }
    },
    speedUp(ev, value) {

        this.speed += parseInt(value);
    }

});
