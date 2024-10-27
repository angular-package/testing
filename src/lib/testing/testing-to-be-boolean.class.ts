// Class.
import { TestingCore } from '../testing-core.abstract';
import { TestingDescribe } from '../testing-describe.class';
import { TestingIt } from '../testing-it.class';
import { TestingItToBeBoolean } from '../it/testing-it-to-be-boolean.class';
// Type.
import { CounterConfig, ExpectType } from '../../type';
// Interface.
import { ExecutableTests } from '../../interface/executable-tests.interface';
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
  /**
   * 
   */
  protected itToBeBoolean: TestingItToBeBoolean;

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
   */
  constructor(
    allowDescribe: boolean,
    allowIt: boolean,
    executable?: ExecutableTests,
    counter: CounterConfig = [true, false],
    testingDescribe?: TestingDescribe,
    testingIt?: TestingIt,
  ) {
    super(allowDescribe, allowIt, executable, counter, testingDescribe, testingIt);
    this.itToBeBoolean = new TestingItToBeBoolean(
      allowDescribe,
      allowIt,
      executable,
      counter,
      testingDescribe,
      testingIt
    );
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
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.itToBeBoolean.boolean(actual, expected, expectation, expectationFailOutput, execute);
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
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.itToBeBoolean.type(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  //#endregion
}
