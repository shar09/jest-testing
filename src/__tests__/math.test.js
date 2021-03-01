const { fahrenheitToCelsius, celsiusToFahrenheit, add } = require('../math');

describe('temp conversion', () => {
    it('fahrenheit to celsius', () => {
        const temp = fahrenheitToCelsius(32);
        expect(temp).toBe(0);
    });

    it('celsius to fahremheit', () => {
        const temp = celsiusToFahrenheit(0);
        expect(temp).toBe(32);
    });
});

describe('async test', () => {
    it('adds two non-negative numbers', () => {
        return add(5,10).then( sum => {
            expect(sum).toBe(15);
        });
    });

    it('throw error for negative numbers', () => {
        return add(-10, 5).catch( err => {
            expect(err).toBe('Numbers must be non-negative');
        });
    })
});