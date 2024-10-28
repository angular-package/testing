// Class.
import { TestingCore } from '../testing-core.abstract';
import { TestingDescribe } from '../testing-describe.class';
import { TestingExpect } from '../testing-expect.class';
import { TestingIt } from '../testing-it.class';
import { TestingItToBeArrayOf } from '../it';
// Type.
import { CounterConfig, ExpectType } from '../../type';
// Interface.
import { ExecutableTests } from '../../interface/executable-tests.interface';
/**
 * @class
 * @classdesc Prepared full named description array tests.
 */
export class TestingToBeArrayOf<
  Descriptions extends string = string,
  Expectations extends string = string
> extends TestingCore<
  Descriptions,
  Expectations
> {
  /**
   * 
   */
  protected toBeArrayOf: TestingItToBeArrayOf;

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
    testingDescribe?: TestingDescribe,
    testingIt?: TestingIt,
    testingExpect?: TestingExpect
  ) {
    super(allowDescribe, allowIt, executable, counter, testingDescribe, testingIt, testingExpect);
    this.toBeArrayOf = new TestingItToBeArrayOf(
      allowDescribe,
      allowIt,
      executable,
      counter,
      testingDescribe,
      testingIt,
      testingExpect
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
