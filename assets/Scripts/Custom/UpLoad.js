
cc.Class({
    extends: cc.Component,

    properties: {

        debugLabel: cc.Label
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        let self = this;
    
        director.node.on("GameEnd", function (gameFraction) {
            gameFraction=gameFraction.getUserData();
            user.gold =parseInt( gameFraction.score/10);
            user.live_time=parseInt(gameFraction.liveTimer*100)*0.01;
            window.UserInfo.UpLoadScore(function (data) {
                self.debugLabel.string = JSON.stringify(data,null,1);
            });
        });

    },

    // update (dt) {},
});
