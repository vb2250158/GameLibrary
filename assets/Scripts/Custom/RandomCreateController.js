
cc.Class({
    extends: require("BaseCreator"),

    properties: {
        creatorList: {
            type: require("ItemCreate"),
            default: []
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },
    build() {
        let index=this.getRandomIndex(this.creatorList);
     //   console.log(index);
  
        this.creatorList[index].itemObject.build();
    }
    ,
    getRandomIndex(preformList) {
        let targetNmber = 0;
        let randomNumber = cc.random0To1();
        let allProbability = 0;

        //获得所有可能性
        for (let i = 0; i < preformList.length; i++) {
            allProbability += preformList[i].probability;
        }
        //随机取一个
        for (let i = 0; i < preformList.length; i++) {
            const element = preformList[i];
            targetNmber += element.probability / allProbability;
            if (targetNmber > randomNumber) {
                return i;
            }
        }
    }
    // update (dt) {},
});
