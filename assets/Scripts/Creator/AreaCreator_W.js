cc.Class({
    extends: cc.Component,

    properties: {
        preformList: [require("../LibraryFuntion/Item")],

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
    addNumber(addValue) {
        this.number += addValue;
    },

    /**
     * 在区域内随机构建
     */
    build() {

        let self = this;
        let randomNumber = cc.random0To1();
        let targetNmber = 0;
        let number = self.number;
        let allProbability = 0;
        //获得所有可能性
        for (let i = 0; i < self.preformList.length; i++) {
            allProbability += self.preformList[i].probability;
        }
        //构建一组对象
        for (let index = 0; index < number; index++) {
            //随机构建一个
            for (let i = 0; i < self.preformList.length; i++) {
                const element = self.preformList[i];
                targetNmber += element.probability / allProbability;
                if (self.node.name == "road") {
                    console.log(self.node.name, targetNmber);
                }
                if (targetNmber > randomNumber) {
                    //创建
                    var newNode = cc.instantiate(element.itemObject);
                    //设置父对象
                    newNode.parent = self.node;

                    //      设置父对象
                    while (newNode.parent.parent != undefined) {

                        newNode.parent = newNode.parent.parent;


                    }
                    let worldXY = new cc.Vec2();
                    //初始化位置
                    worldXY.x = cc.randomMinus1To1() * self.randomRange.x + self._offset.x + self.node.convertToWorldSpace(cc.v2(0, 0)).x;
                    worldXY.y = cc.randomMinus1To1() * self.randomRange.y + self._offset.y + self.node.convertToWorldSpace(cc.v2(0, 0)).y;

                    //恢复位置
                    newNode.x = worldXY.x + newNode.width / 2;
                    newNode.y = worldXY.y + newNode.height / 2;


                    break;
                }
            }

        }



    },

    // update (dt) {},
});
