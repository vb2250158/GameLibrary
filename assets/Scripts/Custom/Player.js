//0、1：墙
//2：球与球反弹
//3：玩家
//4：反弹点
//6：分数
//9：销毁
//5：续命
//8：发射子弹


cc.Class({
    extends: cc.Component,

    properties: {
        opportunityNumber: 0,
        /**
         * 增加生命的UI
         */
        Opportunity: require("Opportunity"),
        gameEndEvent: {
            default: [],
            type: cc.Component.EventHandler
        },
        /**
         * 防护罩
         */
        protectionCover: require("ProtectionCover"),
        control: cc.Node,
        ps: cc.Prefab,
        pd: cc.Prefab
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        cc.instantiate(this.ps).parent = this.node;
    },
    addOpportunity() {
        this.opportunityNumber++;
        this.Opportunity.add();
    },
    die() {
        this.opportunityNumber--;
        this.Opportunity.remove();
        let die = cc.instantiate(this.pd);
        die.parent = this.control.parent;
        die.x = this.control.x;
        die.y = this.control.y;
        if (this.opportunityNumber < 0) {
            let self = this;
            for (let index = 0; index < self.gameEndEvent.length; index++) {
                const element = self.gameEndEvent[index];
                element.emit([element.customEventData]);
            }
        } else {
            
            this.control.x = 0;
            this.control.y = 0;
            this.protectionCover.openCover();
            cc.instantiate(this.ps).parent = this.node;
        }
    }
    // update (dt) {},
});
