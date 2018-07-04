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
        evenList: {
            default: [],
            type: cc.Component.EventHandler
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        let self=this;
        director.node.on("GameEnd",function(){
            for (let index = 0; index < self.evenList.length; index++) {
                const element = self.evenList[index];
                element.emit([element.customEventData]);
            }
        });
    },

    // update (dt) {},
});
