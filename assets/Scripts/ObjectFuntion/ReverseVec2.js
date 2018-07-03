cc.Class({
    extends: cc.Component,

    properties: {
        loadSetting: true,
        cmponentNmae: "",
        valueName: "",
        X: true,
        Y: true
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        if (this.loadSetting) {
            this.upSet();
        }

    },
    upSet() {

        let value = this.node.getComponent(this.cmponentNmae)[this.valueName];
        
        if (this.X) {
            value.x = -value.x;
        }
        if (this.Y) {
            value.y = -value.y;

        }


    }
});


