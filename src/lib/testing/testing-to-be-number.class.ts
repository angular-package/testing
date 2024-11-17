// Class.
import { TestingCore } from '../testing-core.abstract';
import { TestingExpectToBeNumber } from '../expectation';
import { TestingExpectation } from '../testing-expectation.class';
import { TextualExpectation } from '../textual-expectation.abstract';
// Type.
import { CounterConfig, Execute, ExpectType } from '../../type';
// Interface.
import { TestingConfig } from '../../interface';
/**
 * Prepared simple tests.
 */
export class TestingToBeNumber<
  Descriptions extends string = string,
  Expectations extends string = string
> extends TestingCore<
  Descriptions,
  Expectations
> {
  public expectations = [TestingExpectToBeNumber] as const;
  public expectation;

  /**
   * Simple `class` to support testing.
   * Creates an instance with setting for global allow executing of the `describe()` and `it()` methods,
   * and optionally sets the list of allowed executable tests (those that execute even on the disallowed state).
   * @param execute Execute `describe()` or `it()` methods or specific executable tests.
   * @param counter
   * @param testing
   */
  constructor(
    execute?: Execute,
    counter?: CounterConfig,
    testing?: TestingConfig<Descriptions, Expectations>
  ) {
    super(execute, counter, testing);
    this.expectation = new TestingExpectation(this.expectations, testing?.expect);
  }

  //#region toBeNumber
  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` be a `number` type or an instance of a `Number` on the `expected` of `true`. The
   * method uses `isNumber()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value to be a `number` type or an instance of a `${Number.name}`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public toBeNumber<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeNumber'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expectation.toBeNumber(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `number` type or an instance of a `Number` between the `range` of minimum and maximum on the `expected` of `true`. The
   * method uses `isNumberBetween()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param min The **minimum** range of generic type variable `Min` of the given `value`.
   * @param max The **maximum** range of generic type variable `Max` of the given `value`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value to be a `number` type or an instance of `${Number.name}` between the range of `min` and `max`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public toBeNumberBetween<T, Min extends number, Max extends number>(
    actual: ExpectType<T>,
    min: Min,
    max: Max,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeNumberBetween'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expectation.toBeNumberBetween(actual, min, max, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a `number` type on the `expected` of
   * `true`. The method uses `isNumberType()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be of a `number` type.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeNumberType<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeNumberType'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expectation.toBeNumberType(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  //#endregion
}
