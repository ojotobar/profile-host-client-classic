import { EducationLevelEnum } from "../enums/education-level-enum";
import { LocationLean } from "./profile-models";

export interface EducationResponseModel{
    id: string,
    userId: string,
    institutionName: string,
    major: string,
    startDate: Date,
    endDate: Date | null,
    level: EducationLevelEnum,
    levelDescription: string,
    otherLevelSpecification: string | '',
    location: LocationLean
}