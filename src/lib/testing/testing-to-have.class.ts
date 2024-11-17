// Class.
import { TestingCore } from '../testing-core.abstract';
import { TestingExpectToHave, TestingExpectToHaveBeenCalled } from '../expectation';
import { TestingExpectation } from '../testing-expectation.class';
import { TextualExpectation } from '../textual-expectation.abstract';
// Type.
import { CounterConfig, Execute, ExpectType } from '../../type';
// Interface.
import { TestingConfig, TestingOptions } from '../../interface';
/**
 * Prepared simple tests.
 */
export class TestingToHave<
  Descriptions extends string = string,
  Expectations extends string = string,
> extends TestingCore<
  Descriptions,
  Expectations
> {
  public expectations = [TestingExpectToHave, TestingExpectToHaveBeenCalled] as const;
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

  //#region toHaveBeenCalled
  /**
   * ! Spy parameter 
   * @description
   * @param spy 
   * @param not Invert the matcher following this expectation.
   * @param expectation 
   * The `actual` value (a Spy) to have been called.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toHaveBeenCalled<T extends jasmine.Func>(
    spy: () => ExpectType<T> | ExpectType<T>[],
    not = false,
    expectation: string = TextualExpectation.get('toHaveBeenCalled'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => {
        let spies = spy();
        ((!Array.isArray(spies)) ? [spies] : spies).forEach(
          spy => this.expectation.invert(not).toHaveBeenCalled(spy, expectationFailOutput)
        );
      },
      execute
    );
    return this;
  }

  /**
   * @param spyExpected
   * @param not Invert the matcher following this expectation.
   * @param expectation 
   * The `actual` value (a Spy) to have been called before another Spy.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toHaveBeenCalledBefore<T extends jasmine.Func>(
    spyExpected: () => [ExpectType<T>, jasmine.Func],
    not = false,
    expectation: string = TextualExpectation.get('toHaveBeenCalledBefore'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expectation.invert(not).toHaveBeenCalledBefore(spyExpected()[0], spyExpected()[1], expectationFailOutput),
      execute
    ); 
    return this;
  }

  /**
   * TODO: spyOn problem
   * @param spy 
   * @param expected
   * @param not Invert the matcher following this expectation.
   * @param expectation 
   * The `actual` value (a Spy) to have been called exactly once, and exactly with the particular arguments.
   * @param params 
   * @returns 
   */
  public toHaveBeenCalledOnceWith<Actual extends jasmine.Func>(
    spy: ExpectType<Actual>,
    options: TestingOptions,
    ...params: any[]
  ): this {
    const { not, expectation = TextualExpectation.get('toHaveBeenCalledOnceWith'), expectationFailOutput, execute } = options;
    this.it(
      expectation,
      () => this.expectation.invert(not).withContext(expectationFailOutput).toHaveBeenCalledOnceWith(spy(), ...params),
      execute
    );
    return this;
  }

  /**
   * TODO: spyOn problem
   * @param spy 
   * @param expected 
   * @param not Invert the matcher following this expectation.
   * @param expectation 
   * The `actual` value (a Spy) to have been called the specified number of times.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toHaveBeenCalledTimes<T extends jasmine.Func>(
    spy: () => ExpectType<T>,
    expected: number,
    not = false,
    expectation: string = TextualExpectation.get('toHaveBeenCalledTimes'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expectation.invert(not).toHaveBeenCalledTimes(spy(), expected, expectationFailOutput),
      execute
    ); 
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
    spy: () => ExpectType<T>,
    options: TestingOptions,
    ...params: any[]
  ): this {
    const { not, expectation = TextualExpectation.get('toHaveBeenCalledWith'), expectationFailOutput, execute } = options;
    this.it(
      expectation,
      () => this.expectation.invert(not).withContext(expectationFailOutput).toHaveBeenCalledWith(spy(), ...params),
      execute
    ); 
    return this;
  }
  //#endregion

  //#region toHave
  /**
   * 
   * @param actual 
   * @param expected 
   * @param not Invert the matcher following this expectation.
   * @param expectation 
   * The `actual` value to be a DOM element that has the expected class.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toHaveClass<T>(
    actual: ExpectType<T>,
    expected: string,
    not?: boolean,
    expectation: string = TextualExpectation.get('toHaveClass'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expectation.invert(not).toHaveClass(actual, expected, expectationFailOutput),
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
   * The `actual` size to be equal to the expected, using array-like length or object keys size.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toHaveSize<T>(
    actual: ExpectType<T>,
    expected: number,
    not?: boolean,
    expectation: string = TextualExpectation.get('toHaveSize'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expectation.invert(not).toHaveSize(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * 
   * @param spy 
   * @param expected 
   * @param not Invert the matcher following this expectation.
   * @param expectation 
   * The `actual` value (a SpyObj) spies to have been called.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toHaveSpyInteractions<T>(
    spy: T extends Array<any> ? () => ExpectType<T[number]>[] : () => ExpectType<T>,
    not?: boolean,
    expectation: string = TextualExpectation.get('toHaveSpyInteractions'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => {
        let spies = spy();
        ((!Array.isArray(spies)) ? [spies] : spies).forEach(
          spy => this.expectation.invert(not).toHaveSpyInteractions(spy as any, expectationFailOutput)
        );
      },
      execute
    );
    return this;
  }
  //#endregion
}


