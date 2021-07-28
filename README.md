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

### Testing Asynchronous Code:

Here are some examples on how we can test asynchronous code in JavaScript using Jest - @ https://jestjs.io/docs/asynchronous

### Mocking Functions or Modules

**1. jest.fn()**

This function allows us to mock a single function. Let's see an example to mock a synchronous function jest.fn().

_greeting.js_

```
export const goodMorning = () => "Good Morning";

export const goodNight = () => "Good Night";

export function greeting(morning) {
  if(morning)
    return goodMorning();
  return goodNight();
}
```

Let us mock only the greeting function here. Usually the real use case for jest mocks is for asynchronous api calls. But let's try for synchronous functions to get familiar with the functions.

_greeting.test.js_

```
import { greeting, goodMorning, goodNight } from './greeting.js';

describe('greeting', () => {
  test('good morning', () => {
    const mockGreeting = jest.fn(greeting);
      .mockReturnValueOnce('Good Morning');

    const result = mockGreeting(true);

    expect(mockGreeting).toHaveBeenCalledWith(true);
    expect(goodMorning).toBeCalled();

    expect(goodNight).not.toBeCalled();
    expect(result).toEqual('Good Morning');

  });
});
```

**2. jest.mock()**

This function allows to mock an entire module and use all the methods and properties it contains.

**3. jest.spyOn()**

