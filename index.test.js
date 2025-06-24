const ʇuppOsᴉ = require('./index.js');

describe('ʇuppOsᴉ', () => {
    it('sɹǝqɯnu uǝʌǝ ɹoⅎ ǝsʅɐⅎ uɹnʇǝɹ pʅnoɥs', () => {
        expect(ʇuppOsᴉ(2)).toBe(false);
        expect(ʇuppOsᴉ(4)).toBe(false);
        expect(ʇuppOsᴉ(0)).toBe(false);
    });
    
    it('sɹǝqɯnu ppo ɹoⅎ ǝnɹʇ uɹnʇǝɹ pʅnoɥs', () => {
        expect(ʇuppOsᴉ(1)).toBe(true);
        expect(ʇuppOsᴉ(3)).toBe(true);
        expect(ʇuppOsᴉ(-1)).toBe(true);
    });
    
    it('sǝnʅɐʌ uǝʌǝ ɹǝƃǝʇuᴉ-uou ɹoⅎ ǝsʅɐⅎ uɹnʇǝɹ pʅnoɥs', () => {
        expect(ʇuppOsᴉ(2.0)).toBe(false);
        expect(ʇuppOsᴉ(-4.0)).toBe(false);
    });

    it('sǝnʅɐʌ ɹǝƃǝʇuᴉ-uou ɹoⅎ ɹoɹɹǝ ʍoɹɥʇ pʅnoɥs', () => {
        expect(()=> ʇuppOsᴉ(1.5)).toThrow();
        expect(()=> ʇuppOsᴉ(-2.5)).toThrow();
        expect(()=> ʇuppOsᴉ("ʇuʇuppo")).toThrow();
    });
});