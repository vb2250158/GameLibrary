//黑色的鸡效果
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
        areaCreatorList:[require("AreaCreator")],
     
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        
     },
     start (){
        window.bk=this;
    },
    build () {
        //  console.log(this);
        this.areaCreatorList.forEach(element => {
            element.build();
        });
    },

    // update (dt) {},
});
