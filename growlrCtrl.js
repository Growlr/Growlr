const app = require('./server.js')
const db = app.get('db')

const growlrCtrl = {
  Read: (req, res) => {
    db.get_pets( (err, pets) => {
      if (err) {
        console.error(err)
      } else {res.send(pets)}
    })
  },
    ReadHumans: (req, res) => {
    db.get_humans( (err, humans) => {
      if(err){
        console.error(err)
      } else {
        res.send(humans)
      }
    })
    },
  GetOne: (req, res) => {
    db.get_one([req.params.id], (err, pet) => {
      if (err) {
        console.error(err)
      } else {res.send(pet)}
    })
  },
  GetSeenById: (req, res) => {
    db.get_seen_by_id([req.params.id], (err, seen) => {
      if(err){
        console.error(err)
      } else {
        res.send(seen);
      }
    })
  },
    PostSeen: (req, res) => {
    db.add_seen([req.body.user_id, req.body.swipee, req.body.liked], (err, seen) => {
      if(err){
        console.log(err)
      } else{
        res.send(seen)
      }
    })
    },
    GetUserById: (req, res) => {
    db.get_user([req.params.id], (err, user) => {
      if(err){
        console.log(err)
      } else {
        res.send(user)
      }
    })
    },
    AddUserById: (req, res) => {
        db.post_user([req.params.fid, req.body.firstname, req.body.lastname, req.body.email, req.body.gender, req.body.image], (err, user) => {
            if(err){
                console.error(err)
            } else {
                res.send(user)
            }
        })
    },
    GetMatchesById: (req, res) => {
    db.get_matches([req.params.id], (err, matches) => {
      if(err) {
        console.error(err)
      } else {
        res.send(matches)
      }
    })
    },
    AddPet: (req, res) => {
    db.add_pet([req.body.source_link, req.body.img_link, req.body.pet_id, req.body.gender, req.body.breed, req.body.color, req.body.age, req.body.description, req.body.pet_name, req.body.owner_id], (err, pet) => {
      if(err){
        console.error(err)
      } else {
        res.send(pet)
      }
    })
    }


}

module.exports = growlrCtrl
