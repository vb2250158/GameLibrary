cc.Class({
    extends: cc.Component,

    properties: {
        preformList: [cc.Prefab],
        itemList: cc.NodePool,
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
        /**
         * 行数
         */
        _lineNumber: 0,
        itemSize: cc.Vec2,
        /**
         * 深度层级调整
         */
        zOpen: true,
        _theZSize: 0
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.itemList = new cc.NodePool();
    },
    /**
     * 构建一组对象
     * 
     * @param {*} indexs 如 [0,0,0,1,1]
     */
    build(indexs) {
        let self = this;
        for (let index = 0; index < indexs.length; index++) {

            let newNode = null;

            if (indexs[index] == 1) {
                /**
                * 尝试从对象池中获取
                */
                if (self.itemList.size() > 0) { // 通过 size 接口判断对象池中是否有空闲的对象
                    newNode = self.itemList.get();
               //     console.log("从对象池中获取");
                } else {
                //    console.log("直接创建");
                    // 如果没有空闲对象，也就是对象池中备用对象不够时，我们就用 cc.instantiate 重新创建
                    // 创建
                    newNode = cc.instantiate(self.preformList[indexs[index]]);
                }   
            }else{
              
                newNode = cc.instantiate(self.preformList[indexs[index]]);
            }

           


            //设置父对象
            newNode.parent = self.node;
            // 设置节点的X和Y
            newNode.x = -(newNode.parent.width / 2) + (self.itemSize.x / 2) + (index * self.itemSize.x);
            newNode.y = self.itemSize.y * self._lineNumber;
            //设置节点的高和宽
            newNode.width = self.itemSize.x;
            newNode.height = self.itemSize.y;
            if (this.zOpen) {
                newNode.zIndex = self._theZSize--;
            }


        }
        self._lineNumber++;

    }
    // update (dt) {},
});
