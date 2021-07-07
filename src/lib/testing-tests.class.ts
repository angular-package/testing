// @angular-package/type.
import { is } from '@angular-package/type';
// Class.
import { TestingCore } from './testing-core.class';
/**
 * Prepared simple tests.
 */
export class TestingTests extends TestingCore {
  //#region toBe methods
  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be the given `expected` value.
   * "Expect the actual value to be === to the expected value."
   * @param expectation "Textual description of what this spec is checking" with an optional its unique number when adding `[counter]`.
   * @param value The value of any type passed to the `expect()` function of jasmine.
   * @param expected The value of any type passed to the `toBe()` method of jasmine.
   * "The expected value to compare against."
   * @param execute Whether or not to execute the spec.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBe(
    expectation: string,
    value: any,
    expected: any,
    execute?: boolean
  ): this {
    this.it(expectation, () => expect(value).toBe(expected), execute);
    return this;
  }

  /**
   *
   * @param expectation
   * @param value
   * @param resolved
   * @param execute
   * @returns
   */
  private toBeResolved(
    expectation: string,
    value: any,
    resolved: any,
    execute?: boolean
  ): this {
    this.it(
      expectation,
      async () => await expectAsync(value).toBeResolved(resolved),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `bigint` type
   * on the `expected` of `true`.
   * @param value Any kind of value to check.
   * @param execute Whether or not to execute the spec, by default it's set to `true`.
   * @param expectation The message for the karma, which by default is set to `The value must be a bigint type`.
   * @param expected Expects the result of the expectation must be `true` or `false`, by default it's `true`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeBigInt<Value>(
    value: Value,
    execute: boolean = true,
    expectation: string = `The value must be a \`bigint\` type`,
    expected: boolean = true
  ): this {
    this.toBe(expectation, is.bigint(value), expected, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a `boolean` type
   * on the `expected` of `true`.
   * @param value Any kind of value to check.
   * @param execute Whether or not to execute the spec, by default it's set to `true`.
   * @param expectation The message for the karma, which by default is set to `The value must be of a boolean type`.
   * @param expected Expects the result of the expectation must be `true` or `false`, by default it's `true`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeBooleanType<Value>(
    value: Value,
    execute: boolean = true,
    expectation: string = `The value must be of a \`boolean\` type`,
    expected: boolean = true
  ): this {
    this.toBe(expectation, is.booleanType(value), expected, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `class`
   * on the `expected` of `true`.
   * @param value Any kind of value to check.
   * @param execute Whether or not to execute the spec, by default it's set to `true`.
   * @param expectation The message for the karma, which by default is set to `The value must be a class`.
   * @param expected Expects the result of the expectation must be `true` or `false`, by default it's `true`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeClass<Value>(
    value: Value,
    execute: boolean = true,
    expectation: string = `The value must be a \`class\``,
    expected: boolean = true
  ): this {
    this.toBe(expectation, is.class(value), expected, execute);
    return this;
  }

  //#region toBeInstanceOf methods

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of an `Array`
   * on the `expected` of `true`.
   * @param value Any kind of value to check.
   * @param execute Whether or not to execute the spec, by default it's set to `true`.
   * @param expectation The message for the karma, which by default is set to
   * `The value must be an instance of an Array`.
   * @param expected Expects the result of the expectation must be `true` or `false`, by default it's `true`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfArray<Value>(
    value: Value,
    execute: boolean = true,
    expectation: string = `The value must be an instance of an \`${Array.name}\``,
    expected: boolean = true
  ): this {
    this.toBe(expectation, is.array(value), expected, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `Boolean`
   * on the `expected` of `true`.
   * @param value Any kind of value to check.
   * @param execute Whether or not to execute the spec, by default it's set to `true`.
   * @param expectation The message for the karma, which by default is set to
   * `The value must be an instance of Boolean`.
   * @param expected Expects the result of the expectation must be `true` or `false`, by default it's `true`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfBoolean<Value>(
    value: Value,
    execute: boolean = true,
    expectation: string = `The value must be an instance of \`${Boolean.name}\``,
    expected: boolean = true
  ): this {
    this.toBe(expectation, is.booleanObject(value), expected, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `Date`
   * on the `expected` of `true`.
   * @param value Any kind of value to check.
   * @param execute Whether or not to execute the spec, by default it's set to `true`.
   * @param expectation The message for the karma, which by default is set to
   * `The value must be an instance of Date`.
   * @param expected Expects the result of the expectation must be `true` or `false`, by default it's `true`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfDate<Value>(
    value: Value,
    execute: boolean = true,
    expectation: string = `The value must be an instance of \`${Date.name}\``,
    expected: boolean = true
  ): this {
    this.toBe(expectation, is.date(value), expected, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of an `Error`
   * on the `expected` of `true`.
   * @param value Any kind of value to check.
   * @param execute Whether or not to execute the spec, by default it's set to `true`.
   * @param expectation The message for the karma, which by default is set to
   * `The value must be an instance of an Error`.
   * @param expected Expects the result of the expectation must be `true` or `false`, by default it's `true`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfError<Value>(
    value: Value,
    execute: boolean = true,
    expectation: string = `The value must be an instance of an \`${Error.name}\``,
    expected: boolean = true
  ): this {
    this.toBe(expectation, value instanceof Error, expected, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of a `Function`
   * on the `expected` of `true`.
   * @param value Any kind of value to check.
   * @param execute Whether or not to execute the spec, by default it's set to `true`.
   * @param expectation The message for the karma, which by default is set to
   * `The value must be an instance of a Function`.
   * @param expected Expects the result of the expectation must be `true` or `false`, by default it's `true`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfFunction<Value>(
    value: Value,
    execute: boolean = true,
    expectation: string = `The value must be an instance of a \`${Function.name}\``,
    expected: boolean = true
  ): this {
    this.toBe(expectation, is.function(value), expected, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of a `Map`
   * on the `expected` of `true`.
   * @param value Any kind of value to check.
   * @param execute Whether or not to execute the spec, by default it's set to `true`.
   * @param expectation The message for the karma, which by default is set to
   * `The value must be an instance of a Map.
   * @param expected Expects the result of the expectation must be `true` or `false`, by default it's `true`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfMap<Value>(
    value: Value,
    execute: boolean = true,
    expectation: string = `The value must be an instance of a \`${Map.name}\``,
    expected: boolean = true
  ): this {
    this.toBe(expectation, value instanceof Map, expected, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of a `Number`
   * on the `expected` of `true`.
   * @param value Any kind of value to check.
   * @param execute Whether or not to execute the spec, by default it's set to `true`.
   * @param expectation The message for the karma, which by default is set to
   * `The value must be an instance of a Number.
   * @param expected Expects the result of the expectation must be `true` or `false`, by default it's `true`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfNumber<Value>(
    value: Value,
    execute: boolean = true,
    expectation: string = `The value must be an instance of a \`${Number.name}\``,
    expected: boolean = true
  ): this {
    this.toBe(expectation, is.numberObject(value), expected, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of an `Object`
   * on the `expected` of `true`.
   * @param value Any kind of value to check.
   * @param execute Whether or not to execute the spec, by default it's set to `true`.
   * @param expectation The message for the karma, which by default is set to
   * `The value must be an instance of an Object.
   * @param toBe Expects the result of the expectation must be `true` or `false`, by default it's `true`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfObject<Value>(
    value: Value,
    execute: boolean = true,
    expectation: string = `The value must be an instance of an \`${Object.name}\``,
    expected: boolean = true
  ): this {
    this.toBe(expectation, is.object(value), expected, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `Promise`
   * on the `expected` of `true`.
   * @param value Any kind of value to check.
   * @param execute Whether or not to execute the spec, by default it's set to `true`.
   * @param expectation The message for the karma, which by default is set to
   * `The value must be an instance of Promise`.
   * @param expected Expects the result of the expectation must be `true` or `false`, by default it's `true`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfPromise<Value>(
    value: Value,
    execute: boolean = true,
    expectation: string = `The value must be an instance of \`${Promise.name}\``,
    expected: boolean = true
  ): this {
    this.toBe(expectation, value instanceof Promise, expected, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `RangeError`
   * on the `expected` state.
   * by default  of `true`.
   * @param value Any kind of value to check.
   * @param execute Whether or not to execute the spec.
   * @param expectation The message for the karma, which by default is set to
   * `The value must be an instance of RangeError.
   * @param expected Expects the result of the expectation must be `true` or `false`, by default it's `true`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfRangeError<Value>(
    value: Value,
    execute: boolean = true,
    expectation: string = `The value must be an instance of \`${RangeError.name}\``,
    expected: boolean = true
  ): this {
    this.toBe(expectation, value instanceof RangeError, expected, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `ReferenceError`
   * on the `expected` of `true`.
   * @param value Any kind of value to check.
   * @param execute Whether or not to execute the spec, by default it's set to `true`.
   * @param expectation The message for the karma, which by default is set to
   * `The value must be an instance of ReferenceError.
   * @param expected Expects the result of the expectation must be `true` or `false`, by default it's `true`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfReferenceError<Value>(
    value: Value,
    execute: boolean = true,
    expectation: string = `The value must be an instance of \`${ReferenceError.name}\``,
    expected: boolean = true
  ): this {
    this.toBe(expectation, value instanceof ReferenceError, expected, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `RegExp`
   * on the `expected` of `true`.
   * @param value Any kind of value to check.
   * @param execute Whether or not to execute the spec, by default it's set to `true`.
   * @param expectation The message for the karma, which by default is set to
   * `The value must be an instance of RegExp.
   * @param expected Expects the result of the expectation must be `true` or `false`, by default it's `true`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfRegExp<Value>(
    value: Value,
    execute: boolean = true,
    expectation: string = `The value must be an instance of \`${RegExp.name}\``,
    expected: boolean = true
  ): this {
    this.toBe(expectation, is.regexp(value), expected, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `Set`
   * on the `expected` of `true`.
   * @param value Any kind of value to check.
   * @param execute Whether or not to execute the spec, by default it's set to `true`.
   * @param expectation The message for the karma, which by default is set to
   * `The value must be an instance of Set.
   * @param expected Expects the result of the expectation must be `true` or `false`, by default it's `true`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfSet<Value>(
    value: Value,
    execute: boolean = true,
    expectation: string = `The value must be an instance of \`${Set.name}\``,
    expected: boolean = true
  ): this {
    this.toBe(expectation, value instanceof Set, expected, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `Storage`
   * on the `expected` of `true`.
   * @param value Any kind of value to check.
   * @param execute Whether or not to execute the spec, by default it's set to `true`.
   * @param expectation The message for the karma, which by default is set to
   * `The value must be an instance of Storage.
   * @param expected Expects the result of the expectation must be `true` or `false`, by default it's `true`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfStorage<Value>(
    value: Value,
    execute: boolean = true,
    expectation: string = `The value must be an instance of \`${Storage.name}\``,
    expected: boolean = true
  ): this {
    this.toBe(expectation, value instanceof Storage, expected, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of a `String`
   * on the `expected` of `true`.
   * @param value Any kind of value to check.
   * @param expectation The message for the karma, which by default is set to
   * `The value must be an instance of a String.
   * @param expected Expects the result of the expectation must be `true` or `false`, by default it's `true`.
   * @param execute Whether or not to execute the spec.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfString<Value>(
    value: Value,
    execute: boolean = true,
    expectation: string = `The value must be an instance of a \`${String.name}\``,
    expected: boolean = true
  ): this {
    this.toBe(expectation, is.stringObject(value), expected, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `SyntaxError`
   * on the `expected` of `true`.
   * by default  of `true`.
   * @param value Any kind of value to check.
   * @param execute Whether or not to execute the spec, by default it's set to `true`.
   * @param expectation The message for the karma, which by default is set to
   * `The value must be an instance of SyntaxError.
   * @param expected Expects the result of the expectation must be `true` or `false`, by default it's `true`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfSyntaxError<Value>(
    value: Value,
    execute: boolean = true,
    expectation: string = `The value must be an instance of \`${SyntaxError.name}\``,
    expected: boolean = true
  ): this {
    this.toBe(expectation, value instanceof SyntaxError, expected, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `TypeError`
   * on the `expected` of `true`.
   * @param value Any kind of value to check.
   * @param execute Whether or not to execute the spec, by default it's set to `true`.
   * @param expectation The message for the karma, which by default is set to
   * `The value must be an instance of TypeError.
   * @param expected Expects the result of the expectation must be `true` or `false`, by default it's `true`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfTypeError<Value>(
    value: Value,
    execute: boolean = true,
    expectation: string = `The value must be an instance of \`${TypeError.name}\``,
    expected: boolean = true
  ): this {
    this.toBe(expectation, value instanceof TypeError, expected, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `URIError`
   * on the `expected` of `true`.
   * @param value Any kind of value to check.
   * @param execute Whether or not to execute the spec, by default it's set to `true`.
   * @param expectation The message for the karma, which by default is set to
   * `The value must be an instance of URIError.
   * @param expected Expects the result of the expectation must be `true` or `false`, by default it's `true`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfURIError<Value>(
    value: Value,
    execute: boolean = true,
    expectation: string = `The value must be an instance of \`${URIError.name}\``,
    expected: boolean = true
  ): this {
    this.toBe(expectation, value instanceof URIError, expected, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of a `WeakSet`
   * on the `expected` of `true`.
   * @param value Any kind of value to check.
   * @param execute Whether or not to execute the spec, by default it's set to `true`.
   * @param expectation The message for the karma, which by default is set to
   * `The value must be an instance of a WeakSet.
   * @param expected Expects the result of the expectation must be `true` or `false`, by default it's `true`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfWeakSet<Value>(
    value: Value,
    execute: boolean = true,
    expectation: string = `The value must be an instance of a \`${WeakSet.name}\``,
    expected: boolean = true
  ): this {
    this.toBe(expectation, value instanceof WeakSet, expected, execute);
    return this;
  }
  //#endregion

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be `null` on the `expected` of `true`.
   * @param value Any kind of value to check.
   * @param execute Whether or not to execute the spec, by default it's set to `true`.
   * @param expectation The message for the karma, which by default is set to `The value must be \`null\``.
   * @param expected Expects the result of the expectation must be `true` or `false`, by default it's `true`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeNull<Value>(
    value: Value,
    execute: boolean = true,
    expectation: string = `The value must be \`null\``,
    expected: boolean = true
  ): this {
    this.toBe(expectation, is.null(value), expected, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a `number` type
   * on the `expected` of `true`.
   * @param value Any kind of value to check.
   * @param execute Whether or not to execute the spec, by default it's set to `true`.
   * @param expectation The message for the karma, which by default is set to `The value must be of a \`number\` type`.
   * @param expected Expects the result of the expectation must be `true` or `false`, by default it's `true`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeNumberType<Value>(
    value: Value,
    execute: boolean = true,
    expectation: string = `The value must be of a \`number\` type`,
    expected: boolean = true
  ): this {
    this.toBe(expectation, is.numberType(value), expected, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a `string` type
   * on the `expected` of `true`.
   * @param value Any kind of value to check.
   * @param execute Whether or not to execute the spec, by default it's set to `true`.
   * @param expectation The message for the karma, which by default is set to `The value must be of a \`string\` type`.
   * @param expected The value can be `true` or `false`, by default it's `true`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeStringType<Value>(
    value: Value,
    execute: boolean = true,
    expectation: string = `The value must be of a \`string\` type`,
    expected: boolean = true
  ): this {
    this.toBe(expectation, is.stringType(value), expected, execute);
    return this;
  }
  //#endregion

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to equal to the given `expected`.
   * "Expect the actual `value` to be equal to the `expected`, using deep equality comparison."
   * @param expectation "Textual description of what this spec is checking" with an optional its unique number when adding `[counter]`.
   * @param value The value of any type passed to the `expect()` function of jasmine.
   * @param expected The value of any type passed to the `toEqual()` method of jasmine.
   * "The expected value to compare against."
   * @param execute Whether or not to execute the spec.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toEqual(
    expectation: string,
    value: any,
    expected: any,
    execute?: boolean
  ): this {
    this.it(expectation, () => expect(value).toEqual(expected), execute);
    return this;
  }
}
