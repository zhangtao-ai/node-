var express = require('express')
var router = express.Router()

router.get('/add', function (req, res) {
  res.send('add ok')
})

router.get('/del', function (req, res) {
  res.send('del ok')
})

module.exports = router