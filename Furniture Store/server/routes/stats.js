const express = require('express')
const furnitureData = require('../data/furniture')
const usersData = require('../data/users')

const router = new express.Router()

router.get('/', (req, res) => {
  const furniture = furnitureData.total()
  const users = usersData.total()

  res.status(200).json({
    furniture,
    users
  })
})

router.get('/users', (req, res) => {
  const users = usersData.findAll()

  res.status(200).json({
    users
  })
})

module.exports = router
