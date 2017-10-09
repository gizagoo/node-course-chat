var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct structure', () => {
        var from = 'Admin';
        var text = 'This is a message';

        var message = generateMessage(from, text);

        expect(message.createdAt).toBeTruthy();
        expect(message.from).toBe(from);
        expect(message.text).toBe(text);

    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location structure', () => {
        var from = 'Admin';
        var latitude = 53.373202299999996;
        var longitude = -6.286751199999999;

        var message = generateLocationMessage(from, latitude, longitude);

        expect(message.from).toBe(from);
        expect(message.url).toEqual(`https://www.google.com/maps?q=${latitude},${longitude}`);
        expect(message.createdAt).toBeTruthy();

    })
});