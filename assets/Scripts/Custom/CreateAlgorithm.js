cc.Class({
    extends: cc.Component,

    properties: {
        /**
         * 道路偏移概率
         */
        deviationSize: 0.1,
        _createComponent: require("../Creator/LineCreator"),
        /**
         * 道路数量
         */
        roadNumber: 2,
        /**
         * 当前的所有道路点
         */
        _nowPosis: [],
        /**
         * 一行的长度
         */
        lineLength: 9,
        /**
         * 当前的一行的数组
         */
        theNumber: [],
        /**
         * 上一次是否产生了拐角
         */
        _upCorner: false,
        /**
         * 道路扩展
         */
        _roleUpSize: 1,

        _timeout: null

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        let self = this;
        self._createComponent = self.node.getComponent(require("../Creator/LineCreator"));
        this.theNumber = this.awakeRoad(this.lineLength, this.roadNumber, function (nu) {
            self._nowPosis.push(nu);
        });
        self._timeout = setTimeout(function (params) {
            console.log(self._nowPosis);
            for (let index = 0; index < 3; index++) {
                self._nowPosis.push(self._nowPosis[0]);
            }

            self._roleUpSize = 0;
        }, 30000);
    },
    onDestroy() {
        clearTimeout(self._timeout);
    },
    createNextLine() {
        //道路扩展
        if (this._roleUpSize > 0) {
            for (let index = 0; index < this._nowPosis.length; index++) {
                const element = this._nowPosis[index];
                if (element + 1 < this.theNumber.length) {
                    this.theNumber[element + 1] = 0;
                } else {
                    this.theNumber[element + -1] = 0;
                }
            }
        }

        /**
         * 为了增加拐角上下间距
         * 如果产生了拐角则直接创建
         */
        if (this._upCorner) {
            this._upCorner = false;

            this._createComponent.build(this.theNumber);
        } else {
            this._createComponent.build(this.theNumber);
            /**
             * 创建一行并返回新的下一行，参数主要是为了读取长度，实际生成是依赖_nowPosis
             */
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
            //调用回调
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
        //初始化所有为墙
        for (let index = 0; index < upNumber.length; index++) {
            numbers.push(1);
        }

        //有概率产生偏移
        if (self.deviationSize > cc.random0To1()) {
            //根据偏移点生成路
            //是路的条件:如果在新点与当前为0点之间




            //遍历每一条路(遍历道路点)
            for (let index = 0; index < self._nowPosis.length; index++) {

                //有概率生成该路的偏移点
                if (0.5 > cc.random0To1()) {
                    //生成偏移点
                    let newPosi = parseInt(cc.random0To1() * upNumber.length);
                    let upPosi = self._nowPosis[index];
                    //产生了拐角
                    this._upCorner = true;


                    //降低步数
                    if (newPosi - upPosi > 2) {
                        newPosi = upPosi + 2;
                    }

                    if (newPosi - upPosi < -2) {
                        newPosi = upPosi - 2;
                    }


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
