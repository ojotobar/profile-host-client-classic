import { gql } from "apollo-angular";

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