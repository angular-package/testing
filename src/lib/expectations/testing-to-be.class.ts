// @angular-package/type.
import { is, Constructor } from '@angular-package/type';
// Class.
import { TestingExpect } from '../testing-expect.abstract';
import { TestingToBeInstanceOf } from './testing-to-be-instanceof.class';
// Type.
import { ExpectType } from '../../type';
/**
 * Matchers that use the `toBe()` method of jasmine.
 */
export class TestingToBe extends TestingExpect {
  /**
   * 
   */
  public get instanceOf() {
    return this.#instanceOf;
  }

  /**
   * 
   */
  #instanceOf = new TestingToBeInstanceOf();

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
  public array<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`array\``
  ): this {
    this.toBe(is.instance(value, Array) &&  is.array(value), expected, expectationFailOutput);
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
  public bigint<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be \`bigint\``
  ): this {
    this.toBe(is.bigint(value), expected, expectationFailOutput);
    return this;
  }

  /**
   * @param value The value of any type that is checked against a `boolean` type or an instance of `Boolean` and the result of its check
   * is passed to the `expect()` function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not)
   * `boolean`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public boolean<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`boolean\` type or an instance of \`Boolean\``
  ): this {
    this.toBe(is.instance(value, Boolean) && is.boolean(value), expected, expectationFailOutput);
    return this;
  }

  public booleanType<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`boolean\` type`
  ): this {
    this.toBe(is.booleanType(value), expected, expectationFailOutput);
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
  public class<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be \`class\``
  ): this {
    this.toBe(is.class(value), expected, expectationFailOutput);
    return this;
  }

  // TODO: Description.
  public closeTo<Value extends number>(
    value: ExpectType<Value>,
    expected: number,
    precision?: any,
    expectationFailOutput?: any
  ): this {
    this.expect(value, expectationFailOutput).toBeCloseTo(expected, precision);
    this.setNot(false);
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
  public date<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`date\``
  ): this {
    this.toBe(is.instance(value, Date) && is.date(value), expected, expectationFailOutput);
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
  public defined<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be defined`
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeDefined();
    this.setNot(false);
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
  public false<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be equal to \`false\``
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeFalse();
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  public falsy<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be falsy`
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeFalsy();
    this.setNot(false);
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
  public function<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be \`function\``
  ): this {
    this.toBe(is.function(value), expected, expectationFailOutput);
    return this;
  }

  // TODO: Description.
  public greaterThan<Value extends number>(
    value: ExpectType<Value>,
    expected: number,
    expectationFailOutput?: any
  ): this {
    this.expect(value, expectationFailOutput).toBeGreaterThan(expected);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  public greaterThanOrEqual<Value extends number>(
    value: ExpectType<Value>,
    expected: number,
    expectationFailOutput?: any
  ): this {
    this.expect(value, expectationFailOutput).toBeGreaterThanOrEqual(expected);
    this.setNot(false);
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
  public instance<Value, Type>(
    value: ExpectType<Value>,
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
  public key<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be the property key`
  ): this {
    this.toBe(is.key(value), expected, expectationFailOutput);
    return this;
  }

  // TODO: Description.
  public lessThan<Value extends number>(
    value: ExpectType<Value>,
    expected: number,
    expectationFailOutput?: any
  ): this {
    this.expect(value, expectationFailOutput).toBeLessThan(expected);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  public lessThanOrEqual<Value extends number>(
    value: ExpectType<Value>,
    expected: number,
    expectationFailOutput?: any
  ): this {
    this.expect(value, expectationFailOutput).toBeLessThanOrEqual(expected);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  public naN<Value extends number>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput?: any
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeNaN();
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  public negativeInfinity<Value extends number>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput?: any
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeNegativeInfinity();
    this.setNot(false);
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
  public null<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be \`null\``
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeNull();
    this.setNot(false);
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
  public number<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`number\` type or an instance of a \`Number\``
  ): this {
    // REVIEW: instance
    this.toBe(is.instance(value, Number) && is.number(value), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be a `number` type or an instance of a `Number` between the `range` of minimum and maximum. The method uses
   * `isNumberBetween()` function from the `@angular-package/type`.
   * @param value The value of any type that is checked against a `number` type or an instance of a `Number` within the specified `range`
   * and the result of its check is passed to the `expect()` function of jasmine.
   * @param min The **minimum** range of generic type variable `Min` of the given `value`.
   * @param max The **maximum** range of generic type variable `Max` of the given `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) a `number`
   * type or an instance of a `Number` between the `range` of minimum and maximum.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public numberBetween<Min extends number, Max extends number, Value>(
    value: ExpectType<Value>,
    min: Min,
    max: Max,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`number\` type or an instance of a \`Number\` between the range of ${min} and ${max}`
  ): this {
    this.toBe(
      is.numberBetween(value, min, max),
      expected,
      expectationFailOutput
    );
    return this;
  }

  public numberType<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`number\` type`
  ): this {
    this.toBe(is.numberType(value), expected, expectationFailOutput);
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
  public object<Value>(
    value: ExpectType<Value>,
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
    // this.expect(value, expectationFailOutput).toBeInstanceOf(Object);
    // keys.forEach(key => this.expect(value, expectationFailOutput).toContain(key));
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
    // this.expect(value, expectationFailOutput).toBeInstanceOf(Object);
    // keys.forEach(key => this.expect(value, expectationFailOutput).toContain(key));
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
    // this.expect(value, expectationFailOutput).toBeInstanceOf(Object);
    // keys.forEach(key => this.expect(value, expectationFailOutput).toContain(key));
    this.toBe(is.objectSomeKeys(value, keys), expected, expectationFailOutput);
    return this;
  }

  // TODO: Description.
  public positiveInfinity<Value extends number>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput?: any
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBePositiveInfinity();
    this.setNot(false);
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
    // REVIEW: instance.
    this.toBe(is.instance(value, String) && is.string(value), expected, expectationFailOutput);
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
    // this.expect(value, expectationFailOutput).toBeInstanceOf(String);
    // includes.forEach(include => this.expect(value, expectationFailOutput).toContain(include));
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
   * Expects provided value to be a `string` type or an instance of a `String` of the given length. The method uses `isStringLength()`
   * function from the `@angular-package/type`.
   * @param value The value of any type that is checked against a `string` type or an instance of a `String` of the given `length` and
   * the result of its check is passed to the `expect()` function of jasmine.
   * @param length The **length** of generic type variable `Length` for the given `value`,
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) a `string`
   * type or an instance of a `String` of the specified `length`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public stringOfLength<Length extends number>(
    value: any,
    length: Length,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`string\` type or an instance of a \`String\` of the specified \`length\` equal to ${length}`
  ): this {
    this.toBe(is.stringLength(value, length), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be a `string` type or an instance of a `String` of the length between the given minimum and maximum. The
   * method uses `isStringLengthBetween()` function from the `@angular-package/type`.
   * @param value The value of any type that is checked against a `string` type or an instance of a `String` of the given `min` and `max`
   * and the result of its check is passed to the `expect()` function of jasmine.
   * @param min The **minimum** length of generic type variable `Min` of the given `value`.
   * @param max The **maximum** length of generic type variable `Max` of the given `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) a `string`
   * type or an instance of a `String` of the `length` between the given minimum and maximum.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public stringOfLengthBetween<Min extends number, Max extends number>(
    value: any,
    min: Min,
    max: Max,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`string\` type or an instance of a \`String\` of the \`length\` between the given ${min} and ${max}`
  ): this {
    this.toBe(
      is.stringLengthBetween(value, min, max),
      expected,
      expectationFailOutput
    );
    return this;
  }

  public stringType<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`string\` type`
  ): this {
    this.toBe(is.stringType(value), expected, expectationFailOutput);
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
   * Expects provided value to be the given `expected`.
   * @param value The value of a generic `Value` type captured from the given `value` and passed to the `expect()` function of
   * jasmine.
   * @param expected The expected value to compare against the given `value`, passed to the `toBe()` method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) of a
   * specific from the method type.
   * @returns The return value is an instance of a `TestingMatchers`.
   */
  public toBe<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<typeof value>,
    expectationFailOutput?: any
  ): this {
    this.expect(value, expectationFailOutput).toBe(expected);
    this.setNot(false);
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
    } be equal to \`true\``
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeTrue();
    this.setNot(false);
    return this;
  }

  public truthy(
    value: any,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be truthy`
  ): this {
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeTruthy();
    this.setNot(false);
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
    expected === false && (this.not);
    this.expect(value, expectationFailOutput).toBeUndefined();
    this.setNot(false);
    return this;
  }
}
