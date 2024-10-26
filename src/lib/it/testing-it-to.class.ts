// Class.
import { TestingCore } from '../testing-core.class';
import { TestingDescribe } from '../testing-describe.class';
import { TestingIt } from '../testing-it.class';
import { TestingItToBe } from './testing-it-to-be.class';
import { TestingItToHave } from './testing-it-to-have.class';
import { TestingItToThrow } from './testing-it-to-throw.class';
// Type.
import { ExpectType } from '../../type';
// Interface.
import { ExecutableTests } from '../../interface/executable-tests.interface';
/**
 * Prepared tests.
 */
export class TestingItTo<
  Descriptions extends string = string,
  Expectations extends string = string
> extends TestingCore<
  Descriptions,
  Expectations
> {
  /**
   * @description 
   */
  public get be() {
    return this.#toBe;
  }

  /**
   * @description 
   */
  public get have() {
    return this.#toHave;
  }

  /**
   * @description 
   */
  public get throw() {
    return this.#toThrow;
  }

  // TODO: Check.
  // private executable?

  /**
   * 
   */
  #toBe: TestingItToBe;

  /**
   * 
   */
  #toHave: TestingItToHave;

  /**
   * 
   */
  #toThrow: TestingItToThrow;

  /**
   * 
   * @param allowDescribe 
   * @param allowIt 
   * @param executable 
   */
  constructor(
    allowDescribe: boolean,
    allowIt: boolean,
    executable?: ExecutableTests,
    testingDescribe?: TestingDescribe,
    testingIt?: TestingIt
  ) {
    super(allowDescribe, allowIt, executable, testingDescribe, testingIt);
    this.#toBe = new TestingItToBe(allowDescribe, allowIt, executable, testingDescribe, testingIt);
    this.#toHave = new TestingItToHave(allowDescribe, allowIt, executable, testingDescribe, testingIt);
    this.#toThrow = new TestingItToThrow(allowDescribe, allowIt, executable, testingDescribe, testingIt);
  }

  /**
   * @description 
   * @param actual 
   * @param expected 
   * @param expectation 
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public contain<T>(
    actual: ExpectType<T>,
    expected: any,
    expectation: string = TestingCore.expectation.toContain,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.contain(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to equal to the given `expected`.
   * "Expect the actual `value` to be equal to the `expected`, using deep equality comparison."
   * @param actual The value of any type passed to the `expect()` function of jasmine.
   * @param expected The value of any type passed to the `toEqual()` method of jasmine. "The expected value to compare against."
   * @param expectation "Textual description of what this spec is checking" with an optional its unique number when adding `[counter]`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public equal<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<typeof actual>,
    expectation: string = TestingCore.expectation.toEqual,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.equal(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description 
   * @param actual 
   * @param expected 
   * @param expectation 
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public match<T>(
    actual: ExpectType<T>,
    expected: string | RegExp,
    expectation: string = TestingCore.expectation.toMatch, 
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.match(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
}
