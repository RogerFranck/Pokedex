interface IDamageInfoName {
    name: string
}

export interface IDamageInfo {
    double_damage_from:Array<IDamageInfoName>,
    double_damage_to:Array<IDamageInfoName>,
    half_damage_from:Array<IDamageInfoName>,
    half_damage_to:Array<IDamageInfoName>,
    no_damage_from:Array<IDamageInfoName>,
    no_damage_to:Array<IDamageInfoName>,
}