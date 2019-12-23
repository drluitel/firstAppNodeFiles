
/* const logger = require ('./logger'); // return the object fo the target file or function
logger('Hello baby how u doing in earth.');


  const path = require('path');
   var pathObj = path.parse(__filename);
    console.log( pathObj);
 */

// OS MOULE
 /* const os = require('os'); // loading the os module
var totalMemory = os.totalmem();
var freeMemory= os.freemem();


console.log(`totalMemory: ${ totalMemory}`);
console.log(`freeMemory: ${ freeMemory}`); */



// FILE SYSTEM MODULE 

const fs = require('fs'); 
//const files = fs.readdirSync('./');
//console.log(files);


fs.readdir('./', function (err, files){

if(err) console.log('Error',err);
else console.log('Result',files );

})