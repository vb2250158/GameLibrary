cc.Class({
    extends: cc.Component,

    properties: {
        _EndAnimation:cc.Animation
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        let self = this;
        self._EndAnimation=self.node.getComponent(cc.Animation);
        director.node.on("GameEnd", function () {
            self.node.active = true;
            self._EndAnimation.play();
           
        });
        self.node.active = false;
    },

    // update (dt) {},
});
