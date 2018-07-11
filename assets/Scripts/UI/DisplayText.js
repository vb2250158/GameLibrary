/**
 * 可以显示一个节点上某一个组件的一个属性
 */
cc.Class({
    extends: cc.Component,

    properties: {
        Text: cc.Label,
        targetNode: cc.Node,
        componentName: "",
        valueName: "",
        _targetNodeComponent: null,
        updateOpen: false
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this._targetNodeComponent = this.targetNode.getComponent(this.componentName);
        this.updateValue();
    },
    updateValue() {
        if (this._targetNodeComponent != null&&this.Text.string != this._targetNodeComponent[this.valueName]+"") {

            this.Text.string = this._targetNodeComponent[this.valueName]+"";
        }
    },
    update(dt) {
        if (this.updateOpen) {
            this.updateValue();
        }



    },
});
