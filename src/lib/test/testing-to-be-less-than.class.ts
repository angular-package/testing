// Class.
import { TestingCore } from '../testing-core.abstract';
import { TestingExpectToBeLessThan } from '../expectation';
import { TestingExpectation } from '../testing-expectation.class';
import { TextualExpectation } from '../textual-expectation.abstract';
// Type.
import { CounterConfig, Execute, ExpectType } from '../../type';
// Interface.
import { TestingConfig } from '../../interface';
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
  public expectations = [TestingExpectToBeLessThan] as const;
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
