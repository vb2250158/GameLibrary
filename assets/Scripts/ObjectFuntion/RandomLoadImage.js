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
        imageList: [require("../LibraryFuntion/ItemImage")]
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad() {

    },

    start() {
        let index = this.getRandomIndex(this.imageList);
        this.loadBySprite(this.imageList[index].itemObject);
    },


    loadBySprite(spriteFrame) {
        let self = this;
        self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
    },

    /**
     * 解析一组随机值
     * @param {*} itemList 只要有probability字段的数组就可以使用
     */
    getRandomIndex(itemList) {
        //产生随机数
        let randomNumber = cc.random0To1();
        //目标的随机数
        let targetNmber = 0;
        //总可能
        let allProbability = 0;
        //获得所有可能性
        for (let i = 0; i < itemList.length; i++) {
            allProbability += itemList[i].probability;
        }
        //随机构建一个
        for (let i = 0; i < itemList.length; i++) {
            const element = itemList[i];
            targetNmber += element.probability / allProbability;
            if (targetNmber > randomNumber) {
                return i;
            }
        }
    }
});
