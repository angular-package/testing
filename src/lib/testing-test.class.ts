// Class.
import { TestingCore } from './testing-core.class';
// Type.
import { ExpectType } from '../type';
import { TestingTestTo } from './tests/testing-test-to.class';
/**
 * Prepared simple tests.
 */
export class TestingTest extends TestingCore {
  /**
   * 
   */
  public get to(): TestingTestTo {
    return this.#to;
  }

  /**
   * 
   */
  #expectation = {
    toBeBigInt: `The \`actual\` must be a \`bigint\` type.`,
    toBeBooleanType: `The \`actual\` must be of a \`boolean\` type.`,
    toBeClass: `The \`actual\` must be a \`class\`.`,
    toBeCloseTo: `The \`actual\` must be within a specified precision of the \`expected\` actual.`,
    toBeDefined: `The \`actual\` must be defined.`,

    toBeFalse: `The \`actual\` must be false.`,
    toBeFalsy: `The \`actual\` must be falsy.`,

    // GreaterThan
    toBeGreaterThan: `The \`actual\` to be greater than the expected value.`,
    toBeGreaterThanOrEqual: `The \`actual\` to be greater than or equal to the expected value.`,

    // InstanceOf
    toBeInstanceOfArray: `The \`actual\` must be an instance of an \`${Array.name}\``,
    toBeInstanceOfBoolean: `The \`actual\` must be an instance of \`${Boolean.name}\`.`,
    toBeInstanceOfDate: `The \`actual\` must be an instance of \`${Date.name}\`.`,
    toBeInstanceOfError: `The \`actual\` must be an instance of an \`${Error.name}\`.`,
    toBeInstanceOfFunction: `The \`actual\` must be an instance of a \`${Function.name}\`.`,
    toBeInstanceOfMap: `The \`actual\` must be an instance of a \`${Map.name}\`.`,
    toBeInstanceOfNumber: `The \`actual\` must be an instance of a \`${Number.name}\`.`,
    toBeInstanceOfObject: `The \`actual\` must be an instance of an \`${Object.name}\`.`,
    toBeInstanceOfPromise: `The \`actual\` must be an instance of \`${Promise.name}\`.`,
    toBeInstanceOfRangeError: `The \`actual\` must be an instance of \`${RangeError.name}\`.`,
    toBeInstanceOfReferenceError: `The \`actual\` must be an instance of \`${ReferenceError.name}\`.`,
    toBeInstanceOfRegExp: `The \`actual\` must be an instance of \`${RegExp.name}\`.`,
    toBeInstanceOfSet: `The \`actual\` must be an instance of \`${Set.name}\`.`,
    toBeInstanceOfStorage: `The \`actual\` must be an instance of \`${Storage.name}\`.`,
    toBeInstanceOfString: `The \`actual\` must be an instance of a \`${String.name}\`.`,
    toBeInstanceOfSyntaxError: `The \`actual\` must be an instance of \`${SyntaxError.name}\`.`,
    toBeInstanceOfTypeError: `The \`actual\` must be an instance of \`${TypeError.name}\`.`,
    toBeInstanceOfURIError: `The \`actual\` must be an instance of \`${URIError.name}\`.`,
    toBeInstanceOfWeakSet: `The \`actual\` must be an instance of a \`${WeakSet.name}\`.`,

    // LessThan
    toBeLessThan: `The \`actual\` to be less than the expected value.`,
    toBeLessThanOrEqual: `The \`actual\` to be less than or equal to the expected value.`,

    toBeNaN: `The \`actual\` to be NaN (Not a Number).`,
    toBeNegativeInfinity: `The actual \`actual\` to be -Infinity (-infinity).`,
    toBeNull: `The \`actual\` value must be \`null\`.`,
    toBeNumberType: `The \`actual\` value must be of a \`number\` type.`,
    toBePositiveInfinity: `The \`actual\` value to be Infinity (infinity).`,
    toBeStringType: `The \`actual\` value must be of a \`string\` type.`,
    toBeTrue: `The \`actual\` value must be \`true\`.`,
    toBeTruthy: `The \`actual\` value to be truthy.`,
    toContain: `The \`actual\` value to contain a specific value.`,
    toEqual: `The \`actual\` value to be equal to the \`expected\`, using deep equality comparison.`,

