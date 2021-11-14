const { User } = require('../models/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const ApiError = require('../error/ApiError')


const generateToken = (id, email, role) =>{
  return jwt.sign(
    { id, email, role},
    process.env.SECRET_KEY,
    {expiresIn: '24h'}
  )
}

class UserController {
  async createNew(req,res, next){
    try {
      const {email, password, role, name, phone, desc} = req.body
      if (!email || !password){
          return next(ApiError.badRequest('Не правильное почта или пароль')) // первая валидация на клиенте
      }
      const candidate = await User.findOne({where : {email}})
      if (candidate){
        return next(ApiError.badRequest('Пользователь с такой почтой существует'))
      }
      const hashPassword = await bcrypt.hash(password, 5)   // хеш пароля
      const newUser = await User.create({email, password : hashPassword, role, name, phone, desc}) // создали пользователя
      const token =  generateToken(newUser.id, newUser.password, newUser.role)   // генерируем токен
     
      return res.json({token})

    } catch (error) {
      next(ApiError.badRequest(error.message))
    }
  }
  async login(req, res, next){
    const {email, password} = req.body
    const user = await User.findOne({where:{email}})
    if (!user){
      return next(ApiError.internal('Пользователь не найден'))
    }
    let comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword){
      return next(ApiError.internal('Неверный пароль'))
    }
    const token = generateToken(user.id, user.email, user.role)
    return res.json({token})
  }

  async check(req, res, next){
    const token = generateToken(req.user.id, req.user.email, req.user.role)
    return res.json({token})
  }


  async getAll(req, res, next){
    const users = await User.findAll({
      attributes : {exclude : ['password']}
    })
    return  res.json(users)  
  }
  

  async getOne(req,res, next){
    try {
      const {id} = req.params
      const userFounded = await User.findOne({
        attributes : {exclude : ['password']},
        where : {id}}) 
      return res.json(userFounded)
        
    } catch (error) {
      next()
    }
    
  }
}

module.exports = new UserController()