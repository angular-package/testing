// Class.
import { TestingCore } from '../testing-core.abstract';
import { TestingExpectToBGreaterThan } from '../expectation';
import { TestingExpectation } from '../testing-expectation.class';
import { TextualExpectation } from '../textual-expectation.abstract';
// Type.
import { CounterConfig, Execute, ExpectType } from '../../type';
// Interface.
import { TestingConfig } from '../../interface';
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
  public expectations = [TestingExpectToBGreaterThan] as const;
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
