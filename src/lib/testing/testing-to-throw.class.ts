// Class.
import { TestingCore } from '../testing-core.abstract';
import { TestingDescribe } from '../testing-describe.class';
import { TestingIt } from '../testing-it.class';
import { TestingItToThrow } from '../it';
// Type.
import { CounterConfig, ExpectType } from '../../type';
// Interface.
import { ExecutableTests } from '../../interface/executable-tests.interface';
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
  /**
   * 
   */
  protected toThrow: TestingItToThrow;

  /**
   * Simple `class` to support testing.
   * Creates an instance with setting for global allow executing of the `describe()` and `it()` methods,
   * and optionally sets the list of allowed executable tests (those that execute even on the disallowed state).
   * @param allowDescribe Allow executing `describe()` methods.
   * @param allowIt Allow executing `it()` methods.
   * @param executable An optional `object` of executable storage for `describe()` and `it()` methods.
   */
  constructor(
    allowDescribe: boolean,
    allowIt: boolean,
    executable?: ExecutableTests,
    counter: CounterConfig = [true, false],
    testingDescribe?: TestingDescribe,
    testingIt?: TestingIt,
  ) {
    super(allowDescribe, allowIt, executable, counter, testingDescribe, testingIt);

    this.toThrow = new TestingItToThrow(
      allowDescribe,
      allowIt,
      executable,
      counter,
      testingDescribe,
      testingIt
    );
  }

  //#region toThrow
  /**
   * 
   * @param actual 
   * @param message 
   * @param expectation 
   * The `actual` value a function to throw an Error.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toThrowError<T extends jasmine.Func>(
    actual: ExpectType<T>,
    message?: string | RegExp,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.toThrow.error(actual, message, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param actual 
   * @param predicate 
   * @param expectation 
   * The `actual` value a function to throw something matching a predicate.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toThrowMatching<T>(
    actual: ExpectType<T>,
    predicate: (thrown: any) => boolean,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.toThrow.matching(actual, predicate, expectation, expectationFailOutput, execute);
    return this;
  }
  //#endregion
}
