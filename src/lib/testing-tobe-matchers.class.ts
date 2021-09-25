// @angular-package/type.
import { is, Constructor } from '@angular-package/type';
// TestingExpect.
import { TestingExpect } from './testing-expect.class';
/**
 * Matchers that use the `toBe()` method of jasmine.
 */
export class TestingToBeMatchers extends TestingExpect {
  /**
   * The Default message for the expectation fails.
   */
  private expectationFailOutput = `The expected value should`;

  /**
   * Expects provided value to be an `array`. The method uses `isArray()` function from the `@angular-package/type`.
   * @param value The value of any type that is checked against the `array` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `array`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public array(
    value: any,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`array\``
  ): this {
    this.toBe(is.array(value), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be a `bigint` type. The method uses `isBigInt()` function from the `@angular-package/type`.
   * @param value The value of any type that is checked against `bigint` and the result of its check is passed to the `expect()` function
   * of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) `bigint`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public bigint(
    value: any,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be \`bigint\``
  ): this {
    this.toBe(is.bigint(value), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be a `boolean` type or an instance of `Boolean`. The method uses `isBoolean()` function from the
   * `@angular-package/type`.
   * @param value The value of any type that is checked against a `boolean` type or an instance of `Boolean` and the result of its check
   * is passed to the `expect()` function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not)
   * `boolean`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public boolean(
    value: any,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`boolean\` type or an instance of \`Boolean\``
  ): this {
    this.toBe(is.boolean(value), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be `class`. The method uses `isClass()` function from the `@angular-package/type`.
   * @param value The value of any type that is checked against `class` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) `class`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public class(
    value: any,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be \`class\``
  ): this {
    this.toBe(is.class(value), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be a `Date`. The method uses `isDate()` function from the `@angular-package/type`.
   * @param value The value of any type that is checked against `date` and the result of its check is passed to the `expect()` function
   * of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) a `Date`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public date(
    value: any,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`date\``
  ): this {
    this.toBe(is.date(value), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be defined. The method uses `isDefined()` function from the `@angular-package/type`.
   * @param value The value of any type that is checked against defined and the result of its check is passed to the `expect()` function
   * of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) defined.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public defined(
    value: any,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be defined`
  ): this {
    this.toBe(is.defined(value), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be a `boolean` type or an instance of `Boolean` equal to `false`. The method uses `isFalse()` function
   * from the `@angular-package/type`.
   * @param value The value of any type that is checked against a `boolean` type or an instance of `Boolean` equal to `false` and the
   * result of its check is passed to the `expect()` function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) a
   * `boolean` type or an instance of `Boolean` equal to `false`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public false(
    value: any,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`boolean\` type or an instance of \`Boolean\` equal to \`false\``
  ): this {
    this.toBe(is.false(value), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be `function`. The method uses `isFunction()` function from the `@angular-package/type`.
   * @param value The value of any type that is checked against `function` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not)
   * `function`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public function(
    value: any,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be \`function\``
  ): this {
    this.toBe(is.function(value), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be an instance of a `class` from the given `constructor`. The method uses `isInstance()` function from the
   * `@angular-package/type`.
   * @param value The value of any type that is checked against an instance of a `class` from the given `constructor` and the result of its
   * check is passed to the `expect()` function of jasmine.
   * @param constructor A `class` or `function` that specifies the type of the `constructor`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * instance of `class` from the given `constructor`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public instance<Type>(
    value: any,
    constructor: Constructor<Type>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of ${constructor.name}`
  ): this {
    this.toBe(is.instance(value, constructor), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be property key. The method uses `isKey()` function from the `@angular-package/type`.
   * @param value The value of any type that is checked against the property key and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) the
   * property key.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public key(
    value: any,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be the property key`
  ): this {
    this.toBe(is.key(value), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be `null`. The method uses `isNull()` function from the `@angular-package/type`.
   * @param value The value of any type that is checked against `null` and the result of its check is passed to the `expect()` function of
   * jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) `null`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public null(
    value: any,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be \`null\``
  ): this {
    this.toBe(is.null(value), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be a `number` type or an instance of a `Number`. The method uses `isNumber()` function from the
   * `@angular-package/type`.
   * @param value The value of any type that is checked against a `number` type or an instance of a `Number` and the result of its check is
   * passed to the `expect()` function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) a
   * `number` type or an instance of a `Number`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public number(
    value: any,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`number\` type or an instance of a \`Number\``
  ): this {
    this.toBe(is.number(value), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be a `number` type or an instance of a `Number` between the `range` of minimum and maximum. The method uses
   * `isNumberBetween()` function from the `@angular-package/type`.
   * @param value The value of any type that is checked against a `number` type or an instance of a `Number` within the specified `range`
   * and the result of its check is passed to the `expect()` function of jasmine.
   * @param range An `object` of optional minimum and maximum `range` of a given `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) a `number`
   * type or an instance of a `Number` between the `range` of minimum and maximum.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public numberBetween<Min extends number, Max extends number>(
    value: any,
    range: {
      min?: Min;
      max?: Max;
    },
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`number\` type or an instance of a \`Number\` between the range of ${
      range?.min
    } and ${range?.max}`
  ): this {
    this.toBe(is.numberBetween(value, range), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be an `object`. The method uses `isObject()` function from the `@angular-package/type`.
   * @param value The value of any type that is checked against an `object` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `object`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public object(
    value: any,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`object\``
  ): this {
    this.toBe(is.object(value), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be an `object` with a given `key`. The method uses `isObjectKey()` function from the `@angular-package/type`.
   * @param value The value of any type that is checked against an `object` that contains a given `key` and the result of its check is
   * passed to the `expect()` function of jasmine.
   * @param key Property name of `PropertyKey` type of potential `object` from the provided `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `object` with a given `key`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public objectKey(
    value: any,
    key: PropertyKey,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`object\` with a given \`key\``
  ): this {
    this.toBe(is.objectKey(value, key), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be an `object` with a given `key` in it(or its prototype chain). The method uses `isObjectKeyIn()` function
   * from the `@angular-package/type`.
   * @param value The `value` of any type that is checked against an `object` with a given `key` in it(or its prototype chain) and the
   * result of its check is passed to the `expect()` function of jasmine.
   * @param key Property name of a `PropertyKey` type of potential `object` from the provided `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `object` with a given `key` in it(or its prototype chain).
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public objectKeyIn(
    value: any,
    key: PropertyKey,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`object\` with a given \`key\` in it(or its prototype chain)`
  ): this {
    this.toBe(is.objectKeyIn(value, key), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be an `object` with given `keys`. The method uses `isObjectKeys()` function from the `@angular-package/type`.
   * @param value The value of any type that is checked against an `object` that contains given `keys` and the result of its check is passed
   * to the `expect()` function of jasmine.
   * @param keys An `array` of property names of the `PropertyKey` type of potential `object` from the provided `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `object` with given `keys`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public objectKeys(
    value: any,
    keys: PropertyKey[],
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`object\` with given \`keys\``
  ): this {
    this.toBe(is.objectKeys(value, keys), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be an `object` with given `keys` in it(or its prototype chain). The method uses `isObjectKeysIn()` function
   * from the `@angular-package/type`.
   * @param value The value of any type that is checked against an `object` that contains given `keys` in it(or its prototype chain) and
   * the result of its check is passed to the `expect()` function of jasmine.
   * @param keys An `array` of property names of the `PropertyKey` type of potential `object` from the provided `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `object` with given `keys` in it(or its prototype chain).
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public objectKeysIn(
    value: any,
    keys: PropertyKey[],
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`object\` with given \`keys\` in it(or its prototype chain)`
  ): this {
    this.toBe(is.objectKeysIn(value, keys), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be an `object` with some of its keys or some groups of its keys of the `PropertyKey` type. The method uses
   * `objectSomeKeys()` function from the `@angular-package/type`.
   * @param value The value of any type to check against an `object` that contains some of its keys or some groups of its keys from given
   * `keys` and the result of its check is passed to the `expect()` function of jasmine.
   * @param keys An `Array` of property names or a two-dimensional `array` of property names to check if the given `value` contains some of
   * them or some groups of them.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `object` with some given keys.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public objectSomeKeys(
    value: any,
    keys: (PropertyKey | PropertyKey[])[],
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`object\` with some of its keys or some groups of its keys from given \`keys\``
  ): this {
    this.toBe(is.objectSomeKeys(value, keys), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be `RegExp`. The method uses `isRegExp()` function from the `@angular-package/type`.
   * @param value The value of any type that is checked against `RegExp` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) `RegExp`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public regexp(
    value: any,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be \`RegExp\``
  ): this {
    this.toBe(is.regexp(value), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be a `string` type or an instance of a `String`. The method uses `isString()` function from the
   * `@angular-package/type`.
   * @param value The value of any type that is checked against a `string` type or an instance of a `String` and the result of its check is
   * passed to the `expect()` function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) a `string`
   * type or an instance of a `String`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   * @angularpackage
   */
  public string(
    value: any,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`string\` type or an instance of a \`String\``
  ): this {
    this.toBe(is.string(value), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be a `string` type or an instance of a `String` that includes the specified words/sentences. The method uses
   * `isStringIncludes()` function from the `@angular-package/type`.
   * @param value The value of any type to check against a `string` type or an instance of a `String` that contains words/sentences from a
   * given `includes` and the result of its check is passed to the `expect()` function of jasmine.
   * @param includes An `Array` of strings as words/sentences to be case-sensitive searched for within the given `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) a `string`
   * type or an instance of `String` that includes the specified words/sentences from a given `includes`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   * @angularpackage
   */
  public stringIncludes(
    value: any,
    includes: string[],
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`string\` type or an instance of \`String\` that includes the specified words/sentences from a given \`includes\``
  ): this {
    this.toBe(
      is.stringIncludes(value, includes),
      expected,
      expectationFailOutput
    );
    return this;
  }

  /**
   * Expects provided value to be a `string` type or an instance of a `String` that includes some of the specified words/sentences. The
   * method uses `isStringIncludes()` function from the `@angular-package/type`.
   * @param value The value of any type to check against a `string` type or an instance of a `String` that contains some of words/sentences
   * from a given `includes` and the result of its check is passed to the `expect()` function of jasmine.
   * @param includes An `Array` of strings as words/sentences to be case-sensitive searched for within the given `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) a `string`
   * type or an instance of `String` that includes some of the specified words/sentences from a given `includes`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   * @angularpackage
   */
  public stringIncludesSome(
    value: any,
    includes: string[],
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`string\` type or an instance of \`String\` that includes some of the specified words/sentences from a given \`includes\``
  ): this {
    this.toBe(
      is.stringIncludesSome(value, includes),
      expected,
      expectationFailOutput
    );
    return this;
  }

  /**
   * Expects provided value to be a `string` type or an instance of a `String` of the length between the given minimum and maximum. The
   * method uses `isStringLength()` function from the `@angular-package/type`.
   * @param value The value of any type that is checked against a `string` type or an instance of a `String` of the specified `length` and
   * the result of its check is passed to the `expect()` function of jasmine.
   * @param length An `object` of optional minimum and maximum `length` of the given `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) a `string`
   * type or an instance of a `String` of the `length` between the given minimum and maximum.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public stringOfLength<Min extends number, Max extends number>(
    value: any,
    length: {
      min: Min;
      max: Max;
    },
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`string\` type or an instance of a \`String\` of the \`length\` between the given ${
      length?.min
    } and ${length?.max}`
  ): this {
    this.toBe(is.stringLength(value, length), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be a `symbol`. The method uses `isSymbol()` function from the `@angular-package/type`.
   * @param value The value of any type that is checked against a `symbol` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) a `symbol`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public symbol(
    value: any,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`symbol\``
  ): this {
    this.toBe(is.symbol(value), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be a `boolean` type or an instance of `Boolean` equal to `true`. The method uses `isTrue()` function from
   * the `@angular-package/type`.
   * @param value The value of any type that is checked against a `boolean` type or an instance of `Boolean` equal to `true` and the
   * result of its check is passed to the `expect()` function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) a `boolean`
   * type or an instance of `Boolean` equal to `true`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public true(
    value: any,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`boolean\` type or an instance of \`Boolean\` equal to \`true\``
  ): this {
    this.toBe(is.true(value), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be `undefined`. The method uses `isUndefined()` function from the `@angular-package/type`.
   * @param value The value of any type that is checked against `undefined` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) `undefined`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public undefined(
    value: any,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be \`undefined\``
  ): this {
    this.toBe(is.undefined(value), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be the given `expected`.
   * @param value The value of a generic `Value` type captured from the given `value` and passed to the `expect()` function of
   * jasmine.
   * @param expected The expected value to compare against the given `value`, passed to the `toBe()` method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) of a
   * specific from the method type.
   * @returns The return value is an instance of a `TestingMatchers`.
   */
  private toBe<Value>(
    value: Value,
    expected: jasmine.Expected<Value>,
    expectationFailOutput?: any
  ): this {
    this.expect(value).withContext(expectationFailOutput).toBe(expected);
    this.setNot(false);
    return this;
  }
}
