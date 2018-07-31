/**
 * 分数爆炸脚本
 */
cc.Class({
    extends: cc.Component,

    properties: {
        itemObject: cc.Prefab,

        /**
         * 区域随机范围
         */
        randomRange: cc.Vec2,
        number: 3,
        _offset: cc.Vec2,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },
    /**
     * 分数爆炸
     */
    explode() {
        console.log(ballLoading);
        if (!ballLoading) {
            this.build();
        }
    },
    /**
    * 在区域内随机构建
    */
    build() {

        let self = this;

        let number = self.number;
        console.log("创建");
        //构建一组对象
        for (let index = 0; index < number; index++) {

            //创建
            var newNode = cc.instantiate(self.itemObject);
            //设置父对象
            newNode.parent = self.node.parent.parent;
            //初始化位置
            newNode.x = cc.randomMinus1To1() * self.randomRange.x + self._offset.x;
            newNode.y = cc.randomMinus1To1() * self.randomRange.y + self._offset.y;
        }



    },
    // update (dt) {},
});
