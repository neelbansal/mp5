var net = require('net');

function checkPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

var server = net.createServer(function(client) {
    console.log('Client Connected');
    client.on('end', function() {
        console.log('Client disconnected:');
    })
    client.on('data', function(data) {
        client.write(checkPalindrome(data.toString()));
    })
});

server.listen(8000, function() {
    console.log('Server Started on port 8000');
})