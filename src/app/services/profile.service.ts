import { Injectable } from '@angular/core';
import { OperationVariables } from '@apollo/client/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { GetProfileSummaryForMenuQuery } from '../graphql/queries/profile-queries';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private apollo: Apollo) { }

  getSummaryForMenuObservable(): QueryRef<any, OperationVariables> {
    return this.apollo
      .watchQuery({
        query: GetProfileSummaryForMenuQuery
      })
  }
}
