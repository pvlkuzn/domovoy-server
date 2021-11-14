const ApiError = require("../error/ApiError")
const { Counter } = require("../models/models")

class CounterController {
    async createNew(req, res, next){
      try {
        const {serialNumber} = req.body
        const checkExisting = await Counter.findOne({where: {serialNumber}})
        if (checkExisting) {
          return next(ApiError.badRequest('Счётчик с таким серийным номером уже существует'))
        }
        const newCounter = await Counter.create({serialNumber})
        return res.json(newCounter)
  
      } catch(error) {
        next(ApiError.badRequest(error.message))
      }
    }
    async update(req, res, next){                     // !!!
      try {
      const {id} = req.body 
      const counter = await Counter.findOne({where : {id}})
      } catch(error){
        next(ApiError.badRequest(error.message))
      }
    }

    async getAll(req, res, next){
      try {
        const counters = await Counter.findAll()
        return res.json(counters)
      } catch(error) {
        next(ApiError.badRequest(error.message))
      }
    }

    async getOne(req, res, next){
      try {
      const {id} = req.params
      const counterFounded = await Counter.findOne({where : {id}}) 
      return res.json(counterFounded)
      } catch (error){
        next(ApiError.badRequest(error.message))
      }
    }
   
  }
  
  module.exports = new CounterController()