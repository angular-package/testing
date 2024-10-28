// Class.
import { Expect } from '../expect.class';
import { TestingExpect } from '../testing-expect.class';
import { TestingExpectToHaveBeenCalled } from './testing-expect-to-have-been-called.class';
/**
 * Constructor description.
 * @class
 * @classdesc Testing `ToHaveBeen` matchers.
 * @license MIT
 */
export class TestingExpectToHaveBeen extends Expect {
  /**
   * @description
   */
  public get called() {
    return this.toHaveBeenCalled;
  }

  /**
   * @description
   */
  private toHaveBeenCalled;

  /**
   * @description
   * @param expect 
   */
  constructor(expect: TestingExpect = new TestingExpect()) {
    super(expect);
    this.toHaveBeenCalled = new TestingExpectToHaveBeenCalled(expect);
  }
}
