const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive')



const db = massive.connectSync({
  connectionString: 'postgres://postgres:postgres@localhost/growlr_db'
})

const app = module.exports = express()
app.set('db', db)

const port = 8005


app.use(bodyParser.json())

const growlrCtrl  = require('./growlrCtrl.js')
//


app.get('/api/', growlrCtrl.Read)
app.get('/api/pet/:id', growlrCtrl.GetOne)


app.listen(port, function(){
  console.log('listening on port ' + port);
})
