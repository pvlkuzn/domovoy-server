const {Tariff} = require('../models/models')
const ApiError = require('../error/ApiError')

class TariffController {
  
  async createNew(req, res, next){
  
   const {tariff} = req.body
   console.log(req.body)
   console.log (`tariff : ${tariff}`)
   const newTariff = await Tariff.create({tariff})
   return res.json(newTariff)
  }
  async del(req, res, next){

  }
  async getAll(req,res){
    const tariffs = await Tariff.findAll()
    return res.json(tariffs)
  }
  async getOne(req,res){
    const {id} = req.params
    const tariffOne = await Tariff.findOne({where : {id}}) 
    return res.json(tariffOne)
  }
 
}

module.exports = new TariffController()