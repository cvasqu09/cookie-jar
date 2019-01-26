import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Contact } from '../models/contact.model';
import gql from 'graphql-tag';

const GetContactsQuery = gql`
  query getAllContacts($id: String!) {
    getContacts(id: $id) {
      name
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  constructor(private apollo: Apollo) { }

  getContacts(id: string): any {
    this.apollo.watchQuery({
      query: gql`
        {
          getContacts(id: "2") {
            name
          }
        }
      `
    })
    .valueChanges.subscribe(({data}) => {
      console.log(data);
    });
  }
}
