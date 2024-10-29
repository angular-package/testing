import { is } from '@angular-package/type';
// Class.
import { Testing } from '../lib/testing.class';
/**
 * Initialize testing.
 */
const t = new Testing(
  true, // Disallows executing the `describe()` method globally.
  true, // Disallows executing the `it()` method globally.
  {
    // describe: [1, 2, 3, 5], // Executable unique numbers of `describe()` methods to execute when global executing is disallowed.
    // it: [1], // Executable unique numbers of `it()` methods inside the `describe()` to execute when global executing is disallowed.
  },
  true
);

/**
 * Testing.defineDescribe()
 */
const testingDescribe = Testing.defineDescribe('defineDescribe()', () => {
  const numberSpec = Testing.defineIt(
    'The value must be a number type',
    () => expect(is.number(5)).toBeTruthy(),
    3000
  );
  numberSpec(false); // Do not execute.
  numberSpec(false); // Execute.
});

testingDescribe(false); // Do not execute.

/**
 * describe().
 */
// testing.describe(
//   '[counter] describe()',
//   () => {},
//   false // Whether or not execute suite
// );

/**
 * it().
 */
t.describe(
  '[counter] describe()',
  () =>
    t.it(
      '[counter] it()',
      () => expect(true).toBeTruthy(),
      false // Whether or not execute spec
    ),
  false // Whether or not execute suite
);

/**
 * toBe()
 */
t.describe('string', () => {
  t.toBe.be(
    is.stringType('my name'),
    true,
    `Checks the value against the string`,
  );
});

/**
 * toBeBigInt()
 */
t.describe('bigint', () => t.toBeBigInt(1n));

/**
 * toBeBooleanType()
 */
t.describe('boolean', () => t.toBeBooleanType(false));

/**
 * toBeClass()
 */
t.describe('class Person', () => {
  class Person {}
  t.toBeClass(Person);
});

/**
 * toBeInstanceOfArray()
 */
t.describe('Array', () => t.toBeInstanceOfArray(['1']));

/**
 * toBeInstanceOfBoolean()
 */
t.describe('Boolean', () => t.toBeInstanceOfBoolean(false));

/**
 * toBeInstanceOfDate()
 */
t.describe('Date', () => t.toBeInstanceOfDate(new Date()));

/**
 * toBeInstanceOfError()
 */
t.describe('Error', () => {
  try {
    throw new Error();
  } catch (e) {
    t.toBeInstanceOfError(e);
  }
});

/**
 * toBeInstanceOfFunction()
 */
t.describe(`Function`, () => t.toBeInstanceOfFunction(() => {}));

/**
 * toBeInstanceOfMap()
 */
t.describe(`Map`, () => t.toBeInstanceOfMap(new Map()));

/**
 * toBeInstanceOfNumber()
 */
t.describe(`Number`, () => t.toBeInstanceOfNumber(new Number(27)));

/**
 * toBeInstanceOfObject()
 */
t.describe(`Object`, () =>
  t.toBeInstanceOfObject(new Object({})).toBeInstanceOfObject({})
);

/**
 * Promise.
 */
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
    // reject('foo');
  }, 300);
});
t.describe(`Promise`, () => t.toBeInstanceOfPromise(myPromise));

/**
 * toBeInstanceOfRangeError()
 */
t.describe('RangeError', () => {
  try {
    throw new RangeError();
  } catch (e) {
    t.toBeInstanceOfRangeError(e);
  }
});

/**
 * toBeInstanceOfReferenceError()
 */
t.describe('ReferenceError', () => {
  try {
    throw new ReferenceError();
  } catch (e) {
    t.toBeInstanceOfReferenceError(e);
  }
});

/**
 * toBeInstanceOfRegExp()
 */
t.describe(`RegExp`, () =>
  t.toBeInstanceOfRegExp(new RegExp(/[]/g))
);

/**
 * toBeInstanceOfSet()
 */
t.describe(`Set`, () => t.toBeInstanceOfSet(new Set()));

/**
 * toBeInstanceOfStorage()
 */
t.describe(`Storage`, () =>
  t.toBeInstanceOfStorage(window.sessionStorage)
);

/**
 * toBeInstanceOfString()
 */
t.describe(`String`, () => t.toBeInstanceOfString(new String()));

/**
 * toBeInstanceOfSyntaxError()
 */
t.describe('SyntaxError', () => {
  try {
    throw new SyntaxError();
  } catch (e) {
    t.toBeInstanceOfSyntaxError(e);
  }
});

/**
 * toBeInstanceOfTypeError()
 */
t.describe('TypeError', () => {
  try {
    throw new TypeError();
  } catch (e) {
    t.toBeInstanceOfTypeError(e);
  }
});

/**
 * toBeInstanceOfURIError()
 */
t.describe('URIError', () => {
  try {
    throw new URIError();
  } catch (e) {
    t.toBeInstanceOfURIError(e);
  }
});

/**
 * toBeInstanceOfWeakSet()
 */
t.describe(`WeakSet`, () => t.toBeInstanceOfWeakSet(new WeakSet()));

/**
 * toBeNull()
 */
t.describe(`null`, () => t.toBeNull(null));

/**
 * toBeNumberType()
 */
t.describe(`number`, () => t.toBeNumberType(5));

/**
 * toBeStringType()
 */
t.describe(`string`, () => t.toBeStringType('my name'));

/**
 * toEqual()
 */
const firstName = 'My name';
t.describe(`toEqual`, () => t.toEqual(firstName, 'My name', 'Expects `firstName` to equal to `My name`'), true);
