// Class.
import { TestingCore } from '../testing-core.abstract';
import { TestingDescribe } from '../testing-describe.class';
import { TestingExpect } from '../testing-expect.class';
import { TestingExpectToBGreaterThan } from '../expectation';
import { TestingIt } from '../testing-it.class';
import { TextualExpectation } from '../textual-expectation.abstract';
// Type.
import { CounterConfig, ExpectType, TestingExpectationType } from '../../type';
// Interface.
import { ExecutableTests } from '../../interface';
/**
 * Prepared simple tests.
 */
export class TestingToBeGreaterThan<
  Descriptions extends string = string,
  Expectations extends string = string
> extends TestingCore<
  Descriptions,
  Expectations
> {
  public override expectations = [TestingExpectToBGreaterThan] as const;
  public override expectation!: TestingExpectationType<typeof this.expectations>;

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

  //#region toBeGreaterThan
  /**
   * 
   * @param actual 
   * @param expected 
   * @param not Invert the matcher following this expectation.
   * @param expectation 
   * The `actual` value to be greater than the `expected` value.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  
  public toBeGreaterThan<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    not?: boolean,
    expectation: string = TextualExpectation.get('toBeGreaterThan'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expectation.invert(not).toBeGreaterThan(actual, expected, expectationFailOutput),
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
   * The `actual` value to be greater than or equal to the `expected` value.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBeGreaterThanOrEqual<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    not?: boolean,
    expectation: string = TextualExpectation.get('toBeGreaterThanOrEqual'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expectation.invert(not).toBeGreaterThanOrEqual(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  //#endregion
}
