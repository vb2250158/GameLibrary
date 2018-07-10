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

        timer: 1,
        _timed: 0,
       
        startEvenList: {
            default: [],
            type: cc.Component.EventHandler
        },
        endEvenList: {
            default: [],
            type: cc.Component.EventHandler
        }, runEvenList: {
            default: [],
            type: cc.Component.EventHandler
        },
        _end: true
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },
    setTimer(timer) {
        this.timer = parseInt(timer);
    },
    addTimer(size) {
        this.timer -= parseInt(size);
    }
    ,

    update(dt) {
        let self = this;
        if (!this._end) {
            if (self._timed <= 0) {
                this._end = true;
                this.emitEvent(this.endEvenList);
            } else {
                self._timed -= dt;
           
                this.emitEvent(this.runEvenList);
            }
        }
    },
    /**
     * 开始运行
     */
    startRun() {
        this._timed = this.timer;
        this._end = false;
        this.emitEvent(this.startEvenList);
    },
    emitEvent(evenList) {
        for (let index = 0; index < evenList.length; index++) {
            const element = evenList[index];
            element.emit([element.customEventData]);
        }
    },
    setTimeSize() {
        for (let index = 0; index < arguments.length; index++) {
            const element = arguments[index];
            if (typeof (element) == "string") {
                director.timeScale = parseFloat(element);
                return;
            }
        }
    }
});
