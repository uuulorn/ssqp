import { Equip, onceMap, dataWords } from "./type.js";
let earrings = new onceMap;
let t;
t = new Equip;
t.name = '自定义装备';
for (const word of dataWords) {
    t.data.push({ type: word, value: 0, times: 1 });
    t.data.push({ type: word, value: 0, times: 1 });
}
earrings.set(t.name, t);
t = new Equip;
t.name = '爆炸型:小型战术信号弹';
t.data.push({ type: '攻击强化', value: 3988, times: 1 });
t.tag = ['移动速度'];
earrings.set(t.name, t);
t = new Equip;
t.name = '隐匿之叹息耳环';
t.data.push({ type: '攻击强化', value: 3720, times: 1 });
t.data.push({ type: '技能攻击力', value: 10, times: 1 });
t.tag = ['技能特化'];
earrings.set(t.name, t);
t = new Equip;
t.name = '无色冰晶耳环';
t.data.push({ type: '攻击强化', value: 4528, times: 1 });
t.data.push({ type: '技能攻击力', value: 20, times: 1 });
t.tag = ['技能特化', '无需无色技能'];
t.other = ["觉醒技能弱化"];
earrings.set(t.name, t);
t = new Equip;
t.name = '堕落的灵魂';
t.data.push({ type: '攻击强化', value: 3988, times: 1 });
t.data.push({ type: '技能攻击力', value: 8, times: 1 });
t.tag = ['无色技能'];
earrings.set(t.name, t);
t = new Equip;
t.name = '战争之主耳环';
t.data.push({ type: '攻击强化', value: 3450, times: 1 });
t.tag = ['属强提升', '雨露均沾'];
t.data.push({ type: '火强', value: +15, times: 1 });
earrings.set(t.name, t);
t = new Equip;
t.name = '诅咒的枷锁';
t.data.push({ type: '攻击强化', value: 2979, times: 1 });
t.data.push({ type: '技能攻击力', value: 5, times: 1 });
t.data.push({ type: '技能攻击力', value: 2, times: 1 });
t.tag = ['出血技攻', '出血'];
t.data.push({ type: '冷却恢复速度', value: +10, times: 1 });
earrings.set(t.name, t);
t = new Equip;
t.name = '万物引力耳环';
t.data.push({ type: '攻击强化', value: 4528, times: 1 });
t.tag = ['移动速度'];
earrings.set(t.name, t);
t = new Equip;
t.name = '猎龙者之证-龙鳞耳环';
t.data.push({ type: '攻击强化', value: 4528, times: 1 });
t.tag = ['保护罩', '眩晕'];
earrings.set(t.name, t);
t = new Equip;
t.name = '晨曦的新芽耳环';
t.data.push({ type: '攻击强化', value: 3450, times: 1 });
t.tag = ['属强提升', '雨露均沾'];
t.data.push({ type: '暗强', value: +15, times: 1 });
earrings.set(t.name, t);
t = new Equip;
t.name = '未知文明-双子石';
t.data.push({ type: '攻击强化', value: 3450, times: 1 });
t.tag = ['属强提升', '雨露均沾'];
t.data.push({ type: '冰强', value: +15, times: 1 });
earrings.set(t.name, t);
t = new Equip;
t.name = '吞噬风暴耳环';
t.data.push({ type: '攻击强化', value: 4258, times: 1 });
t.tag = ['mp消耗量减少', '消耗品mp恢复量提升'];
earrings.set(t.name, t);
t = new Equip;
t.name = '无尽的生机耳环';
t.data.push({ type: '攻击强化', value: 3450, times: 1 });
t.tag = ['属强提升', '雨露均沾'];
t.data.push({ type: '光强', value: +15, times: 1 });
earrings.set(t.name, t);
t = new Equip;
t.name = '脉冲之源耳环';
t.data.push({ type: '攻击强化', value: 3720, times: 1 });
t.data.push({ type: '攻击强化', value: 3557, times: 0 });
t.data.push({ type: '技能攻击力', value: 15, times: 1 });
t.tag = ['mp条件', 'mp套'];
earrings.set(t.name, t);
t = new Equip;
t.name = '苍空飞羽耳环';
t.data.push({ type: '攻击强化', value: 2857, times: 1 });
t.data.push({ type: '技能攻击力', value: 5, times: 1 });
t.data.push({ type: '技能攻击力', value: 2, times: 1 });
t.tag = ['出血技攻'];
t.other = ["百分比扣血"];
earrings.set(t.name, t);
t = new Equip;
t.name = '黄昏圣堂';
t.data.push({ type: '攻击强化', value: 4972, times: 1 });
t.data.push({ type: '攻击强化', value: 593, times: 5 });
t.tag = ['恢复hp', 'boss hp条件'];
t.data.push({ type: '属强', value: +15, times: 1 });
earrings.set(t.name, t);
t = new Equip;
t.name = '徘徊之魂耳环';
t.data.push({ type: '攻击强化', value: 4528, times: 1 });
t.other = ["移动速度"];
t.tag = ['移动速度'];
earrings.set(t.name, t);
t = new Equip;
t.name = '原核之芯耳环';
t.data.push({ type: '攻击强化', value: 2560, times: 1 });
t.data.push({ type: '技能攻击力', value: 15, times: 0 });
t.data.push({ type: '技能攻击力', value: 5, times: 0 });
t.other = ["石化伤害累积"];
t.tag = ['石化'];
earrings.set(t.name, t);
t = new Equip;
t.name = '灵犀之音耳环';
t.data.push({ type: '攻击强化', value: 3988, times: 1 });
t.tag = ['冰冻', '微波炉', '自身冰冻', '解除自身冰冻'];
earrings.set(t.name, t);
t = new Equip;
t.name = '时间之念耳环';
t.data.push({ type: '攻击强化', value: 4528, times: 1 });
t.other = ["附魔翻倍"];
t.tag = ['附魔翻倍'];
earrings.set(t.name, t);
t = new Equip;
t.isMyth = true;
t.name = '军神的心之所念';
t.data.push({ type: '技能攻击力', value: 30, times: 1 });
t.data.push({ type: '技能攻击力', value: 4, times: 1 });
t.data.push({ type: '属强', value: +25, times: 1 });
earrings.set(t.name, t);
for (const v of earrings.values()) {
    v.slot = '耳环';
    if (!v.isMyth) {
        v.data.push({
            type: '技能攻击力',
            value: 12,
            times: 1
        });
    }
}
export default earrings;

