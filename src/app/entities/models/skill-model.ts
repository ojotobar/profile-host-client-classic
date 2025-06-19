import { XpLevelEnum } from "../enums/xp-level-enum";

export interface SkillResponseModel{
    id: string,
    userId: string,
    name: string,
    level: XpLevelEnum,
    levelDescription: string,
    yearsOfExperience: number,
    certified: boolean
}