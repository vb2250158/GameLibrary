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
        _rigidBody: cc.RigidBody,
        /**
         * 随机速度
         */
        randomVelocityX: {
            default: new cc.Vec2(0, 0),

            displayName: "X方向随机速度"
        },
        randomVelocityY: {
            default: new cc.Vec2(0, 0),

            displayName: "Y方向随机速度"
        },

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        let self = this;
        self._rigidBody = self.node.getComponent(cc.RigidBody);
    },

    start() {
        let self = this;

        for (let index = 0; index < 10; index++) {
            console.log((cc.random0To1() * (self.randomVelocityX.y - self.randomVelocityX.x)) + self.randomVelocityX.x);

        }
        self.setLinearVelocityX((cc.random0To1() * (self.randomVelocityX.y - self.randomVelocityX.x)) + self.randomVelocityX.x);
        self.setLinearVelocityY((cc.random0To1() * (self.randomVelocityY.y - self.randomVelocityY.x)) + self.randomVelocityY.x);

    },
    setLinearVelocityX(value) {
        this._rigidBody.linearVelocity = new cc.Vec2(parseInt(value), this._rigidBody.linearVelocity.y);

   },
    setLinearVelocityY(value) {
        this._rigidBody.linearVelocity = new cc.Vec2(this._rigidBody.linearVelocity.x, parseInt(value));
    }
    // update (dt) {},
});
