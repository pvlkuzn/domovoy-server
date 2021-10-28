ApiError = require('../error/ApiError')
class UserController {
  async createNew(req,res, next){
      const {email, password} = req.body
      if (!email || !password){
          return console.log('Incorrect email or password') // первая валидация на клиенте
      }
  }
  async login(req, res, next){
    res.json('llllllllllll')
  }
  async getAll(req, res, next){
    res.json('43333')
  }

  async getOne(req,res, next){
    res.json('11111')
  }

  async check(req, res, next){
    const {id} = req.query
    if (!id) {
      return next(ApiError.badRequest('No id'))
    }
  }
}

module.exports = new UserController()