var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    //socket.emit('createMessage', {
    //    from: 'franko@example.com',
    //    text: ' Hey there.'
    //});
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('New Message: ', message);
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    jQuery('#messages').append(li);
});

socket.on('newLocationMessage', function (message) {
    console.log('New Location:', message);
    var li = jQuery('<li></li>');
    var a = jQuery('<a target="_blank">My Location</a>');

    li.text(`${message.from}: `);
    a.attr('href', message.url);
    li.append(a);

    jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
        }, function () {
            console.log('ack received');
        });
});

var locationButton = jQuery('#send-location');
locationButton.on('click', function () {
    if (!navigator.geolocation) {
        return alert('Geolocation not supported');
    }

    navigator.geolocation.getCurrentPosition(function (position) {
        console.log('CoOrds', position);
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    }, function () {
        alert('unable to get location');
    });
});