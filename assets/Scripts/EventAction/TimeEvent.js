
cc.Class({
    extends: cc.Component,

    properties: {
     
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
