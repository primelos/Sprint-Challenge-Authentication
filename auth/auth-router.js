const router = require('express').Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const validateUserData = require('./more-middleware')

const Joke = require('../auth/auth_joke_model')



router.post('/register', validateUserData, (req, res) => {
  // implement registration
  let joke = req.body
  const hash = bcrypt.hashSync(joke.password, 12)
  joke.password = hash

  Joke.add(joke)
  .then(user => {
    const token = createToken(user)
    user.token = token;
    res.status(201).json(user)
  })
  .catch(error => {
    console.log(error)
    res.status(500).json({ message: 'The user could not be registered' })
  })
});


router.post('/login', validateUserData, (req, res) => {
  // implement login
  const { username, password } = req.body
  Joke.findBy({ username })
  .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)){
            const token = createToken(user)

            res.status(200).json({
                token,
                message: `Welcome ${user.username}!`,
            })
        } else {
            res.status(401).json({ message: "Invalid Credentials" })
        }
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

function createToken(user) {
  const payload = {
    id: user.id,
    username: user.username
  };
  const secret = process.env.JWT_SECRET || 'YoU CaN not HacK tHis';
  const options = {
    expiresIn: '1hr'
  }
  return jwt.sign(payload, secret, options);
};

module.exports = router;
