// Class.
import { TestingCore } from '../testing-core.class';
import { TestingItToHaveBeenCalled } from './testing-it-to-have-been-called.class';
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
  public get called(): TestingItToHaveBeenCalled {
    return this.#called;
  }

  /**
   * 
   */
  #called: TestingItToHaveBeenCalled;

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
    this.#called = new TestingItToHaveBeenCalled(allowDescribe, allowIt, executable);
  }
}
