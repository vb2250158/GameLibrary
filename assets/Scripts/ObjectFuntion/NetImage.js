
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
        URL: ""
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        let self=this;
        self.URL="http://game.fristd.com/game/SpaceFlight/splash.aac5a.png";
        cc.loader.load(self.URL, function (err, texture) {
            //console.log(texture);
           // self.getComponent(cc.Sprite).spriteFrame = texture;

        });
    },

    // update (dt) {},
});
