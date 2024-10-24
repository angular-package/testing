// Class.
import { TestingCore } from './testing-core.class';
import { TestingItTo } from './it/testing-it-to.class';
// Type.
import { ExpectType } from '../type';
// Interface.
import { ExecutableTests } from '../interface/executable-tests.interface';
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
  public get to(): TestingItTo {
    return this.#to;
  }

  /**
   * 
   */
  #to: TestingItTo;

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
    executable?: ExecutableTests
  ) {
    super(allowDescribe, allowIt, executable);
    this.#to = new TestingItTo(allowDescribe, allowIt, executable);
  }

  //#region toThrow
  /**
   * 
   * @param actual 
   * @param expected 
   * @param expectation 
   * The `actual` value a function to throw something.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toThrow<T>(
    actual: ExpectType<T>,
    expected?: any,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.#to.throw.throw(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

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
    this.#to.throw.error(actual, message, expectation, expectationFailOutput, execute);
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
    this.#to.throw.matching(actual, predicate, expectation, expectationFailOutput, execute);
    return this;
  }
  //#endregion
}
