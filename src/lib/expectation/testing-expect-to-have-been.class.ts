// Class.
import { Expect } from '../expect.class';
import { TestingExpect } from '../testing-expect.class';
/**
 * Constructor description.
 * @class
 * @classdesc Testing `ToHaveBeen` matchers.
 * @license MIT
 */
export class TestingExpectToHaveBeen extends Expect {
  /**
   * @description
   * @param expect 
   */
  constructor(expect: TestingExpect = new TestingExpect()) {
    super(expect);
  }
}
