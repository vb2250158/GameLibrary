cc.Class({
    extends: cc.Component,

    properties: {
        loadSetting: true,
        cmponentNmae: "",
        valueName: "",
        x: cc.Vec2,
        y: cc.Vec2
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        if (this.loadSetting) {
            this.upSet();
        }

    },
    upSet() {
        
        let value = this.node.getComponent(this.cmponentNmae)[this.valueName];
        value.x = (cc.random0To1() * (this.x.y - this.x.x)) + this.x.x;
        value.y = (cc.random0To1() * (this.y.y - this.y.x)) + this.y.x;

       
    }
});
