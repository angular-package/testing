// Class.
import { TestingExpect } from '../testing-expect.abstract';
import { TestingExpectToHaveBeenCalled } from './testing-to-have-been-called.class';
/**
 * Testing `ToHaveBeen` matchers.
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
