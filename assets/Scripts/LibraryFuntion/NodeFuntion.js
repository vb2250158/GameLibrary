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
    setX(ev, value) {
        this.node.x = parseInt(value);
    },
    setY(ev, value) {
        this.node.y = parseInt(value);
    },
    addY() {

        for (let index = 0; index < arguments.length; index++) {
            const element = arguments[index];

            if (typeof (element) == "string") {
                this.node.y += parseInt(element);

                return;
            }
        }
    },
    setZIndex() {
        for (let index = 0; index < arguments.length; index++) {
            const element = arguments[index];

            if (typeof (element) == "string") {
                this.node.zIndex = element;

                return;
            }
        }
    }

    // update (dt) {},
});
