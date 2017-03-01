const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive')
const axios = require('axios')
const _ = require('lodash');



const db = massive.connectSync({
  connectionString: 'postgres://postgres:postgres@localhost/growlr_db'
})

const app = module.exports = express()
app.set('db', db)

const port = 3000


app.use(bodyParser.json())

const growlrCtrl  = require('./growlrCtrl.js')



app.get('/api/', growlrCtrl.Read)
app.get('/api/humans/:id', growlrCtrl.getPetsSeenById)
app.get('/api/myPets/:id', growlrCtrl.getOwnersPets)
app.get('/api/pet/:id', growlrCtrl.GetOne)
app.get('/api/user/:id', growlrCtrl.GetUserById)
app.get('/api/matches/:id', growlrCtrl.GetMatchesById)

app.post('/api/seen/', growlrCtrl.PostSeen)
app.post('/api/unSeen', growlrCtrl.GetSeenById)
app.post('/api/pet', growlrCtrl.AddPet)
app.post('/api/user/:id', growlrCtrl.AddUserById)

app.put('/api/pet/:id', growlrCtrl.updatePetInfo)

app.post('/api/login/', function (req, res){
  db.get_user([Number(req.body.credentials.userId)], function(err, user){
    if(err){
      res.status(500).json(err)
    }
    else {
      if(!user.length){
        axios.get(`https://graph.facebook.com/v2.8/${req.body.credentials.userId}?fields=first_name,last_name,email,picture.width(400),gender&redirect=false&access_token=${req.body.credentials.token}`)
          .then((res) => {
            console.log(res);
             let postBody = {
              fid: Number(res.data.id),
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
                            console.error('postUser error', er);
                            res.status(500).json(er)
                          }
                          else {
                              let newUserNumber = Number(newUser)
                            console.log('postUser Success');
                            db.get_user([newUserNumber], function(e, newUsr){
                              if (e){
                                console.error(e);
                                //res.send(e)
                              } else {
                                res.status(200).json(newUsr)
                              }
                            })
                          }
                    })
          })
        } else{
          db.get_seen_by_id([req.body.credentials.userId], (err, seen) => {
              if (err) {
                  console.error(err)
              } else {
                  db.get_pets((er, pets) => {
                      if (er) {
                          console.error(er)
                      } else {
                          let seenList = seen.map(val => {
                              return {swipee: Number(val.swipee)}
                          });
                          let arr1_ids = _.map(seenList, 'swipee');
                          let arr2_ids = _.map(pets, 'uniq_id');
                          let same_ids = _.intersection(arr1_ids, arr2_ids);
                          let trimmedList = _.remove(pets, function (e) {
                              return !_.contains(same_ids, e.uniq_id);
                          });
                          let currentUser = {user, trimmedList: trimmedList}
                            console.log(user, 'current user')

                          res.send(currentUser)

                      }
                  })
              }
          })

        }
      }
      })
    })



app.listen(port, function(){
  console.log('listening on port ' + port);
})
