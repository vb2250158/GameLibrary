/**
 * 子弹发射器
 */
cc.Class({
    extends: cc.Component,

    properties: {
        /**
         * 子弹预制体
         */
        bullet: cc.Prefab,
        /**
         * 分数创建节点，用于作为子弹的父对象
         */
        SQ: cc.Node,
        speedSize: 200,
        /**
         * 子弹发射持续时间
         */
        openTimer: 5,
        _openTimer: 0,
        timer: 1,
        _timer: 0
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this._timer = this.timer;

    },

    update(dt) {
        if (this._openTimer > 0) {
            this._openTimer -= dt;
            if (this._timer > 0) {
                this._timer -= dt;
            } else {
                this._timer = this.timer;
                this.firing();
            }
        }


    },
    firing() {
        //初始化位置
        let newNode = cc.instantiate(this.bullet);
        newNode.parent = this.SQ;
        newNode.x = playerNode.x;
        newNode.y = playerNode.y;
        //初始化初速度
        let moveSpeed = newNode.getComponent("MoveRepeat");

        console.log(front);

        moveSpeed.speed = front.mul(this.speedSize);
    },
    open() {
        this._openTimer = this.openTimer;
    }

});
