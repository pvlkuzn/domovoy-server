
const {Client, Pool} = require('pg')

module.exports = async function checkDb(dbName){
    const toServer = {      // parameters for connection on server
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,     
      password: process.env.DB_PASSWORD, 
    }
    const toDb = {          // parameters for connection on server
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,     
      password: process.env.DB_PASSWORD, 
      database: dbName
    }
    let serverOk = false, dbNotExist = false 
    
    const connectToServer =  new Client(toServer)   // 
    await connectToServer.connect()
      .catch(err=>{
        const errStatus =  (err.stack.indexOf('does not exist'))? 'does not exist!' : ' other' // сервер не доступен
        console.log(`Connection to server error : ${errStatus}`)
        serverOk = false;  // server fail
        return false
      })
      .then(()=>{
        serverOk = true;  // server is ok
      })
      .finally(()=>{
        connectToServer.end()
      }) 
  
      
    const connectToDb = new Client(toDb)   // подключения к базе dbName (передаётся параметром)
    await connectToDb.connect()
    .then(()=>{
      dbNotExist = false //db is existing
      console.log(`Connected to DB  ${toDb.database} : Ok`)
      return true
    })
      .catch( err =>{
        const errDb = (err.stack.indexOf('does not exist'))? 'does not exist!' : ' other' // Если базы нет, то пробуем создать
        dbNotExist = true
       //console.log(`Connection to DB error : ${errDb}`)
      })
    .finally(()=>{
      connectToDb.end()
    }) 

    if (serverOk && dbNotExist){
        const connectForCreate = new Client(toServer)
        await connectForCreate.connect()
        //.then( ()=> {         })
        .catch(err =>{
          console.log(`Connect for create error : ${err.stack}`)
          return false
        })
        await connectForCreate.query(`CREATE DATABASE ${dbName}`)
          .then( result =>{ 
            console.log(`DB ${dbName} created`)
            return true
          })
          .catch(err =>{
            console.log(`Create error : ${err.stack}`)
            return false
          })
          .finally(()=>{
            connectForCreate.end()
       //     connectToDb.end()
            //connectToServer.end()
          }) 
    }
  }
    
