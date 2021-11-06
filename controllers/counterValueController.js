const { CounterValue } = require("../models/models")

class CounterValueController {
    async createNew(req, res, next){
    
    }
    async update(req, res, next){
  
    }
    async getAll(req, res, next){
      const counterValuesAll = await CounterValue.findAll()
      return res.json(counterValuesAll)
    }
    async getMonth(req, res, next){
      const p  = req.body //{period}
      console.log(p)
      const allValuesMonth = await CounterValue.findAll({
        where : {period: '2021-01-01'} 
      })
      return res.json(allValuesMonth)
    }

    async getOne(req, res, next){
      const {id} = req.params
      const valueFounded = await CounterValue.findOne({where : {id}}) 
      return res.json(valueFounded)
    }
   
  }
  
  module.exports = new CounterValueController()