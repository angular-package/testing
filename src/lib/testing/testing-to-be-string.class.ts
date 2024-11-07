// Class.
import { TestingCore } from '../testing-core.abstract';
import { TestingDescribe } from '../testing-describe.class';
import { TestingExpectation } from '../testing-expectation.class';
import { TextualExpectation } from '../textual-expectation.abstract';
import { TestingIt } from '../testing-it.class';
// Type.
import { CounterConfig, ExpectType } from '../../type';
// Interface.
import { ExecutableTests } from '../../interface/executable-tests.interface';
/**
 * Prepared simple tests.
 */
export class TestingToBeString<
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

  //#region toBeString
  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a `string` type on the `expected` of
   * `true`. The method uses `isStringType()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be a `string` type or an instance of a `String`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeString<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeString'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expect.toBeString(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `string` type or an instance of a `String` that includes
   * the specified words/sentences on the `expected` of `true`. The method uses `isStringIncludes()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param includes An `Array` of strings as words/sentences to be case-sensitive searched for within the given `value`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be a `string` type or an instance of a `String` that includes the specified words/sentences.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public toBeStringIncludes<T>(
    actual: ExpectType<T>,
    includes: string[],
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeStringIncludes'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expect.toBeStringIncludes(actual, includes, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `string` type or an instance of a `String` that includes
   * some of the specified words/sentences on the `expected` of `true`. The method uses `isStringIncludes()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param includes An `Array` of strings as words/sentences to be case-sensitive searched for within the given `value`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be a `string` type or an instance of a `String` that includes some of the specified words/sentences.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public toBeStringIncludesSome<T>(
    actual: ExpectType<T>,
    includes: string[],
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeStringIncludesSome'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expect.toBeStringIncludesSome(actual, includes, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `string` type or an instance of a `String` of the given length
   * on the `expected` of `true`. The method uses `isStringLength()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param length The **length** of generic type variable `Length` for the given `value`,
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be a `string` type or an instance of a `String` of the given `length`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public toBeStringOfLength<T, Length extends number>(
    actual: ExpectType<T>,
    length: Length,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeStringOfLength'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expect.toBeStringOfLength(actual, length, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `string` type or an instance of a `String` of the length between the given
   * minimum and maximum on the `expected` of `true`. The method uses `isStringLengthBetween()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be a `string` type or an instance of a `String` of the length between the given `min` and `max`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public toBeStringOfLengthBetween<T, Min extends number, Max extends number>(
    actual: ExpectType<T>,
    min: Min,
    max: Max,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeStringOfLengthBetween'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expect.toBeStringOfLengthBetween(actual, min, max, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a `string` type on the `expected` of
   * `true`. The method uses `isStringType()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be of a `string` type.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeStringType<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeStringType'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expect.toBeStringType(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  //#endregion
}
