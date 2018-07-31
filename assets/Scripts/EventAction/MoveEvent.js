cc.Class({
    extends: cc.Component,

    properties: {
        distance: 0,
        evenList: {
            default: [],
            type: cc.Component.EventHandler
        },
        /**
         * 当前距离触发还剩距离
         */
        _currentDistance: 0,
        _previousPosition: cc.Vec2

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

        let self = this;
        self._previousPosition = self.node.position;
        self.node.on('position-changed', function (ev) {
            
            let mag = self.node.position.sub(self._previousPosition).mag();
            self._currentDistance -= mag;
            //   console.log(mag);
            if (self._currentDistance < 0) {
                self._currentDistance += self.distance ;
                for (let index = 0; index < self.evenList.length; index++) {
                    const element = self.evenList[index];
                    element.emit([ev.eventPhase, element.customEventData]);
                }
            }
            self._previousPosition = self.node.position;
        });
    },

    // update (dt) {},
});
