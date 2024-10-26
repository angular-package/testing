// Class.
import { TestingCore } from '../testing-core.abstract';
// Type.
import { ExpectType } from '../../type';
/**
 * REVIEW: Simplify.
 * Prepared simple tests.
 */
export class TestingItToBeBoolean<
  Descriptions extends string = string,
  Expectations extends string = string
> extends TestingCore<
  Descriptions,
  Expectations
> {
  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a `boolean` type or an instance of `Boolean`
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
  public boolean<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingItToBeBoolean.expectation.toBeBoolean,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.boolean(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a `boolean` type
   * on the `expected` of `true`. The method uses `isBooleanType()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be of a `boolean` type.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public type<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingItToBeBoolean.expectation.toBeBooleanType,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.booleanType(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  //#endregion
}
