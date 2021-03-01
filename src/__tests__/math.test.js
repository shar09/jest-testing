const { fahrenheitToCelsius, celsiusToFahrenheit } = require('../math');

describe('temp conversion', () => {
    it('fahrenheit to celsius', () => {
        const temp = fahrenheitToCelsius(32);
        expect(temp).toBe(0);
    });

    it('celsius to fahremheit', () => {
        const temp = celsiusToFahrenheit(0)
        expect(temp).toBe(32);
    })
});