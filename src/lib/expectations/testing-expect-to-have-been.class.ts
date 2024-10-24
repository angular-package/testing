// Class.
import { TestingExpect } from '../testing-expect.abstract';
import { TestingExpectToHaveBeenCalled } from './testing-expect-to-have-been-called.class';
/**
 * Constructor description.
 * @class
 * @classdesc Testing `ToHaveBeen` matchers.
 * @license MIT
 */
export class TestingExpectToHaveBeen extends TestingExpect {
  /**
   * 
   */
  public get called(): TestingExpectToHaveBeenCalled {
    return this.#called;
  }

  /**
   * 
   */
  #called = new TestingExpectToHaveBeenCalled();
}
