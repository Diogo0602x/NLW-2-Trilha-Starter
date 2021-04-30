aconst Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
  // Inserir dados
  proffyValue = {
    name: "Diego Fernandes", 
    avatar: "https://avatars.githubusercontent.com/u/72995630?v=4", 
    whatsapp: "89987654534", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
  }

  classValue = {
    subject: 1, 
    cost: "20", 
    // o proffy id virá pelo banco de dados
  }

  classScheduleValues = [
      //class_id virá pelo banco de dados, após cadastramos a class
      {
        weekday: 1,
        time_from: 720,
        time_to: 1220
      },
      {
        weekday: 0,
        time_from: 520,
        time_to: 1220
    }
  ]
})