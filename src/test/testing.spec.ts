// Object.
import { is } from '@angular-package/type';
// Class.
import { Testing } from '../lib/testing.class';
/**
 * Initialize testing.
 */
const testing = new Testing(
  true, // Allows executing the `describe()` method globally.
  true, // Allows executing the `it()` method globally.
  {
    describe: [], // Executable unique numbers of `describe()` methods to execute when globally is disallowed.
    it: [], // Executable unique numbers of `it()` methods to execute when globally is disallowed.
  }
);
/**
 * toBe()
 */
testing.describe('string', () => {
  testing.toBe(
    `Checks the value against the string`,
    is.stringType('my name'),
    true
  );
});

/**
 * toBeBigInt()
 */
testing.describe('bigint', () => testing.toBeBigInt(1n));

/**
 * toBeBooleanType()
 */
testing.describe('boolean', () => testing.toBeBooleanType(false));

/**
 * toBeClass()
 */
testing.describe('class Person', () => {
  class Person {}
  testing.toBeClass(Person);
});

/**
 * toBeInstanceOfArray()
 */
testing.describe('Array', () => testing.toBeInstanceOfArray(['1']));

/**
 * toBeInstanceOfBoolean()
 */
testing.describe('Boolean', () => testing.toBeInstanceOfBoolean(new Boolean()));

/**
 * toBeInstanceOfDate()
 */
testing.describe('Date', () => testing.toBeInstanceOfDate(new Date()));

/**
 * toBeInstanceOfError()
 */
testing.describe('Error', () => {
  try {
    throw new Error();
  } catch (e) {
    testing.toBeInstanceOfError(e);
  }
});

/**
 * toBeInstanceOfFunction()
 */
testing.describe(`Function`, () => testing.toBeInstanceOfFunction(() => {}));

/**
 * toBeInstanceOfMap()
 */
testing.describe(`Map`, () => testing.toBeInstanceOfMap(new Map()));

/**
 * toBeInstanceOfNumber()
 */
testing.describe(`Number`, () => testing.toBeInstanceOfNumber(new Number(27)));

/**
 * toBeInstanceOfObject()
 */
testing.describe(`Object`, () =>
  testing.toBeInstanceOfObject(new Object({})).toBeInstanceOfObject({})
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
testing.describe(`Promise`, () => testing.toBeInstanceOfPromise(myPromise));

/**
 * toBeInstanceOfRangeError()
 */
testing.describe('RangeError', () => {
  try {
    throw new RangeError();
  } catch (e) {
    testing.toBeInstanceOfRangeError(e);
  }
});

/**
 * toBeInstanceOfReferenceError()
 */
testing.describe('ReferenceError', () => {
  try {
    throw new ReferenceError();
  } catch (e) {
    testing.toBeInstanceOfReferenceError(e);
  }
});

/**
 * toBeInstanceOfRegExp()
 */
testing.describe(`RegExp`, () =>
  testing.toBeInstanceOfRegExp(new RegExp(/[]/g))
);

/**
 * toBeInstanceOfSet()
 */
testing.describe(`Set`, () => testing.toBeInstanceOfSet(new Set()));

/**
 * toBeInstanceOfStorage()
 */
testing.describe(`Storage`, () =>
  testing.toBeInstanceOfStorage(window.sessionStorage)
);

/**
 * toBeInstanceOfString()
 */
testing.describe(`String`, () => testing.toBeInstanceOfString(new String()));

/**
 * toBeInstanceOfSyntaxError()
 */
testing.describe('SyntaxError', () => {
  try {
    throw new SyntaxError();
  } catch (e) {
    testing.toBeInstanceOfSyntaxError(e);
  }
});

/**
 * toBeInstanceOfTypeError()
 */
testing.describe('TypeError', () => {
  try {
    throw new TypeError();
  } catch (e) {
    testing.toBeInstanceOfTypeError(e);
  }
});

/**
 * toBeInstanceOfURIError()
 */
testing.describe('URIError', () => {
  try {
    throw new URIError();
  } catch (e) {
    testing.toBeInstanceOfURIError(e);
  }
});

/**
 * toBeInstanceOfWeakSet()
 */
testing.describe(`WeakSet`, () => testing.toBeInstanceOfWeakSet(new WeakSet()));

/**
 * toBeNull()
 */
testing.describe(`null`, () => testing.toBeNull(null));

/**
 * toBeNumberType()
 */
testing.describe(`number`, () => testing.toBeNumberType(5));

/**
 * toBeStringType()
 */
testing.describe(`string`, () => testing.toBeStringType('my name'));
