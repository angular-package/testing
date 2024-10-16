// Class.
import { TestingExpect } from '../testing-expect.abstract';
import { TestingToHaveBeenCalled } from './testing-to-have-been-called.class';
import { TestingToHaveBeen } from './testing-to-have-been.class';

// Type.
import { ExpectType } from '../../type/expect-type.type';

/**
 * Testing matchers.
 */
export class TestingToHave extends TestingExpect {
  /**
   *
   */
  public get been(): TestingToHaveBeen {
    return this.#been;
  }

  /**
   * 
   */
  #been = new TestingToHaveBeen();

  public class<T>(
    actual: ExpectType<T>,
    expected: string,
    expectationFailOutput?: any
  ): this {
    this
      .expect(actual, expectationFailOutput)
      .toHaveClass(expected)
    this.setNot(false);
    return this;
  }

  public match<T>(
    actual: ExpectType<T>,
    expected: string | RegExp,
    expectationFailOutput?: any
  ): this {
    this
      .expect(actual, expectationFailOutput)
      .toMatch(expected);
    this.setNot(false);
    return this;
  }

  public size<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<typeof actual>,
    expectationFailOutput?: any
  ): this {
    this
      .expect(actual, expectationFailOutput)
      .toEqual(expected);
    this.setNot(false);
    return this;
  }

  public spyInteractions<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<typeof actual>,
    expectationFailOutput?: any
  ): this {
    this
      .expect(actual, expectationFailOutput)
      .toEqual(expected);
    this.setNot(false);
    return this;
  }
}
