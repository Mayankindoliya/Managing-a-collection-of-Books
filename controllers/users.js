const Users = require('../models/users');
const bcryptjs = require('bcryptjs');

class usersControllers {

 static async registerUsers (document){
  const salt = bcryptjs.genSaltSync(10)
  const hash = bcryptjs.hashSync(document.password, salt)
  document.password = hash
 const users = await Users.create(document)
 return users
 }



};

module.exports = usersControllers;