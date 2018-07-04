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
     * 分数上升
     * @param {Number} number 分数
     */
    scoreUp() {
        for (let index = 0; index < arguments.length; index++) {
            const element = arguments[index];
            if (typeof (element) == "string") {
       
                director.scoreUp(parseInt(element));
                return;
            }
        }

    },
    GameEnd() {
        director.GameEnd();
    },
    /**
     * 加载场景
     * @param {*} sceneName 
     */
    SceneLoad(sceneName, barckName) {
        if (typeof (sceneName) == "string") {
            cc.director.loadScene(sceneName);
        } else {
            cc.director.loadScene(barckName);
        }

    },
    // update (dt) {},
});
