// Class.
import { TestingExpect } from './testing-expect.abstract';
import { TestingToHaveBeenCalledMatchers } from './testing-to-have-been-called-matchers.class';
import { TestingToHaveBeenMatchers } from './testing-to-have-been-matchers.class';

// Type.
import { ExpectType } from '../type/expect-type.type';

/**
 * Testing matchers.
 */
export class TestingToHaveMatchers extends TestingExpect {
  /**
   *
   */
  public get been(): TestingToHaveBeenMatchers {
    return this.#been;
  }

  /**
   * 
   */
  #been = new TestingToHaveBeenMatchers();

  /**
   * 
   */
  public get beenCalled(): TestingToHaveBeenCalledMatchers {
    return this.#beenCalled;
  }

  /**
   * 
   */
  #beenCalled = new TestingToHaveBeenCalledMatchers();

  public class<Value>(
    value: ExpectType<Value>,
    expected: string,
    expectationFailOutput?: any
  ): this {
    this
      .expect(value, expectationFailOutput)
      .toHaveClass(expected)
    this.setNot(false);
    return this;
  }

  public match<Value>(
    value: ExpectType<Value>,
    expected: string | RegExp,
    expectationFailOutput?: any
  ): this {
    this
      .expect(value, expectationFailOutput)
      .toMatch(expected);
    this.setNot(false);
    return this;
  }

  public size<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<typeof value>,
    expectationFailOutput?: any
  ): this {
    this
      .expect(value, expectationFailOutput)
      .toEqual(expected);
    this.setNot(false);
    return this;
  }

  public spyInteractions<Value>(
    value: ExpectType<Value>,
    expected: jasmine.Expected<typeof value>,
    expectationFailOutput?: any
  ): this {
    this
      .expect(value, expectationFailOutput)
      .toEqual(expected);
    this.setNot(false);
    return this;
  }
}
