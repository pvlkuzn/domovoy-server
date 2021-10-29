const {Tariff} = require('../models/models')
const ApiError = require('../error/ApiError')

class TariffController {
  
  async createNew(req, res, next){
    const {name} = req.body
    const newTariff = await Tariff.create({name})
    return res.json(newTariff)
  }

  async del(req, res, next){
    const {id} = req.body
    Tariff.destroy({
        where: {id}
      }).then((rowDeleted)=>{ // rowDeleted will return number of rows deleted
       if(rowDeleted === 1){
        console.log('Deleted successfully')
       }
     }, (err)=>{ console.log(err)})
  }

  async getAll(req, res, next){
    const tariffs = await Tariff.findAll()
    return res.json(tariffs)
  }
  async getOne(req, res, next){
    const {id} = req.params
    const tariffFounded = await Tariff.findOne({where : {id}}) 
    return res.json(tariffFounded)
  }
 
}

module.exports = new TariffController()