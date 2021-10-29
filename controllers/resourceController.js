const { Resource } = require("../models/models")

class ResourceController {
    async createNew(req, res, next){
      const {type} = req.body
      const newResource = await Resource.create({type})
      return res.json(newResource)
    }

    async del(req, res, next){
      const {id} = req.body
      Resource.destroy({
        where : {id}
      }).then((rowDeleted)=>{
        if (rowDeleted === 1) {
          console.log('Deleting successfully')
        }
      },(err)=>{ console.log(err)})
    }

    async getAll(req,res){
      const resources = await Resource.findAll()
      console.log (resources)
      return res.json(resources)
    }
    async getOne(req,res, next){
      const {id} = req.params
      const resourceFounded = await Resource.findOne({where : {id}}) 
      return res.json(resourceFounded)
  
    }
   
  }
  
  module.exports = new ResourceController()
