# africaistalking
A promise-based API wrapper with cors enabled for africastalking 

## Install

```sh
npm i africaistalking --save
```

## usage

### Sending SMS 

``` jsx
import africaistalking from 'africaistalking'

const username='MyAppUsername'
const message='Hello You!'
const to='+254711XXXYYY,+254733YYYZZZ'
const apikey='MyAppApiKey'


africaistalking(username, message, to, apikey)
  .then(res => console.log(res))
  .catch(err => console.log(err))
```

### Usage with Redux/redux-promise-middleware

Dispatch africaistalking API as the value of the payload property of the action.

``` jsx

import africaistalking from 'africaistalking'

 

 const sendMessage = (username, message, to, apikey) => ({

  type: 'SEND_MESSAGE',

  payload: africaistalking(username, message, to, apikey)

})

```

A pending action is immediately dispatched.



``` jsx
{

     type: 'SEND_MESSAGE_PENDING'

     }
  ```
     

Once the promise is settled, a second action will be dispatched. If the promise is resolved a fulfilled action is dispatched.



``` js
{

  type: 'SEND_MESSAGE_FULFILLED'

  payload: {

    ...

  }

}
```



On the other hand, if the promise is rejected, a rejected action is dispatched.



``` jsx
{

  type: 'SEND_MESSAGE_REJECTED'

  error: true,

  payload: {

    ...

  }

}
```
