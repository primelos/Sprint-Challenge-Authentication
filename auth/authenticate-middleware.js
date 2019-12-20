/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  res.status(401).json({ you: 'shall not pass!' });
    const { authorization } = req.headers;
    console.log(`authorization`, authorization)

  if (authorization) {
    const secret = process.env.JWT_SECRET || 'YoU CaN not HacK tHis';
    
    jwt.verify(authorization, secret, function(err, decodedToken) {
      if(err) {
        console.log(`err`, err)
        req.token = decodedToken;
        console.log(`req.token`,req.token)
        next()
      }
    })
  } else {
    res.status(400).json({ message: "Please login and try again"})
  }
};
