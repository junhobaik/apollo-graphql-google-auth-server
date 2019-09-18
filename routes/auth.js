/* eslint-disable no-unused-vars */
import express from 'express';
import passport from 'passport';

const auth = express.Router();

import { userModel } from '../models';

const clientPath = 'http://localhost:3000';

auth.get(
  '/google',
  passport.authenticate('google', { scope: ['profile'] }),
  (req, res) => {}
);

auth.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: clientPath }),
  (req, res) => {
    const { id, displayName } = req.user;

    userModel.findOne({ name: displayName }, (err, userData) => {
      if (err) return new Error(err);
      if (!userData) {
        // create user
        res.redirect(`${clientPath}`);
      } else {
        res.redirect(`${clientPath}`);
      }
      return null;
    });
  }
);

auth.get('/logout', (req, res) => {
  req.logout();
  res.redirect(clientPath);
});

export default auth;
