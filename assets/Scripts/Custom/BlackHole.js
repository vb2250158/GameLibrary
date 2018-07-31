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
        speed: 100,
        upSize: 1,
        _ballList: [],

        liveTime: 5
    },

    // LIFE-CYCLE CALLBACKS:


    // onLoad () {},

    start() {



    },
    onCollisionEnter: function (other) {
        let self = this;
        switch (other.tag) {
            case 2:

                this._ballList.push(other.node);



                break;

            default:
                break;
        }
    },
    update(dt) {
        if (this.liveTime > 0) {
            this.liveTime -= dt;
            for (let index = 0; index < this._ballList.length; index++) {
                const element = this._ballList[index];
                let addSpeed = this.node.position.add(element.position.neg());
                addSpeed.normalizeSelf();
                addSpeed.mulSelf(this.speed * dt);
                element.x += addSpeed.x;
                element.y += addSpeed.y;
                if (element.getScale() > 0.1) {
                    element.setScale(element.getScale() - this.upSize * dt);
                } else if (element.getScale() != 0.1) {
                    element.setScale(0.1);
                }

            }
        } else {
           // console.log(this._ballList.length);
            for (let index = 0; index < this._ballList.length; index++) {
                const element = this._ballList[index];
                this._ballList[index] = null;
                //console.log("emmm", index);
                element.destroy();
            }
            blackHoleMsg.put(this.node);
        }

    },
    onCollisionExit: function (other) {
        for (let index = 0; index < this._ballList.length; index++) {
            const element = this._ballList[index];
            if (other.node == element) {
                this._ballList.splice(index, 1);
                element.setScale(1);
                return;
            }
        }
    },

});
