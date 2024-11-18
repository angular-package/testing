// Class.
import { TestingCore } from '../testing-core.abstract';
import { TestingExpectToThrow } from '../expectation';
import { TextualExpectation } from '../textual-expectation.abstract';
import { TestingExpectation } from '../testing-expectation.class';
// Type.
import { CounterConfig, Execute, ExpectType } from '../../type';
// Interface.
import { TestingConfig } from '../../interface';
/**
 * Prepared simple tests.
 */
export class TestingToThrow<
  Descriptions extends string = string,
  Expectations extends string = string
> extends TestingCore<
  Descriptions,
  Expectations
> {
  public expectations = [TestingExpectToThrow] as const;
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

  //#region toThrow
  /**
   * 
   * @param actual 
   * @param message 
   * @param not Invert the matcher following this expectation.
   * @param expectation 
   * The `actual` value a function to throw an Error.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toThrowError<T extends jasmine.Func>(
    actual: ExpectType<T>,
    message?: string | RegExp,
    not?: boolean,
    expectation: string = TextualExpectation.get('toThrowError'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expectation.invert(not).toThrowError(actual, message, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * 
   * @param actual 
   * @param predicate 
   * @param not Invert the matcher following this expectation.
   * @param expectation 
   * The `actual` value a function to throw something matching a predicate.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toThrowMatching<T>(
    actual: ExpectType<T>,
    predicate: (thrown: any) => boolean,
    not?: boolean,
    expectation: string = TextualExpectation.get('toThrowMatching'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.expectation.invert(not).toThrowMatching(actual, predicate, expectationFailOutput),
      execute
    );
    return this;
  }
  //#endregion
}
