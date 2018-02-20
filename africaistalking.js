const sendMessage=(username,message,to,apikey,from)=>(
    fetch('https://africaistalking.herokuapp.com/api/sms',
            {
                method:'Post',
                headers:{ apikey, 'Content-Type':"Application/json" },
                body: JSON.stringify({ username, to, message,from })
            })
        .then((res)=>res.json()))

export default sendMessage