import { Equip, onceMap, dataWords } from "./type.js";
let shoes = new onceMap;
let t;
t = new Equip;
t.name = '自定义装备';
for (const word of dataWords) {
    t.data.push({ type: word, value: 0, times: 1 });
    t.data.push({ type: word, value: 0, times: 1 });
}
shoes.set(t.name, t);
t = new Equip;
t.name = '流星飞电战靴';
t.data.push({ type: '攻击强化', value: 4702, times: 1 });
t.data.push({ type: '攻击强化', value: 356, times: 1 });
t.tag = ['感电', '所有速度'];
shoes.set(t.name, t);
t = new Equip;
t.name = '暴走之躯战靴';
t.data.push({ type: '攻击强化', value: 4258, times: 1 });
t.data.push({ type: '攻击强化', value: 889, times: 3 });
t.tag = ['异常状态'];
shoes.set(t.name, t);
t = new Equip;
t.name = '黑暗吞噬短靴';
t.data.push({ type: '攻击强化', value: 4432, times: 1 });
t.data.push({ type: '技能攻击力', value: 10, times: 1 / 3 });
t.tag = ['随机效果', '所有速度'];
t.data.push({ type: '中毒伤害', value: +10, times: 1 });
t.other = ["CDR+30%(1/3几率触发)"];
shoes.set(t.name, t);
t = new Equip;
t.name = '暗影之迹短靴';
t.data.push({ type: '攻击强化', value: 5066, times: 1 });
t.data.push({ type: '技能攻击力', value: 5, times: 1 });
t.data.push({ type: '技能攻击力', value: 5, times: 1 });
t.data.push({ type: '技能攻击力', value: 5, times: 1 });
t.tag = ['基础精通', '小技能', '普通攻击'];
t.other = ["基础精通+45%"];
shoes.set(t.name, t);
t = new Equip;
t.name = '高科技战术强化靴';
t.data.push({ type: '攻击强化', value: 3894, times: 1 });
t.data.push({ type: '技能攻击力', value: 5, times: 1 });
t.tag = ['手搓', 'CD'];
t.data.push({ type: '属强', value: +15, times: 1 });
t.other = ["无色技能指令效果+400%(觉醒除外)"];
shoes.set(t.name, t);
t = new Equip;
t.name = '龙之开拓者短靴';
t.data.push({ type: '攻击强化', value: 3720, times: 1 });
t.data.push({ type: '暗强', value: +20, times: 1 });
shoes.set(t.name, t);
t = new Equip;
t.name = '无畏的勇气短靴';
t.data.push({ type: '攻击强化', value: 3988, times: 1 });
t.other = ["lv1-25技能等级+2"];
t.tag = ['技能等级'];
shoes.set(t.name, t);
t = new Equip;
t.name = '祈愿之息短靴';
t.data.push({ type: '攻击强化', value: 3988, times: 1 });
t.other = ["蹲伏", "无敌"];
shoes.set(t.name, t);
t = new Equip;
t.name = '大地的践踏短靴';
t.data.push({ type: '攻击强化', value: 3988, times: 1 });
t.tag = ['保护罩', '特效'];
shoes.set(t.name, t);
t = new Equip;
t.name = '摇曳的残影短靴';
t.data.push({ type: '攻击强化', value: 3988, times: 1 });
t.data.push({ type: '属强', value: +15, times: 1 });
t.data.push({ type: '冷却恢复速度', value: +15, times: 1 });
t.tag = ['感电', 'CD'];
shoes.set(t.name, t);
t = new Equip;
t.name = '流星追月短靴';
t.data.push({ type: '攻击强化', value: 3031, times: 1 });
t.data.push({ type: '攻击强化', value: 267, times: 10 });
t.data.push({ type: '冷却时间', value: -12, times: 1 });
t.tag = ['mp消耗量增加', 'CD', 'mp恢复'];
shoes.set(t.name, t);
t = new Equip;
t.name = '万念俱灰短靴';
t.data.push({ type: '攻击强化', value: 4528, times: 1 });
t.data.push({ type: '攻击强化', value: 400, times: 10 });
t.tag = ['hp恢复', '低血'];
shoes.set(t.name, t);
t = new Equip;
t.name = '玉化亡灵长靴';
t.data.push({ type: '攻击强化', value: 4528, times: 1 });
t.tag = ['后跳', '回避率'];
shoes.set(t.name, t);
t = new Equip;
t.name = '天翼之守护短靴';
t.data.push({ type: '攻击强化', value: 4258, times: 1 });
t.data.push({ type: '攻击强化', value: 593, times: 1 });
t.tag = ['姿势'];
shoes.set(t.name, t);
t = new Equip;
t.name = 'HEM加固靴';
t.data.push({ type: '攻击强化', value: 4796, times: 1 });
t.data.push({ type: '攻击强化', value: 356, times: 1 });
t.tag = ['灼烧'];
t.data.push({ type: '火强', value: +15, times: 1 });
shoes.set(t.name, t);
t = new Equip;
t.name = '白色秘境皮鞋';
t.data.push({ type: '攻击强化', value: 4528, times: 1 });
t.other = ["附魔翻倍"];
t.tag = ['附魔翻倍'];
shoes.set(t.name, t);
t = new Equip;
t.name = '天才技术大师的加厚长靴';
t.data.push({ type: '攻击强化', value: 2910, times: 1 });
t.data.push({ type: '攻击强化', value: 362, times: 5 });
t.data.push({ type: '技能攻击力', value: 18.75, times: 1 });
t.tag = ['mp套核心', 'mp套', '默认技攻以mp防具三件套计算'];
shoes.set(t.name, t);
t = new Equip;
t.name = '蒸汽朋克音速鞋';
t.data.push({ type: '攻击强化', value: 4972, times: 1 });
t.data.push({ type: '攻击强化', value: 385, times: 0 });
t.tag = ['石化'];
shoes.set(t.name, t);
t = new Equip;
t.name = '循环的自然之法';
t.data.push({ type: '攻击强化', value: 5066, times: 1 });
t.data.push({ type: '攻击强化', value: 385, times: 0 });
t.data.push({ type: '暗强', value: +15, times: 1 });
t.tag = ['特效'];
shoes.set(t.name, t);
for (const v of shoes.values()) {
    v.slot = '鞋子';
    if (!v.isMyth) {
        v.data.push({
            type: '技能攻击力',
            value: 29,
            times: 1
        });
    }
}
export default shoes;

