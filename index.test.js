const isOddntnt = require('./index.js');

describe('isOddntnt', () => {
    it('should return false for even numbers', () => {
        expect(isOddntnt(2)).toBe(false);
        expect(isOddntnt(4)).toBe(false);
        expect(isOddntnt(0)).toBe(false);
    });
    
    it('should return true for odd numbers', () => {
        expect(isOddntnt(1)).toBe(true);
        expect(isOddntnt(3)).toBe(true);
        expect(isOddntnt(-1)).toBe(true);
    });
    
    it('should return false for non-integer even values', () => {
        expect(isOddntnt(2.0)).toBe(false);
        expect(isOddntnt(-4.0)).toBe(false);
    });

    it('should throw error for non-integer values', () => {
        expect(()=> isOddntnt(1.5)).toThrow();
        expect(()=> isOddntnt(-2.5)).toThrow();
        expect(()=> isOddntnt("oddntnt")).toThrow();
    });
});