const { User } = require('../models/models')

ApiError = require('../error/ApiError')
class UserController {
  async createNew(req,res, next){
      const {email, password, role, name, phone, desc} = req.body
      if (!email || !password){
          return console.log('Incorrect email or password') // первая валидация на клиенте
      }
      const newUser = await User.create({email, password, role, name, phone, desc})
      return res.json(newUser)
/*
      id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
      email: {type: DataTypes.STRING, unique: true, allowNull: false },       // уникальный логин
      password: {type: DataTypes.STRING, allowNull: false},              // шифровние
      role: {type: DataTypes.STRING, defaultValue : "USER"}, // или ссылка на таблицу с ролями или хардкод?
      name:{type: DataTypes.STRING, allowNull: false },          // фио
      phone:{type: DataTypes.STRING,},         //  номер телфона
      desc:{type: DataTypes.STRING,}           // доп инфа (?) нужна ли

*/
  }
  async login(req, res, next){
    res.json('llllllllllll')
  }
  async getAll(req, res, next){
    const users = await User.findAll({
      attributes : {exclude : ['password']}
    })
    res.json(users)
  }

  async getOne(req,res, next){
    const {id} = req.params
    const userFounded = await User.findOne({
      attributes : {exclude : ['password']},
      where : {id}}) 
    return res.json(userFounded)
    
  }

  async check(req, res, next){
    const {id} = req.query
    if (!id) {
      return next(ApiError.badRequest('No id'))
    }
  }
}

module.exports = new UserController()