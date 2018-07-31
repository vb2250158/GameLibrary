/**
 * 黑洞对象管理
 */
cc.Class({
    extends: cc.Component,

    properties: {
        blackHole: cc.Prefab,
        number: 6,
        blackHolePool: cc.NodePool,

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.blackHolePool = new cc.NodePool();
        window.blackHoleMsg = this;
        /**
         * 个数初始化
         */
        for (let index = 0; index < this.number; index++) {
            this.blackHolePool.put(cc.instantiate(this.blackHole));

        }
    },
    get() {
        // return this.blackHolePool.get();
        return   cc.instantiate(this.blackHole)
    },
    put(value) {
        //this.blackHolePool.put(value);
        value.destroy();
    },
  
    // update (dt) {},
});
