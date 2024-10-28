// Class.
import { TestingCore } from '../testing-core.abstract';
import { TestingDescribe } from '../testing-describe.class';
import { TestingIt } from '../testing-it.class';
import { TestingItToBe } from '../it';
// Type.
import { CounterConfig, ExpectType } from '../../type';
// Interface.
import { ExecutableTests } from '../../interface/executable-tests.interface';
import { TestingExpect } from '../testing-expect.class';
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
  /**
   * 
   */
  protected toBe: TestingItToBe;

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
    this.toBe = new TestingItToBe(
      allowDescribe,
      allowIt,
      executable,
      counter,
      testingDescribe,
      testingIt,
      testingExpect
    );
  }

  //#region toBeGreaterThan
  /**
   * 
   * @param actual 
   * @param expected 
   * @param expectation 
   * The `actual` value to be greater than the `expected` value.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBeGreaterThan<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.toBe.greaterThan(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param actual 
   * @param expected 
   * @param expectation 
   * The `actual` value to be greater than or equal to the `expected` value.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBeGreaterThanOrEqual<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.toBe.greaterThanOrEqual(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  //#endregion
}
