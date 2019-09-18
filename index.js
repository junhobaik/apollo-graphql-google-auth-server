import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';

import typeDefs from './schema';
import resolvers from './resolvers';
import session from './lib/session';
import { userModel } from './models';

const app = express();
require('dotenv').config();

let serverUrl;
let localeUrl;
if (process.env.NODE_ENV === 'development') {
  serverUrl = 'http://localhost:4000';
  localeUrl = 'http://localhost:3000';
} else {
  serverUrl = `${process.env.AWS_PUBLIC_DNS}:4000`;
  localeUrl = 'http://localhost:3000'; // 차후 배포된 프론트 페이지 url로 수정
}
console.log('> serverUrl: ', serverUrl);
console.log('> localeUrl: ', localeUrl);

const corsOptions = {
  origin: [localeUrl, serverUrl],
  credentials: true
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    if (req.user) console.log(req.user);
    return { userModel };
  },
  // 아래 두 옵션은 production에서도 playground를 사용하기 위한 옵션.
  introspection: true,
  playground: true
});

app.use(session);
app.use(cors(corsOptions));
server.applyMiddleware({ app, cors: false });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at ${server.graphqlPath}`)
);
