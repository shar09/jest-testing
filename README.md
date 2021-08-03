# jest-testing

Experimenting with jest

### Three main components that make up a jest test or any test in general:

- Test
- Test Suite
- Assertions

**1. Test**

Jest's test function takes in two parameters. The first parameter is a string (name of the test) and the second parameter is a callback function (code that executes the test).

Let's take a function that adds two numbers and write a test for it.

_math.js_

```
  function add(numOne, numTwo) {
    return numOne + numTwo;
  }
```

_math.test.js_

```
  test('add two numbers', () => {
    const sum = add(10, 15);
    expect(sum).toBe(25); //assertion
  });
```

**2. Test Suite**

Jest's describe function is used to create a test suite. A test suite is combining tests of similar category under one suite. It takes in same parameters as the test function.

Let's add a multiplication function to our list of functions

_math.js_

```
  function multiply(numOne, numTwo) {
    return numOne * numTwo;
  }
```

_math.test.js_

```
  describe('math', () => {
    test('add two numbers', () => {
      const sum = add(10, 15);
      expect(sum).toBe(25); //assertion
    });

    test('multiply two numbers', () => {
      const product = multiply(2, 5);
      expect(product).toBe(10); //assertion
    });
  });

```

**3. Assertions**

Assertion means checking whether the result is matching the expected value. This is the condition that determines whether our test is passing or failing.

Here is a list of all the assertions that jest offers - @ https://jestjs.io/docs/expect

------------------------

### Testing Asynchronous Code:

Here are some examples on how we can test asynchronous code in JavaScript using Jest - @ https://jestjs.io/docs/asynchronous

### Mocking Functions or Modules

- Mocking functions helps when a function call external functions or Api's and we want to test only one unit of our code independently. For example, in a situation where a function makes an Api call. If the Api is down, our test would fail even though our function itself is working fine. 

- Mocking also gives us access to the many functions that Jest offers.

- There are three ways we can mock functions : 

  * jest.fn() - allows us to mock a single function
  * jest.mock() - allows us to mock an entire module and use all the methods and properties it contains 
  * jest.spyOn()

**Mocking Example using jest.mock()**

_api.js_
```
const axios = require('axios');

async function get(inputText) {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${inputText}`);
   
    return res.data.forms[0].name;
  } catch (err) {
   
    return 'Cannot get pokemon';
  }
}

module.exports = {
  get
}
```

_api.test.js_

```
const axios = require('axios');

const api = require('../api');

jest.mock('axios');

describe('pokemon-api', () => {
  beforeEach(() => {
    axios.get.mockReset();
  });

  describe('#get', () => {
    it('maps the response', async () => {
      const res = { data: { forms: [ { name: 'bulbasaur' } ] } } ;
      axios.get.mockResolvedValue(res);

      const pokemon = await api.get('1');

      expect(pokemon).toEqual(res.data.forms[0].name);
    });

    describe('on a non-200 response', () => {
      it('returns error', async () => {
        axios.get.mockRejectedValue({ status: '404' });

        const pokemon = await api.get('1l');

        expect(pokemon).toMatch(/cannot get pokemon/i);
      });
    });
  });
});
```
--------------------------
**As an alternative to jest mock functions we can use mock service worker with React Testing Library. Here is an example of of mocking using mock service worker - @ https://github.com/shar09/msw-react**

---------------------------
**Additional References**
- @ https://www.pluralsight.com/guides/how-does-jest.fn()-work
- @ https://www.youtube.com/watch?v=7r4xVDI2vho


