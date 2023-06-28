/**
 * 武器或技能的伤害类型
 */
export type DamageType = 'none'|'physic'|'fire'|'snow'|'power'|'light'|'poison'
/**
 * 武器类型
 *
 * `type: 'weapon'` 时的 `baseType`
 */
export type WeaponType =
  '手枪-速射' | '手枪-手炮' | '霰弹-多头' | '霰弹-独头' | '近战-刀剑' | '近战-电锯' |
  '自动步枪' | '狙击枪' | '单兵火箭' | '投掷' | '放置-地雷' |
  '放置-炮台' | '放置-远古兵器' | '放置-人形' | '放置-诱导' | '放置-特殊' |
  '特殊' | '喷雾' | '喷雾-激活' | '喷雾-附魔' | '喷雾-切换' | '特殊-弓'
/**
 * 装备进化公式
 */
export interface EvolveFormula {
  id: number,
  input: {
    type: 'equipment' | 'material',
    id: number,
    img: string,
    name: string
  },
  output: {
    type: 'equipment' | 'material',
    id: number,
    img: string,
    name: string
  },
  materials: Array<{
    type: 'equipment' | 'material',
    id: number,
    img: string,
    name: string,
    num: number
  }>
}
export interface AwakenFormula {
  type: 'equipment' | 'material',
  id: number,
  img: string,
  name: string
}
/**
 * 看板信息
 *
 * `figure` 为看板图片id, 动态看板 `talklist` 为空
 */
export interface Poster {
  id: number,
  figure: string,
  type: number,
  name: string,
  desc: string,
  talklist: string[],
  height: string,
  weight: string,
  threesize: string,
  birthday: string,
  hobby: string
}
/**
 * 皮肤信息
 *
 * `img` 为装备图标, `poster` 为皮肤看板
 */
export interface Skin {
  id: number,
  name: string,
  desc: string,
  img: string,
  posterId: number,
  posters: Poster[]
}
/**
 * 装备技能
 *
 * `alb` 是游戏内自动换行的半角字符数
 */
export interface EquipmentSkill {
  title: string,
  damageType: DamageType,
  desc: string,
  alb: number,
  maxLvDesc: string
}
/**
 * 空想装备的 Extra 进化技能
 *
 * 被动技能的 `initCooldown` 和 `cooldown` 为0
 */
export interface ExtraSkill {
  type: '主动' | '被动',
  initCooldown: number,
  cooldown: number,
  title: string,
  damageType: DamageType,
  desc: string,
  alb: number,
  maxLvDesc: string
}
/**
 * 空想装备的超限技能
 *
 * 目前是根据 `exceedPeriod` 覆盖对应的普通技能
 */
export interface ExceedSkill {
  exceedPeriod: number,
  equipMaxLv: number,
  damageAdd: number,
  ammoAdd: number,
  posterId: number,
  posters: Poster[],
  title: string,
  damageType: DamageType,
  desc: string,
  alb: number,
  maxLvDesc: string,
  evolveFormula: {
    type: 'equipment' | 'material',
    id: number,
    img: string,
    name: string,
    num: number
  }[]
}
/**
 * 使魔技能
 *
 * 自律和固有的 `initCooldown` 和 `cooldown` 为0
 */
export interface PetSkill {
  title: string,
  type: '奥义' | '奥义·觉醒' | '自律' | '固有',
  desc: string,
  initCooldown: number,
  cooldown: number,
  maxLvDesc: string
}
/**
 * 使魔特性
 *
 * `count` 为此特性的计数, 比如 EX 特性值为 2
 */
export interface PetCharacter {
  id: number,
  img: string,
  count: number,
  name: string,
  desc: string,
  skill: {
    desc: string,
    props: number[]
  }
}
/**
 * 服装
 */
