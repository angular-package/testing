// Class.
import { TestingCore } from '../testing-core.abstract';
import { TestingDescribe } from '../testing-describe.class';
import { TestingExpectation } from '../testing-expectation.class';
import { TextualExpectation } from '../textual-expectation.abstract';
import { TestingIt } from '../testing-it.class';
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
  }

  //#region _toThrow
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
      () => this.expect.invert(not).toThrowError(actual, message, expectationFailOutput),
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
      () => this.expect.invert(not).toThrowMatching(actual, predicate, expectationFailOutput),
      execute
    );
    return this;
  }
  //#endregion
}
