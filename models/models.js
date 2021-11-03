const {DataTypes} = require('sequelize')
const sequelize = require('../db')


const User = sequelize.define('User', {        // пользователь
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
  email: {type: DataTypes.STRING, unique: true, allowNull: false },       // уникальный логин
  password: {type: DataTypes.STRING, allowNull: false},              // шифровние
  role: {type: DataTypes.STRING, defaultValue : "USER"}, // или ссылка на таблицу с ролями или хардкод?
  name:{type: DataTypes.STRING, allowNull: false },          // фио
  phone:{type: DataTypes.STRING,},         //  номер телфона
  desc:{type: DataTypes.STRING,}           // доп инфа (?) нужна ли
})

const Resource = sequelize.define('resource',{           // ресурсы
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
  name:{type: DataTypes.STRING, unique: true},          //  вода/ЭЭ
  desc:{type: DataTypes.STRING }            // описание
})
  
const Tariff = sequelize.define('tariff',{            // тарифы
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
  name:{type: DataTypes.STRING, unique: true},          // ЭЭ.Ночь, ЭЭ.День  
  desc:{type: DataTypes.STRING }            // описание
})

const Counter = sequelize.define('counter',{                   // счётчик
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    // resourceID    - ресурс
    // tariffID      - тариф
    // apartamentId  - квартира
    serialNumber: {type :DataTypes.STRING},
    desc:{type: DataTypes.STRING }            // описание
})

const CounterValue = sequelize.define('counterValue',{      // передаваемые показания за месяц
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    //counterId : {},
    period: {type : DataTypes.STRING, },  // задаём период за который переданы показания. (?) Формируем
    value : {type : DataTypes.INTEGER,}   // показания счётчика
})
const Apartment = sequelize.define('apartment',{            // квартира
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    number :{ type :DataTypes.STRING, allowNull: false, unique :true },  // номер квартиры
    //user :{ type:DataTypes.}, // ссылка на пользователя
    desc: {type: DataTypes.STRING, },
})

// счетчик
Resource.hasOne(Counter)   // один ресурс
// Resource.belongsTo(Counter)

Tariff.hasOne(Counter)     // один тариф
// Tariff.belongsTo(Counter)

Apartment.hasMany(Counter)  // одна квартира, ApartmentId -> Counter


// Показания
Counter.hasOne(CounterValue)  //показания одного счётчика
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