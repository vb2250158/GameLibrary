// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

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
