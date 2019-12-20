function validateUserData(req, res, next) {
    if (!req.body.username || !req.body.password) {
      res.status(400).send({message: 'Username and password are required'});
    } else {
      next();
    }
  };

  module.exports = validateUserData