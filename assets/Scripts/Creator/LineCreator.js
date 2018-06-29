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
        preformList: [cc.Prefab],
        itemList: [cc.Node],
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
        itemSize: cc.Vec2
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
    },
    /**
     * 构建一组对象
     * 
     * @param {*} indexs 如 [0,0,0,1,1]
     */
    build(indexs) {
        let self = this;
        for (let index = 0; index < indexs.length; index++) {
            
            //创建
            var newNode = cc.instantiate(self.preformList[indexs[index]]);
            //设置父对象
            newNode.parent = self.node;
            // 设置节点的X和Y
            newNode.x = -(newNode.parent.width / 2) + (self.itemSize.x / 2) + (index * self.itemSize.x);
            newNode.y = self.itemSize.y * self._lineNumber;
            //设置节点的高和宽
            newNode.width = self.itemSize.x;
            newNode.height = self.itemSize.y;
            //加入数组
            self.itemList.push(newNode);

        }
        self._lineNumber++;

    }
    // update (dt) {},
});
