const { Counter } = require("../models/models")
class CounterController {
    async createNew(req, res, next){
      const {serialNumber} = req.body
      console.log(serialNumber)
      const checkExisting = await Counter.findOne({where: {serialNumber}})
      if (checkExisting) {
        return next(ApiError.badRequest('Счётчик с таким серийным номером уже существует'))
      }
      const newCounter = await Counter.create({serialNumber})
      return res.json(newCounter)
    
    }
    async update(req, res, next){                     // !!!
      const {id} = req.body 
      const counter = await Counter.findOne({where : {id}})
    }
    async getAll(req, res, next){
      const counters = await Counter.findAll()
      return res.json(counters)
    }
    async getOne(req, res, next){
      const {id} = req.params
      const counterFounded = await Counter.findOne({where : {id}}) 
      return res.json(counterFounded)
  
    }
   
  }
  
  module.exports = new CounterController()