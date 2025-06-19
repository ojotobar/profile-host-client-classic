import { gql } from "apollo-angular";

export const getEducationsQuery = gql`
    query{
        educations{
            id
            userId
            institutionName
            major
            startDate
            endDate
            level
            levelDescription
            otherLevelSpecification
            location{
                city
                state
                country
            }
        }
    }
`;

export const getExperiencesQuery = gql`
    query{
        experiences{
            id
            userId
            organization
            jobTitle
            startDate
            endDate
            accomplishments
            location{
                city
                state
                country
            }
        }
    }
`;

export const getSkillsQuery = gql`
    query{
        skills{
            id
            userId
            name
            level
            levelDescription
            yearsOfExperience
            certified
        }
    }
`;

export const getProjectsQuery = gql`
    query{
        projects{
            id
            userId
            name
            description
            link
            technologies
        }
    }
`;

export const getCertificationsQuery = gql`
    query{
        certifications{
            id
            userId
            name
            institution
            dateObtained
            expires
            link
            yearsOfValidity
        }
    }
`;

export const GetProfileSummaryForMenuQuery = gql`
    query {
        profileSummaries{
            success
            summary{
                firstName
                lastName
                profilePics
                profileHeading
                showXpMenu
                showSkillMenu
                showEducationMenu
                showProjectMenu
                showCertificationMenu
                socialMedia{
                    name
                    iconName
                    link
                    type
                }
            }
        }
    }
`;

export const GetProfileRecordQuery = gql`
    query{
        profileRecord{
            profile{
                firstName
                lastName
                otherName
                email
                phoneNumber
                photoUrl
                cvUrl
                location{
                    line1
                    line2
                    latitude
                    longitude
                    city
                    state
                    country
                    postalCode
                }
                socialMedia{
                    name
                    iconName
                    link
                    type
                }
            }
            summary{
                profileHeading
                yearsOfExperience
                skills
                skillCount
                educationCount
                projectCount
                certificationCount
            }
            success
        }
    }
`;

export const getContactInfoQuery = gql`
    query{
        userContactInfo{
            email
            phoneNumber
            socialMedia{
                name
                link
                iconName
                type
            }
            location{
                line1
                line2
                city
                state
                country
                postalCode
                latitude
                longitude
            }
            success
        }
    }
`;

export const getFaviconQuery = gql`
    query{
        profileImage{
            base64
            contentType
        }
    }
`;