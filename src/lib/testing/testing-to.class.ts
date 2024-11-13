// Class.
import { TestingCore } from '../testing-core.abstract';
import { TestingDescribe } from '../testing-describe.class';
import { TestingExpect } from '../testing-expect.class';
import { TestingExpectTo } from '../expectation';
import { TestingIt } from '../testing-it.class';
import { TextualExpectation } from '../textual-expectation.abstract';
// Type.
import { CounterConfig, ExpectType, TestingExpectationType } from '../../type';
// Interface.
import { ExecutableTests } from '../../interface/executable-tests.interface';
/**
 * Prepared simple tests.
 */
export class TestingTo<
  Descriptions extends string = string,
  Expectations extends string = string
> extends TestingCore<
  Descriptions,
  Expectations
> {
  public override expectations = [TestingExpectTo] as const;
  public override expectation!: TestingExpectationType<typeof this.expectations>;

  /**
   * Simple `class` to support testing.
   * Creates an instance with setting for global allow executing of the `describe()` and `it()` methods,
   * and optionally sets the list of allowed executable tests (those that execute even on the disallowed state).
   * @param allowDescribe Allow executing `describe()` methods.
   * @param allowIt Allow executing `it()` methods.
   * @param executable An optional `object` of executable storage for `describe()` and `it()` methods.
   * @param counter
   * @param testing
   */
  constructor(
    allow?: boolean | { describe?: boolean, it?: boolean },
    executable?: ExecutableTests,
    counter?: CounterConfig,
    testing?: {
      describe?: TestingDescribe<Descriptions>,
      it?: TestingIt<Expectations>,
      expect?: TestingExpect
    }
  ) {
    super(allow, executable, counter, testing);
  }

  //#region to
  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be the given `expected` value.
   * "Expect the actual value to be === to the expected value."
   * @param actual The value of any type passed to the `expect()` function of jasmine.
   * @param expected The value of any type passed to the `toBe()` method of jasmine. "The expected value to compare against."
   * @param not
   * @param expectation "Textual description of what this spec is checking" with an optional its unique `number` when adding `[counter]`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed. By default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toBe<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<typeof actual>,
    not?: boolean,
    expectation: string = TextualExpectation.get('toBe'),
    expectationFailOutput?: any,
    execute?: boolean
  ): this {
    this.it(
      expectation,
      () => this.expectation.invert(not).toBe(actual, expected, expectationFailOutput),
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
   * The `actual` value to contain a specific value.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toContain<T>(
    actual: ExpectType<T>,
    expected: any,
    not?: boolean,
    expectation: string = TextualExpectation.get('toContain'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expectation.invert(not).toContain(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to equal to the given `expected`.
   * "Expect the actual `value` to be equal to the `expected`, using deep equality comparison."
   * @param actual The value of any type passed to the `expect()` function of jasmine.
   * @param expected The value of any type passed to the `toEqual()` method of jasmine. "The expected value to compare against."
   * @param not Invert the matcher following this expectation.
   * @param expectation "Textual description of what this spec is checking" with an optional its unique number when adding `[counter]`.
   * The `actual` value to be equal to the `expected`, using deep equality comparison.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public toEqual<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<typeof actual>,
    not?: boolean,
    expectation: string = TextualExpectation.get('toEqual'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expectation.invert(not).toEqual(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * 
   * @param actual 
   * @param expected 
   * @param not Invert the matcher following this expectation.
   * @param expectation 
   * The `actual` value to match a regular expression.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toMatch<T>(
    actual: ExpectType<T>,
    expected: string | RegExp,
    not?: boolean,
    expectation: string = TextualExpectation.get('toMatch'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expectation.invert(not).toMatch(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * 
   * @param actual 
   * @param expected 
   * @param not Invert the matcher following this expectation.
   * @param expectation 
   * The `actual` value a function to throw something.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toThrow<T>(
    actual: ExpectType<T>,
    expected?: any,
    not?: boolean,
    expectation: string = TextualExpectation.get('toThrow'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expectation.invert(not).toThrow(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
}
