// Class.
import { TestingCore } from '../testing-core.abstract';
import { TestingDescribe } from '../testing-describe.class';
import { TestingExpectation } from '../testing-expectation.class';
import { TextualExpectation } from '../textual-expectation.abstract';
import { TestingIt } from '../testing-it.class';
// Type.
import { Constructor } from '@angular-package/type';
import { CounterConfig, ExpectType } from '../../type';
// Interface.
import { ExecutableTests } from '../../interface/executable-tests.interface';
/**
 * Prepared simple tests.
 */
export class TestingToBe<
  Descriptions extends string = string,
  Expectations extends string = string
> extends TestingCore<
  Descriptions,
  Expectations
> {
  /**
   * Simple `class` to support testing.
   * Creates an instance with setting for global allow executing of the `describe()` and `it()` methods,
   * and optionally sets the list of allowed executable tests (those that execute even on the disallowed state).
   * @param allowDescribe Allow executing `describe()` methods.
   * @param allowIt Allow executing `it()` methods.
   * @param executable An optional `object` of executable storage for `describe()` and `it()` methods.
   * @param counter
   * @param testingDescribe
   * @param testingIt
   * @param testingExpect
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
  }

  //#region _toBe
  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be `array` type or an instance of `Array` on the `expected` of
   * `true`. The method uses `isArray()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be `array` type or an instance of `Array`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeArray<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeArray'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expect.toBeArray(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `bigint` type on the `expected` of
   * `true`. The method uses `isBigInt()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be a `bigint` type.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeBigInt<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeBigInt'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expect.toBeBigInt(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `class`
   * on the `expected` of `true`. The method uses `isClass()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be a `class`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeClass<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeBigInt'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expect.toBeClass(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description
   * @param actual 
   * @param expected 
   * @param precision 
   * @param expectation 
   * The `actual` value must be within a specified `precision` of the `expected` actual.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBeCloseTo<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    precision?: any,
    not?: boolean,
    expectation: string = TextualExpectation.get('toBeCloseTo'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expect.invert(not).toBeCloseTo(actual, expected, precision, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `date`
   * on the `expected` of `true`. The method uses `isDate()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value to be a `date`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public toBeDate<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeDate'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expect.toBeDate(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * 
   * @param actual 
   * @param expected 
   * @param expectation 
   * The `actual` value must be defined.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBeDefined<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    not?: boolean,
    expectation: string = TextualExpectation.get('toBeDefined'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expect.invert(not).toBeDefined(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  //#region false boolean
  /**
   * 
   * @param actual 
   * @param expected 
   * @param expectation 
   * The `actual` value must be `false`.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBeFalse<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeFalse'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expect.toBeFalse(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * 
   * @param actual 
   * @param expected 
   * @param expectation 
   * The `actual` value must be falsy.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBeFalsy<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeFalsy'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expect.toBeFalsy(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `function`
   * on the `expected` of `true`. The method uses `isFunction()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be `function`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public toBeFunction<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeFunction'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expect.toBeFunction(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }


  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a instance of `constructor`
   * on the `expected` of `true`. The method uses `isInstance()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param constructor The class to check whether `actual` is an instance of it.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value to be an instance of `constructor`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public toBeInstance<T, Type>(
    actual: ExpectType<T>,
    constructor: Constructor<Type>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeInstance'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expect.toBeInstance(actual, constructor, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * 
   * @param actual 
   * @param expected 
   * @param expectation 
   * The `actual` value must be an instance of `expected`.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBeInstanceOf<T>(
    actual: ExpectType<T>,
    expected: jasmine.Constructor,
    not?: boolean,
    expectation: string = TextualExpectation.get('toBeInstanceOf'),
    expectationFailOutput?: any,
    execute?: boolean
  ): this {
    this.it(
      expectation,
      () => this.expect.invert(not).toBeInstanceOf(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `PropertyKey`
   * on the `expected` of `true`. The method uses `isKey()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value to be a `PropertyKey`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public toBeKey<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeKey'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expect.toBeKey(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * 
   * @param actual 
   * @param expected 
   * @param expectation 
   * The `actual` value to be NaN (Not a Number).
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBeNaN<T extends number>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeNaN'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expect.toBeNaN(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * 
   * @param actual 
   * @param expected 
   * @param expectation 
   * The `actual` value to be -Infinity (-infinity).
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBeNegativeInfinity<T extends number>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeNegativeInfinity'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expect.toBeNegativeInfinity(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be `null` on the `expected` of `true`. The
   * method uses `isNull()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be `null`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeNull<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeNull'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expect.toBeNull(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  // Mark a spec as pending, expectation results will be ignored.
  public toBePending<T>(
    actual: T | PromiseLike<T>,
    not?: boolean,
    expectation: string = TextualExpectation.get('toBePending'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      done => (this.expect.invert(not).toBePending(actual, expectationFailOutput), done()),
      execute
    );
    return this;
  }

  /**
   * 
   * @param actual 
   * @param expected 
   * @param expectation 
   * The `actual` value to be Infinity (infinity).
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBePositiveInfinity<T extends number>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBePositiveInfinity'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expect.toBePositiveInfinity(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * 
   * @param actual 
   * @param expected 
   * @param expectation 
   * The `actual` value must be `${RegExp.name}`.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBeRegExp<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeRegExp'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expect.toBeRegexp(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  //#region toBeRejected
  /**
   * 
   * @param actual 
   * @param expectation 
   * Expect the `actual` value a promise to be rejected.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBeRejected<T>(
    actual: T | PromiseLike<T>,
    not?: boolean,
    expectation: string = TextualExpectation.get('toBeRejected'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      done => (this.expect.invert(not).toBeRejected(actual, expectationFailOutput), done()),
      execute
    );
    return this;
  }

  /**
   * 
   * @param actual 
   * @param expectation 
   * Expect the `actual` value a promise to be rejected with a value equal to the expected, using deep equality comparison.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBeRejectedWith<T, U>(
    actual: T | PromiseLike<T>,
    expected: jasmine.Expected<U>,
    not?: boolean,
    expectation: string = TextualExpectation.get('toBeRejectedWith'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      done => (this.expect.invert(not).toBeRejectedWith(actual, expected, expectationFailOutput), done()),
      execute
    );
    return this;
  }

  /**
   * 
   * @param actual 
   * @param expected 
   * @param message 
   * @param expectation 
   * Expect the `actual` value a promise to be rejected with a value matched to the expected.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBeRejectedWithError<T>(
    actual: T | PromiseLike<T>,
    expected?: new (...args: any[]) => Error,
    message?: string | RegExp,
    not?: boolean,
    expectation: string = TextualExpectation.get('toBeRejectedWithError'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      done => (this.expect.invert(not).toBeRejectedWithError(actual, expected, message, expectationFailOutput), done()),
      execute
    );
    return this;
  }
  //#endregion

  //#region toBeResolved
  /**
   * 
   * @param actual 
   * @param expectation 
   * Expect the `actual` value a promise to be resolved.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBeResolved<T>(
    actual: T | PromiseLike<T>,
    not?: boolean,
    expectation: string = TextualExpectation.get('toBeResolved'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      done => (this.expect.invert(not).toBeResolved(actual, expectationFailOutput), done()),
      execute
    );
    return this;
  }

  /**
   * 
   * @param actual 
   * @param expectation 
   * Expect the `actual` value a promise to be resolved to a value equal to the expected, using deep equality comparison.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBeResolvedTo<T>(
    actual: T | PromiseLike<T>,
    expected: jasmine.Expected<T>, 
    not?: boolean,
    expectation: string = TextualExpectation.get('toBeResolvedTo'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      done => (this.expect.invert(not).toBeResolvedTo(actual, expected, expectationFailOutput), done()),
      execute
    );
    return this;
  }
  //#endregion

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `symbol` on the `expected` of
   * `true`. The method uses `isSymbol()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be a `symbol`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public toBeSymbol<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    not?: boolean,
    expectation: string = TextualExpectation.get('toBeSymbol'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expect.invert(not).toBeSymbol(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  //#region true boolean
  /**
   * 
   * @param actual 
   * @param expected 
   * @param expectation 
   * The `actual` value must be a `boolean` type or an instance of `Boolean` equal to `true`.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBeTrue<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeTrue'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expect.toBeTrue(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * 
   * @param actual 
   * @param expected 
   * @param expectation 
   * The `actual` value to be truthy.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBeTruthy<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeTruthy'), 
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expect.toBeTruthy(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * 
   * @param actual 
   * @param expected 
   * @param not 
   * @param expectation 
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBeTypeOf<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<string>,
    not?: boolean,
    expectation: string = TextualExpectation.get('toBeTypeOf'), 
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expect.invert(not).toBeTypeOf(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * 
   * @param actual 
   * @param expected 
   * @param expectation 
   * The `actual` value must be `undefined`.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBeUndefined<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeUndefined'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expect.toBeUndefined(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
}
