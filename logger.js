
const EventEmitter = require('events');  // this s a clsss
var url = "http:// mylogger.io/log" ;

class Logger extends EventEmitter{

    log(message){
       // send the https request
        console.log(message);
        // Raised an event 
        this.emit( 'logging', {data:'message'}); // Making the noice, produce - signalling
    }


}


module.exports = Logger; 


