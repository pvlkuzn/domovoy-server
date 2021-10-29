const { Apartment } = require("../models/models")

class ApartmentController {
    async createNew(req, res, next){
      const {number, info} = req.body
        console.log()
        const checkExisting = await Apartment.findOne({where: {number}})
        if (checkExisting) {
          return next(ApiError.badRequest('Квартира с таким номером уже существует'))
        }

        const newApartment = await Apartment.create({number, info})
        return res.json(newApartment)
      
    }
    async update(req, res, next){
  
    }
    async getAll(req,res, next){
      const apartments = await Apartment.findAll()
      return res.json(apartments)
      
    }
    async getOne(req,res, next){
      const {number} = req.params
      console.log(typeof number)

      const apartmentFounded = Apartment.findOne({where : {number}})
      console.log(apartmentFounded)
      return res.json(apartmentFounded)
    }
   
  }
  
  module.exports = new ApartmentController()