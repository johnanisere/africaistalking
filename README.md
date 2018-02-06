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

