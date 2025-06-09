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