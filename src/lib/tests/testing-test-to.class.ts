// Class.
import { TestingCore } from '../testing-core.class';
import { TestingTestToBe } from './testing-test-to-be.class';
import { TestingTestToHave } from './testing-test-to-have.class';
import { TestingTestToThrow } from './testing-test-to-throw.class';
// Type.
import { ExpectType } from '../../type';
/**
 * Prepared tests.
 */
export class TestingTestTo extends TestingCore {
  public get be() {
    return this.#be;
  }

  public get have() {
    return this.#have;
  }

  public get throw() {
    return this.#throw;
  }

  /**
   * 
   */
  #expectation = {
    contain: `The \`actual\` value to contain a specific value.`,
    equal: `The \`actual\` value to be equal to the \`expected\`, using deep equality comparison.`,
    match: `The \`actual\` value to match a regular expression.`,
  }

  /**
   * 
   */
  #be: TestingTestToBe;

  /**
   * 
   */
  #have: TestingTestToHave;

  /**
   * 
   */
  #throw: TestingTestToThrow;

  /**
   * 
   * @param allowDescribe 
   * @param allowIt 
   * @param executable 
   */
  constructor(
    allowDescribe: boolean,
    allowIt: boolean,
    executable?: {
      describe?: Array<number>,
      it?: Array<number>
    }
  ) {
    super(allowDescribe, allowIt, executable);
    this.#be = new TestingTestToBe(allowDescribe, allowIt, executable);
    this.#have = new TestingTestToHave(allowDescribe, allowIt, executable);
    this.#throw = new TestingTestToThrow(allowDescribe, allowIt, executable);
  }

  public contain<T>(
    actual: ExpectType<T>,
    expected: any,
    expectation: string = this.#expectation.contain,
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
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to equal to the given `expected`.
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
    expectation: string = this.#expectation.equal,
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

  
  public match<T>(
    actual: ExpectType<T>,
    expected: string | RegExp,
    expectation: string = this.#expectation.match, 
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
