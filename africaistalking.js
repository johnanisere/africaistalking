const sendMessage=(username,message,to,apikey)=>(
    fetch('https://africaistalking.herokuapp.com/api/sms',
            {
                method:'Post',
                headers:{ apikey, 'Content-Type':"Application/json" },
                body: JSON.stringify({ username, to, message })
            })
        .then((res)=>res.json()))

export default sendMessage