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
  public get to(): TestingItTo {
    return this.#to;
  }

  /**
   * 
   */
  #to: TestingItTo;

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
    this.#to = new TestingItTo(allowDescribe, allowIt, executable);
  }

  //#region toBe
  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be `array` type or an instance of `Array` on the `expected` of
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
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.array(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  public toBeArrayOfBigInt<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.arrayof.bigint(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  public toBeArrayOfDate<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.arrayof.date(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  public toBeArrayOfDefined<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.arrayof.defined(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  public toBeArrayOfFalse<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.arrayof.false(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  public toBeArrayOfNull<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.arrayof.null(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  public toBeArrayOfRegExp<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.arrayof.regExp(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  public toBeArrayOfString<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.arrayof.string(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  public toBeArrayOfSymbol<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.arrayof.symbol(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  public toBeArrayOfTrue<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.arrayof.true(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  public toBeArrayOfUndefined<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.be.arrayof.undefined(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
}
