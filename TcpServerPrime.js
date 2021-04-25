var net = require('net');
var count=0;
function checkPrime(k) {
   for(var i=1;i<=k;i++){
       if(k%i===0){
            count++;
       }
   }
   if(count===2){
       return 'It is a Prime number'
   }
   return 'It is not a Prime number';
}

var server = net.createServer(function(client) {
    console.log('Client Connected');
    client.on('end', function() {
        console.log('Client disconnected:');
    })
    client.on('data', function(data) {
        client.write(checkPrime(data.toString()));
    })
});

server.listen(8000, function() {
    console.log('Server Started on port 8000');
})