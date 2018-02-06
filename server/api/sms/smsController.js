const querystring = require('querystring')
const https = require('https')
const request = require('request-promise')
const config = require('../../config/config')

exports.post=(req,res,next)=>{
    let options={
        method:'POST',
        uri: config.uri,
        form:{
            username:req.body.username,
            to:req.body.to,
            message:req.body.message
        },
        headers:{  apikey:req.headers.apikey,
                   'Accept':"Application/json"   
                  }
    }
    
    request(options)
    .then((_)=>res.status(200).send(_))
    .catch((e)=>res.status(500).send(e))
}