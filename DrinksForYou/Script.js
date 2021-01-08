var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.emit('my_event');
eventEmitter.on('my_event', () => {
    console.log('data received successfully.');
});