/**
 * 修改全局变量的组件
 */
cc.Class({
    extends: cc.Component,

    properties: {
        valueName: "",
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },
    add() {
        for (let index = 0; index < arguments.length; index++) {
            const element = arguments[index];
            if (typeof (element) == "string") {
                director[this.valueName] += eval(element);
                return;
            }
        }
       
    }
    // update (dt) {},
});
