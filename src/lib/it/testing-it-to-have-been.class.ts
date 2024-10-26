// Class.
import { TestingCore } from '../testing-core.class';
import { TestingDescribe } from '../testing-describe.class';
import { TestingIt } from '../testing-it.class';
import { TestingItToHaveBeenCalled } from './testing-it-to-have-been-called.class';
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
    testingDescribe?: TestingDescribe,
    testingIt?: TestingIt
  ) {
    super(allowDescribe, allowIt, executable, testingDescribe, testingIt);
    this.#toHaveBeenCalled = new TestingItToHaveBeenCalled(allowDescribe, allowIt, executable, testingDescribe, testingIt);
  }
}
