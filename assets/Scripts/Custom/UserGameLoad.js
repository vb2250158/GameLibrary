

const UserInfo=require("./UserInfo");

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
        debugText: cc.Label,

    },
    onLoad() {
        UserInfo.InitGame();
        window.UserInfo=UserInfo;
      this.  debugText.string = JSON.stringify(user,null,1);
    },

    start() {

    },


});
