
cc.Class({
    extends: cc.Component,

    properties: {
        evenList: {
            default: [],
            type: cc.Component.EventHandler
        },
        clickTime: 0.2,
        _timer: 0

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        let self = this;
        self.node.on(cc.Node.EventType.TOUCH_START, function (ev) {
            self._timer = 0;
        });
        self.node.on(cc.Node.EventType.TOUCH_END, function (ev) {
            /**
             * 触发点击
             */
            if (self.clickTime > self._timer) {
                for (let index = 0; index < self.evenList.length; index++) {
                    const element = self.evenList[index];
                    element.emit([ev, element.customEventData]);
                }
            }


        });
    },

    start() {
        //  this.node.
    },

    update(dt) {
        this._timer += dt;
    },
});
