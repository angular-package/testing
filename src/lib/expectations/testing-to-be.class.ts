// @angular-package/type.
import { is, Constructor, typeOf } from '@angular-package/type';
// Class.
import { TestingExpect } from '../testing-expect.abstract';
import { TestingToBeArrayOf } from './testing-to-be-arrayof.class';
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
  public get arrayof() {
    return this.#arrayof;
  }

  /**
   * 
   */
  public get instanceof() {
    return this.#instanceof;
  }

  #arrayof = new TestingToBeArrayOf();

  /**
   * 
   */
  #instanceof = new TestingToBeInstanceOf();

  /**
   * The Default message for the expectation fails.
   */
  private expectationFailOutput = `The expected value should`;

  /**
   * Expects provided value to be an `array`. The method uses `isArray()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against the `array` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `array`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public array<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`array\``
  ): this {
    this.be(is.array(actual), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be the given `expected`.
   * @param actual The value of a generic `Value` type captured from the given `value` and passed to the `expect()` function of
   * jasmine.
   * @param expected The expected value to compare against the given `value`, passed to the `toBe()` method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) of a
   * specific from the method type.
   * @returns The return value is an instance of a `TestingMatchers`.
   */
  public be<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<typeof actual>,
    expectationFailOutput?: any
  ): this {
    this.expect(actual, expectationFailOutput).toBe(expected);
    this.setNot(false);
    return this;
  }

  /**
   * Expects provided value to be a `bigint` type. The method uses `isBigInt()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against `bigint` and the result of its check is passed to the `expect()` function
   * of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) `bigint`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public bigint<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be \`bigint\``
  ): this {
    this.be(is.bigint(actual), expected, expectationFailOutput);
    return this;
  }

  /**
   * @param actual The value of any type that is checked against a `boolean` type or an instance of `Boolean` and the result of its check
   * is passed to the `expect()` function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not)
   * `boolean`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public boolean<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`boolean\` type or an instance of \`Boolean\``
  ): this {
    this.be(is.boolean(actual), expected, expectationFailOutput);
    return this;
  }

  public booleanType<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`boolean\` type`
  ): this {
    this.be(is.booleanType(actual), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be `class`. The method uses `isClass()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against `class` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) `class`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public class<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be \`class\``
  ): this {
    this.be(is.class(actual), expected, expectationFailOutput);
    return this;
  }

  // TODO: Description.
  public closeTo<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    precision?: any,
    expectationFailOutput?: any
  ): this {
    this.expect(actual, expectationFailOutput).toBeCloseTo(expected, precision);
    this.setNot(false);
    return this;
  }

  /**
   * Expects provided value to be a `Date`. The method uses `isDate()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against `date` and the result of its check is passed to the `expect()` function
   * of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) a `Date`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public date<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`date\``
  ): this {
    this.be(is.date(actual), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be defined. The method uses `isDefined()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against defined and the result of its check is passed to the `expect()` function
   * of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) defined.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public defined<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be defined`
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeDefined();
    this.setNot(false);
    return this;
  }

  //#region boolean expectations
  /**
   * Expects provided value to be a `boolean` type or an instance of `Boolean` equal to `false`. The method uses `isFalse()` function
   * from the `@angular-package/type`.
   * @param actual The value of any type that is checked against a `boolean` type or an instance of `Boolean` equal to `false` and the
   * result of its check is passed to the `expect()` function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) a
   * `boolean` type or an instance of `Boolean` equal to `false`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public false<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be equal to \`false\``
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeFalse();
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  public falsy<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be falsy`
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeFalsy();
    this.setNot(false);
    return this;
  }
  //#endregion

  /**
   * Expects provided value to be `function`. The method uses `isFunction()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against `function` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not)
   * `function`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public function<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be \`function\``
  ): this {
    this.be(is.function(actual), expected, expectationFailOutput);
    return this;
  }

  //#region greaterThan
  // TODO: Description.
  public greaterThan<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    expectationFailOutput?: any
  ): this {
    this.expect(actual, expectationFailOutput).toBeGreaterThan(expected);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  public greaterThanOrEqual<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    expectationFailOutput?: any
  ): this {
    this.expect(actual, expectationFailOutput).toBeGreaterThanOrEqual(expected);
    this.setNot(false);
    return this;
  }
  //#endregion

  //#region instance
  /**
   * Expects provided value to be an instance of a `class` from the given `constructor`. The method uses `isInstance()` function from the
   * `@angular-package/type`.
   * @param actual The value of any type that is checked against an instance of a `class` from the given `constructor` and the result of its
   * check is passed to the `expect()` function of jasmine.
   * @param constructor A `class` or `function` that specifies the type of the `constructor`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * instance of `class` from the given `constructor`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public instance<T, Type>(
    actual: ExpectType<T>,
    constructor: Constructor<Type>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of ${constructor.name}`
  ): this {
    this.be(is.instance(actual, constructor), expected, expectationFailOutput);    
    return this;
  }

  public instanceOf<T>(
    actual: ExpectType<T>,
    expected: jasmine.Constructor,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an instance of \`expected\``
  ): this {
    this.expect(actual, expectationFailOutput).toBeInstanceOf(expected);
    this.setNot(false);
    return this;
  }
  //#endregion

  /**
   * Expects provided value to be property key. The method uses `isKey()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against the property key and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) the
   * property key.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public key<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be the property key`
  ): this {
    this.be(is.key(actual), expected, expectationFailOutput);
    return this;
  }

  //#region lessThan
  // TODO: Description.
  public lessThan<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    expectationFailOutput?: any
  ): this {
    this.expect(actual, expectationFailOutput).toBeLessThan(expected);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  public lessThanOrEqual<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    expectationFailOutput?: any
  ): this {
    this.expect(actual, expectationFailOutput).toBeLessThanOrEqual(expected);
    this.setNot(false);
    return this;
  }
  //#endregion

  // TODO: Description.
  public naN<T extends number>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput?: any
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeNaN();
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  public negativeInfinity<T extends number>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput?: any
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeNegativeInfinity();
    this.setNot(false);
    return this;
  }

  /**
   * Expects provided value to be `null`. The method uses `isNull()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against `null` and the result of its check is passed to the `expect()` function of
   * jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) `null`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public null<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be \`null\``
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeNull();
    this.setNot(false);
    return this;
  }

  //#region number
  /**
   * Expects provided value to be a `number` type or an instance of a `Number`. The method uses `isNumber()` function from the
   * `@angular-package/type`.
   * @param actual The value of any type that is checked against a `number` type or an instance of a `Number` and the result of its check is
   * passed to the `expect()` function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) a
   * `number` type or an instance of a `Number`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public number<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`number\` type or an instance of a \`Number\``
  ): this {
    this.be(is.number(actual), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be a `number` type or an instance of a `Number` between the `range` of minimum and maximum. The method uses
   * `isNumberBetween()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against a `number` type or an instance of a `Number` within the specified `range`
   * and the result of its check is passed to the `expect()` function of jasmine.
   * @param min The **minimum** range of generic type variable `Min` of the given `value`.
   * @param max The **maximum** range of generic type variable `Max` of the given `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) a `number`
   * type or an instance of a `Number` between the `range` of minimum and maximum.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public numberBetween<T, Min extends number, Max extends number>(
    actual: ExpectType<T>,
    min: Min,
    max: Max,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`number\` type or an instance of a \`Number\` between the range of ${min} and ${max}`
  ): this {
    this.be(
      is.numberBetween(actual, min, max),
      expected,
      expectationFailOutput
    );
    return this;
  }

  public numberType<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`number\` type`
  ): this {
    this.be(is.numberType(actual), expected, expectationFailOutput);
    return this;
  }
  //#endregion

  //#region object
  /**
   * Expects provided value to be an `object`. The method uses `isObject()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against an `object` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `object`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public object<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`object\``
  ): this {
    this.be(is.object(actual), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be an `object` with a given `key`. The method uses `isObjectKey()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against an `object` that contains a given `key` and the result of its check is
   * passed to the `expect()` function of jasmine.
   * @param key Property name of `PropertyKey` type of potential `object` from the provided `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `object` with a given `key`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public objectKey<T>(
    actual: ExpectType<T>,
    key: PropertyKey,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`object\` with a given \`key\``
  ): this {
    this.be(is.objectKey(actual, key), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be an `object` with a given `key` in it(or its prototype chain). The method uses `isObjectKeyIn()` function
   * from the `@angular-package/type`.
   * @param actual The `value` of any type that is checked against an `object` with a given `key` in it(or its prototype chain) and the
   * result of its check is passed to the `expect()` function of jasmine.
   * @param key Property name of a `PropertyKey` type of potential `object` from the provided `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `object` with a given `key` in it(or its prototype chain).
   * @returns The return value is an instance of `TestingToBe`.
   */
  public objectKeyIn<T>(
    actual: ExpectType<T>,
    key: PropertyKey,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`object\` with a given \`key\` in it(or its prototype chain)`
  ): this {
    this.be(is.objectKeyIn(actual, key), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be an `object` with given `keys`. The method uses `isObjectKeys()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against an `object` that contains given `keys` and the result of its check is passed
   * to the `expect()` function of jasmine.
   * @param keys An `array` of property names of the `PropertyKey` type of potential `object` from the provided `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `object` with given `keys`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public objectKeys<T>(
    actual: ExpectType<T>,
    keys: PropertyKey[],
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`object\` with given \`keys\``
  ): this {
    this.be(is.objectKeys(actual, keys), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be an `object` with given `keys` in it(or its prototype chain). The method uses `isObjectKeysIn()` function
   * from the `@angular-package/type`.
   * @param actual The value of any type that is checked against an `object` that contains given `keys` in it(or its prototype chain) and
   * the result of its check is passed to the `expect()` function of jasmine.
   * @param keys An `array` of property names of the `PropertyKey` type of potential `object` from the provided `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `object` with given `keys` in it(or its prototype chain).
   * @returns The return value is an instance of `TestingToBe`.
   */
  public objectKeysIn<T>(
    actual: ExpectType<T>,
    keys: PropertyKey[],
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`object\` with given \`keys\` in it(or its prototype chain)`
  ): this {
    this.be(is.objectKeysIn(actual, keys), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be an `object` with some of its keys or some groups of its keys of the `PropertyKey` type. The method uses
   * `objectSomeKeys()` function from the `@angular-package/type`.
   * @param actual The value of any type to check against an `object` that contains some of its keys or some groups of its keys from given
   * `keys` and the result of its check is passed to the `expect()` function of jasmine.
   * @param keys An `Array` of property names or a two-dimensional `array` of property names to check if the given `value` contains some of
   * them or some groups of them.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `object` with some given keys.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public objectSomeKeys<T>(
    actual: ExpectType<T>,
    keys: (PropertyKey | PropertyKey[])[],
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`object\` with some of its keys or some groups of its keys from given \`keys\``
  ): this {
    this.be(is.objectSomeKeys(actual, keys), expected, expectationFailOutput);
    return this;
  }
  //#endregion

  public pending<T>(
    actual: T | PromiseLike<T>,
    expectationFailOutput?: any,
  ): this {
    this.expectAsync(actual, expectationFailOutput).toBePending();
    this.setAlready(false).setNot(false);
    return this;
  }

  // TODO: Description.
  public positiveInfinity<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput?: any
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBePositiveInfinity();
    this.setNot(false);
    return this;
  }

  /**
   * Expects provided value to be `RegExp`. The method uses `isRegExp()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against `RegExp` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) `RegExp`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public regexp<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be \`RegExp\``
  ): this {
    this.be(is.regexp(actual), expected, expectationFailOutput);
    return this;
  }

  //#region rejected
  public rejected<T>(
    actual: T | PromiseLike<T>,
    expectationFailOutput?: any,
  ): this {
    this.expectAsync(actual, expectationFailOutput).toBeRejected();
    this.setAlready(false).setNot(false);
    return this;
  }

  public rejectedWith<T, U>(
    actual: T | PromiseLike<T>,
    expected: jasmine.Expected<U>,
    expectationFailOutput?: any,
  ): this {
    this.expectAsync(actual, expectationFailOutput).toBeRejectedWith(expected);
    this.setAlready(false).setNot(false);
    return this;
  }

  public rejectedWithError<T, U>(
    actual: T | PromiseLike<T>,
    expected?: new (...args: any[]) => Error,
    message?: string | RegExp,
    expectationFailOutput?: any,
  ): this {
    this.expectAsync<T, U>(actual, expectationFailOutput).toBeRejectedWithError(expected, message)
    this.setAlready(false).setNot(false);
    return this;
  }

  public resolved<T>(
    actual: T | PromiseLike<T>,
    expectationFailOutput?: any,
  ): this {
    this.expectAsync(actual, expectationFailOutput).toBeResolved();
    this.setAlready(false).setNot(false);
    return this;
  }

  public resolvedTo<T>(
    actual: T | PromiseLike<T>,
    expected: jasmine.Expected<T>,
    expectationFailOutput?: any,
  ): this {
    this.expectAsync(actual, expectationFailOutput).toBeResolvedTo(expected);
    this.setAlready(false).setNot(false);
    return this;
  }
  //#endregion

  //#region string
  /**
   * Expects provided value to be a `string` type or an instance of a `String`. The method uses `isString()` function from the
   * `@angular-package/type`.
   * @param actual The value of any type that is checked against a `string` type or an instance of a `String` and the result of its check is
   * passed to the `expect()` function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) a `string`
   * type or an instance of a `String`.
   * @returns The return value is an instance of `TestingToBe`.
   * @angularpackage
   */
  public string<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`string\` type or an instance of a \`String\``
  ): this {
    this.be(is.string(actual), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be a `string` type or an instance of a `String` that includes the specified words/sentences. The method uses
   * `isStringIncludes()` function from the `@angular-package/type`.
   * @param actual The value of any type to check against a `string` type or an instance of a `String` that contains words/sentences from a
   * given `includes` and the result of its check is passed to the `expect()` function of jasmine.
   * @param includes An `Array` of strings as words/sentences to be case-sensitive searched for within the given `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) a `string`
   * type or an instance of `String` that includes the specified words/sentences from a given `includes`.
   * @returns The return value is an instance of `TestingToBe`.
   * @angularpackage
   */
  public stringIncludes<T>(
    actual: ExpectType<T>,
    includes: string[],
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`string\` type or an instance of \`String\` that includes the specified words/sentences from a given \`includes\``
  ): this {
    this.be(
      is.stringIncludes(actual, includes),
      expected,
      expectationFailOutput
    );
    return this;
  }

  /**
   * Expects provided value to be a `string` type or an instance of a `String` that includes some of the specified words/sentences. The
   * method uses `isStringIncludes()` function from the `@angular-package/type`.
   * @param actual The value of any type to check against a `string` type or an instance of a `String` that contains some of words/sentences
   * from a given `includes` and the result of its check is passed to the `expect()` function of jasmine.
   * @param includes An `Array` of strings as words/sentences to be case-sensitive searched for within the given `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) a `string`
   * type or an instance of `String` that includes some of the specified words/sentences from a given `includes`.
   * @returns The return value is an instance of `TestingToBe`.
   * @angularpackage
   */
  public stringIncludesSome<T>(
    actual: ExpectType<T>,
    includes: string[],
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`string\` type or an instance of \`String\` that includes some of the specified words/sentences from a given \`includes\``
  ): this {
    this.be(
      is.stringIncludesSome(actual, includes),
      expected,
      expectationFailOutput
    );
    return this;
  }

  /**
   * Expects provided value to be a `string` type or an instance of a `String` of the given length. The method uses `isStringLength()`
   * function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against a `string` type or an instance of a `String` of the given `length` and
   * the result of its check is passed to the `expect()` function of jasmine.
   * @param length The **length** of generic type variable `Length` for the given `value`,
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) a `string`
   * type or an instance of a `String` of the specified `length`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public stringOfLength<T, Length extends number>(
    actual: ExpectType<T>,
    length: Length,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`string\` type or an instance of a \`String\` of the specified \`length\` equal to ${length}`
  ): this {
    this.be(is.stringLength(actual, length), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be a `string` type or an instance of a `String` of the length between the given minimum and maximum. The
   * method uses `isStringLengthBetween()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against a `string` type or an instance of a `String` of the given `min` and `max`
   * and the result of its check is passed to the `expect()` function of jasmine.
   * @param min The **minimum** length of generic type variable `Min` of the given `value`.
   * @param max The **maximum** length of generic type variable `Max` of the given `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) a `string`
   * type or an instance of a `String` of the `length` between the given minimum and maximum.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public stringOfLengthBetween<T, Min extends number, Max extends number>(
    actual: ExpectType<T>,
    min: Min,
    max: Max,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`string\` type or an instance of a \`String\` of the \`length\` between the given ${min} and ${max}`
  ): this {
    this.be(
      is.stringLengthBetween(actual, min, max),
      expected,
      expectationFailOutput
    );
    return this;
  }

  public stringType<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`string\` type`
  ): this {
    this.be(is.stringType(actual), expected, expectationFailOutput);
    return this;
  }
  //#endregion

  /**
   * Expects provided value to be a `symbol`. The method uses `isSymbol()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against a `symbol` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) a `symbol`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public symbol<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`symbol\``
  ): this {
    this.be(is.symbol(actual), expected, expectationFailOutput);
    return this;
  }

  //#region true boolean
  /**
   * Expects provided value to be a `boolean` type or an instance of `Boolean` equal to `true`. The method uses `isTrue()` function from
   * the `@angular-package/type`.
   * @param actual The value of any type that is checked against a `boolean` type or an instance of `Boolean` equal to `true` and the
   * result of its check is passed to the `expect()` function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) a `boolean`
   * type or an instance of `Boolean` equal to `true`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public true<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be equal to \`true\``
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeTrue();
    this.setNot(false);
    return this;
  }

  public truthy<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be truthy`
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeTruthy();
    this.setNot(false);
    return this;
  }
  //#endregion

  public typeOf<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<string>,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be typeOf`
  ): this {
    this.expect(typeOf(actual) === expected, expectationFailOutput).toBeTrue();
    this.setNot(false);
    return this;
  }

  /**
   * Expects provided value to be `undefined`. The method uses `isUndefined()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against `undefined` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) `undefined`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public undefined<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be \`undefined\``
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeUndefined();
    this.setNot(false);
    return this;
  }
}
