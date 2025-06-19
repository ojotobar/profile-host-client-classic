import { inject, Injectable } from '@angular/core';
import { OperationVariables } from '@apollo/client/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { getCertificationsQuery, getContactInfoQuery, getEducationsQuery, getExperiencesQuery, getProjectsQuery, getSkillsQuery } from '../graphql/queries/queries';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  apollo = inject(Apollo);
  
  getEducationListObservable(): QueryRef<any, OperationVariables>{
    return this.apollo.watchQuery({ query: getEducationsQuery })
  }

  getExperienceListObservable(): QueryRef<any, OperationVariables>{
    return this.apollo.watchQuery({ query: getExperiencesQuery })
  }

  getSkillsObservable(): QueryRef<any, OperationVariables>{
    return this.apollo.watchQuery({ query: getSkillsQuery })
  }

  getProjectsObservable(): QueryRef<any, OperationVariables>{
    return this.apollo.watchQuery({ query: getProjectsQuery })
  }

  getCertificationsObservable(): QueryRef<any, OperationVariables>{
    return this.apollo.watchQuery({ query: getCertificationsQuery })
  }

  getContactInfoObservable(): QueryRef<any, OperationVariables>{
    return this.apollo.watchQuery({ query: getContactInfoQuery })
  }
}
