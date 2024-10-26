// Class.
import { TestingDescribe } from '../testing-describe.class';
import { TestingIt } from '../testing-it.class';
import { TestingItToBeArrayOf } from '../it';
// Type.
import { ExpectType } from '../../type';
// Interface.
import { ExecutableTests } from '../../interface/executable-tests.interface';
/**
 * @class
 * @classdesc Prepared full named description array tests.
 */
export class TestingToBeArrayOf {

  /**
   * 
   */
  protected allowDescribe: boolean;
  protected allowIt: boolean;
  protected executable?: ExecutableTests;
  protected toBeArrayOf: TestingItToBeArrayOf;

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
    executable?: ExecutableTests,
    testingDescribe?: TestingDescribe,
    testingIt?: TestingIt,
  ) {
    this.toBeArrayOf = new TestingItToBeArrayOf(
      this.allowDescribe = allowDescribe,
      this.allowIt = allowIt,
      this.executable = executable,
      testingDescribe,
      testingIt
    );
  }

  //#region TestingToBeArrayOf
  public toBeArrayOfBigInt<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.toBeArrayOf.bigint(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  public toBeArrayOfDate<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.toBeArrayOf.date(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  public toBeArrayOfDefined<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.toBeArrayOf.defined(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  public toBeArrayOfFalse<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.toBeArrayOf.false(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  public toBeArrayOfNull<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.toBeArrayOf.null(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  public toBeArrayOfRegExp<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.toBeArrayOf.regExp(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  public toBeArrayOfString<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.toBeArrayOf.string(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  public toBeArrayOfSymbol<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.toBeArrayOf.symbol(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  public toBeArrayOfTrue<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.toBeArrayOf.true(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  public toBeArrayOfUndefined<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.toBeArrayOf.undefined(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  //#endregion
}
