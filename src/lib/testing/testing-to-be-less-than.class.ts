// Class.
import { TestingCore } from '../testing-core.abstract';
import { TestingDescribe } from '../testing-describe.class';
import { TestingExpectation } from '../testing-expectation.class';
import { TestingIt } from '../testing-it.class';
import { TestingItToBe } from '../it';
// Type.
import { CounterConfig, ExpectType } from '../../type';
// Interface.
import { ExecutableTests } from '../../interface/executable-tests.interface';
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
  /**
   * 
   */
  protected _toBe: TestingItToBe;

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
    testingDescribe: TestingDescribe = new TestingDescribe(allowDescribe, executable?.describe, counter),
    testingIt: TestingIt = new TestingIt(allowIt, executable?.it, counter),
    testingExpectation: TestingExpectation = new TestingExpectation()
  ) {
    super(allowDescribe, allowIt, executable, counter, testingDescribe, testingIt, testingExpectation);
    this._toBe = new TestingItToBe(
      allowDescribe,
      allowIt,
      executable,
      counter,
      testingDescribe,
      testingIt,
      testingExpectation
    );
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
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this._toBe.lessThan(actual, expected, not, expectation, expectationFailOutput, execute);
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
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this._toBe.lessThanOrEqual(actual, expected, not, expectation, expectationFailOutput, execute);
    return this;
  }
  //#endregion
}
