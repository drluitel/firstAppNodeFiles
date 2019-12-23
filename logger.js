//(function (exports, require, module, __filename, __dirname) {

    //console.log(require);
    //console.log(exports);
    //console.log(module);
    console.log(__dirname);
    console.log(__filename);

var url = "http:// mylogger.io/log" ;

function log(message){
    // send the https request
    console.log(message);

}

module.exports = log; 


//})