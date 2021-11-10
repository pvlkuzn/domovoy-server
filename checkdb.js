
const {Client, Pool} = require('pg')

module.exports = async function checkDb(dbName){
  //const connectToServer  = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@h${process.env.DB_HOST}:${process.env.DB_PORT}/postgres`
  //const connectToDB = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@h${process.env.DB_HOST}:${process.env.DB_PORT}/${dbName}`
  
  /*const client = new Client({
    connectToServer,
  }) */ 
// --- Check connection to server
  const connectToServer =  new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,     
    password: process.env.DB_PASSWORD, 
  })

  
  connectToServer.connect(err =>{  // проверяем доступность сервера
    if (err){
      const errStatus =  (err.stack.indexOf('does not exist'))? 'does not exist!' : ' other' // сервер не доступен
      console.log(`Connection to server error : ${errStatus}`)
    } else {
      console.log(`Connected to server!`)  // сервер доступен
      
      const connectToDb = new Client({   // подключения к базе dbName (передаётся параметром)
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,     
        password: process.env.DB_PASSWORD, 
        database: dbName
      })

      connectToDb.connect(err =>{         // проверям возможность подключения к базе
        if (err){
          const errDB = (err.stack.indexOf('does not exist'))? 'does not exist!' : ' other' // Если базы нет, то пробуем создать
          console.log(`Connection to DB error : ${errDB}`)
           
          const createDB = new Client({    // создаём новое подключаемся к серверу
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,     
            password: process.env.DB_PASSWORD, 
          })
           createDB.connect()  // подключаемся к серверу
            .then(()=>{ 
              createDB.query(`CREATE DATABASE ${dbName}`)       // создаём базу
                .then(result => console.log(`DB created`))
                .catch(err => console.log(`DB error`, err.stack))
                .then(()=> createDB.end())   
              })
          
          } else {
            console.log(`Connected to DB`)
            
          }
      })
    }
  })
  
}
  // ----



/*
  connectToServer.query('SELECT NOW()', (err, res)=>{
    console.log(`-------`,err, res)
    connectToServer.end()
  })
*/
  /*  
  connectToDb.query('SELECT NOW()', (err, res)=>{
    if (err) {
      console.log(`Error : `,err)
    } else 
      {console.log(`Response : `,res)
    }
    connectToDb.end()
  })
  
  }



/*
  client.connect()
  client.query('SELECT NOW()',(err,res)=>{
    console.log(err,res)
    client.end()
  })
*/


  /*


//client.query('SELECT')
/*
client.query(`CREATE DATABASE ${process.env.DB_NAME}`,(err,res)=>{
  if (err) throw err
  console.log(err)
  console.log(`Result creation ${res}`)
  client.end()
})
*/
/*
class CheckDb{
  async checkConnect(){
    client.connect(err =>{
      if (err){
        console.log(`Connection error : ${err.stack}`)
        return false
      } else {
        console.log(`Connected to server`)
        return true
      }
    })
    client.end()
  }
  
  async checkExist(dbName){
    //const pathToDb = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@h${process.env.DB_HOST}:${process.env.DB_PORT}/${dbName}`   
    const checkIt = new Client({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,     
      password: process.env.DB_PASSWORD,
      database:  dbName
    })
    const createDb = (dbName)=>{
       checkIt.query(`CREATE DATABASE ${dbName}`,(err,res)=>{
         console.log(err,res)
       })
    } 
      checkIt.connect(err=>{
      if (err){
        console.log(`DB ${dbName} not exist. Error : ${err.stack}`)
        return false
      } else {
         console.log(`DB ${dbName} is exist`)
       return true
      }
    })
    checkIt.end 
  }
}
*/

      /*const pool = new Pool({
      connectToServer,
    })
    pool.query('SELECT NOW',(err, res)=>{
      console.log(err,res)
      pool.end()
    }) */
    

 


 
//createDb(dbName)
//const connectToCheck  = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@h${process.env.DB_HOST}:${process.env.DB_PORT}/postgres`
//const connectToCreate = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@h${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
/*
pg.connect(connectToCheck, (err, client, done)=>{
  if (err) console.log(`Error while connection: ${err}`)
  client.query(`CREATE DATABASE ${process.env.DB_NAME}`,(err)=>{
    if (err && !~err.message.indexOf('All ok! Already exist')) return done(err)
    client.end()
  })
})
*/