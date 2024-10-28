// Class.
import { TestingCore } from '../testing-core.abstract';
import { TestingDescribe } from '../testing-describe.class';
import { TestingExpectation } from '../testing-expectation.class';
import { TextualExpectation } from '../textual-expectation.abstract';
import { TestingIt } from '../testing-it.class';
import { TestingItToHaveBeen } from './testing-it-to-have-been.class';
// Type.
import { CounterConfig } from '../../type/counter-config.type';
import { ExpectType } from '../../type';
// Interface.
import { ExecutableTests } from '../../interface/executable-tests.interface';
/**
 * @class
 * @classdesc Prepared `toHave` tests.
 * @license MIT
 */
export class TestingItToHave<
  Descriptions extends string = string,
  Expectations extends string = string
> extends TestingCore<
  Descriptions,
  Expectations
> {
  /**
   * 
   */
  public get been() {
    return this.#toHaveBeen;
  }

  /**
   * 
   */
  #toHaveBeen: TestingItToHaveBeen;

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
    testingDescribe: TestingDescribe = new TestingDescribe(allowDescribe, executable?.describe, counter),
    testingIt: TestingIt = new TestingIt(allowIt, executable?.it, counter),
    testingExpectation: TestingExpectation = new TestingExpectation()
  ) {
    super(allowDescribe, allowIt, executable, counter, testingDescribe, testingIt, testingExpectation);
    this.#toHaveBeen = new TestingItToHaveBeen(allowDescribe, allowIt, executable, counter, testingDescribe, testingIt, testingExpectation);
  }
  public class<T>(
    actual: ExpectType<T>,
    expected: string,
    expectation: string = TextualExpectation.toHaveClass, 
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.have.class(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  public size<T>(
    actual: ExpectType<T>,
    expected: number,
    expectation: string = TextualExpectation.toHaveSize, 
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.have.size(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  public spyInteractions<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<typeof actual>,
    expectation: string = TextualExpectation.toHaveSpyInteractions,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.have.spyInteractions(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
}
