
cc.Class({
    extends: cc.Component,

    properties: {
        _animation: cc.Animation,
        _lockList: []
    },


    start() {
        this.animation = this.node.getComponent(cc.Animation);
    },

    play(ev, name) {
        // console.log(id);
        for (let index = 0; index < this._lockList.length; index++) {
            const element = this._lockList[index];
            console.log(element);
            if (element == name) {

                return;
            }

        }

        this.animation.play(name);

    },
    lockAnimation(ev, name) {
        this._lockList.push(name);
    },
    unLockAnimation(ev, name) {
        for (let index = 0; index < this._lockList.length; index++) {
            const element = this._lockList[index];
            if (name == element) {
                this._lockList.splice(index, 1);
            }
        }

    }
});
