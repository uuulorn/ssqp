import { Equip, onceMap, dataWords } from "./type.js";
let bracelets = new onceMap;
let t;
t = new Equip;
t.name = '自定义装备';
for (const word of dataWords) {
    t.data.push({ type: word, value: 0, times: 1 });
    t.data.push({ type: word, value: 0, times: 1 });
}
bracelets.set(t.name, t);
t = new Equip;
t.name = '收获之手';
t.data.push({ type: '攻击强化', value: 3180, times: 1 });
t.data.push({ type: '技能攻击力', value: 6, times: 1 });
t.tag = ['耐久度', 'CD'];
t.other = ["CDR+50%(觉醒除外)"];
bracelets.set(t.name, t);
t = new Equip;
t.name = '电离掌控手镯';
t.data.push({ type: '攻击强化', value: 4528, times: 1 });
t.tag = ['瞬移', '恢复hp'];
bracelets.set(t.name, t);
t = new Equip;
t.name = '迟钝的感知手镯';
t.data.push({ type: '攻击强化', value: 3450, times: 1 });
t.tag = ['灼烧伤害 ', '自身灼烧'];
t.data.push({ type: '灼烧伤害', value: +10, times: 1 });
t.data.push({ type: '属强', value: +30, times: 1 });
bracelets.set(t.name, t);
t = new Equip;
t.name = '石巨人之核手镯';
t.data.push({ type: '攻击强化', value: 3165, times: 1 });
t.data.push({ type: '技能攻击力', value: 2, times: 1 });
t.data.push({ type: '技能攻击力', value: 5, times: 1 });
t.tag = ['中毒伤害 ', '中毒核心', '中毒技攻', '伤害转换', '异常赋予'];
t.data.push({ type: '中毒伤害', value: +20, times: 1 });
t.data.push({ type: '中毒比例', value: 50, times: 1 });
bracelets.set(t.name, t);
t = new Equip;
t.name = '流星飞电手镯';
t.data.push({ type: '攻击强化', value: 3165, times: 1 });
t.data.push({ type: '技能攻击力', value: 2, times: 1 });
t.data.push({ type: '技能攻击力', value: 5, times: 1 });
t.tag = ['灼烧伤害 ', '灼烧核心', '灼烧技攻', '伤害转换', '异常赋予'];
t.data.push({ type: '灼烧伤害', value: +20, times: 1 });
t.data.push({ type: '灼烧比例', value: 50, times: 1 });
bracelets.set(t.name, t);
t = new Equip;
t.name = '守护龙的庇护-慈悲';
t.data.push({ type: '攻击强化', value: 4796, times: 1 });
t.tag = ['技能等级 ', '属强'];
t.data.push({ type: '属强', value: +20, times: 1 });
bracelets.set(t.name, t);
t = new Equip;
t.name = '灿若繁星手镯';
t.data.push({ type: '攻击强化', value: 4972, times: 1 });
t.tag = ['减伤', '异常赋予'];
bracelets.set(t.name, t);
t = new Equip;
t.name = '黑灵缠绕手镯';
t.data.push({ type: '攻击强化', value: 3165, times: 1 });
t.data.push({ type: '技能攻击力', value: 2, times: 1 });
t.data.push({ type: '技能攻击力', value: 5, times: 1 });
t.tag = ['出血伤害 ', '出血核心', '出血技攻', '伤害转换', '异常赋予'];
t.data.push({ type: '出血伤害', value: +20, times: 1 });
t.data.push({ type: '出血比例', value: 50, times: 1 });
bracelets.set(t.name, t);
t = new Equip;
t.name = '绿野的纯真手镯';
t.data.push({ type: '攻击强化', value: 3906, times: 1 });
t.data.push({ type: '技能攻击力', value: 15, times: 0 });
t.data.push({ type: '技能攻击力', value: 5, times: 0 });
t.tag = ['眩晕', '感电', '眩晕技攻'];
bracelets.set(t.name, t);
t = new Equip;
t.name = '自由之缚手镯';
t.data.push({ type: '攻击强化', value: 4608, times: 1 });
t.data.push({ type: '技能攻击力', value: 10, times: 1 });
t.tag = ['无色技能', '无色消耗量增加'];
t.data.push({ type: '属强', value: +30, times: 1 });
bracelets.set(t.name, t);
t = new Equip;
t.name = '千里之音手镯';
t.data.push({ type: '攻击强化', value: 5066, times: 1 });
t.data.push({ type: '技能攻击力', value: 10, times: 1 });
t.data.push({ type: '技能攻击力', value: 10, times: 1 });
t.tag = ['基础精通', '小技能特化'];
t.other = ["基础精通+60%"];
bracelets.set(t.name, t);
t = new Equip;
t.name = '魔力抑制手镯';
t.data.push({ type: '攻击强化', value: 3988, times: 1 });
t.tag = ['低血', '低血核心'];
t.other = ["hp-99%,mp代替hp"];
bracelets.set(t.name, t);
t = new Equip;
t.name = '重奏者';
t.data.push({ type: '攻击强化', value: 3450, times: 1 });
t.tag = ['mp套', 'CD'];
t.data.push({ type: '冷却恢复速度', value: +30, times: 1 });
t.other = ["mp消耗量+100%"];
bracelets.set(t.name, t);
t = new Equip;
t.name = '第二个黑桃-权威';
t.data.push({ type: '攻击强化', value: 3180, times: 1 });
t.tag = ['附魔翻倍'];
t.other = ["附魔翻倍"];
bracelets.set(t.name, t);
t = new Equip;
t.name = '和谐之音手镯';
t.data.push({ type: '攻击强化', value: 4528, times: 1 });
t.tag = ['伤害分摊'];
t.other = ["伤害分摊"];
bracelets.set(t.name, t);
t = new Equip;
t.name = '生命之力皮护腕';
t.data.push({ type: '攻击强化', value: 3165, times: 1 });
t.data.push({ type: '技能攻击力', value: 2, times: 1 });
t.data.push({ type: '技能攻击力', value: 5, times: 1 });
t.tag = ['感电伤害 ', '感电核心', '感电技攻', '伤害转换', '异常赋予'];
t.data.push({ type: '感电伤害', value: +20, times: 1 });
t.data.push({ type: '感电比例', value: 50, times: 1 });
bracelets.set(t.name, t);
t = new Equip;
t.name = '无人机战术手镯';
t.data.push({ type: '攻击强化', value: 4393, times: 1 });
t.data.push({ type: '攻击强化', value: 356, times: 10 });
t.tag = ['CD', '攻击强化'];
t.data.push({ type: '冷却时间', value: -10, times: 1 });
bracelets.set(t.name, t);
t = new Equip;
t.name = '电弧爆源手镯';
t.data.push({ type: '攻击强化', value: 3638, times: 0 });
t.data.push({ type: '技能攻击力', value: 15, times: 0 });
t.data.push({ type: '技能攻击力', value: 5, times: 0 });
t.tag = ['石化', '石化技攻'];
t.other = ["美杜莎之眼"];
bracelets.set(t.name, t);
t = new Equip;
t.name = '骑士的救赎';
t.data.push({ type: '攻击强化', value: 4258, times: 1 });
t.data.push({ type: '攻击强化', value: 2333, times: 1 });
t.tag = ['移动速度', '跳跃'];
t.other = ["特技后2秒内,移动速度+100%"];
bracelets.set(t.name, t);
for (const v of bracelets.values()) {
    v.slot = '手镯';
    if (!v.isMyth) {
        v.data.push({
            type: '技能攻击力',
            value: 12,
            times: 1
        });
    }
}
export default bracelets;

