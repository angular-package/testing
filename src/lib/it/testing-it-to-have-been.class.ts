// Class.
import { TestingCore } from '../testing-core.class';
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
    return this.toHaveBeenCalled;
  }

  /**
   * 
   */
  private toHaveBeenCalled: TestingItToHaveBeenCalled;

  /**
   * 
   * @param allowDescribe 
   * @param allowIt 
   * @param executable 
   */
  constructor(
    allowDescribe: boolean,
    allowIt: boolean,
    executable?: ExecutableTests
  ) {
    super(allowDescribe, allowIt, executable);
    this.toHaveBeenCalled = new TestingItToHaveBeenCalled(allowDescribe, allowIt, executable);
  }
}
