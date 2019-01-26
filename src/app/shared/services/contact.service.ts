import { Injectable } from '@angular/core';
import { Apollo, Query } from 'apollo-angular';
import { Contact } from '../models/contact.model';
import gql from 'graphql-tag';

const GetContactsQuery = gql`
  query getAllContacts($id: String!) {
    getContacts(id: $id) {
      name,
      email
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  constructor(private apollo: Apollo) { }

  getContacts(id: string): any {
    this.apollo.watchQuery<Query>({
      query: GetContactsQuery,
      variables: { id }
    })
    .valueChanges.subscribe(({data}) => {
      console.log(data);
    });
  }
}
