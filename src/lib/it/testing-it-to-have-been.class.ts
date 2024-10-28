// Class.
import { TestingCore } from '../testing-core.abstract';
import { TestingDescribe } from '../testing-describe.class';
import { TestingExpect } from '../testing-expect.class';
import { TestingIt } from '../testing-it.class';
import { TestingItToHaveBeenCalled } from './testing-it-to-have-been-called.class';
// Type.
import { CounterConfig } from '../../type/counter-config.type';
// Interface.
import { ExecutableTests } from '../../interface/executable-tests.interface';
/**
 * Prepared `toHaveBeen` tests.
 */
export class TestingItToHaveBeen<
  Descriptions extends string = string,
  Expectations extends string = string
> extends TestingCore<
  Descriptions,
  Expectations
> {
  /**
   * 
   */
  public get called() {
    return this.#toHaveBeenCalled;
  }

  /**
   * 
   */
  #toHaveBeenCalled: TestingItToHaveBeenCalled;

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
    testingDescribe?: TestingDescribe,
    testingIt?: TestingIt,
    testingExpect?: TestingExpect
  ) {
    super(allowDescribe, allowIt, executable, counter, testingDescribe, testingIt, testingExpect);
    this.#toHaveBeenCalled = new TestingItToHaveBeenCalled(allowDescribe, allowIt, executable, counter, testingDescribe, testingIt, testingExpect);
  }
}
