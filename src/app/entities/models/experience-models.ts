import { LocationLean } from "./profile-models";

export interface ExperienceResponseModel{
    id: string,
    userId: string,
    organization: string,
    jobTitle: string,
    startDate: Date,
    endDate: Date | null,
    accomplishments: string[],
    location: LocationLean
}