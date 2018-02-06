const router =require('express').Router() 
router.use('/sms',require('./sms/smsRoutes'))

module.exports=router