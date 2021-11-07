const {Sequelize} = require('sequelize')

const {Client} = require('pg')
const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,     
  password: process.env.DB_PASSWORD, 
})

client.connect(err =>{
  if (err){
    console.log(`Connection error : ${err.stack}`)
  } else {
    console.log(`Connected`)
  }
})

client.query(`CREATE DATABASE ${process.env.DB_NAME}`,(err,res)=>{
  if (err) throw err
  console.log(err)
  console.log(`Result creation ${res}`)
  client.end()
})
 
//const connectToCheck  = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@h${process.env.DB_HOST}:${process.env.DB_PORT}/postgres`
//const connectToCreate = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@h${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
/*
console.log(connectToCheck)
console.log(connectToCreate)

pg.connect(connectToCheck, (err, client, done)=>{
  if (err) console.log(`Error while connection: ${err}`)
  client.query(`CREATE DATABASE ${process.env.DB_NAME}`,(err)=>{
    if (err && !~err.message.indexOf('All ok! Already exist')) return done(err)
    client.end()
  })
})
*/

module.exports = new Sequelize(
  process.env.DB_NAME,     // имя базы home
  process.env.DB_USER,     // имя пользователя
  process.env.DB_PASSWORD, // пароль
  {
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT
  }   
)