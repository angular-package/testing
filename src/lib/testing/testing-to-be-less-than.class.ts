// Class.
import { TestingCore } from '../testing-core.abstract';
import { TestingDescribe } from '../testing-describe.class';
import { TestingExpect } from '../testing-expect.class';
import { TestingExpectToBeLessThan } from '../expectation';
import { TestingIt } from '../testing-it.class';
import { TextualExpectation } from '../textual-expectation.abstract';
// Type.
import { CounterConfig, ExpectType, TestingExpectationType } from '../../type';
// Interface.
import { ExecutableTests } from '../../interface';
/**
 * Prepared simple tests.
 */
export class TestingToBeLessThan<
  Descriptions extends string = string,
  Expectations extends string = string
> extends TestingCore<
  Descriptions,
  Expectations
> {
  public override expectations = [TestingExpectToBeLessThan] as const;
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

  //#region toBeLessThan
  /**
   * 
   * @param actual 
   * @param expected 
   * @param expectation 
   * The `actual` value to be less than the `expected` value.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBeLessThan<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    not?: boolean,
    expectation: string = TextualExpectation.get('toBeLessThan'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expectation.invert(not).toBeLessThan(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * 
   * @param actual 
   * @param expected 
   * @param expectation 
   * The `actual` value to be less than or equal to the `expected` value.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBeLessThanOrEqual<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    not?: boolean,
    expectation: string = TextualExpectation.get('toBeLessThanOrEqual'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expectation.invert(not).toBeLessThanOrEqual(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  //#endregion
}
