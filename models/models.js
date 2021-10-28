const {DataTypes} = require('sequelize')
const sequelize = require('../db')


const User = sequelize.define('user', {        // пользователь
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
  email: {type: DataTypes.STRING, unique: true, allowNull: false },       // уникальный логин
  password: {type: DataTypes.STRING, allowNull: false},              // шифровние
  role: {type: DataTypes.STRING, defaultValue : "USER"}, // или ссылка на таблицу с ролями или хардкод?
  name:{type: DataTypes.STRING, allowNull: false },          // фио
  phone:{type: DataTypes.STRING,},         //  номер телфона
  info:{type: DataTypes.STRING,}           // доп инфа (?) нужна ли
})

const Resource = sequelize.define('resource',{           // ресурсы
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
  type:{type: DataTypes.STRING, unique: true},          //  вода/ЭЭ
})
  
const Tariff = sequelize.define('tariff',{            // тарифы
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
  tariff:{type: DataTypes.STRING, unique: true},          // ЭЭ.Ночь, ЭЭ.День  
})

const Counter = sequelize.define('counter',{                   // счётчик
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    // resourceID    - ресурс
    // tariffID      - тариф
    // apartamentId  - квартира
    serialNumber: {type :DataTypes.STRING, unique :true},
})

const CounterValue = sequelize.define('countervalue',{      // передаваемые показания за месяц
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    //counterId : {},
    value : {type : DataTypes.INTEGER,}
})
const Apartment = sequelize.define('apartament',{            // квартира
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    number :{ type :DataTypes.INTEGER, allowNull: false },  // номер квартиры
    //user :{ type:DataTypes.}, // ссылка на пользователя
    info: {type: DataTypes.STRING, },
})

// счетчик
Counter.hasOne(Resource)   // один ресурс
// Resource.belongsTo(Counter)

Counter.hasOne(Tariff)     // один тариф
// Tariff.belongsTo(Counter)

Counter.hasOne(Apartment)  // одна квартира
// Apartment.belongsTo(Counter)
// Показания
CounterValue.hasOne(Counter)  //показания одного счётчика
// Counter.belongsTo(CounterValue)
// Квартира
Apartment.hasOne(User)  // один польователь - одна квартира ю в будущем исправить
// User.belongsTo(Apartment)

module.exports = {
   
  User,
  Resource,
  Tariff,
  Counter,
  CounterValue,
  Apartment
}