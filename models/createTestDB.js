const { User, Resource, Tariff,Counter, CounterValue, Apartment } = require('./models')

class loadMockData {
    async loadTariffs() {  // Total : 6
       await Tariff.bulkCreate(
        [{ 
            name: 'ЭЭ.Единый',
            desc: 'Электроэнергия. Однотарифный счётчик',
          },{
            name: 'ЭЭ.День',
            desc: 'Электроэнергия. День',
          },{ 
            name: 'ЭЭ.Ночь',
            desc: 'Электроэнергия. Ночь',
          },{ 
            name: 'ЭЭ.Пик',
            desc: 'Электроэнергия. Пик' ,
          },{
            name: 'Вода.Холодная',
            desc: 'Холодная вода.' ,
          },{
            name: 'Вода.Горячая',
            desc: 'Горячая вода' ,
          }
         ],
         { returning : true }
      ).then((records)=> console.log(records))
  }
  async loadResources(){       // Total : 2
    await Resource.bulkCreate(
        [{
            name: 'Электроэнергия',
            desc: 'Электроэнергия'
          },
          {
            name: 'Вода',
            desc: 'Вода'
          }
        ],
        { returning : true }
    ).then((records)=> console.log(records))
  }
  async loadCounters(){ // Total : 15
    await Counter.bulkCreate(
        [{//------- 1 --------------------
            serialNumber: '1111-1',
            desc: 'Квартира 1.Вода Хол',
            resourceId: 2,
            tariffId: 5,
            apartmentId : 1
          },{
            serialNumber: '1111-2',
            desc: 'Квартира 1. Вода Гор',
            resourceId: 2,
            tariffId: 6,
            apartmentId : 1
          },{
            serialNumber: '1111-3',
            desc: 'Квартира 1.Вода Хол.Кухня ',
            resourceId: 2, 
            tariffId: 5,
            apartmentId : 1
          },{
            serialNumber: '1111-4',
            desc: 'Квартира 1. Вода Гор.Кухня',
            resourceId: 2,
            tariffId: 6,
            apartmentId : 1
          },{
            serialNumber: '000011',
            desc: 'Квартира 1. ЭЭ.День',
            resourceId: 1,
            tariffId: 2,
            apartmentId : 1
          },{
            serialNumber: '000011',
            desc: 'Квартира 1. ЭЭ.Ночь ',
            resourceId: 1,
            tariffId: 3,
            apartmentId : 1
          },{//------- 2 --------------------
            serialNumber: '2222-1',
            desc: 'Квартира 1.Вода Хол ',
            resourceId: 2,
            tariffId: 5,
            apartmentId : 2
          },{
            serialNumber: '222-2',
            desc: 'Квартира 2 Вода Гор',
            resourceId: 2,
            tariffId: 6,
            apartmentId : 2
          },{
            serialNumber: '000022',
            desc: 'Квартира 2. ЭЭ.День',
            resourceId: 1,
            tariffId: 2,
            apartmentId : 2
          },{
            serialNumber: '000022',
            desc: 'Квартира 2. ЭЭ.Ночь ',
            resourceId: 1,
            tariffId: 3,
            apartmentId : 2
          },{//------- 3 --------------------
            serialNumber: '3333-1',
            desc: 'Квартира 3.Вода Хол ',
            resourceId: 2,
            tariffId: 5,
            apartmentId : 3
          },{
            serialNumber: '3333-2',
            desc: 'Квартира 3. Вода Гор',
            resourceId: 2,
            tariffId: 6,
            apartmentId : 3
          },{
            serialNumber: '000033',
            desc: 'Квартира 3. ЭЭ.День',
            resourceId: 1,
            tariffId: 2,
            apartmentId : 3
          },{
            serialNumber: '000033',
            desc: 'Квартира 3. ЭЭ.Ночь ',
            resourceId: 1,
            tariffId: 3,
            apartmentId : 3
          },{
            serialNumber: '000033',
            desc: 'Квартира 3. ЭЭ.Пик ',
            resourceId: 1,
            tariffId: 4,
            apartmentId : 3

          }
        ], 
        { returning : true }
    ).then((records)=> console.log(records))
  }
  async loadApartments(){  // Total : 3
    await Apartment.bulkCreate(
        [{
            number: '1',
            desc: 'Квартира 1',
        },{
            number: '2',
            desc : 'Квартира 2',
        },{
            number:'3',
            desc: 'Квартира 3',
        }
        ], 
        { returning : true }
    ).then((records)=> console.log(records))
    
  }
  async loadUsers(){   // Total : 4
    await User.bulkCreate(
        [{
           email: 'user1@mail.mail',
           password: '11',
           role: 'USER',
           name: 'Ivan One',
           phone: '111-1111-11111',
           desc: '111',
           apartmentId : 1
        },{
            email: 'user2@mail.mail',
            password: '22',
            role: 'ADMIN',
            name: 'Oleg Two',
            phone: '111-1111-22222',
            desc: '222',
            apartmentId : 2
         },{
            email: 'user3@mail.mail',
            password: '33',
            role: 'USER',
            name: 'Mina Three',
            phone: '111-1111-33333',
            desc: '333',
            apartmentId : 3
         },{
            email: 'user4@mail.mail',
            password: '44',
            role: 'MANAGER',
            name: 'Peter Four',
            phone: '111-1111-44444',
            desc: '444',
            apartmentId : 2
         }
        ], 
        { returning : true }
    ).then((records)=> console.log(records))
    
    
        
  }

