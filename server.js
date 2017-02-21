const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive')



const db = massive.connectSync({
  connectionString: 'postgres://postgres:postgres@localhost/growlr_db'
})

const app = module.exports = express()
app.set('db', db)

const port = 8080


app.use(bodyParser.json())

const growlrCtrl  = require('./growlrCtrl.js')



app.get('/api/', growlrCtrl.Read)
app.get('/api/humans', growlrCtrl.ReadHumans)
app.get('/api/pet/:id', growlrCtrl.GetOne)
app.get('/api/seen/:id', growlrCtrl.GetSeenById)
app.get('/api/user/:id', growlrCtrl.GetUserById)
app.get('/api/matches/:id', growlrCtrl.GetMatchesById)

app.post('/api/seen/', growlrCtrl.PostSeen)
app.post('/api/pet', growlrCtrl.AddPet)
app.post('/api/user/:id', growlrCtrl.AddUserById)


app.listen(port, function(){
  console.log('listening on port ' + port);
})