export interface Costume {
  type: 'costume',
  /** 唯一识别 ID */
  uid: number,
  /** 图鉴 ID */
  id: number,
  /** 装备名 */
  title: string,
  /** 图标 */
  img: string,
  /** 描述 */
  desc: string,
  /** 星级 */
  rarity: number,
  /** 负重 */
  cost: number,
  /** 等级上限 */
  maxlv: number,
  /** 系列 ID */
  seriesId: number,
  /** 系列名 */
  seriesText: string,
  /** 基础生命 */
  hpBase: number,
  /** 每级提升生命 */
  hpAdd: number,
  /** 满级生命 */
  hpMaxLv: number,
  /** 觉醒 ID, 未觉醒为 0 */
  posterId: number,
  /** 觉醒看板 */
  posters: Poster[],
  /** 装备技能 */
  skills: EquipmentSkill[],
  /** 觉醒公式 */
  awakenFormula: AwakenFormula[],
  /** 进化公式 */
  evolveFormula: {
    /** 此装备可进化 */
    input: EvolveFormula[],
    /** 进化至此装备 */
    output: EvolveFormula[]
  },
  /** 皮肤 */
  skins: Skin[]
}
export interface Weapon {
  type: 'weapon',
  /** 武器类型 */
  baseType: WeaponType,
  /** 唯一识别 ID */
  uid: number,
  /** 图鉴 ID */
  id: number,
  /** 装备名 */
  title: string,
  /** 图标 */
  img: string,
  /** 描述 */
  desc: string,
  /** 星级 */
  rarity: number,
  /** 负重 */
  cost: number,
  /** 等级上限 */
  maxlv: number,
  /** 系列 ID */
  seriesId: number,
  /** 系列名 */
  seriesText: string,
  /** 伤害类型 */
  damageType: DamageType,
  /** 基础攻击力 */
  damageBase: number,
  /** 每级提升攻击力 */
  damageAdd: number,
  /** 满级攻击力 */
  damageMaxLv: number,
  /** 基础载弹 */
  ammoBase: number,
  /** 每级提升载弹 */
  ammoAdd: number,
  /** 满级载弹 */
  ammoMaxLv: number,
  /** 基础攻速 */
  fireRateBase: number,
  /** 每级提升攻速 */
  fireRateAdd: number,
  /** 满级攻速 */
  fireRateMaxLv: number,
  /** 放置类武器基础持续时间 */
  countDownTimeBase: number,
  /** 放置类武器每级提升持续时间 */
  countDownTimeAdd: number,
  /** 放置类武器满级持续时间 */
  countDownTimeMaxLv: number,
  /** 诱导人形基础生命 */
  hpBase: number,
  /** 诱导人形每级提升生命 */
  hpAdd: number,
  /** 诱导人形满级生命 */
  hpMaxLv: number,
  /** 暴击率 */
  criticalRate: number,
  /** 多头霰弹初始弹道数 */
  multiShootLineNum: number,
  /** 放置类武器放置上限 */
  limitedNumber: number,
  /** 觉醒 ID */
  posterId: number,
  /** 觉醒看板 */
  posters: Poster[],
  /** 是否为空想装备 */
  isArtificial?: boolean,
  /** 装备技能 */
  skills: EquipmentSkill[],
  /** 空想装备 Extra 技能 */
  extraSkills?: ExtraSkill[],
  /** 空想装备超限技能 */
  exceedSkills?: ExceedSkill[],
  /** 觉醒公式 */
  awakenFormula: AwakenFormula[],
  /** 进化公式 */
  evolveFormula: {
    /** 此装备可进化 */
    input: EvolveFormula[],
    /** 进化至此装备 */
    output: EvolveFormula[]
  },
  /** 皮肤 */
  skins: Skin[]
}
export interface PassiveSkill {
  type: 'passiveSkill',
  /** 唯一识别 ID */
  uid: number,
  /** 图鉴 ID */
  id: number,
  /** 装备名 */
  title: string,
  /** 图标 */
  img: string,
  /** 描述 */
  desc: string,
  /** 星级 */
  rarity: number,
  /** 负重 */
  cost: number,
  /** 等级上限 */
  maxlv: number,
  /** 系列 ID */
  seriesId: number,
  /** 系列名 */
  seriesText: string,
  /** 觉醒 ID */
  posterId: number,
  /** 觉醒看板 */
  posters: Poster[],
  /** 是否为空想装备 */
  isArtificial?: boolean,
  /** 装备技能 */
  skills: EquipmentSkill[],
  /** 空想装备 Extra 技能 */
  extraSkills?: ExtraSkill[],
  /** 空想装备超限技能 */
  exceedSkills?: ExceedSkill[],
  /** 觉醒公式 */
  awakenFormula: AwakenFormula[],
  /** 进化公式 */
  evolveFormula: {
    /** 此装备可进化 */
    input: EvolveFormula[],
    /** 进化至此装备 */
    output: EvolveFormula[]
  },
  /** 皮肤 */
  skins: Skin[]
}
export interface Pet {
  type: 'pet',
  /** 唯一识别 ID */
  uid: number,
  /** 图鉴 ID */
  id: number,
  /** 使魔名字 */
  title: string,
  /** 图标 */
  img: string,
  /** 描述 */
  desc: string,
  /** 星级 */
  rarity: number,
  /** 等级上限 */
  maxlv: number,
  /** 基础攻击力 */
  damageBase: number,
  /** 每级提升攻击力 */
  damageAdd: number,
  /** 满级攻击力 */
  damageMaxLv: number,
  /** 暴击率 */
  criticalRate: number,
  /** 基础攻速 */
  fireRateBase: number,
  /** 每级提升攻速 */
  fireRateAdd: number,
  /** 满级攻速 */
  fireRateMaxLv: number,
  /** 觉醒 ID */
  posterId: number,
  /** 觉醒看板 */
  posters: Poster[],
  /** 使魔技能 */
  skills: PetSkill[],
  /** 使魔特性 */
  characters: PetCharacter[],
  /** Mega 进化 */
  mega: Array<({
    baseType: 'character',
    /** 消耗碎片数 */
    cost: number
  } & PetCharacter) | ({
    baseType: 'skill',
    /** 消耗碎片数 */
    cost: number
  } & PetSkill)>,
  /** 使魔碎片 */
  chip: {
    uid: number,
    /** 碎片图鉴编号 */
    id: number,
    /** 星级 */
    rarity: number,
    /** 碎片名 */
    title: string,
    /** 图标 */
    img: string,
    /** 描述(收集xx个可合成xxx使魔) */
    desc: string,
    /** 掉落信息(可在祈愿中获得) */
    drop: string,
    /** 合成/进化需要碎片数 */
    cost: number
  }
}

export type Equipment = Weapon | Costume | PassiveSkill | Pet
