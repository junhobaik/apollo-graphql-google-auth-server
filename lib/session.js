import session from 'express-session';
import mongoose from './mongoose';
const MongoDBStore = require('connect-mongodb-session')(session);

const appSession = session({
  name: 'dashboard-temp-name',
  secret: 'dashborad-temp-secret',
  resave: true,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV == 'production',
    maxAge: 1000 * 60 * 60 * 24 * 31
  },
  store: new MongoDBStore({ mongooseConnection: mongoose.connection })
});

export default appSession;
