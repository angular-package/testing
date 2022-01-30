// Object.
import { is } from '@angular-package/type';
// Class.
import { Testing } from '../lib/testing.class';
/**
 * Initialize testing.
 */
const testing = new Testing(
  true, // Disallows executing the `describe()` method globally.
  true, // Disallows executing the `it()` method globally.
  {
    // describe: [1, 2, 3, 5], // Executable unique numbers of `describe()` methods to execute when global executing is disallowed.
    // it: [1], // Executable unique numbers of `it()` methods inside the `describe()` to execute when global executing is disallowed.
  }
);

testing.describe('[counter] First describe', () => {
  testing
    .it('[counter] First it() in first describe 1-1', () =>
      expect(false).toBeFalse()
    )
    .it('[counter] Second it() in first describe 1-2', () =>
      expect(true).toBeTrue()
    )
    .it('[counter] Second it() in first describe 1-3', () =>
      expect(true).toBeTrue()
    )
    .it('[counter] Fourth it() in first describe() 1-4', () =>
      expect(true).toBeTrue()
    )
    .describe('[counter] Second describe()', () => {
      testing.it('[counter] First it() in second describe() 2-1', () =>
        expect(true).toBeTrue()
      );
    })
    .describe('[counter] Third describe()', () => {
      testing.it('[counter] First it() in third describe() 3-1', () =>
        expect(true).toBeTrue()
      );
    })
    .describe('[counter] Fourth describe()', () => {
      testing.it('[counter] First it() in fourth describe() 3-1', () =>
        expect(true).toBeTrue()
      );
    });
});
testing.describe('[counter] Fifth describe', () =>
  testing.it('[counter] First it() in fifth describe 5-1', () =>
    expect(false).toBeFalse()
  )
);

/**
 * Testing.defineDescribe()
 */
const testingDescribe = Testing.defineDescribe('defineDescribe()', () => {
  const numberSpec = Testing.defineIt(
    'The value must be a number type',
    () => {
      expect(is.number(5)).toBeTruthy();
    },
    3000
  );
  numberSpec(false); // Do not execute.
  numberSpec(false); // Execute.
});

testingDescribe(false); // Do not execute.
testingDescribe(false); // Execute.

/**
 * describe().
 */
testing.describe(
  '[counter] describe()',
  () => {},
  false // Whether or not execute suite
);

/**
 * it().
 */
testing.describe(
  '[counter] describe()',
  () =>
    testing.it(
      '[counter] it()',
      () => {
        expect(true).toBeTruthy();
      },
      false // Whether or not execute spec
    ),
  false // Whether or not execute suite
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

/**
 * toEqual()
 */
const firstName = 'My name';
testing.describe(`toEqual`, () => testing.toEqual('Expects `firstName` to equal to `My name`', firstName, 'My name'), true);
