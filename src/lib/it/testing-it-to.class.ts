// Class.
import { TestingCore } from '../testing-core.abstract';
import { TestingDescribe } from '../testing-describe.class';
import { TestingExpectation } from '../testing-expectation.class';
import { TestingIt } from '../testing-it.class';
import { TestingItToBe } from './testing-it-to-be.class';
import { TestingItToHave } from './testing-it-to-have.class';
import { TestingItToThrow } from './testing-it-to-throw.class';
import { TextualExpectation } from '../textual-expectation.abstract';
// Type.
import { CounterConfig } from '../../type/counter-config.type';
import { ExpectType } from '../../type';
// Interface.
import { ExecutableTests } from '../../interface/executable-tests.interface';
/**
 * @class
 * @classdesc Prepared tests.
 * @license MIT
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
    counter: CounterConfig = [true, false],
    // Common instances.
    testingDescribe: TestingDescribe = new TestingDescribe(allowDescribe, executable?.describe, counter),
    testingIt: TestingIt = new TestingIt(allowIt, executable?.it, counter),
    testingExpectation: TestingExpectation = new TestingExpectation()
  ) {
    super(allowDescribe, allowIt, executable, counter, testingDescribe, testingIt, testingExpectation);
    this.#toBe = new TestingItToBe(allowDescribe, allowIt, executable, counter, testingDescribe, testingIt, testingExpectation);
    this.#toHave = new TestingItToHave(allowDescribe, allowIt, executable, counter, testingDescribe, testingIt, testingExpectation);
    this.#toThrow = new TestingItToThrow(allowDescribe, allowIt, executable, counter, testingDescribe, testingIt, testingExpectation);
  }

  /**
   * @description 
   * @param actual 
   * @param expected 
   * @param not Invert the matcher following this expectation
   * @param expectation 
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public contain<T>(
    actual: ExpectType<T>,
    expected: any,
    not: boolean = false,
    expectation: string = TextualExpectation.toContain,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectTo(not).contain(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to equal to the given `expected`.
   * "Expect the actual `value` to be equal to the `expected`, using deep equality comparison."
   * @param actual The value of any type passed to the `expect()` function of jasmine.
   * @param expected The value of any type passed to the `toEqual()` method of jasmine. "The expected value to compare against."
   * @param not Invert the matcher following this expectation
   * @param expectation "Textual description of what this spec is checking" with an optional its unique number when adding `[counter]`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public equal<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<typeof actual>,
    not: boolean = false,
    expectation: string = TextualExpectation.toEqual,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectTo(not).equal(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description 
   * @param actual 
   * @param expected 
   * @param not Invert the matcher following this expectation
   * @param expectation 
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public match<T>(
    actual: ExpectType<T>,
    expected: string | RegExp,
    not: boolean = false,
    expectation: string = TextualExpectation.toMatch, 
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectTo(not).match(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  // Private.
  #expectTo(not: boolean = false) {
    return (not ? this.expect.to.not : this.expect.to);
  }
}
