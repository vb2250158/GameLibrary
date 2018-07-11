/**
 * 飞机游戏的算法
 */
cc.Class({
    extends: cc.Component,

    properties: {
        gridCreator: require("GridCreator"),
        rowSpacing: cc.Vec2,
        _upCreateSize: 0,
        playerAtk: require("BaseCreator"),
    },


    onLoad() {
        director.newValue("ATK", 1);
      
    },
    start() {

    },
    build() {
        if (this._upCreateSize > 10) {
            this._upCreateSize = 0;
            this.gridCreator.build();

        } else {

        }
        this._upCreateSize++;
    },
    attack() {
        if (director.ATK>0) {
            this.playerAtk.build();
            director.ATK--;
        }
        
    }
    // update (dt) {},
});
