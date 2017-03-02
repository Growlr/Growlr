const app = require('./server.js');
const db = app.get('db');
const _ = require('lodash');

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
        db.get_seen_by_id([req.body.fid], (err, seen) => {
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

                        res.send(trimmedList)

                    }
                })
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
      console.log(req.params.id)
        if(req.params.id < 5555555){
            db.get_matches([req.params.id], (err, matches) => {
                if(err) {
                    console.log(err)
                } else {
                    console.log(matches)
                    res.send(matches)
                }
            })
        } else {
            db.get_owner_matches([req.params.id], (er, matched) => {
                if(er){
                    console.log(er)
                } else {
                    res.send(matched)
                }
            })
        }

    },
    AddPet: (req, res) => {
    db.add_pet([req.body.source_link, req.body.img_link, req.body.pet_id, req.body.gender, req.body.breed, req.body.color, req.body.age, req.body.description, req.body.pet_name, req.body.owner_id], (err, pet) => {
      if(err){
        console.error(err)
      } else {
        res.send(pet)
      }
    })
    },
    getPetsSeenById: (req, res) => {
    db.get_seen_by_id([req.params.id], (err, seen) => {
      if(err){
        console.error(err)
      } else {
        db.get_humans((er, owners) => {
          if(er){
            console.error(er)
          } else {
              let seenList = seen.map(val => {
                  return {swipee: val.swipee}
              })
              let arr1_ids = _.map(seenList, 'swipee');
              let arr2_ids = _.map(owners, 'fid');
              let same_ids = _.intersection(arr1_ids, arr2_ids);
              let trimmedList = _.remove(owners, function (e) {
                  return !_.contains(same_ids, e.fid);
              });

              res.send(trimmedList)
          }
        })
      }
    })
    },
    getOwnersPets: (req, res) => {
      db.get_owner_pets_by_id([req.params.id], (err, pets) => {
          if(err){
              console.log(err)
          } else {
              res.send(pets)
          }
      })
    },
    updatePetInfo: (req, res) => {
      console.log(req.body)
      db.update_pet_data([
          req.body.img_link,
          req.body.pet_id,
          req.body.gender,
          req.body.breed,
          req.body.color,
          req.body.age,
          req.body.description,
          req.body.pet_name,
          req.params.id], (err, pet) =>{
          if(err){
              console.log(err)
          } else {
              res.send(pet)
          }
      })
    }


}

module.exports = growlrCtrl
