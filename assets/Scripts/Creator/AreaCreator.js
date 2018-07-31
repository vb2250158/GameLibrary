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
        upParent: false,
        modifyTheIndex: 0
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },
    addNumber() {
        for (let index = 0; index < arguments.length; index++) {
            const element = arguments[index];

            if (typeof (element) == "string") {
                this.number += parseInt(element);
                return;
            }
        }


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
                    if (self.upParent) {
                        newNode.parent = newNode.parent.parent;
                    }
                    //初始化位置
                    newNode.x = cc.randomMinus1To1() * self.randomRange.x + self._offset.x + this.node.x;
                    newNode.y = cc.randomMinus1To1() * self.randomRange.y + self._offset.y + this.node.y;

                    break;
                }
            }

        }



    },
    setModifyTheIndex() {
        for (let index = 0; index < arguments.length; index++) {
            const element = arguments[index];

            if (typeof (element) == "string") {
                this.modifyTheIndex = parseInt(element);
                return;
            }
        }

    },
    addProbability() {
        for (let index = 0; index < arguments.length; index++) {
            const element = arguments[index];

            if (typeof (element) == "string") {
                this.preformList[this.modifyTheIndex].probability += parseInt(element);
                return;
            }
        }

    }
    // update (dt) {},
});
