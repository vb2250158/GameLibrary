/**
 * 太空火箭的物体生成算法
 * 该组件可以生成障碍物
 * 在没有产生障碍物的生成器有概率创建其他物体
 * 可以保证至少会生成一次障碍物才出现创建器偏移 
 * 并且在障碍物出现位置偏移时不进行任何创建
 */
cc.Class({
    extends: require("BaseCreator"),

    properties: {
        creatorList: {
            type: require("ItemCreate"),
            default: []
        },
        itemList: {
            type: require("Item"),
            default: []
        },
        itemCreateSize: 0.5,
        /**
         * 用于修改道具出现的概率
         */
        _modifiesitemID: 0,
        _upIndex: -1,
        /**
         * 障碍物连续次数
         */
        _continuity: 1,
        /**
         * 创建数据
         */
        _ceateData: []
    },

    start() {

    },
    /**
     * 更新创建数据
     */
    updateCreateData() {

        /**
         * 补充原始数据,随机生成障碍物和道具点
         */
        while (this._ceateData.length < 10) {
            if (cc.random0To1() > 0.5) {
                this._ceateData.push([0, 1]);
            } else {
                this._ceateData.push([1, 0]);
            }
        }

        /**
         * 填充转折点
         */
        /**
          * 上一个数据
          */
        let upData = this._ceateData[0];
        /**
         * 转折点的位置记录
         */
        let recordPoints = [];
        /**
         * 插入转折点
         */
        for (let index = 1; index < this._ceateData.length; index++) {
            const element = this._ceateData[index];
            /**
             * 当两边数据都不一样时,进行数据补充
             */
            if (element[0] != upData[0] && element[1] != upData[1]) {
                this._ceateData.splice(index, 0, [0, 0]);

            }
            upData = this._ceateData[index];
        }


        /**
         * 拿到转折点
         */
        for (let index = 0; index < this._ceateData.length; index++) {
            const element = this._ceateData[index];

            if (element[0] == 0 && element[1] == 0) {
                recordPoints.push(index);
            }


        }

        /**
         * 填充缝隙道具
         */
        /**
         * 上一个转折点的位置
         */
        let upPoint = -1;

        /**
        * 遍历转折点，查看转折点的间距有一定概率产生分数夹在中间
         */
        for (let index = 0; index < recordPoints.length; index++) {
            const element = recordPoints[index];
            //转折点大于3则有可能产生夹缝分数
            if (element - upPoint > 3 && upPoint != -1) {
                //console.log(element, upPoint, element - upPoint);
                let point = parseInt(upPoint + (element - upPoint) / 2);
                if (point > 0 && this._ceateData[point - 1][0] == 1) {
                    /**
                     * 替换为槽点
                    */
                    this._ceateData.splice(point, 1, [0, 0, -1]);
                } else {
                    this._ceateData.splice(point, 1, [0, 0, 1]);
                }

            }
            upPoint = element;
        }







        // console.log(this._ceateData);

    },

    build() {
        this.updateCreateData();
        let createData = this._ceateData.shift();
        /**
         * 有概率产生道具
         */
        if (createData.length > 2) {
            /**
             * 获得道具的随机索引值
             */
            let itemIndex = this.getRandomIndex(this.itemList);

            if (createData[2] == -1) {
                /**
                * 产生道具
                */
                this.creatorList[0].itemObject.CreatorItem(this.itemList[itemIndex].itemObject);
            } else {
                /**
                * 产生道具
                */
                this.creatorList[1].itemObject.CreatorItem(this.itemList[itemIndex].itemObject);
            }


        } else {

            /**
             * 解析数据并且使用物体创建器
             */
            for (let index = 0; index < createData.length; index++) {
                const element = createData[index];
                /**
                 * 1创建障碍物
                 */
                if (element == 1) {
                    this.creatorList[index].itemObject.build();


                }

            }
        }

        // let index = this.getRandomIndex(this.creatorList);

        // /**
        //  * 有拐角转换时距离增加，进入判断分支
        //  */
        // if (index != this._upIndex) {


        //     //如果障碍物连续次数为零则强制进行障碍物补充
        //     if (this._continuity == 0) {
        //         this._continuity++;
        //         for (let i = 0; i < this.creatorList.length; i++) {
        //             const element = this.creatorList[i];
        //             if (i != index) {
        //                 element.itemObject.build();
        //             }

        //         }
        //     } else {
        //         /**
        //          * 记录上一个的索引
        //          */
        //         this._upIndex = index;
        //         /**
        //          * 重置连续
        //          */
        //         this._continuity = 0;
        //     }


        // } else {
        //     this._continuity++;

        //     /**
        //      * 多个红球穿插加分逻辑
        //      */



        //     this.creatorList[index].itemObject.build();
        //     //  随机在障碍物对面产生道具
        //     if (this.itemCreateSize > cc.random0To1()) {
        //         let itemIndex = this.getRandomIndex(this.itemList);
        //         // this.creatorList.forEach(element => {
        //         //     element.itemObject.CreatorItem(this.itemList[itemIndex]);
        //         // });
        //         if (index == 0) {
        //             this.creatorList[1].itemObject.CreatorItem(this.itemList[itemIndex].itemObject);
        //         } else {
        //             this.creatorList[0].itemObject.CreatorItem(this.itemList[itemIndex].itemObject);
        //         }

        //     }
        // }





    },
    /**
     * 修改ID
     * 
     * 
     */
    setModifiesitemID() {
        for (let index = 0; index < arguments.length; index++) {
            const element = arguments[index];
            if (typeof (element) == "string") {
                this._modifiesitemID = parseInt(element);
            }
        }
    },
    /**
     * 添加项概率
     */
    addItemProbability() {
        for (let index = 0; index < arguments.length; index++) {
            const element = arguments[index];
            if (typeof (element) == "string") {
                this.itemList[this._modifiesitemID].probability += parseFloat(element);
            }
        }
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
