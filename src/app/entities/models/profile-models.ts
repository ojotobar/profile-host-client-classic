import { SocialMediaEnum } from "../enums/social-media-enum"
import { SkillLeanModel } from "./skill-models"

export interface ProfileSummaryForMenuResult{
    success: boolean,
    summary: ProfileSummaryForMenu
}

export interface ProfileRecordResult {
    profile: ProfileModel | null,
    summary: ProfileRecordSummaryModel | null,
    success: boolean
}

export interface ProfileSummaryForMenu{
    firstName: string,
    lastName: string,
    profilePics: string,
    profileHeading: string,
    showXpMenu: boolean,
    showSkillMenu: boolean,
    showEducationMenu: boolean,
    showProjectMenu: boolean,
    showCertificationMenu: boolean,
    socialMedia: SocialMedia[]
}

export interface SocialMedia{
    name: string,
    iconName: string,
    link: string,
    type: SocialMediaEnum
}

export interface ProfileModel {
    firstName: string,
    lastName: string,
    otherName: string | null,
    email: string,
    phoneNumber: string,
    photoUrl: string,
    cvUrl: string,
    location: ProfileLocationModel,
    socialMedia: SocialMedia[]
}

export interface ProfileRecordSummaryModel {
    profileHeading: string,
    yearsOfExperience: number,
    skills: string[],
    skillCount: number,
    educationCount: number,
    projectCount: number,
    certificationCount: number
}

export interface ProfileLocationModel{
    line1: string,
    line2: string | null,
    latitude: string,
    longitude: string,
    city: string,
    state: string,
    country: string,
    postalCode: string
}

export interface LocationLean {
    city: string,
    state: string,
    country: string
}

export interface ContactInfoResponseModel {
    email: string,
    phoneNumber: string,
    socialMedia: SocialMedia[] | [],
    location: ProfileLocationModel,
    success: boolean
}