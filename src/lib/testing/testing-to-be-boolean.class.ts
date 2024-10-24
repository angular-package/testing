// Class.
import { TestingCore } from '../testing-core.class';
import { TestingItTo } from '../it/testing-it-to.class';
// Type.
import { ExpectType } from '../../type';
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
  public get to(): TestingItTo {
    return this.testingItTo;
  }

  /**
   * 
   */
  private testingItTo: TestingItTo;

  /**
   * Simple `class` to support testing.
   * Creates an instance with setting for global allow executing of the `describe()` and `it()` methods,
   * and optionally sets the list of allowed executable tests (those that execute even on the disallowed state).
   * @param allowDescribe Allow executing `describe()` methods.
   * @param allowIt Allow executing `it()` methods.
   * @param executable An optional `object` of executable storage for `describe()` and `it()` methods.
   */
  constructor(
    allowDescribe: boolean,
    allowIt: boolean,
    executable?: ExecutableTests
  ) {
    super(allowDescribe, allowIt, executable);
    this.testingItTo = new TestingItTo(allowDescribe, allowIt, executable);
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
    this.testingItTo.be.boolean(actual, expected, expectation, expectationFailOutput, execute);
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
    this.testingItTo.be.booleanType(actual, expected, expectation, expectationFailOutput, execute);
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
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.testingItTo.be.false(actual, expected, expectation, expectationFailOutput, execute);
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
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.testingItTo.be.falsy(actual, expected, expectation, expectationFailOutput, execute);
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
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    console.log(this.testingItTo.be.true);
    this.testingItTo.be.true(actual, expected, expectation, expectationFailOutput, execute);
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
    expectation?: string, 
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.testingItTo.be.truthy(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  //#endregion
}
