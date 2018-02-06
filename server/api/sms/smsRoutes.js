const router = require('express').Router()
const logger = require('../../utils/logger')
const controller = require('./smsController')

router.route('/')
    .post(controller.post)

module.exports=router