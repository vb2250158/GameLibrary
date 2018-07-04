
cc.Class({
    extends: cc.Component,

    properties: {
        evenName: "",
        evenList: {
            default: [],
            type: cc.Component.EventHandler
        },

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

    onLoad() {
        let self = this;
        self.node.on(self.evenName, function (ev) {
            for (let index = 0; index < self.evenList.length; index++) {
                const element = self.evenList[index];
                element.emit([ev,element.customEventData]);
            }
        });
        
    },

    start() {
        //  this.node.
    },

    // update (dt) {},
});
