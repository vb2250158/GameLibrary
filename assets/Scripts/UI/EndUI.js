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