    // toHaveBeen
    toHaveBeenCalled: `The \`actual\` value (a Spy) to have been called.`,
    toHaveBeenCalledBefore: `The \`actual\` value (a Spy) to have been called before another Spy.`,
    toHaveBeenCalledOnceWith: `The \`actual\` value (a Spy) to have been called exactly once, and exactly with the particular arguments.`,
    toHaveBeenCalledTimes: `The \`actual\` value (a Spy) to have been called the specified number of times.`,
    toHaveBeenCalledWith: `The \`actual\` (a Spy) to have been called the specified number of times.`,
    toHaveClass: `The \`actual\` value to be a DOM element that has the expected class.`,
    toHaveSize: `The \`actual\` size to be equal to the expected, using array-like length or object keys size.`,
    toHaveSpyInteractions: `The \`actual\` value (a SpyObj) spies to have been called.`,
    toMatch: `The \`actual\` value to match a regular expression.`,
    toThrow: `The \`actual\` value a function to throw something.`,
    toThrowError: `The \`actual\` \`value \` a function to throw an Error.`,
    toThrowMatching: `The \`actual\` value a function to throw something matching a predicate.`,
  }

  #to: TestingTestTo;

  /**
   * 
   * @param allowDescribe 
   * @param allowIt 
   * @param executable 
   */
  constructor(
    allowDescribe: boolean,
    allowIt: boolean,
    executable?: {
      describe?: Array<number>,
      it?: Array<number>
    }
  ) {
    super(allowDescribe, allowIt, executable);
    this.#to = new TestingTestTo(allowDescribe, allowIt, executable);
  }

  //#region toBe methods
  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be the given `expected` value.
   * "Expect the actual value to be === to the expected value."
   * @param actual The value of any type passed to the `expect()` function of jasmine.
   * @param expected The value of any type passed to the `toBe()` method of jasmine. "The expected value to compare against."
   * @param expectation "Textual description of what this spec is checking" with an optional its unique `number` when adding `[counter]`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed. By default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBe<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<typeof actual>,
    expectation: string,
    expectationFailOutput?: any,
    execute?: boolean
  ): this {
    this.#to.be.be(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `bigint` type on the `expected` of
   * `true`. The method uses `isBigInt()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be a bigint type'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeBigInt<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeBigInt,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.bigInt(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a `boolean` type
   * on the `expected` of `true`. The method uses `isBooleanType()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be of a boolean type'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeBooleanType<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeBooleanType,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.booleanType(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `class`
   * on the `expected` of `true`. The method uses `isClass()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `The value must be a class`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeClass<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeClass,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.class(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  public toBeCloseTo<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    precision?: any,
    expectation: string = this.#expectation.toBeCloseTo,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.closeTo(actual, expected, precision, expectation, expectationFailOutput, execute);
    return this;
  }

  public toBeDefined<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeDefined,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.defined(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  public toBeFalse<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeFalse,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.false(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  public toBeFalsy<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeFalsy,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.falsy(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  //#region toBeGreaterThan methods
  public toBeGreaterThan<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    expectation: string = this.#expectation.toBeGreaterThan, 
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.greaterThan(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  public toBeGreaterThanOrEqual<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    expectation: string = this.#expectation.toBeGreaterThanOrEqual,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.greaterThanOrEqual(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  //#endregion

  //#region toBeInstanceOf methods
  public toBeInstanceOf<T>(
    actual: ExpectType<T>,
    expected: jasmine.Constructor,
    expectation: string,
    expectationFailOutput?: any,
    execute?: boolean
  ): this {
    this.#to.be.instanceOf(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of an `Array`
   * on the `expected` of `true`. The method uses `isArray()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * `The value must be an instance of an Array`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfArray<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeInstanceOfArray,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.instanceof.array(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `Boolean` on the
   * `expected` of `true`. The method uses `isBooleanObject()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be an instance of Boolean'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfBoolean<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeInstanceOfBoolean,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.instanceof.boolean(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `Date`
   * on the `expected` of `true`. The method uses `isDate()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be an instance of Date'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfDate<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeInstanceOfDate,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.instanceof.date(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of an `Error` on the
   * `expected` of `true`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be an instance of an Error'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeInstanceOfError,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.instanceof.error(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of a `Function` on the
   * `expected` of `true`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be an instance of a Function'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfFunction<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeInstanceOfFunction,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.instanceof.function(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of a `Map` on the `expected`
   * of `true`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be an instance of a Map'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfMap<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeInstanceOfMap,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.instanceof.map(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of a `Number` on the `expected`
   * of `true`. The method uses `isObject()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be an instance of a Number'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfNumber<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeInstanceOfNumber,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.instanceof.number(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of an `Object` on the
   * `expected` of `true`. The method uses `isObject()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be an instance of an Object'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfObject<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeInstanceOfObject,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.instanceof.object(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `Promise` on the `expected`
   * of `true`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be an instance of Promise'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfPromise<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeInstanceOfPromise,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.instanceof.promise(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `RangeError` on the
   * `expected` state.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be an instance of RangeError'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfRangeError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeInstanceOfRangeError,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.instanceof.rangeError(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `ReferenceError` on
   * the `expected` of `true`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be an instance of ReferenceError'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfReferenceError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeInstanceOfReferenceError,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.instanceof.referenceError(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `RegExp` on the
   * `expected` of `true`. The method uses `isRegExp()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be an instance of RegExp'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfRegExp<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeInstanceOfRegExp,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.instanceof.regExp(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `Set` on the `expected` of
   * `true`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be an instance of Set'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfSet<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeInstanceOfSet,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.instanceof.set(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `Storage` on the `expected`
   * of `true`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be an instance of Storage'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfStorage<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeInstanceOfStorage,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.instanceof.storage(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of a `String` on the
   * `expected` of `true`.The method uses `isStringObject()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be an instance of a String'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfString<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeInstanceOfString,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.instanceof.string(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `SyntaxError` on the
   * `expected` of `true`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be an instance of SyntaxError'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfSyntaxError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeInstanceOfSyntaxError,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.instanceof.syntaxError(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `TypeError` on the
   * `expected` of `true`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be an instance of TypeError'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfTypeError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeInstanceOfTypeError,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.instanceof.typeError(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `URIError` on the
   * `expected` of `true`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be an instance of URIError'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfURIError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeInstanceOfURIError,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.instanceof.URIError(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of a `WeakSet` on the
   * `expected` of `true`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be an instance of a WeakSet'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeInstanceOfWeakSet<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeInstanceOfWeakSet,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.instanceof.weakSet(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  //#endregion

  //#region toBeLessThan methods
  public toBeLessThan<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    expectation: string = this.#expectation.toBeLessThan,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.lessThan(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  public toBeLessThanOrEqual<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    expectation: string = this.#expectation.toBeLessThanOrEqual,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.lessThanOrEqual(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  //#endregion

  public toBeNaN<T extends number>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeNaN,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.naN(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  public toBeNegativeInfinity<T extends number>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeNegativeInfinity,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.negativeInfinity(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be `null` on the `expected` of `true`. The
   * method uses `isNull()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be \`null\`'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeNull<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeNull,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.null(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a `number` type on the `expected` of
   * `true`. The method uses `isNumberType()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be of a \`number\` type'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeNumberType<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeNumberType,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.numberType(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  public toBePositiveInfinity<T extends number>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBePositiveInfinity,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.positiveInfinity(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  
  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a `string` type on the `expected` of
   * `true`. The method uses `isStringType()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be of a \`string\` type'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeStringType<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeStringType,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.stringType(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  public toBeTrue<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeTrue,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.true(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  public toBeTruthy<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeTruthy, 
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.truthy(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  //#endregion

  public toContain<T>(
    actual: ExpectType<T>,
    expected: any,
    expectation: string = this.#expectation.toContain,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.contain(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to equal to the given `expected`.
   * "Expect the actual `value` to be equal to the `expected`, using deep equality comparison."
   * @param actual The value of any type passed to the `expect()` function of jasmine.
   * @param expected The value of any type passed to the `toEqual()` method of jasmine. "The expected value to compare against."
   * @param expectation "Textual description of what this spec is checking" with an optional its unique number when adding `[counter]`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toEqual<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<typeof actual>,
    expectation: string = this.#expectation.toEqual,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.equal(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  public toHaveBeenCalled<T extends jasmine.Func>(
    spy: ExpectType<T>,
    expectation: string = this.#expectation.toHaveBeenCalled,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {    
    this.#to.have.been.called.called(spy, expectation, expectationFailOutput, execute);
    return this;
  }

  public toHaveBeenCalledBefore<T extends jasmine.Func>(
    spy: ExpectType<T>,
    expected: jasmine.Func,
    expectation: string = this.#expectation.toHaveBeenCalledBefore,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.have.been.called.before(spy, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  public toHaveBeenCalledOnceWith<Actual extends jasmine.Func>(
    expectation: string = this.#expectation.toHaveBeenCalledOnceWith,
    spy: ExpectType<Actual>,
    ...params: any[]
  ): this {
    this.#to.have.been.called.onceWith(expectation, spy, ...params);
    return this;
  }

  public toHaveBeenCalledTimes<T extends jasmine.Func>(
    spy: ExpectType<T>,
    expected: number,
    expectation: string = this.#expectation.toHaveBeenCalledTimes,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.have.been.called.times(spy, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  public toHaveBeenCalledWith<T extends jasmine.Func>(
    spy: ExpectType<T>,
    expected: any,
    expectation: string = this.#expectation.toHaveBeenCalledWith,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.have.been.called.with(spy, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  public toHaveClass<T>(
    actual: ExpectType<T>,
    expected: string,
    expectation: string = this.#expectation.toHaveClass, 
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.have.class(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  public toHaveSize<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<typeof actual>,
    expectation: string = this.#expectation.toHaveSize, 
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.have.size(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  public toHaveSpyInteractions<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<typeof actual>,
    expectation: string = this.#expectation.toHaveSpyInteractions,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.have.spyInteractions(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  public toMatch<T>(
    actual: ExpectType<T>,
    expected: string | RegExp,
    expectation: string = this.#expectation.toMatch, 
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.match(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  public toThrow<T>(
    actual: ExpectType<T>,
    expected?: any,
    expectation: string = this.#expectation.toThrow,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.throw.throw(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  public toThrowError<T extends jasmine.Func>(
    actual: ExpectType<T>,
    message?: string | RegExp,
    expectation: string = this.#expectation.toThrowError,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.throw.error(actual, message, expectation, expectationFailOutput, execute);
    return this;
  }

  public toThrowMatching<T>(
    actual: ExpectType<T>,
    predicate: (thrown: any) => boolean,
    expectation: string = this.#expectation.toThrowMatching,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.throw.matching(actual, predicate, expectation, expectationFailOutput, execute);
    return this;
  }
}
