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
        moveComponent: require("MoveRepeat"),
        _handle: true,
        clashAudio: {
            url: cc.AudioClip,
            default: null
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

    },

    start() {
        let self = this;

    },
    onCollisionEnter: function (other) {
        let self = this;

        switch (other.tag) {
            case 0:
                self.moveComponent.speed.x = -self.moveComponent.speed.x;
                break;
            case 1:
                self.moveComponent.speed.y = -self.moveComponent.speed.y;
                break;

            case 2:
                cc.audioEngine.play(this.clashAudio, false, 1);
                /**
                 * 球与球反弹
                 */
                if (self._handle) {
                    //初始化另一个小球
                    let otherMoveRepeat = other.node.getComponent("MoveRepeat");
                    other.node.getComponent("Ball")._handle = false;
                    //双方速度取反
                    //   otherMoveRepeat.speed.negSelf();
                    //  self.moveComponent.speed.negSelf();
                    //得出双方速度大小
                    let otherMag = otherMoveRepeat.speed.mag();
                    let selfMag = self.moveComponent.speed.mag();


                    //旋转速度方向
                    //圆心中心点到表面的单位向量，是该表面点的法线
                    //求出法线与速度的夹角，该值乘以2可以获得速度需要旋转的角度
                    // let angle1 = otherMoveRepeat.node.position.add(self.node.position.neg()).normalize().angle(otherMoveRepeat.speed.normalize());
                    // console.log(angle1);
                    // otherMoveRepeat.speed.rotateSelf(angle1*2);// = otherMoveRepeat.node.position.add(self.node.position.neg());
                    // let angle2 = self.node.position.add(otherMoveRepeat.node.position.neg()).normalize().angle(self.moveComponent.speed.normalize());
                    // self.moveComponent.speed.rotateSelf(angle2*2);//self.node.position.add(otherMoveRepeat.node.position.neg());
                    otherMoveRepeat.speed = otherMoveRepeat.node.position.sub(self.node.position);

                    self.moveComponent.speed = self.node.position.sub(otherMoveRepeat.node.position);

                    //   new cc.Vec2().rotateSelf
                    //归一化
                    otherMoveRepeat.speed.normalizeSelf();
                    self.moveComponent.speed.normalizeSelf();

                    //速度替换
                    otherMoveRepeat.speed.mulSelf(selfMag);
                    self.moveComponent.speed.mulSelf(otherMag);


                    // otherMoveRepeat.speed.rotateSelf();
                    // self.moveComponent.speed.rotateSelf();
                    //   console.log(angle);
                } else {
                    self._handle = true;
                }



                break;
            case 4:
                cc.audioEngine.play(this.clashAudio, false, 1);
                /**
                * 获得大小
                */
                let selfMag = self.moveComponent.speed.mag();
                /**
                 * 计算反弹方向
                 */
                self.moveComponent.speed = self.node.position.sub(playerNode.position);
                /**
                 * 方向归一化
                 */
                self.moveComponent.speed.normalizeSelf();
                /**
                 * 乘以速度
                 */
                self.moveComponent.speed.mulSelf(selfMag);






                break;
            default:
                break;
        }


    },

    onCollisionExit: function (other) {
        let self = this;
        if (other.tag == 4) {
            self.moveComponent._upSpeed += playerSpeed / self.node.position.sub(playerNode.position).mag();
        }
        if (other.tag == 4) {
            setTimeout(function (params) {
                if (self.moveComponent != null) {
                    self.moveComponent._upSpeed = 0;
                }
            }, 1000);
        }
    },
    onCollisionStay: function (other) {
        let self = this;
        if (other.tag == 4) {
            self.moveComponent._rate += playerSpeed / self.node.position.sub(playerNode.position).mag();
        }

        // switch (other.tag) {


        //     default:
        //         break;
        // }
        // update (dt) {},
    },

});
