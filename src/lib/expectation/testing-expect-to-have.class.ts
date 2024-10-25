// Class.
import { TestingExpect } from '../testing-expect.abstract';
import { TestingExpectToHaveBeen } from './testing-expect-to-have-been.class';
// Type.
import { ExpectType } from '../../type/expect-type.type';
/**
 * Constructor description.
 * @class
 * @classdesc Testing matchers.
 * @license MIT
 */
export class TestingExpectToHave extends TestingExpect {
  /**
   *
   */
  public get been() {
    return this.toHaveBeen;
  }

  /**
   * 
   */
  private toHaveBeen = new TestingExpectToHaveBeen();

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
  public size<T>(
    actual: ExpectType<T>,
    expected: number,
    expectationFailOutput?: any
  ): this {
    this
      .expect(actual, expectationFailOutput)
      .toHaveSize(expected);
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
