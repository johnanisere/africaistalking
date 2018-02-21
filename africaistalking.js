sendMessage(username,message,to,apikey,from){
    return fetch('https://africaistalking.herokuapp.com/api/sms',
                {
                    method:'Post',
                    headers:{ apikey, 'Content-Type':"Application/json" },
                    body: JSON.stringify({ username, to, message,from })
                })
            .then(function (res){ res.json()})
    }
    
    
    export default sendMessage