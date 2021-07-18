//
import { is, Constructor, Key } from '@angular-package/type';
//
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
   * Expects provided `value` to be an `array`. The method uses `isArray()` function from the `@angular-package/type`.
   * @param value The `value` of any type that is checked against the `array` and the result of its check is passed to the `expect()`
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
   * Expects provided `value` to be `bigint` type. The method uses `isBigInt()` function from the `@angular-package/type`.
   * @param value The `value` of any type that is checked against `bigint` and the result of its check is passed to the `expect()`
   * function of jasmine.
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
   * Expects provided `value` to be `boolean` type. The method uses `isBoolean()` function from the `@angular-package/type`.
   * @param value The `value` of any type that is checked against `boolean` and the result of its check is passed to the `expect()`
   * function of jasmine.
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
    } be \`boolean\``
  ): this {
    this.toBe(is.boolean(value), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided `value` to be `class`. The method uses `isClass()` function from the `@angular-package/type`.
   * @param value The `value` of any type that is checked against the `class` and the result of its check is passed to the `expect()`
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
   * Expects provided `value` to be a `Date`. The method uses `isDate()` function from the `@angular-package/type`.
   * @param value The `value` of any type that is checked against `date` and the result of its check is passed to the `expect()`
   * function of jasmine.
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
   * Expects provided `value` to be defined. The method uses `isDefined()` function from the `@angular-package/type`.
   * @param value The `value` of any type that is checked against defined and the result of its check is passed to the `expect()` function
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
   * Expects provided `value` to be `false`. The method uses `isFalse()` function from the `@angular-package/type`.
   * @param value The `value` of any type that is checked against `false` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) `false`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public false(
    value: any,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be \`false\``
  ): this {
    this.toBe(is.false(value), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided `value` to be `function`. The method uses `isFunction()` function from the `@angular-package/type`.
   * @param value The `value` of any type that is checked against the `function` and the result of its check is passed to the `expect()`
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
   * Expects provided `value` to be an instance of the given class from the `constructor`. The method uses `isInstance()` function from
   * the `@angular-package/type`.
   * @param value The `value` of any type that is checked against the instance of the given class and the result of its check is passed
   * to the `expect()` function of jasmine.
   * @param constructor A `class` or `function` that specifies the type of the `constructor`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * instance of the given `class`
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
   * Expects provided `value` to be a property key. The method uses `isKey()` function from the `@angular-package/type`.
   * @param value The `value` of any type that is checked against the property key and the result of its check is passed to the `expect()`
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
   * Expects provided `value` to be null. The method uses `isNull()` function from the `@angular-package/type`.
   * @param value The `value` of any type that is checked against `null` and the result of its check is passed to the `expect()` function of
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
   * Expects provided `value` to be `number`. The method uses `isNumber()` function from the `@angular-package/type`.
   * @param value The `value` of any type that is checked against the `number` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) a
   * `number`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public number(
    value: any,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be \`number\``
  ): this {
    this.toBe(is.number(value), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided `value` to be a number between a range. The method uses `isNumberBetween()` function from the `@angular-package/type`.
   * @param value The `value` of any type that is checked against a `number` of the specified range and the result of its check is passed to
   * the `expect()` function of jasmine.
   * @param min A `number` of the minimum range of the given `value`.
   * @param max A `number` of the maximum range of the given `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) a `number`
   * between minimum to maximum.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public numberBetween<Min extends number, Max extends number>(
    value: any,
    min: Min,
    max: Max,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a number between ${min} to ${max}`
  ): this {
    this.toBe(
      is.numberBetween(value, min, max),
      expected,
      expectationFailOutput
    );
    return this;
  }

  /**
   * Expects provided `value` to be an object. The method uses `isObject()` function from the `@angular-package/type`.
   * @param value The `value` of any type that is checked against an `object` and the result of its check is passed to the `expect()`
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
   * Expects provided value to be an `object` with given keys. The method uses `isObjectKey()` function from the `@angular-package/type`.
   * @param value The `value` of any type that is checked against an `object` that contains given keys and the result of its check is
   * passed to the `expect()` function of jasmine.
   * @param key Property name of `Key` type or an array of property names  of `Key` type of `object` from the provided `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `object` with all given keys.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public objectKey(
    value: any,
    key: Key | Key[],
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`object\` with all given keys`
  ): this {
    this.toBe(is.objectKey(value, key), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided value to be an object with given keys. The method uses `isObjectKeyIn()` function from the `@angular-package/type`.
   * @param value The `value` of any type that is checked against an object with given keys and the result of its check is passed
   * to the `expect()` function of jasmine.
   * @param key Property name of a `Key` type or an array of property names of `Key` type of `object` from the provided `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `object` with all given keys.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public objectKeyIn(
    value: any,
    key: Key | Key[],
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`object\` with all given keys`
  ): this {
    this.toBe(is.objectKeyIn(value, key), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided `value` to be an object with some given keys. The method uses `isObjectKeys()` function from the
   * `@angular-package/type`.
   * @param value The `value` of any type that is checked against an `object` that contains some given keys and the result of
   * its check is passed to the `expect()` function of jasmine.
   * @param keys An `array` of property names of the `Key` type of `object` from the provided `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `object` with some given keys.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public objectKeys(
    value: any,
    keys: Key[],
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be an \`object\` with some of the given keys`
  ): this {
    this.toBe(is.objectKeys(value, ...keys), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided `value` to be `RegExp`. The method uses `isRegExp()` function from the `@angular-package/type`.
   * @param value The `value` of any type that is checked against `RegExp` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) `regexp`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public regexp(
    value: any,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be \`regexp\``
  ): this {
    this.toBe(is.regexp(value), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided `value` to be a `string`. The method uses `isString()` function from the `@angular-package/type`.
   * @param value The `value` of any type that is checked against a `string` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) a `string`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public string(
    value: any,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`string\``
  ): this {
    this.toBe(is.string(value), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided `value` to be a `string` of the length between the given minimum to maximum. The method uses `isStringLength()`
   * function from the `@angular-package/type`.
   * @param value The `value` of any type that is checked against a `string` of the specified length and the result of its check is passed
   * to the `expect()` function of jasmine.
   * @param min Minimum length of the given `value` of a `number` type.
   * @param max The maximum length of the given `value` of a `number` type.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) a `string`
   * of the length between the given minimum to maximum.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public stringOfLength<Min extends number, Max extends number>(
    value: any,
    min: Min,
    max: Max,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be a \`string\` of the length between the given ${min} to ${max}`
  ): this {
    this.toBe(
      is.stringLength(value, min, max),
      expected,
      expectationFailOutput
    );
    return this;
  }

  /**
   * Expects provided `value` to be a `symbol`. The method uses `isSymbol()` function from the `@angular-package/type`.
   * @param value The `value` of any type that is checked against the `symbol` and the result of its check is passed to the `expect()`
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
   * Expects provided `value` to be `true`. The method uses `isTrue()` function from the `@angular-package/type`.
   * @param value The `value` of any type that is checked against `true` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) `true`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public true(
    value: any,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = `${this.expectationFailOutput} ${
      this.getNot() === true ? `not` : ``
    } be \`true\``
  ): this {
    this.toBe(is.true(value), expected, expectationFailOutput);
    return this;
  }

  /**
   * Expects provided `value` to be `undefined`. The method uses `isUndefined()` function from the `@angular-package/type`.
   * @param value The `value` of any type that is checked against `undefined` and the result of its check is passed to the `expect()`
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
   * Expects provided `value` to be the given `expected`.
   * @param value The `value` of a generic `Value` type captured from the given `value` and passed to the `expect()` function of
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
    this.expect(value).toBe(expected, expectationFailOutput);
    this.setNot(false);
    return this;
  }
}
