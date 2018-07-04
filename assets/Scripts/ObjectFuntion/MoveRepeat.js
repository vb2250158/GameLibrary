/**
 * 位置移动组件
 */
cc.Class({
    extends: cc.Component,

    properties: {
        speed: cc.Vec2
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
    update(dt) {
        let self = this;
        self.node.x += self.speed.x * dt;
        self.node.y += self.speed.y * dt;
    },
    /**
     * 添加x速度
     */
    addXSpeed() {

        for (let index = 0; index < arguments.length; index++) {
            const element = arguments[index];

            if (typeof (element) == "string") {
                this.speed.x += parseInt(element);
                return;
            }
        }
    },
    /**
     * 添加y速度
     */
    addYSpeed() {
        for (let index = 0; index < arguments.length; index++) {
            const element = arguments[index];

            if (typeof (element) == "string") {
                this.speed.y += parseInt(element);
                return;
            }
        }

    },
    /**
     * 设置y速度
     */
    setYSpeed() {
        for (let index = 0; index < arguments.length; index++) {
            const element = arguments[index];

            if (typeof (element) == "string") {
                this.speed.y = parseInt(element);
                return;
            }
        }


    },
    /**
     * 设置x速度
     */
    setXSpeed() {
        for (let index = 0; index < arguments.length; index++) {
            const element = arguments[index];

            if (typeof (element) == "string") {
                this.speed.x = parseInt(element);
                return;
            }
        }


    },
});
