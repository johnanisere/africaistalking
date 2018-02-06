const config=require('./server/config/config')
const app = require('./server/server')
const logger=require('./server/utils/logger')

app.listen(config.port)
logger.log("listening on http://localhost:" + config.port)