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
        gridCreator: require("GridCreator"),

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        let gameTime = director.gameFraction.liveTimer;
        let value = parseInt((cc.random0To1() * (gameTime / 10))) + gameTime  / 10;
        this.creator(value);
    },
    creator(number) {
        for (let index = 0; index < number; index++) {
            this.gridCreator.build();
            this.gridCreator._offset.y -= this.gridCreator.gridSize.y + 5;
        }

    }
    // update (dt) {},
});
