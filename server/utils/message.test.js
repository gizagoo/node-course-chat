var expect = require('expect');
var {generateMessage} = require('./message');

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