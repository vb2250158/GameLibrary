
cc.Class({
    extends: cc.Component,

    properties: {
        /**
         * 防护罩存在时间
         */
        timer: 3,
        die: cc.Node,
        cover: cc.Node,
        _timer: 0
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    update(dt) {
        if (this._timer > 0) {

            this._timer -= dt;
        }
       
        if (this._timer <= 0 && this.cover.active) {
            this.die.active = true;
            this.cover.active = false;
        }
    },
    openCover() {
        this._timer = this.timer;
        this.die.active  = false;
        this.cover.active = true;
    }
});
