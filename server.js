const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive')
const axios = require('axios')



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

app.post('/api/login/', function (req, res){
  db.get_user([req.body.credentials.userId], function(err, user){
    if(err){
      res.status(500).json(err)
    }
    else {
      if(!user.length){
        axios.get(`https://graph.facebook.com/v2.8/${req.body.credentials.userId}?fields=first_name,last_name,email,picture,gender&redirect=false&access_token=${req.body.credentials.token}`)
          .then((res) => {
            console.log(res);
             let postBody = {
              fid: res.data.id,
              firstname: res.data.first_name,
              lastname: res.data.last_name,
              email: res.data.email,
              gender: res.data.gender,
              image: res.data.picture.data.url
            }
            db.post_user( [postBody.fid
                        , postBody.firstname
                        , postBody.lastname
                        , postBody.email
                        , postBody.gender
                        , postBody.image], function(er, newUser){
                          if(er){
                            console.log('postUser error');
                            res.status(500).json(er)
                          }
                          else {
                            console.log('postUser Success');
                            res.status(200).json(newUser)

                          }
                    })
          })
        } else{
          console.log('there was a user on the db');
          console.log(user);
          res.send(user)
        }
      }
      })
    })



app.listen(port, function(){
  console.log('listening on port ' + port);
})
