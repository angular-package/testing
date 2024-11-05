// Class.
import { TestingCore } from './testing-core.abstract';
import { TestingDescribe } from './testing-describe.class';
import { TestingExpectation } from './testing-expectation.class';
import { TestingIt } from './testing-it.class';
import { TestingItTo } from './it/testing-it-to.class';
import { TextualExpectation } from './textual-expectation.abstract';
// Type.
import { Constructor } from '@angular-package/type';
import { CounterConfig } from '../type/counter-config.type';
import { ExpectType } from '../type';
// Interface.
import { ExecutableTests } from '../interface/executable-tests.interface';
/**
 * Prepared simple tests.
 */
export class TestingActual<
  Descriptions extends string = string,
  Expectations extends string = string
> extends TestingCore<
  Descriptions,
  Expectations
> {
  /**
   * 
   */
  #actual: any;

  /**
   * 
   */
  #spy!: any;

  /**
   * 
   */
  #to;

  /**
   * 
   * @param allowDescribe 
   * @param allowIt 
   * @param executable 
   */
  constructor(
    allowDescribe: boolean = true,
    allowIt: boolean = true,
    executable?: ExecutableTests,
    counter: CounterConfig = [true, false],
    testingDescribe: TestingDescribe = new TestingDescribe(allowDescribe, executable?.describe, counter),
    testingIt: TestingIt = new TestingIt(allowIt, executable?.it, counter),
    testingExpectation: TestingExpectation = new TestingExpectation()
  ) {
    super(allowDescribe, allowIt, executable, counter, testingDescribe, testingIt, testingExpectation);
    this.#to = new TestingItTo(allowDescribe, allowIt, executable, counter, testingDescribe, testingIt, testingExpectation);
  }

  /**
   * 
   * @param actual 
   * @returns 
   */
  public actual<T>(
    actual: ExpectType<T>,
    specDefinitions?: (testing: TestingActual) => void
  ): this {
    this.#actual = actual;
    specDefinitions && specDefinitions(new TestingActual().actual(this.#actual));
    return this;
  }

  /**
   * 
   * @param spy 
   * @returns 
   */
  public spy<T extends jasmine.Func>(
    spy: () => ExpectType<T>,
    beforeEachAction?: jasmine.ImplementationCallback,
    specDefinitions?: (testing: TestingActual) => void
  ): this {
    this.#spy = spy;
    specDefinitions && specDefinitions((
      beforeEachAction
      ?  new TestingActual().beforeEach(beforeEachAction)
      : new TestingActual()
    ).spy(this.#spy));
    return this;
  }

  //#region toBe
  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be the given `expected` value.
   * "Expect the actual value to be === to the expected value."
   * @param expected The value of any type passed to the `toBe()` method of jasmine. "The expected value to compare against."
   * @param not Invert the matcher following this expectation.
   * @param expectation "Textual description of what this spec is checking" with an optional its unique `number` when adding `[counter]`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed. By default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type passed to the `expect()` function of jasmine.
   * @returns The return value is an instance of a `TestingTestActual`.
   */
  public toBe<T>(
    expected: jasmine.Expected<typeof actual>,
    not?: boolean,
    expectation: string = TextualExpectation.get('toBe'),
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.be(actual, expected, not, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be `array` type or an instance of \`Array\` on the `expected` of
   * `true`. The method uses `isArray()` function of `@angular-package/type`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be `array` type or an instance of `Array`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestActual`.
   */
  public toBeArray<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.array(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `bigint` type on the `expected` of
   * `true`. The method uses `isBigInt()` function of `@angular-package/type`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be a `bigint` type.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestActual`.
   */
  public toBeBigInt<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.bigInt(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a `boolean` type or an instance of `Boolean`
   * on the `expected` of `true`. The method uses `isBoolean()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to 
   * The `actual` value must be of a `boolean` type or an instance of `${Boolean.name}`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public toBeBoolean<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual
  ): this {
    this.#to.be.boolean.boolean(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a `boolean` type
   * on the `expected` of `true`. The method uses `isBooleanType()` function of `@angular-package/type`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be of a `boolean` type.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestActual`.
   */
  public toBeBooleanType<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.boolean.type(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `class`
   * on the `expected` of `true`. The method uses `isClass()` function of `@angular-package/type`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be a `class`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestActual`.
   */
  public toBeClass<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.class(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param expected 
   * @param precision 
   * @param not Invert the matcher following this expectation.
   * @param expectation 
   * The `actual` value must be within a specified `precision` of the `expected` actual.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toBeCloseTo<T extends number>(
    expected: number,
    precision?: any,
    not?: boolean,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.closeTo(actual, expected, precision, not, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param expected 
   * @param expectation 
   * The `actual` value to be a `date`.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toBeDate<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.date(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param expected 
   * @param expectation 
   * The `actual` value must be defined.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toBeDefined<T>(
    expected?: jasmine.Expected<boolean>,
    not?: boolean,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.defined(actual, expected, not, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param expected 
   * @param expectation 
   * The `actual` value must be `false`.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toBeFalse<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.false(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param expected 
   * @param expectation 
   * The `actual` value must be falsy.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toBeFalsy<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.falsy(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param expected 
   * @param expectation 
   * The `actual` value must be `function`.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toBeFunction<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.function(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  //#region toBeGreaterThan
  /**
   * 
   * @param expected 
   * @param expectation 
   * The `actual` value to be greater than the `expected` value.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toBeGreaterThan<T extends number>(
    expected: number,
    not?: boolean,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.greaterThan(actual, expected, not, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param expected 
   * @param expectation 
   * The `actual` value to be greater than or equal to the `expected` value.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toBeGreaterThanOrEqual<T extends number>(
    expected: number,
    not?: boolean,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.greaterThanOrEqual(actual, expected, not, expectation, expectationFailOutput, execute);
    return this;
  }
  //#endregion
  /**
   * 
   * @param constructor 
   * @param expected 
   * @param expectation 
   * The `actual` value to be an instance of `constructor`.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toBeInstance<T, Type>(
    constructor: Constructor<Type>,
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual
  ): this {
    this.#to.be.instance(actual, constructor, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  //#region toBeInstanceOf
  /**
   * 
   * @param expected 
   * @param expectation
   * The `actual` value must be an instance of `expected`.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toBeInstanceOf<T>(
    expected: jasmine.Constructor,
    not?: boolean,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.instanceOf(actual, expected, not, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of an `Array`
   * on the `expected` of `true`. The method uses `isArray()` function of `@angular-package/type`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * `The value must be an instance of an Array`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestActual`.
   */
  public toBeInstanceOfArray<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.instanceof.array(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `Boolean` on the
   * `expected` of `true`. The method uses `isBooleanObject()` function of `@angular-package/type`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be an instance of `${Boolean.name}`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestActual`.
   */
  public toBeInstanceOfBoolean<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.instanceof.boolean(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `Date`
   * on the `expected` of `true`. The method uses `isDate()` function of `@angular-package/type`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be an instance of `${Date.name}`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestActual`.
   */
  public toBeInstanceOfDate<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.instanceof.date(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of an `Error` on the
   * `expected` of `true`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be an instance of an `${Error.name}`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestActual`.
   */
  public toBeInstanceOfError<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.instanceof.error(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of a `Function` on the
   * `expected` of `true`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be an instance of a `${Function.name}`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestActual`.
   */
  public toBeInstanceOfFunction<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.instanceof.function(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of a `Map` on the `expected`
   * of `true`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be an instance of a `${Map.name}`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestActual`.
   */
  public toBeInstanceOfMap<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.instanceof.map(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of a `Number` on the `expected`
   * of `true`. The method uses `isObject()` function of `@angular-package/type`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be an instance of a `${Number.name}`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestActual`.
   */
  public toBeInstanceOfNumber<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.instanceof.number(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of an `Object` on the
   * `expected` of `true`. The method uses `isObject()` function of `@angular-package/type`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be an instance of an `${Object.name}`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestActual`.
   */
  public toBeInstanceOfObject<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.instanceof.object(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `Promise` on the `expected`
   * of `true`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be an instance of `${Promise.name}`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestActual`.
   */
  public toBeInstanceOfPromise<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.instanceof.promise(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `RangeError` on the
   * `expected` state.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be an instance of `${RangeError.name}`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestActual`.
   */
  public toBeInstanceOfRangeError<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.instanceof.rangeError(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `ReferenceError` on
   * the `expected` of `true`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be an instance of `${ReferenceError.name}`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestActual`.
   */
  public toBeInstanceOfReferenceError<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.instanceof.referenceError(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `RegExp` on the
   * `expected` of `true`. The method uses `isRegExp()` function of `@angular-package/type`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be an instance of `${RegExp.name}`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestActual`.
   */
  public toBeInstanceOfRegExp<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.instanceof.regExp(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `Set` on the `expected` of
   * `true`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be an instance of `${Set.name}`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestActual`.
   */
  public toBeInstanceOfSet<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.instanceof.set(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * @deprecated
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `Storage` on the `expected`
   * of `true`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be an instance of `${Storage.name}`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestActual`.
   */
  public toBeInstanceOfStorage<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    // this.#to.be.instanceof.storage(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of a `String` on the
   * `expected` of `true`.The method uses `isStringObject()` function of `@angular-package/type`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be an instance of a `${String.name}`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestActual`.
   */
  public toBeInstanceOfString<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.instanceof.string(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `SyntaxError` on the
   * `expected` of `true`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be an instance of `${SyntaxError.name}`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestActual`.
   */
  public toBeInstanceOfSyntaxError<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.instanceof.syntaxError(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `TypeError` on the
   * `expected` of `true`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be an instance of `${TypeError.name}`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestActual`.
   */
  public toBeInstanceOfTypeError<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.instanceof.typeError(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of `URIError` on the
   * `expected` of `true`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be an instance of `${URIError.name}`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestActual`.
   */
  public toBeInstanceOfURIError<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.instanceof.URIError(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an instance of a `WeakSet` on the
   * `expected` of `true`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be an instance of a `${WeakSet.name}`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestActual`.
   */
  public toBeInstanceOfWeakSet<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.instanceof.weakSet(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  //#endregion

  /**
   * 
   * @param expected 
   * @param expectation 
   * The `actual` value to be a `PropertyKey`.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toBeKey<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.key(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  //#region toBeLessThan
  /**
   * 
   * @param expected 
   * @param not Invert the matcher following this expectation.
   * @param expectation 
   * The `actual` value to be less than the `expected` value.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toBeLessThan<T extends number>(
    expected: number,
    not?: boolean,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.lessThan(actual, expected, not, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param expected 
   * @param not Invert the matcher following this expectation.
   * @param expectation 
   * The `actual` value to be less than or equal to the `expected` value.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toBeLessThanOrEqual<T extends number>(
    expected: number,
    not?: boolean,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.lessThanOrEqual(actual, expected, not, expectation, expectationFailOutput, execute);
    return this;
  }
  //#endregion
  /**
   * 
   * @param expected 
   * @param expectation 
   * The `actual` value to be NaN (Not a Number).
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toBeNaN<T extends number>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.naN(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param expected 
   * @param expectation 
   * The `actual` value to be -Infinity (-infinity).
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toBeNegativeInfinity<T extends number>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.negativeInfinity(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be `null` on the `expected` of `true`. The
   * method uses `isNull()` function of `@angular-package/type`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be `null`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestActual`.
   */
  public toBeNull<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.null(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` be a `number` type or an instance of a `Number` on the `expected` of `true`. The
   * method uses `isNumber()` function of `@angular-package/type`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value to be a `number` type or an instance of a `${Number.name}`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public toBeNumber<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual
  ): this {
    this.#to.be.number(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `number` type or an instance of a `Number` between the `range` of minimum and maximum on the `expected` of `true`. The
   * method uses `isNumberBetween()` function of `@angular-package/type`.
   * @param min The **minimum** range of generic type variable `Min` of the given `value`.
   * @param max The **maximum** range of generic type variable `Max` of the given `value`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to 
   * The `actual` value to be a `number` type or an instance of `${Number.name}` between the range of `min` and `max`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public toBeNumberBetween<T, Min extends number, Max extends number>(
    min: Min,
    max: Max,
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.numberBetween(actual, min, max, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a `number` type on the `expected` of
   * `true`. The method uses `isNumberType()` function of `@angular-package/type`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be of a `number` type.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestActual`.
   */
  public toBeNumberType<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.numberType(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param expected 
   * @param expectation 
   * The `actual` value must be of `object` type or an instance of `Object`.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toBeObject<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual
  ): this {
    this.#to.be.object(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param key 
   * @param expected 
   * @param expectation 
   * The `actual` value must be of `object` type or an instance of `Object` with a given `key`.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toBeObjectKey<T>(
    key: PropertyKey,
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual
  ): this {
    this.#to.be.objectKey(actual, key, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param key 
   * @param expected 
   * @param expectation 
   * The `actual` value must be of `object` type or an instance of `Object` with given `keys`.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toBeObjectKeyIn<T>(
    key: PropertyKey,
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual
  ): this {
    this.#to.be.objectKeyIn(actual, key, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param actual 
   * @param keys 
   * @param expected 
   * @param expectation 
   * The `actual` value must be of `object` type or an instance of `Object` with a given `key` in it(or its prototype chain).
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBeObjectKeys<T>(
    keys: PropertyKey[],
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual
  ): this {
    this.#to.be.objectKeys(actual, keys, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param keys 
   * @param expected 
   * @param expectation 
   * The `actual` value must be of `object` type or an instance of `Object` with given `keys` in it(or its prototype chain).
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public objectKeysIn<T>(
    keys: PropertyKey[],
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual
  ): this {
    this.#to.be.objectKeysIn(actual, keys, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param keys 
   * @param expected 
   * @param expectation 
   * @param expectation 
   * The `actual` value must be of `object` type or an instance of `Object` with some given `keys`.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public objectSomeKeys<T>(
    keys: PropertyKey[],
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual
  ): this {
    this.#to.be.objectSomeKeys(actual, keys, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param expected 
   * @param expectation 
   * The `actual` value to be Infinity (infinity).
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toBePositiveInfinity<T extends number>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.positiveInfinity(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param expected 
   * @param expectation 
   * The `actual` value must be `${RegExp.name}`.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toBeRegExp<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual
  ): this {
    this.#to.be.regExp(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }


  /**
   * @param not Invert the matcher following this expectation.
   * @param expectation 
   * Expect the `actual` value a promise to be rejected.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toBeRejected<T>(
    not?: boolean,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: T | PromiseLike<T> = this.#actual
  ): this {
    this.#to.be.rejected(actual, not, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param expectation 
   * Expect the `actual` value a promise to be rejected with a value equal to the expected, using deep equality comparison.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toBeRejectedWith<T, U>(
    expected: jasmine.Expected<U>,
    not?: boolean,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: T | PromiseLike<T> = this.#actual
  ): this {
    this.#to.be.rejectedWith(actual, expected, not, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param expected 
   * @param message 
   * @param not Invert the matcher following this expectation.
   * @param expectation 
   * Expect the `actual` value a promise to be rejected with a value matched to the expected.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toBeRejectedWithError<T>(
    expected?: new (...args: any[]) => Error,
    message?: string | RegExp,
    not?: boolean,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: T | PromiseLike<T> = this.#actual
  ): this {
    this.#to.be.rejectedWithError(actual, expected, message, not, expectation, expectationFailOutput, execute);
    return this;
  }


  /**
   * @param not Invert the matcher following this expectation.
   * @param expectation 
   * Expect the `actual` value a promise to be resolved.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toBeResolved<T>(
    not?: boolean,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: T | PromiseLike<T> = this.#actual,
  ): this {
    this.#to.be.resolved(actual, not, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * @param expected
   * @param not Invert the matcher following this expectation.
   * @param expectation 
   * Expect the `actual` value a promise to be resolved to a value equal to the expected, using deep equality comparison.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toBeResolvedTo<T>(
    expected: jasmine.Expected<T>, 
    not?: boolean,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: T | PromiseLike<T> = this.#actual,
  ): this {
    this.#to.be.resolvedTo(actual, expected, not, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a `string` type on the `expected` of
   * `true`. The method uses `isStringType()` function of `@angular-package/type`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be a `string` type or an instance of a `String`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestActual`.
   */
  public toBeString<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual
  ): this {
    this.#to.be.string(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }


  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `string` type or an instance of a `String` that includes
   * the specified words/sentences on the `expected` of `true`. The method uses `isStringIncludes()` function of `@angular-package/type`.
   * @param includes An `Array` of strings as words/sentences to be case-sensitive searched for within the given `value`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be a `string` type or an instance of a `String` that includes the specified words/sentences.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public stringIncludes<T>(
    includes: string[],
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.stringIncludes(actual, includes, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `string` type or an instance of a `String` that includes
   * some of the specified words/sentences on the `expected` of `true`. The method uses `isStringIncludes()` function of `@angular-package/type`.
   * @param includes An `Array` of strings as words/sentences to be case-sensitive searched for within the given `value`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be a `string` type or an instance of a `String` that includes some of the specified words/sentences.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public stringIncludesSome<T>(
    includes: string[],
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.stringIncludesSome(actual, includes, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `string` type or an instance of a `String` of the given length
   * on the `expected` of `true`. The method uses `isStringLength()` function of `@angular-package/type`.
   * @param length The **length** of generic type variable `Length` for the given `value`,
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be a `string` type or an instance of a `String` of the given `length`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public stringOfLength<T, Length extends number>(
    length: Length,
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.stringOfLength(actual, length, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `string` type or an instance of a `String` of the length between the given
   * minimum and maximum on the `expected` of `true`. The method uses `isStringLengthBetween()` function of `@angular-package/type`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be a `string` type or an instance of a `String` of the length between the given `min` and `max`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public stringOfLengthBetween<T, Min extends number, Max extends number>(
    min: Min,
    max: Max,
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.stringOfLengthBetween(actual, min, max, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a `string` type on the `expected` of
   * `true`. The method uses `isStringType()` function of `@angular-package/type`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be of a `string` type.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestActual`.
   */
  public toBeStringType<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.stringType(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `symbol` on the `expected` of
   * `true`. The method uses `isSymbol()` function of `@angular-package/type`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be a `symbol`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type to check.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public toBeSymbol<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual
  ): this {
    this.#to.be.symbol(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param expected 
   * @param expectation 
   * The `actual` value must be a `boolean` type or an instance of `Boolean` equal to `true`.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toBeTrue<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.true(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param expected 
   * @param expectation 
   * The `actual` value to be truthy.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toBeTruthy<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.truthy(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  //#endregion
  /**
   * 
   * @param expected 
   * @param expectation 
   * The `actual` value must be `undefined`.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toBeUndefined<T>(
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.be.undefined(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  //#region to
  /**
   * 
   * @param expected 
   * @param not Invert the matcher following this expectation.
   * @param expectation 
   * The `actual` value to contain a specific value.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toContain<T>(
    expected: any,
    not?: boolean,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.contain(actual, expected, not, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to equal to the given `expected`.
   * "Expect the actual `value` to be equal to the `expected`, using deep equality comparison."
   * @param expected The value of any type passed to the `toEqual()` method of jasmine. "The expected value to compare against."
   * @param not Invert the matcher following this expectation.
   * @param expectation "Textual description of what this spec is checking" with an optional its unique number when adding `[counter]`.
   * The `actual` value to be equal to the `expected`, using deep equality comparison.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @param actual The value of any type passed to the `expect()` function of jasmine.
   * @returns The return value is an instance of a `TestingTestActual`.
   */
  public toEqual<T>(
    expected: jasmine.Expected<typeof actual>,
    not?: boolean,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.equal(actual, expected, not, expectation, expectationFailOutput, execute);
    return this;
  }
  //#endregion

  //#region toHaveBeenCalled
  /**
   * @param not Invert the matcher following this expectation.
   * @param expectation 
   * The `actual` value (a Spy) to have been called.
   * @param expectationFailOutput 
   * @param execute 
   * @param spy 
   * @returns 
   */
  public toHaveBeenCalled<T extends jasmine.Func>(
    not?: boolean,
    expectation: string = TextualExpectation.get('toHaveBeenCalled'),
    expectationFailOutput?: any,
    execute?: boolean,
    spy: () => ExpectType<T> = this.#spy
  ): this {    
    this.it(
      expectation,
      () => (
        not
          ? super.expect.to.have.been.called.not
          : super.expect.to.have.been.called
        ).called(spy(), expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * 
   * @param expected 
   * @param not Invert the matcher following this expectation.
   * @param expectation 
   * The `actual` value (a Spy) to have been called before another Spy.
   * @param expectationFailOutput 
   * @param execute 
   * @param spy 
   * @returns 
   */
  public toHaveBeenCalledBefore<T extends jasmine.Func>(
    expected: jasmine.Func,
    not?: boolean,
    expectation: string = TextualExpectation.get('toHaveBeenCalledBefore'),
    expectationFailOutput?: any,
    execute?: boolean,
    spy: () => ExpectType<T> = this.#spy
  ): this {
    this.it(
      expectation,
      () => (
        not
          ? super.expect.to.have.been.called.not
          : super.expect.to.have.been.called
        ).before(spy(), expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * 
   * @param expectation 
   * The `actual` value (a Spy) to have been called exactly once, and exactly with the particular arguments.
   * @param spy 
   * @param params 
   * @returns 
   */
  public toHaveBeenCalledOnceWith(
    ...params: any[]
  ): this {
    this.it(
      TextualExpectation.get('toHaveBeenCalledOnceWith'),
      () => super.expect.to.have.been.called.onceWith(this.#spy(), ...params),
      true
    );
    return this;
  }

  /**
   * 
   * @param expected 
   * @param expectation 
   * @param not Invert the matcher following this expectation.
   * The `actual` value (a Spy) to have been called the specified number of times.
   * @param expectationFailOutput 
   * @param execute 
   * @param spy 
   * @returns 
   */
  public toHaveBeenCalledTimes<T extends jasmine.Func>(
    expected: number,
    not?: boolean,
    expectation: string = TextualExpectation.get('toHaveBeenCalledTimes'),
    expectationFailOutput?: any,
    execute?: boolean,
    spy: () => ExpectType<T> = this.#spy
  ): this {
    this.it(
      expectation,
      () => (
        not
          ? super.expect.to.have.been.called.not
          : super.expect.to.have.been.called
        ).times(spy(), expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * 
   * @param expected 
   * @param expectation 
   * The `actual` (a Spy) to have been called the specified number of times.
   * @param expectationFailOutput 
   * @param execute 
   * @param spy 
   * @returns 
   */
  public toHaveBeenCalledWith(
    ...params: any[]
  ): this {
    this.it(
      TextualExpectation.get('toHaveBeenCalledWith'),
      () => super.expect.to.have.been.called.with(this.#spy(), ...params),
      true
    );
    return this;
  }
  //#endregion

  //#region toHave
  /**
   * 
   * @param expected 
   * @param expectation 
   * The `actual` value to be a DOM element that has the expected class.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toHaveClass<T>(
    expected: string,
    not?: boolean,
    expectation?: string, //toHaveClass, 
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.have.class(actual, expected, not, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param expected 
   * @param expectation 
   * The `actual` size to be equal to the expected, using array-like length or object keys size.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toHaveSize<T>(
    expected: number,
    not?: boolean,
    expectation?: string, //toHaveSize, 
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.have.size(actual, expected, not, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param expected 
   * @param expectation 
   * The `actual` value (a SpyObj) spies to have been called.
   * @param expectationFailOutput 
   * @param execute 
   * @param spy 
   * @returns 
   */
  public toHaveSpyInteractions<T>(
    not?: boolean,
    expectation?: string, //toHaveSpyInteractions,
    expectationFailOutput?: any,
    execute?: boolean,
    spy: T extends Array<any> ? () => ExpectType<T[number]>[] : () => ExpectType<T> = this.#spy,
  ): this {
    this.#to.have.spyInteractions(spy, not, expectation, expectationFailOutput, execute);
    return this;
  }
  //#endregion

  //#region to
  /**
   * 
   * @param expected 
   * @param not
   * @param expectation 
   * The `actual` value to match a regular expression.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toMatch<T>(
    expected: string | RegExp,
    not?: boolean,
    expectation?: string, //toMatch, 
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.match(actual, expected, not, expectation, expectationFailOutput, execute);
    return this;
  }
  //#endregion

  //#region toThrow
  /**
   * 
   * @param expected 
   * @param not
   * @param expectation 
   * The `actual` value a function to throw something.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toThrow<T>(
    expected?: any,
    not?: boolean,
    expectation?: string, //toThrow,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.throw.throw(actual, expected, not, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param message 
   * @param not
   * @param expectation 
   * The `actual` value a function to throw an Error.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toThrowError<T extends jasmine.Func>(
    message?: string | RegExp,
    not?: boolean,
    expectation?: string, //toThrowError,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.throw.error(actual, message, not, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param predicate 
   * @param not
   * @param expectation 
   * The `actual` value a function to throw something matching a predicate.
   * @param expectationFailOutput 
   * @param execute 
   * @param actual 
   * @returns 
   */
  public toThrowMatching<T>(
    predicate: (thrown: any) => boolean,
    not?: boolean,
    expectation?: string, //toThrowMatching,
    expectationFailOutput?: any,
    execute?: boolean,
    actual: ExpectType<T> = this.#actual,
  ): this {
    this.#to.throw.matching(actual, predicate, not, expectation, expectationFailOutput, execute);
    return this;
  }
  //#endregion
}
