/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers;
  console.log(`token`, token)
  
  if (token) {
    const secret = process.env.JWT_SECRET || 'YoU CaN not HacK tHis';
    
    jwt.verify(token, secret, function(err, decodedToken) {
      if(err) {
        res.status(401).json({ you: 'shall not pass!' });
      } else {
        req.token = decodedToken;
        console.log(req.token)
        next();
      }
    });
  } else {
    res.status(400).json({ message: "Please login and try again" });
  }
};