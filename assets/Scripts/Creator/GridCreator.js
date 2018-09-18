cc.Class({
    extends: cc.Component,

    properties: {

        preformList: [require("Item")],
        _itemList: [cc.Node],

        /**
         * 格子大小
         */
        gridSize: cc.Vec2,
        /**
         * 横纵个数
         */
        number: cc.Vec2,
        /**
         * 中心偏移量
         */
        _offset: cc.Vec2,
        spacing: cc.Vec2
    },



    start() {

    },
    addNumber(addValue) {
        this.number += addValue;
    },
    addOffsetY(ev, addValue) {
        this._offset.y += parseInt(addValue);
    },
    /**
     * 在区域内随机构建
     */
    build() {
        let self = this;

        //构建目标
        let targetNmber = 0;
        let x = 0;
        let y = 0;
        let number = self.number;
        let allProbability = 0;
        //获得所有可能性
        for (let i = 0; i < self.preformList.length; i++) {
            allProbability += self.preformList[i].probability;
        }
        //////////////////////////////
        self.node.x = -250;
        // number.x *= cc.random0To1();
        // number.y *= cc.random0To1();
        //////////////////////////////
        for (let i = 0; i < number.y; i++) {
            y = i;
            //构建一行对象
            for (let index = 0; index < number.x; index++) {
                x = index;
                targetNmber = 0;
                //随机构建一个概率
                let randomNumber = cc.random0To1();
                //随机构建一个
                for (let i = 0; i < self.preformList.length; i++) {
                    const element = self.preformList[i];
                    targetNmber += element.probability / allProbability;
                    if (cc.random0To1() > 0.2) {
                        break;
                    }
                    // console.log(element.probability / allProbability,element.probability ,allProbability);
                    if (targetNmber > randomNumber) {
                        
                        //创建
                        var newNode = cc.instantiate(element.itemObject);
                        //设置父对象
                        newNode.parent = self.node;
                        //设置节点的高和宽
                        newNode.width = self.gridSize.x;
                        newNode.height = self.gridSize.y;
                        //初始化位置
                        newNode.x = -(newNode.parent.width / 2) + x * newNode.width + x * self.spacing.x + self._offset.x;
                        newNode.y = y * newNode.height + self._offset.y + y * self.spacing.y;
                        //加入数组
                        self._itemList.push(newNode);
                        break;
                    }
                   
                    console.log(targetNmber, randomNumber);
                }
                
            }

        }




    }
    // update (dt) {},
});