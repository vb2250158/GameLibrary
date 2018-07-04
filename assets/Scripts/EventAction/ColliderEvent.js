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
<<<<<<< HEAD
=======
        targetTag: 0,
>>>>>>> 农场跑酷
        enterEvenList: {
            default: [],
            type: cc.Component.EventHandler
        },
        exitEvenList: {
            default: [],
            type: cc.Component.EventHandler
        },
        stayEvenList: {
            default: [],
            type: cc.Component.EventHandler
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
       
    },
    onCollisionEnter: function (other) {
<<<<<<< HEAD
        let self=this;
        for (let index = 0; index < self.enterEvenList.length; index++) {
            const element = self.enterEvenList[index];
            element.emit([element.customEventData,other]);
=======
        let self = this;
        if (self.targetTag == other.tag) {
            for (let index = 0; index < self.enterEvenList.length; index++) {
                const element = self.enterEvenList[index];
                element.emit([element.customEventData, other]);
            }
>>>>>>> 农场跑酷
        }
      
    },
   
    onCollisionExit: function (other) {
        let self=this;
        for (let index = 0; index < self.exitEvenList.length; index++) {
            const element = self.exitEvenList[index];
            element.emit([element.customEventData,other]);
        }
    },
    onCollisionStay: function (other) {
        let self=this;
        for (let index = 0; index < self.stayEvenList.length; index++) {
            const element = self.stayEvenList[index];
            element.emit([element.customEventData,other]);
        }
    },
    // update (dt) {},
});
