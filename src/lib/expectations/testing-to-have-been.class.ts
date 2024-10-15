// Class.
import { TestingExpect } from '../testing-expect.abstract';
// Type.
import { ExpectType } from '../../type/expect-type.type';

/**
 * Testing `ToHaveBeen` matchers.
 */
export class TestingToHaveBeen extends TestingExpect {
  public called<T extends jasmine.Func>(
    spy: ExpectType<T>,
    expectationFailOutput?: any
  ): this {
    this
      .expect(spy, expectationFailOutput)
      .toHaveBeenCalled();
    this.setNot(false);
    return this;
  }
}
