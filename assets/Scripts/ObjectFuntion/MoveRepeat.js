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
        ,
        _rate: 1,
        _upSpeed: 0
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },
    update(dt) {
        let self = this;
        // self.node.position = self.node.position.add(new cc.Vec2(self.speed.x * dt, self.speed.y * dt));   
        self.node.x += self.speed.x * dt * self._rate + self.speed.normalize().mul(self._upSpeed).x*dt  ;
        self.node.y += self.speed.y * dt * self._rate + self.speed.normalize().mul(self._upSpeed).x*dt;
    },
    addXSpeed(ev, value) {
        this.speed.x += parseInt(value);
    },
    addYSpeed(ev, value) {

        this.speed.y += parseInt(value);
    }
});
