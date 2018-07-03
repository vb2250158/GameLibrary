
cc.Class({
    extends: cc.Component,

    properties: {
        CreateObject:cc.Prefab
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
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onDestroy(){
        let self=this;
        let newNode = cc.instantiate(self.CreateObject);
        
        newNode.parent = self.node.parent;
        newNode.position = self.node.position;
    }
   
});
