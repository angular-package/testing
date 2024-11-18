// Class.
import { TestingCore } from '../testing-core.abstract';
import { TestingExpectToBeBoolean } from '../expectation';
import { TestingExpectation } from '../testing-expectation.class';
import { TextualExpectation } from '../textual-expectation.abstract';
// Type.
import { CounterConfig, ExpectType, Execute } from '../../type';
// Interface.
import { TestingConfig } from '../../interface';
/**
 * Prepared simple tests.
 */
export class TestingToBeBoolean<
  Descriptions extends string = string,
  Expectations extends string = string
> extends TestingCore<
  Descriptions,
  Expectations
> {
  public expectations = [TestingExpectToBeBoolean] as const;
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
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeBoolean'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expectation.toBeBoolean(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a `boolean` type
   * on the `expected` of `true`. The method uses `isBooleanType()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be of a `boolean` type.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBeBooleanType<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation: string = TextualExpectation.get('toBeBooleanType'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expectation.toBeBooleanType(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  //#endregion
}
