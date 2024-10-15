// Class.
import { TestingTo } from './expectations/testing-to.class';
/**
 * Testing expectation.
 */
export class TestingExpectation {
  /**
   * 
   */
  public get to(): TestingTo {
    return this.#to;
  }

  /**
   * 
   */
  #to = new TestingTo();
}
