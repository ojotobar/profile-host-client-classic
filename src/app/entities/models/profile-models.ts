import { SocialMediaEnum } from "../enums/social-media-enum"

export interface ProfileSummaryForMenuResult{
    success: boolean,
    summary: ProfileSummaryForMenu
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