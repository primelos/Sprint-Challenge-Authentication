const router = require('express').Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Joke = require('../auth/auth_joke_model')



router.post('/register', (req, res) => {
  // implement registration
  let joke = req.body
  const hash = bcrypt.hashSync(use.password, 12)
  use.password = hash



});

router.post('/login', (req, res) => {
  // implement login
  const { username, password } = req.body


});

function createToken(user) {
  const payload = {
    id: user.id,
    username: user.username
  };
  const secret = process.env.JWT_SECRET || 'This is a secret';
  const options = {
    expiresIn: '1hr'
  }
  return jwt.sign(payload, secret, options);
};

module.exports = router;
