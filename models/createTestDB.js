const { User, Resource, Tariff,Counter, CounterValue, Apartment } = require("models")

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
            desc: 'Квартира 1.Вода Хол ',
           // resourceId: {w}
          },{
            serialNumber: '1111-2',
            desc: 'Квартира 1. Вода Гор',
          },{
            serialNumber: '1111-3',
            desc: 'Квартира 1.Вода Хол.Кухня ',
          },{
            serialNumber: '1111-4',
            desc: 'Квартира 1. Вода Гор.Кухня',
          },{
            serialNumber: '000011',
            desc: 'Квартира 1. ЭЭ.День',
          },{
            serialNumber: '000011',
            desc: 'Квартира 1. ЭЭ.Ночь ',
          },{
            serialNumber: '2222-1',
            desc: 'Квартира 1.Вода Хол ',
          },{//------- 2 --------------------
            serialNumber: '222-2',
            desc: 'Квартира 2 Вода Гор',
          },{
            serialNumber: '000022',
            desc: 'Квартира 2. ЭЭ.День',
          },{
            serialNumber: '000022',
            desc: 'Квартира 2. ЭЭ.Ночь ',
          },{
            serialNumber: '3333-1',
            desc: 'Квартира 3.Вода Хол ',
          },{//------- 3 --------------------
            serialNumber: '3333-2',
            desc: 'Квартира 3. Вода Гор',
          },{
            serialNumber: '000033',
            desc: 'Квартира 3. ЭЭ.День',
          },{
            serialNumber: '000033',
            desc: 'Квартира 3. ЭЭ.Ночь ',
          },{
            serialNumber: '000033',
            desc: 'Квартира 3. ЭЭ.Пик ',
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
           desc: '111'
        },{
            email: 'user2@mail.mail',
            password: '22',
            role: 'ADMIN',
            name: 'Oleg Two',
            phone: '111-1111-22222',
            desc: '222'
         },{
            email: 'user3@mail.mail',
            password: '33',
            role: 'USER',
            name: 'Mina Three',
            phone: '111-1111-33333',
            desc: '333'
         },{
            email: 'user4@mail.mail',
            password: '44',
            role: 'MANAGER',
            name: 'Peter Four',
            phone: '111-1111-44444',
            desc: '444'
         }
        ], 
        { returning : true }
    ).then((records)=> console.log(records))
    
    
        
  }

  async loadCountValues(){   // Totoal : 30
    await CounterValue.bulkCreate(
        [{
            period : '2021.01', // 1st, 2021.01
            value: 100,
            
        },{

        }
    
        ], 
        { returning : true }
    ).then((records)=> console.log(records))
}


}
module.exports = new loadMockData()






