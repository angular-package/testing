// Example usage.
import { Testing, TestingExpectToBe } from '../lib';
// Constant.
import { TestingClass, TESTING_SYMBOL_NUMBER } from '../lib/constants';
/**
 * Create `Testing` instance.
 */
const testing = new Testing();
const toBe = new TestingExpectToBe();
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

  testing
  .describe('to be the type of', () => {
    testing
      .it('an `array`', () => toBe.array(testArray))
      .it('`bigint`', () => toBe.bigint(isBigint))
      .it('`boolean`', () => toBe.boolean(isBoolean))
      .it('`Date`', () => toBe.date(isDate));
  })
  .describe('not to be the type of', () => {
    testing
      .it('an `array`', () => toBe.not.array(2))
      .it('`bigint`', () => toBe.not.bigint(2))
      .it('`boolean`', () => toBe.not.boolean(3))
      .it('`Date`', () => toBe.not.date(false));
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

  let string: any;
  beforeEach(() => string = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  It has survived not only five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
  like Aldus PageMaker including versions of Lorem Ipsum.` as string);

  let TESTING_CLASS: any;
  beforeEach(() => TESTING_CLASS = new TestingClass());

  testing
  .describe('to be', () => {
    testing
      .it('`class`',
        () => toBe.class(isClass))
      .it('defined',
        () => toBe.defined('Defined'))
      .it('`false`',
        () => toBe.false(isFalse))
      .it('`function`',
        () => toBe.function(isFunction))
      .it('`key`',
        () => toBe.key(isKey))
      .it('`null`',
        () => toBe.null(isNull))
      .it('`number`',
        () => toBe.number(isNumber))
      .it(`\`number\` between 26 to 28.`,
        () => toBe.numberBetween(isNumber, min, max))
      .it(`an \`object\`.`,
        () => toBe.object(TESTING_CLASS))
      .it(`an \`object\` with a given key.`,
        () => toBe.objectKey(TESTING_CLASS, 'firstName'))
      .it(`an \`object\` with a given key in it(or it's prototype chain).`,
        () => toBe.objectKeyIn(TESTING_CLASS, 10304050))
      .it(`an \`object\` with given keys.`,
        () => toBe.objectKeys(TESTING_CLASS, ['firstName', 'surname']))
      .it(`an \`object\` with given keys in it(or it's prototype chain).`,
        () => toBe.objectKeysIn(TESTING_CLASS, ['firstName', 'surname', TESTING_SYMBOL_NUMBER]))
      .it(`an \`object\` with some of its keys or some groups of its keys.`,
        () => toBe.objectSomeKeys(TESTING_CLASS, ['firstName', 'surname', 'noFirstName']))
      .it(`\`RegExp\``,
        () => toBe.regexp(isRegExp))
      .it(`a \`string\` type or an instance of \`String\``,
        () => toBe.string(string))
      .it(`a \`string\` type or an instance of \`String\` that includes the specified \`words/sentences\``,
        () => toBe.stringIncludes(string, ['Lorem', 'galley', 'It was popularised in the 1960s']))
      .it(`a \`string\` type or an instance of \`String\` that includes some of the specified \`words/sentences\``,
        () => toBe.stringIncludesSome(string, ['Lorem1', 'galley1', 'It was popularised in the 1960s']))
      .it(`a \`string\` of the given length.`,
        () => toBe.stringOfLength(isStringOfLength, 28))
      .it(`a \`string\` between the min and max.`,
        () => toBe.stringOfLengthBetween(isStringOfLength, min, max))
      .it(`a \`symbol\``,
        () => toBe.symbol(isSymbol))
      .it(`\`true\``,
        () => toBe.true(isTrue))
      .it(`\`undefined\``,
        () => toBe.undefined(isUndefined))
      .it(`an instance of \`TestingClass\`.`,
        () => toBe.instance(TESTING_CLASS, TestingClass));
  })
  .describe('not to be', () => {
    testing
      .it('`class`',
        () => toBe.not.class('TestingClass'))
      .it('defined',
        () => toBe.not.defined(isDefined))
      .it('`false`',
        () => toBe.not.false(true))
      .it('`function`',
        () => toBe.not.function(true))
      .it('`key`',
        () => toBe.not.key(true))
      .it('`null`',
        () => toBe.not.null(undefined))
      .it('`number`',
        () => toBe.not.number(undefined))
      .it(`\`number\` between 26 to 28.`,
        () => toBe.not.numberBetween(127, min, max))
      .it(`an \`object\`.`,
        () => toBe.not.object(undefined))
      .it(`an \`object\` with a given key.`,
        () => toBe.not.objectKey(TESTING_CLASS, 'noFirstName'))
      .it(`an \`object\` with a given key in it(or it's prototype chain).`,
        () => toBe.not.objectKeyIn(TESTING_CLASS, 'noFirstName'))
      .it(`an \`object\` with given keys.`,
        () => toBe.not.objectKeys(TESTING_CLASS, [103040501, 'noFirstName', TESTING_SYMBOL_NUMBER]))
      .it(`an \`object\` with given keys in it(or it's prototype chain).`,
        () => toBe.not.objectKeysIn(TESTING_CLASS, [103040501, 'noFirstName']))
      .it(`an \`object\` with some of its keys or some groups of its keys.`,
        () => toBe.not.objectSomeKeys(TESTING_CLASS, [10304050, 'noFirstName', 'bla']))
      .it(`\`RegExp\``,
        () => toBe.not.regexp(undefined))
      .it(`a \`string\` type or an instance of \`String\``,
        () => toBe.not.string(undefined))
      .it(`a \`string\` type or an instance of \`String\` that includes the specified \`words/sentences\``,
        () => toBe.not.stringIncludes(string, ['Lorem1', 'galley1', 'It was popularized in the 1960s1']))
      .it(`a \`string\` type or an instance of \`String\` that includes some of the specified \`words/sentences\``,
        () => toBe.not.stringIncludesSome(string, ['Lorem1', 'galley1', 'It was popularized in the 1960s1']))
      .it(`a \`string\` of the given length.`,
        () => toBe.not.stringOfLength(isStringOfLength, 12))
      .it(`a \`string\` between the given min and max.`,
        () => toBe.not.stringOfLengthBetween(undefined, min, max))
      .it(`a \`symbol\``,
        () => toBe.not.symbol(undefined))
      .it(`\`true\``,
        () => toBe.not.true(false))
      .it(`\`undefined\``,
        () => toBe.not.undefined(null))
      .it(`an instance of \`TestingClass\`.`,
        () => toBe.not.instance(TESTING_CLASS, class Person {}));
  });
});

