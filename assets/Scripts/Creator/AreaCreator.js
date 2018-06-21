// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var Item = cc.Class({
    name: 'Item',
    properties: {
        probability: 0,
        itemObject: cc.Prefab

    }
});

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        preformList: [Item],
        _itemList: [cc.Node],
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
        for (let index = 0; index < number; index++) {
            self.preformList.forEach(element => {
                targetNmber += element.probability / self.preformList.length;
                if (targetNmber > randomNumber) {
                    //创建
                    var newNode = cc.instantiate(element.itemObject);
                    //设置父对象
                    newNode.parent = self.node;
                    //初始化位置
                    newNode.x = cc.randomMinus1To1() * self.randomRange.x + self._offset.x;
                    newNode.y = cc.randomMinus1To1() * self.randomRange.y + self._offset.y;
                    //加入数组
                    self._itemList.push(newNode);
                    return;
                }
            });
        }


    }
    // update (dt) {},
});
