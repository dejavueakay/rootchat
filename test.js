var http = require('http');
var path = require('path');
var express = require('express');
var app = express();
var history = '';

app.use(express.static(path.join(__dirname)));

app.get('/', function(req, res, next) {
  console.log("HA");
  res.sendFile("index.html");
//  console.log(new Date().toLocaleTimeString());
});

app.get('/delete', function(req, res, next) { 			// Funktion eingebaut, um die History zu loeschen indem man 127.0.0.1:8090/delete aufruft
    history = '';
  res.sendFile("delete.html");
});

var server = http.createServer(app);
var io = require('socket.io')(server);


io.on('connection', function (socket) {
	socket.emit('msg', { msg: history }); 			// Sobald jemand connectet, bekommt er die history zugeschickt

	socket.on('msg',function(msg){ 				// Nachrichten lauschen
		socket.broadcast.emit('msg', { msg: msg }); 	// Nachrichten die empfangen wurden allen anderen zuschicken
		history += msg;					// Zur History hinzufuegen fuer spaetere Benutzer
    	})
});

server.listen(8099); 						// Port setzen und initiieren
