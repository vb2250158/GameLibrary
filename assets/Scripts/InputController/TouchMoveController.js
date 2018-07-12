cc.Class({
    extends: cc.Component,

    properties: {
        lockX: false,
        lockY: false,
        _isTouch: false,
        XMaxSize: 300,
        YMaxSize: 500,

        _obstacleList: [],
        /**
         * 碰撞对象判定
         */
        targetTag: 2,
        playerNode: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

        let self = this;

        self.node.on(cc.Node.EventType.TOUCH_MOVE, function (ev) {
            if (!director.isGameEnd) {
                let moveSize = new cc.Vec2();

                if (!self.lockX) {
                    moveSize.x = ev.getDelta().x;
                }


                if (!self.lockY) {
                    moveSize.y = ev.getDelta().y;
                }

                /**
                 * 移动方向判断、所在零界点判断
                 */
                if (moveSize.x > 0 && self.node.x > self.XMaxSize) {
                    moveSize.x = 0;
                } else if (moveSize.x < 0 && self.node.x < -self.XMaxSize) {
                    moveSize.x = 0;
                }

                if (moveSize.y > 0 && self.node.y > self.YMaxSize) {
                    moveSize.y = 0;
                } else if (moveSize.y < 0 && self.node.y < -self.YMaxSize) {
                    moveSize.y = 0;
                }


                //障碍物判断逻辑
                for (let index = 0; index < self._obstacleList.length; index++) {
                    const element = self._obstacleList[index];
                    // try {
                    //     if (element.width == null) {

                    //     }
                    // } catch (error) {
                    //     self._obstacleList.splice(index, 1);
                    //     index--;
                        
                    // }


                    //求出x和y的距离
                    let xDistance = (element.width / 2 + self.playerNode.width / 2);
                    let yDistance = (element.height / 2 + self.playerNode.height / 2);
                    //在左右的判断,障碍物
                    if (self.node.y > element.y - yDistance &&
                        self.node.y < element.y + yDistance) {
                        if (moveSize.x > 0 &&
                            self.node.x > element.x - xDistance && self.node.x < element.x) {
                            console.log("R", self.node.x, element.x - xDistance);
                            moveSize.x = -10;
                        } else if (moveSize.x < 0 && self.node.x < element.x + xDistance && self.node.x > element.x) {
                            console.log("L", self.node.x, element.x + xDistance);
                            moveSize.x = 10;
                        }
                        break;
                    }
                    //上下的判断
                    // if (self.node.x > element.x - xDistance &&
                    //     self.node.x < element.x + xDistance) {
                    //     if (moveSize.y > 0 && self.node.y > element.y - yDistance && self.node.y < element.y) {
                    //         moveSize.y = 0;
                    //     } else if (moveSize.y < 0 && self.node.y < element.y + yDistance && self.node.y > element.y) {
                    //         moveSize.y = 0;
                    //     }
                    // }
                }

                //   console.log(moveSize);

                self.node.position = self.node.position.add(moveSize);
            }
        });
    },

    /**
     * 临时方法用于飞机就
     */

    onCollisionEnter: function (other) {
        let self = this;

        if (self.targetTag == other.tag) {
            self._obstacleList.push(other.node);
        }

    },
    onCollisionExit: function (other) {
        // let self = this;
        // if (self.targetTag == other.tag) {
        //     for (let index = 0; index < self._obstacleList.length; index++) {
        //         const element = self._obstacleList[index];
        //         if (other.node == element.node) {
        //             self._obstacleList.splice(index, 1);
        //             return;
        //         }
        //     }
        // }
    },

});
