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
        _scoreUI:cc.Label,
        _score:0
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this._scoreUI=this.node.getComponent(cc.Label);
    },
    upDateUI(){
      // console.log(director.gameFraction.score);
      
        this._score = cc.clampf( this._score+(director.gameFraction.score -  this._score+10)/10, this._score , director.gameFraction.score);
        
        this._scoreUI.string =  parseInt(this._score)+"";
    }
    // update (dt) {},
});
