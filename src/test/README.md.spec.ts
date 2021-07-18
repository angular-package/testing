// Example usage.
import { Testing, TestingToBeMatchers } from '../lib';
import { TestingClass } from '../lib/constants/class.const';
/**
 * Create `Testing` instance.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('Expects provided value', () => {
  let testArray: any;
  beforeEach(() => (testArray = [1, 'two', 3]));

  let isBigint: any;
  beforeEach(() => (isBigint = 12n));

  let isBoolean: any;
  beforeEach(() => (isBoolean = false));

  let isDate: any;
  beforeEach(() => (isDate = new Date()));

  testing.describe('to be or not to be the type of', () => {
    testing.it('an `array`', () => toBe.array(testArray).not.array(2));
    testing.it('`bigint`', () => toBe.bigint(isBigint).not.bigint(2));
    testing.it('`boolean`', () => toBe.boolean(isBoolean).not.boolean(3));
    testing.it('`Date`', () => toBe.date(isDate).not.date(false));
  });

  let isClass: any;
  beforeEach(() => (isClass = class TestingClass {}));

  let isFalse: any;
  beforeEach(() => (isFalse = false));

  let isDefined: any;

  let isFunction: any;
  beforeEach(() => (isFunction = () => {}));

  let isKey: any;
  beforeEach(() => (isKey = 'firstName'));

  let isNull: any;
  beforeEach(() => (isNull = null));

  let isNumber: any;
  beforeEach(() => (isNumber = 27));

  let isNumberBetween: any;
  let min: any;
  let max: any;
  beforeEach(() => {
    isNumberBetween = 27;
    min = 26;
    max = 28;
  });

  let isObject: any;
  beforeEach(() => isObject = {});

  let isObjectKey: any;
  beforeEach(() => isObjectKey = { firstName: '', lastName: ''});

  let isObjectKeyIn: any;
  beforeEach(() => isObjectKeyIn = { get firstName(): string { return 'x '; }, lastName: ''});

  let isObjectKeys: any;
  beforeEach(() => isObjectKeys = { get firstName(): string { return 'x '; }, lastName: ''});

  let isRegExp: any;
  beforeEach(() => isRegExp = /[]/g);

  let isString: any;
  beforeEach(() => isString = 'My new string');

  let isStringOfLength: any;
  beforeEach(() => isStringOfLength = 'My new string, My new string');

  let isSymbol: any;
  beforeEach(() => isSymbol = Symbol('firstName'));

  let isTrue: any;
  beforeEach(() => isTrue = true);

  let isUndefined: any;
  beforeEach(() => isUndefined = undefined);

  let isInstance: any;
  beforeEach(() => isInstance = new TestingClass());

  testing.describe('to be or not to be', () => {
    testing.it('`class`', () => toBe.class(isClass).not.class('TestingClass'));
    testing.it('defined', () => toBe.defined('Defined').not.defined(isDefined));
    testing.it('`false`', () => toBe.false(isFalse).not.false(true));
    testing.it('`function`', () => toBe.function(isFunction).not.function(true));
    testing.it('`key`', () => toBe.key(isKey).not.key(true));
    testing.it('`null`', () => toBe.null(isNull).not.null(undefined));
    testing.it('`number`', () => toBe.number(isNumber).not.number(undefined));
    testing.it(`\`number\` between 26 to 28`, () => toBe.numberBetween(isNumber, min, max).not.number(127, min, max));
    testing.it(`an \`object\``, () => toBe.object(isObject).not.object(undefined));
    testing.it(`an \`object\` with all given keys`, () =>
      toBe.objectKey(isObjectKey, ['firstName', 'lastName']).not.objectKey(isObjectKey, ['noFirstName']));
    testing.it(`an \`object\` with all given keys`, () =>
      toBe.objectKeyIn(isObjectKeyIn, ['firstName', 'lastName']).not.objectKeyIn(isObjectKeyIn, ['noFirstName']));
    testing.it(`an \`object\` with some of the given keys`, () =>
      toBe.objectKeys(isObjectKeys, ['firstName', 'lastName', 'noFirstName']).not.objectKeys(isObjectKeys, ['noFirstName']));
    testing.it(`\`RegExp\``, () => toBe.regexp(isRegExp).not.regexp(undefined));
    testing.it(`a \`string\``, () => toBe.string(isString).not.string(undefined));
    testing.it(`a \`string\` between the given length`, () =>
      toBe.stringOfLength(isStringOfLength, min, max).not.stringOfLength(undefined, min, max));
    testing.it(`a \`symbol\``, () => toBe.symbol(isSymbol).not.symbol(undefined));
    testing.it(`\`true\``, () => toBe.true(isTrue).not.true(false));
    testing.it(`\`undefined\``, () => toBe.undefined(isUndefined).not.undefined(null));
    testing.it(`an instance of \`TestingClass\``, () => toBe.instance(isInstance, TestingClass).not.instance(isInstance, class Person {}));
  });
});
