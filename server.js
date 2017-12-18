var http = require('http');
var path = require('path');
var express = require('express');
var app = express();
var history = '';
var noclients = 0;
var noclientsmsg = '';

app.use(express.static(path.join(__dirname)));

app.get('/', function(req, res, next) {
  res.sendFile("/home/rootsocket/server/index.html");
});

app.get('/delete', function(req, res, next) {
    history = '';
  res.sendFile('/home/rootsocket/server/delete.html');
});


var server = http.createServer(app);
var io = require('socket.io')(server);
io.on('connection', function (socket) {

	socket.emit('msg', { msg: history });


        noclients = noclients + 1;
	socket.broadcast.emit('no', { no: noclients });
	socket.emit('no', { no: noclients });

	socket.on('msg',function(msg){
    		socket.broadcast.emit('msg', { msg: msg });
		history += msg;
    	})

    	socket.on('disconnect', function(msg){
		noclients = noclients - 1;
		socket.broadcast.emit('no', { no: noclients });
    	})
	
});


server.listen(8080);
