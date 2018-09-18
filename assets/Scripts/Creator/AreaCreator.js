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

    start: function () {

    },
    addNumber(addValue) {
        this.number += parseFloat(addValue);
    },
    setNumber(value) {
        this.number = parseFloat(value);

    },
    addOffsetY(ev, addValue) {
        this._offset.y += parseInt(addValue);
    },
    /**
     * 在区域内随机构建
     */
    build() {

        let self = this;
        let randomNumber = cc.random0To1();

        let number = self.number;
        let allProbability = 0;
        //获得所有可能性
        for (let i = 0; i < self.preformList.length; i++) {
            allProbability += self.preformList[i].probability;
        }
        //构建一组对象
        for (let index = 0; index < number; index++) {
            let targetNmber = 0;
            //随机构建一个
            for (let i = 0; i < self.preformList.length; i++) {
                const element = self.preformList[i];
                targetNmber += parseFloat(element.probability) / parseFloat(allProbability);
                // console.log(targetNmber);
                if (targetNmber > randomNumber) {
                    //创建
                    var newNode = cc.instantiate(element.itemObject);
                    //设置父对象
                    newNode.parent = self.node;
                    //初始化位置
                    newNode.x = cc.randomMinus1To1() * self.randomRange.x + self._offset.x;
                    newNode.y = cc.randomMinus1To1() * self.randomRange.y + self._offset.y;


                    break;
                }
            }

        }
    },
    buildObject(obj) {
        let self = this;
        //创建
        var newNode = cc.instantiate(obj);
        console.log(newNode.name);
        //设置父对象
        newNode.parent = self.node;
        //初始化位置
        newNode.x = self._offset.x;
        newNode.y = self._offset.y;

    }
    // update (dt) {},
});
