const router = require('express').Router();

router.post('/register', (req, res) => {
  // implement registration
});

router.post('/login', (req, res) => {
  // implement login
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
