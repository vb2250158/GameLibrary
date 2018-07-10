var GameFraction = cc.Class({
    name: 'GameFraction',
    properties: {
        liveTimer: 0,
        score: 0,
    },

});


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
        /**
         * 游戏统计
         */
        gameFraction: GameFraction,
        /**
         * 游戏是否结束了
         */
        isGameEnd: false,
        /**
         * 游戏机会
         */
        playNumber: 3,
        /**
         * 是否开启物理系统
         */
        Physics: true,
        /**
         * 游戏结束倒计时
         */
        endTimer: 300,

        _selectObject: null,

        timeScale: 1



    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        window.director = this;
        cc.director.getCollisionManager().enabled = true;
        cc.director.getPhysicsManager().enabled = this.Physics;
    },

    start() {

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
    /**
     * 游戏结束
     */
    GameEnd() {
        let self = this;
        if (!self.isGameEnd) {
            self.isGameEnd = true;
            director.node.emit("GameEnd", self.gameFraction);
        }

    },
    update(dt) {
        if (!this.isGameEnd) {
            this.gameFraction.liveTimer += dt;
        }
        //倒计时结束游戏结束
        if (this.gameFraction.liveTimer >= this.endTimer) {
            this.GameEnd();
        }
    },
    /**
     * 分数上升
     * @param {Number} number 分数
     */
    scoreUp(score) {
        if (!this.isGameEnd) {
            //  console.log(score);
            this.gameFraction.score += parseInt(score);
        }
    },
    emit() {
        console.log("喵喵喵?");
        this.node.emit(arguments);
    },
    on() {
        this.node.on(arguments);
    },
    newValue(name, value) {
        this[name] = value;
    }
});
