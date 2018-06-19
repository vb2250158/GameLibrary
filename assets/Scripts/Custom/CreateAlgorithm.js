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
        /**
         * 道路偏移概率
         */
        deviationSize: 0.1,
        createComponent: require("../Creator/LineCreator"),
        /**
         * 道路数量
         */
        roadNumber: 2,
        /**
         * 当前打所有道路点
         */
        _nowPosis: [],
        /**
         * 一行的长度
         */
        lineLength: 9
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
        ,
        /**
         * 当前的道路数组
         */
        theNumber: []
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        let self = this;
        this.theNumber = this.awakeRoad(this.lineLength, this.roadNumber, function (nu) {
            self._nowPosis.push(nu);
        });
        //   console.log(this.theNumber);

        // this.createComponent
        for (let index = 0; index < 1000; index++) {
           // console.log("第", index, "行:");
           // console.log(this.theNumber);
            this.createComponent.build(this.theNumber);
            this.theNumber = this.getNextLineNmbers(this.theNumber);
        }
    },
    /**
     * 初始化道路返回一个起点道路
     * @param  lineLength 道路横长度
     * @param roadNumber 道路条数
     */
    awakeRoad(lineLength, roadNumber, fx) {
        /**
         * 初始化的第一行道路
         */
        let awakeNumber = [];
        //初始化所有为墙
        for (let index = 0; index < lineLength; index++) {
            awakeNumber.push(1);
        }
        //初始化道路起始点位置
        for (let index = 0; index < roadNumber; index++) {

            let randomIndex = parseInt(lineLength * cc.random0To1());
            //随机获取起始点
            awakeNumber[randomIndex] = 0;
            //  console.log(awakeNumber);
            fx(randomIndex);
        }
        return awakeNumber;
    },
    /**
     * 随机生成下一行
     * 0是路
     * 1是墙
     * @param {} upNumber 
     */
    getNextLineNmbers(upNumber) {
        let self = this;
        let numbers = [];


        // for (let index = 0; index < upNumber.length; index++) {
        //     //     console.log(upNumber[index + 1],upNumber[index + 1] ==0);
        //     //有一定概率左右偏移
        //     //进行偏移的条件
        //     if (self.deviationSize > cc.random0To1() && (upNumber[index + 1] == 0 || upNumber[index - 1] == 0)) {
        //         //如果该路在上一行左右都有路，则对其进行封路
        //         if(upNumber[index + 1] == 0 && upNumber[index - 1] == 0){
        //          //   console.log("emmmmm");
        //             numbers.push(1);
        //         }else{
        //             numbers.push(0);
        //         }
        //     //    numbers.push(0);

        //     }
        //     else 
        //     //开路
        //     if(upNumber[index]==0){

        //             numbers.push(0);


        //     }

        //     else {

        //         numbers.push(1);
        //     }
        // }

        //初始化所有为墙
        for (let index = 0; index < upNumber.length; index++) {
            numbers.push(1);
        }

        //有概率产生偏移
        if (self.deviationSize > cc.random0To1()) {
            //根据偏移点生成路
            //是路的条件:如果在新点与当前为0点之间





            for (let index = 0; index < self._nowPosis.length; index++) {

                if (0.5 > cc.random0To1()) {
                    //生成偏移点
                    let newPosi = parseInt(cc.random0To1() * upNumber.length);
                    let upPosi = self._nowPosis[index];

                //    console.log(upPosi, newPosi);
                    numbers = self.PosiMoveTo(numbers, newPosi, upPosi);

                    self._nowPosis[index] = newPosi;
                } else {
                    //普通的生成路
                    for (let index = 0; index < upNumber.length; index++) {
                        self._nowPosis.forEach(element => {
                            if (element == index) {
                                numbers[index] = 0;
                            }
                        });
                    }
                }


            }










        } else {
            //普通的生成路
            for (let index = 0; index < upNumber.length; index++) {
                self._nowPosis.forEach(element => {
                    if (element == index) {
                        numbers[index] = 0;
                    }
                });
            }
        }




        return numbers;
    },
    /**
     * 道路点移动到
     */
    PosiMoveTo(numbersed, now, to) {
        let numbers = numbersed.concat();
        for (let index = 0; index < numbers.length; index++) {
            if (now > to) {
                if (index >= to && index <= now) {
                    numbers[index] = 0;
                }
            } else {
                if (index <= to && index >= now) {
                    numbers[index] = 0;
                }
            }
        }
        return numbers;
    }
    // update (dt) {},
});