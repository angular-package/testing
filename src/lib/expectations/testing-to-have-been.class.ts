// Class.
import { TestingExpect } from '../testing-expect.abstract';
// Type.
import { ExpectType } from '../../type/expect-type.type';

/**
 * Testing `ToHaveBeen` matchers.
 */
export class TestingToHaveBeen extends TestingExpect {
  public called<Value>(
    value: ExpectType<Value>,
    expectationFailOutput?: any
  ): this {
    this
      .expect(value, expectationFailOutput)
      .toHaveBeenCalled();
    this.setNot(false);
    return this;
  }
}
