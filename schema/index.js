import { gql } from 'apollo-server';

import user from './user';

const link = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [link, user];
