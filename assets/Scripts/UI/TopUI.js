cc.Class({
    extends: cc.Component,

    properties: {
        upSize: 0,
    },


    start() {
        this.node.y = cc.view.getVisibleSize().height/2 - this.upSize;
    },
});
