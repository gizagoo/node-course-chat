const expect = require('expect');
const { isRealString } = require('./validation'); 

describe('isRealString', () => {
    it('should validate string has value', () => {
        expect(isRealString(123)).toBe(false);
        expect(isRealString('')).toBe(false);
        expect(isRealString('   ')).toBe(false);
        expect(isRealString('a')).toBe(true);
        expect(isRealString(' a b ')).toBe(true);
    });
});