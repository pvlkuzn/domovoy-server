require('dotenv').config()

const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')

const cors = require('cors')
const { request } = require('express')
const router = require('./routes/rootRouter')

const errorHandler = require('./middleware/ErrorHandlerMiddleware')
const ErrorHandlerMiddleware = require('./middleware/ErrorHandlerMiddleware')

const PORT = process.env.PORT || 5000
const API_VERSION = process.env.API_VERSION || '1'

const app = express()
app.use(cors())
app.use(express.json())
app.use(`/api/${API_VERSION}`,router)  // не уверен в необходимости версификации апи

app.use(ErrorHandlerMiddleware)  // обработка ошибок всегда в конце

const start = async() =>{
    try {
      await sequelize.authenticate()
      await sequelize.sync()

      app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

    } catch(e) {
        console.log(e) // обработка ошибок
    }
}

start()