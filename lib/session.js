import session from 'express-session';
import mongoose from './mongoose';
const MongoStore = require('connect-mongo')(session);

require('dotenv').config();

const appSession = session({
  name: 'dashboard-temp-name',
  secret: 'dashborad-temp-secret',
  resave: true,
  saveUninitialized: false,
  // cookie: {
  //   secure: process.env.NODE_ENV == 'production',
  //   maxAge: 1000 * 60 * 60 * 24 * 1,
  //   path: '/',
  //   domain: `http://localhost:3000`
  // },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
});

export default appSession;
