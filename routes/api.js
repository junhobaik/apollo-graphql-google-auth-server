import express from 'express';
const api = express.Router();

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    console.log('> isAuthenticated: ', true, 'req.user: ', req.user);
    return next();
  }
  console.log('> isAuthenticated: ', false, 'req.user: ', req.user);
  res.sendStatus(401);
};

api.get('/account', isAuthenticated, (req, res, next) => {
  console.log('/account, req.user:', req.user);
  res.json({
    title: 'Account',
    name: req.user.displayName,
    user: req.user
  });
});

api.get('/', (req, res) => {
  console.log('/api');
  res.sendStatus(200);
});

export default api;
