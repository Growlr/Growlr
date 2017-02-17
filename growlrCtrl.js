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
  GetOne: (req, res) => {
    db.get_one([req.params.id], (err, pet) => {
      if (err) {
        console.error(err)
      } else {res.send(pet)}
    })
  },


}

module.exports = growlrCtrl
