import { Equip, onceMap, dataWords } from "./type.js";
let rings = new onceMap;
let t;
t = new Equip;
t.name = '自定义装备';
for (const word of dataWords) {
    t.data.push({ type: word, value: 0, times: 1 });
    t.data.push({ type: word, value: 0, times: 1 });
}
rings.set(t.name, t);
t = new Equip;
t.name = '守护龙的庇护-祝福';
t.data.push({ type: '攻击强化', value: 4796, times: 1 });
t.tag = ['技能等级'];
t.data.push({ type: '属强', value: +20, times: 1 });
t.other = ["技能等级增加"];
rings.set(t.name, t);
t = new Equip;
t.name = '第三个黑桃-死亡';
t.data.push({ type: '攻击强化', value: 3180, times: 1 });
t.tag = ['附魔翻倍'];
t.other = ["附魔翻倍"];
rings.set(t.name, t);
t = new Equip;
t.name = '隐没的邪念戒指';
t.data.push({ type: '攻击强化', value: 3988, times: 1 });
t.tag = ['恢复mp', '恢复hp'];
t.other = ["恢复mp", "恢复hp"];
rings.set(t.name, t);
t = new Equip;
t.name = '血红生命之戒';
t.data.push({ type: '攻击强化', value: 4325, times: 1 });
t.data.push({ type: '技能攻击力', value: 5, times: 1 });
t.data.push({ type: '技能攻击力', value: 2, times: 1 });
t.tag = ['灼烧', '灼烧技攻', '灼烧持续时间'];
t.data.push({ type: '火强', value: +10, times: 1 });
rings.set(t.name, t);
t = new Equip;
t.name = '石巨人之枢戒指';
t.data.push({ type: '攻击强化', value: 4258, times: 1 });
t.data.push({ type: '攻击强化', value: 326, times: 1 });
t.tag = ['异常'];
t.other = ["异常传染"];
rings.set(t.name, t);
t = new Equip;
t.name = '全能主宰者之戒';
t.data.push({ type: '攻击强化', value: 4528, times: 1 });
t.data.push({ type: '攻击强化', value: 4298, times: 1 });
t.tag = ['mp消耗量增加', 'mp套'];
t.other = ["mp消耗量增加"];
rings.set(t.name, t);
t = new Equip;
t.name = '骑士的骄傲';
t.data.push({ type: '攻击强化', value: 4176, times: 1 });
t.data.push({ type: '技能攻击力', value: 5, times: 1 });
t.data.push({ type: '技能攻击力', value: 15, times: 1 });
t.tag = ['冰冻', '冰冻技攻', '冰冻持续时间'];
t.data.push({ type: '冰强', value: +10, times: 1 });
rings.set(t.name, t);
t = new Equip;
t.name = '闪耀的生命之戒';
t.data.push({ type: '攻击强化', value: 4325, times: 1 });
t.data.push({ type: '技能攻击力', value: 5, times: 1 });
t.data.push({ type: '技能攻击力', value: 2, times: 1 });
t.tag = ['感电', '感电技攻', '感电持续时间'];
t.data.push({ type: '光强', value: +10, times: 1 });
rings.set(t.name, t);
t = new Equip;
t.name = '血色结晶戒指';
t.data.push({ type: '攻击强化', value: 4325, times: 1 });
t.data.push({ type: '攻击强化', value: 2223, times: 1 });
t.tag = ['出血', '出血伤害', '出血持续时间'];
t.data.push({ type: '出血伤害', value: +25, times: 1 });
rings.set(t.name, t);
t = new Equip;
t.name = '雷达战网戒指';
t.data.push({ type: '攻击强化', value: 2642, times: 1 });
t.tag = ['CD'];
t.data.push({ type: '冷却恢复速度', value: +42, times: 1 });
t.other = ["概率重置", "快捷栏"];
rings.set(t.name, t);
t = new Equip;
t.name = '双音交映戒指';
t.data.push({ type: '攻击强化', value: 4258, times: 1 });
t.tag = ['CD'];
t.data.push({ type: '冷却恢复速度', value: +30, times: 1 });
t.other = ["保护罩", "所有速度"];
rings.set(t.name, t);
t = new Equip;
t.name = '闪耀的音律';
t.data.push({ type: '攻击强化', value: 4972, times: 1 });
t.tag = ['消耗品mp恢复量'];
t.data.push({ type: '属强', value: +15, times: 1 });
rings.set(t.name, t);
t = new Equip;
t.name = '无尽的痛苦之戒指';
t.data.push({ type: '攻击强化', value: 4258, times: 1 });
t.data.push({ type: '攻击强化', value: 889, times: 5 });
t.tag = ['低血'];
rings.set(t.name, t);
t = new Equip;
t.name = '永不停歇的命运';
t.data.push({ type: '攻击强化', value: 3098, times: 1 });
t.data.push({ type: '技能攻击力', value: 5, times: 1 });
t.data.push({ type: '技能攻击力', value: 15, times: 1 });
t.tag = ['冰冻', '冰冻技攻', '冰冻持续时间'];
t.data.push({ type: '冰强', value: +10, times: 1 });
rings.set(t.name, t);
t = new Equip;
t.name = '金翼戒指';
t.data.push({ type: '攻击强化', value: 5510, times: 1 });
t.data.push({ type: '技能攻击力', value: 35, times: 1 });
t.tag = ['非破招特化'];
t.data.push({ type: '属强', value: +15, times: 1 });
rings.set(t.name, t);
t = new Equip;
t.name = '电流星散戒指';
t.data.push({ type: '攻击强化', value: 4176, times: 1 });
t.data.push({ type: '技能攻击力', value: 5, times: 1 });
t.data.push({ type: '技能攻击力', value: 15, times: 1 });
t.tag = ['眩晕', '眩晕技攻', '眩晕持续时间'];
t.data.push({ type: '属强', value: +8, times: 1 });
rings.set(t.name, t);
t = new Equip;
t.name = '磁场探测者戒指';
t.data.push({ type: '攻击强化', value: 4258, times: 1 });
t.data.push({ type: '攻击强化', value: 1112, times: 1 });
t.tag = ['伤害分摊'];
t.other = ["伤害分摊"];
rings.set(t.name, t);
t = new Equip;
t.name = '绽放的神秘之花';
t.data.push({ type: '攻击强化', value: 4176, times: 1 });
t.data.push({ type: '技能攻击力', value: 10, times: 1 });
t.data.push({ type: '技能攻击力', value: 10, times: 1 });
t.tag = ['失明', '失明技攻', '失明持续时间'];
t.data.push({ type: '暗强', value: +10, times: 1 });
rings.set(t.name, t);
t = new Equip;
t.name = '瞬息千里戒指';
t.data.push({ type: '攻击强化', value: 4258, times: 1 });
t.tag = ['自身出血', 'CD'];
t.data.push({ type: '冷却恢复速度', value: +10, times: 1 });
rings.set(t.name, t);
for (const v of rings.values()) {
    v.slot = '戒指';
    if (!v.isMyth) {
        v.data.push({
            type: '技能攻击力',
            value: 12,
            times: 1
        });
    }
}
export default rings;