  async loadCounterValues(){   // Totoal : 30
    let periodOne = '2021-01-01'
    let periodTwo = '2021-02-01'
    await CounterValue.bulkCreate(
        [{ // --------- 1 - 1 --------
            period : periodOne, // 1st, 2021.01.01
            value: 120,
            counterId : 1,
          },{
            period : periodOne, // 1st, 2021.01.01
            value: 100,
            counterId : 2,
          },{
            period : periodOne, // 1st, 2021.01.01
            value: 60,
            counterId : 3,
          },{
            period : periodOne, // 1st, 2021.01.01
            value: 50,
            counterId : 4,
          },{
            period : periodOne, // 1st, 2021.01.01
            value: 1000,
            counterId : 5,
          },{
            period : periodOne, // 1st, 2021.01.01
            value: 500,
            counterId : 6,
          },{  // --------- 1 - 2 --------
            period : periodOne, // 1st, 2021.01.01
            value: 220,
            counterId : 7,
          },{
            period : periodOne, // 1st, 2021.01.01
            value: 200,
            counterId : 8,
          },{
            period : periodOne, // 1st, 2021.01.01
            value: 2060,
            counterId : 9,
          },{
            period : periodOne, // 1st, 2021.01.01
            value: 2050,
            counterId : 10,
          },{  // --------- 1 - 3 --------
            period : periodOne, // 1st, 2021.01.01
            value: 320,
            counterId : 11,
          },{
            period : periodOne, // 1st, 2021.01.01
            value: 300,
            counterId : 12,
          },{
            period : periodOne, // 1st, 2021.01.01
            value: 3060,
            counterId : 13,
          },{
            period : periodOne, // 1st, 2021.01.01
            value: 3050,
            counterId : 14,
          },{
            period : periodOne, // 1st, 2021.01.01
            value: 3070,
            counterId : 15,
          },{  // --------- 2 - 1 --------      
            period : periodTwo, // 2, 2021.02.01
            value: 170,
            counterId : 1,
          },{
            period : periodTwo, // 2, 2021.02.01
            value: 130,
            counterId : 2,
          },{
            period : periodTwo, // 2, 2021.02.01
            value: 90,
            counterId : 3,
          },{
            period : periodTwo, // 2, 2021.02.01
            value: 80,
            counterId : 4,
          },{
            period : periodTwo, // 2, 2021.02.01
            value: 1200,
            counterId : 5,
          },{
            period : periodTwo, // 2, 2021.02.01
            value: 600,
            counterId : 6,
          },{  // --------- 2 - 2 --------
            period : periodTwo, // 2, 2021.02.01
            value: 280,
            counterId : 7,
          },{
            period : periodTwo, // 2, 2021.02.01
            value: 260,
            counterId : 8,
          },{
            period : periodTwo, // 2, 2021.01.01
            value: 2160,
            counterId : 9,
          },{
            period : periodTwo, // 2, 2021.02.01
            value: 2050,
            counterId : 10,
          },{  // --------- 2 - 3 --------
            period : periodTwo, // 2, 2021.02.01
            value: 370,
            counterId : 11,
          },{
            period : periodTwo, // 2, 2021.02.01
            value: 350,
            counterId : 12,
          },{
            period : periodTwo, // 2, 2021.02.01
            value: 3160,
            counterId : 13,
          },{
            period : periodTwo, // 2, 2021.02.01
            value: 3150,
            counterId : 14,
          },{
            period : periodTwo, // 2, 2021.02.01
            value: 3170,
            counterId : 15,

        }
    
        ], 
        { returning : true }
    ).then((records)=> console.log(records))
}


}
module.exports = new loadMockData()






