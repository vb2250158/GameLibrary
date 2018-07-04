
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
        timer: 1,
        _timed: 0,
        evenList: {
            default: [],
            type: cc.Component.EventHandler
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        let self = this;
        self._timed = self.timer;
       
    },
    setTimer(timer){
        this.timer=parseInt(timer);
    },
    addTimer(size){
        this.timer-=parseInt(size);
    }
    ,

    update(dt) {
        let self = this;
        self._timed -= dt;
        if (self._timed <= 0) {
            self._timed = self.timer;
            for (let index = 0; index < this.evenList.length; index++) {
                const element = this.evenList[index];
                element.emit([element.customEventData]);
            }
        }
    },
});
