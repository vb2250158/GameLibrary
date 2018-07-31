/**
 * 可以重置一个节点
 */
cc.Class({
    extends: cc.Component,

    properties: {
        /**
         * 那个节点
         */
        theNode: cc.Node,
        /**
         * 节点预制体
         */
        nodePf: cc.Prefab
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },
    /**
     * 重置一个组件，需要有那个组件的预制体
     */
    reset() {
        /**
         * 记录父级
         */
        let parent = this.theNode.parent;
        /**
         * 销毁
         */
        this.theNode.destroy();

        /**
         * 创建
         */
        let newNode = cc.instantiate(this.nodePf);

        /**
         * 设置父级
         */
        newNode.parent = parent;

        //初始化位置
        newNode.x = 0;
        newNode.y = 0;
        /**
         * 记录节点，为下次重置做准备
         */
        this.theNode = newNode;
    }
    // update (dt) {},
});
