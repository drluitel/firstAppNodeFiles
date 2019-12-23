
const http = require('http');// load the http module  or all the methods find in module in http
const server = http.createServer( function (req,res){
    if(req.url==="/"){
        res.write('Hello world ');
        res.end();
    }
    if(req.url==='/api/courses'){
       res.write(JSON.stringify([1,2,3,4,5,6]));
       res.end();       
    }

});

//server.on('connection', (socket)=>{ // register the events raised 
//console.log('New connection......');
//})



server.listen(3000); // listining on the port 3000 or raised the event 