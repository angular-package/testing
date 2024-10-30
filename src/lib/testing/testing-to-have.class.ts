// Class.
import { TestingCore } from '../testing-core.abstract';
import { TestingDescribe } from '../testing-describe.class';
import { TestingExpectation } from '../testing-expectation.class';
import { TestingIt } from '../testing-it.class';
import { TestingItToHave } from '../it';
import { TextualExpectation } from '../textual-expectation.abstract';
// Type.
import { CounterConfig, ExpectType } from '../../type';
// Interface.
import { ExecutableTests } from '../../interface/executable-tests.interface';
/**
 * Prepared simple tests.
 */
export class TestingToHave<
  Descriptions extends string = string,
  Expectations extends string = string
> extends TestingCore<
  Descriptions,
  Expectations
> {
  /**
   * 
   */
  protected toHave: TestingItToHave;

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
    this.toHave = new TestingItToHave(
      allowDescribe,
      allowIt,
      executable,
      counter,
      testingDescribe,
      testingIt,
      testingExpectation
    );
  }

  //#region toHaveBeenCalled
  /**
   * ! Spy parameter 
   * @description
   * @param spy 
   * @param expectation 
   * The `actual` value (a Spy) to have been called.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toHaveBeenCalled<T extends jasmine.Func>(
    spy: () => ExpectType<T> | ExpectType<T>[],
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.toHave.been.called.called(spy, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * @param spyExpected
   * @param expectation 
   * The `actual` value (a Spy) to have been called before another Spy.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toHaveBeenCalledBefore<T extends jasmine.Func>(
    spyExpected: () => [ExpectType<T>, jasmine.Func],
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.toHave.been.called.before(spyExpected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * TODO: spyOn problem
   * @param expectation 
   * The `actual` value (a Spy) to have been called exactly once, and exactly with the particular arguments.
   * @param spy 
   * @param params 
   * @returns 
   */
  public toHaveBeenCalledOnceWith<Actual extends jasmine.Func>(
    expectation: string = TextualExpectation.toHaveBeenCalledOnceWith,
    spy: ExpectType<Actual>,
    ...params: any[]
  ): this {
    this.toHave.been.called.onceWith(expectation, spy, ...params);
    return this;
  }

  /**
   * TODO: spyOn problem
   * @param spy 
   * @param expected 
   * @param expectation 
   * The `actual` value (a Spy) to have been called the specified number of times.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toHaveBeenCalledTimes<T extends jasmine.Func>(
    spy: () => ExpectType<T>,
    expected: number,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.toHave.been.called.times(spy, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * TODO: spyOn problem
   * @param spy 
   * @param expected 
   * @param expectation 
   * The `actual` (a Spy) to have been called the specified number of times.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toHaveBeenCalledWith<T extends jasmine.Func>(
    expectation: string = TextualExpectation.toHaveBeenCalledWith,
    spy: () => ExpectType<T>,
    ...params: any[]
    // expectationFailOutput?: any,
    // execute?: boolean,
  ): this {
    this.toHave.been.called.with(expectation, spy, ...params);
    return this;
  }
  //#endregion


  //#region toHave
  /**
   * 
   * @param actual 
   * @param expected 
   * @param expectation 
   * The `actual` value to be a DOM element that has the expected class.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toHaveClass<T>(
    actual: ExpectType<T>,
    expected: string,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.toHave.class(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param actual 
   * @param expected 
   * @param expectation 
   * The `actual` size to be equal to the expected, using array-like length or object keys size.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toHaveSize<T>(
    actual: ExpectType<T>,
    expected: number,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.toHave.size(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param actual 
   * @param expected 
   * @param expectation 
   * The `actual` value (a SpyObj) spies to have been called.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toHaveSpyInteractions<T>(
    actual: ExpectType<T>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.toHave.spyInteractions(actual, expectation, expectationFailOutput, execute);
    return this;
  }
  //#endregion
}
