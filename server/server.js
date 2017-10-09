require('./config/config');

const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const { generateMessage } = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connection');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome New User to the chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user has joined'));

    socket.on('createMessage', (message) => {
        console.log('createMessage: ', message);
        socket.broadcast('newMessage', , generateMessage(message.from, message.text));
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});