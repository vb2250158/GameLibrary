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
        _liveTimerUI:cc.Label
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this._liveTimerUI=this.node.getComponent(cc.Label);
    },
    upDateUI(){
        let timerText= "";
        let dotIndex = -1;
        //分，秒，毫秒
        let m="",s="",mm="";
        timerText=director.gameFraction.liveTimer+"";
       
        m=parseInt(director.gameFraction.liveTimer/60)+"";
        s= parseInt(director.gameFraction.liveTimer%60)+"";
        dotIndex=timerText.indexOf('.');
     
        if (dotIndex!=-1) {          
            mm= timerText.slice(dotIndex+1,dotIndex+3);
        }
        //补零
        if(s.length<2){
            s='0'+s;
        }
        if(mm.length<2){
            mm='0'+mm;
        }
        this._liveTimerUI.string = m+":"+s+"."+mm;
    }
    // update (dt) {},
});
