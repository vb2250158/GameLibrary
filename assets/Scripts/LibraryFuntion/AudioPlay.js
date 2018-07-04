cc.Class({
    extends: cc.Component,

    properties: {
        audio: {
            url: cc.AudioClip,
            default: null
        },
    },

  
    
    play(){
        cc.audioEngine.play(this.audio, false, 1);
    }
   

    // update (dt) {},
});
