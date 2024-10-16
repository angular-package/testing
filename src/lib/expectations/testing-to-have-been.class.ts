// Class.
import { TestingExpect } from '../testing-expect.abstract';
import { TestingToHaveBeenCalled } from './testing-to-have-been-called.class';
/**
 * Testing `ToHaveBeen` matchers.
 */
export class TestingToHaveBeen extends TestingExpect {
  /**
   * 
   */
  public get called(): TestingToHaveBeenCalled {
    return this.#called;
  }

  /**
   * 
   */
  #called = new TestingToHaveBeenCalled();
}
