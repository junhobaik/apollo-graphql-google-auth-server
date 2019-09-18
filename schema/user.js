import { gql } from 'apollo-server';

export default gql`
  extend type Query {
    users: [User!] # user resolver
    user: User! # user resolver
  }

  type User {
    name: String
  }
`;
