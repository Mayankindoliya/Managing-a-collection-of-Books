const Users = require('../models/users');
const bcryptjs = require('bcryptjs');
const jwt = require('../helpers/jwt');

class usersControllers {

  static async registerUsers(document) {
    const existingUser = await Users.findOne({ $or: [{ username: document.username }, { emailId: document.emailId }] }).lean()
    if (existingUser) {
      throw new Error('User is already exists (())')
    }
    const salt = bcryptjs.genSaltSync(10)
    const hash = bcryptjs.hashSync(document.password, salt)
    document.password = hash
    const users = await Users.create(document)
    return users
  }

  static async loginUsers(document) {
    const users = await Users.findOne({ username: document.username }, 'password name emailId').lean()
    if (!users) {
      throw new Error('user not Found!!')
    }
    if (!bcryptjs.compareSync(document.password, users.password)) {
      throw new Error('password not matched !!')
    }
    const jwtToken = jwt.createJwt({ id: users._id })
    console.log('token created')
    return jwtToken
  }

};

module.exports = usersControllers;