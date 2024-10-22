// Class.
import { TestingCore } from '../testing-core.class';
import { TestingTestToHaveBeenCalled } from './testing-test-to-have-been-called.class';
/**
 * Prepared `toHaveBeen` tests.
 */
export class TestingTestToHaveBeen<
  Descriptions extends string = string,
  Expectations extends string = string
> extends TestingCore<
  Descriptions,
  Expectations
> {
  /**
   * 
   */
  public get called(): TestingTestToHaveBeenCalled {
    return this.#called;
  }

  /**
   * 
   */
  #called: TestingTestToHaveBeenCalled;

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
    this.#called = new TestingTestToHaveBeenCalled(allowDescribe, allowIt, executable);
  }
}
