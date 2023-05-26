const jwt = require('jsonwebtoken');

function createJwt(payload) {
const jwtToken =  jwt.sign(payload, process.env.JWT_SECRETKEY, {expiresIn: '2days'})
return jwtToken
};

module.exports = {
  createJwt
};