/**
 * 飞机游戏的算法
 */
cc.Class({
    extends: cc.Component,

    properties: {
        gridCreator: require("GridCreator"),

        _upCreateSize: 0,
        playerAtk: require("BaseCreator"),
        atkItem: cc.Prefab,
        gun: cc.Prefab
    },


    onLoad() {
        director.newValue("ATK", 1);

    },
    start() {

    },
    build() {
        if (this._upCreateSize > (2 + (cc.random0To1() * 3))) {
            this._upCreateSize = 0;
            this.gridCreator.build();

        } else {
            /**
             * 有概率产生攻击次数道具
             */
            if (0.6 > cc.random0To1()) {
                let x = parseInt(cc.random0To1() * 4);

                this.gridCreator.CreatorItem(this.atkItem, x);
            }
            if (1 > cc.random0To1()) {
                let x = parseInt(cc.random0To1() * 3);

                let newGun = this.gridCreator.CreatorItem(this.gun, x + 0.5);
                //记录位置
                let worldXY = newGun.convertToWorldSpace(cc.Vec2.ZERO);

                newGun.parent = this.node.parent;
                // 设置父对象
                // while (newGun.parent.parent != undefined) {
                //     newGun.parent = newGun.parent.parent;
                // }


                let viewSize = cc.view.getVisibleSize();
                // 恢复位置
                newGun.x = worldXY.x - viewSize.width / 2 + newGun.width / 2;
                newGun.y = worldXY.y + newGun.height / 2 - viewSize.height / 2;
            }

        }
        this._upCreateSize++;
    },
    /**
     * 攻击
     */
    attack() {
        if (director.ATK > 0) {
            this.playerAtk.build();
            director.ATK--;
        }

    },

    // update (dt) {},
});
