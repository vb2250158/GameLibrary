/**
 * 位置移动组件
 */
cc.Class({
    extends: cc.Component,

    properties: {
        speed: cc.Vec2

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },
    update(dt) {
        let self = this;
        self.node.x += self.speed.x * dt * director.timeScale;
        self.node.y += self.speed.y * dt * director.timeScale;
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
