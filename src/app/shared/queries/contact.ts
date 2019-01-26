import gql from 'graphql-tag';

export const GetContactsQuery = gql`
  query GetContacts($id: String!) {
    getContacts(id: $id) {
      name
    }
  }
`;
