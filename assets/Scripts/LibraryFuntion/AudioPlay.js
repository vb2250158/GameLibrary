cc.Class({
    extends: cc.Component,

    properties: {
        audio: {
            url: cc.AudioClip,
            default: null
        },
    },

    onLoad() {
        cc.audioEngine.play(this.audio, false, 0);
    },

    play() {
        cc.audioEngine.play(this.audio, false, 1);
    }


    // update (dt) {},
});
