const jwt = require('jsonwebtoken');

function createJwt(payload) {
const jwtToken =  jwt.sign(payload, process.env.JWT_SECRETKEY, {expiresIn: '2days'})
return jwtToken
};

function verifyJwt(token) {
  const payload = jwt.verify(token, process.env.JWT_SECRETKEY)
  return payload
}

module.exports = {
  createJwt,
  verifyJwt
}; 