
const Logger = require('./logger'); // load the file logger
 const logger = new Logger(); // creating the object of class Logger

 // Register a listener
logger.on('logging',eventArg =>{
    console.log('Listener is called', eventArg);
})

logger.log('message');