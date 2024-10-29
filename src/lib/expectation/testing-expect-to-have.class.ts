// Class.
import { Expect } from '../expect.class';
import { TestingExpect } from '../testing-expect.class';
import { TestingExpectToHaveBeen } from './testing-expect-to-have-been.class';
// Type.
import { ExpectType } from '../../type/expect-type.type';
/**
 * Constructor description.
 * @class
 * @classdesc Testing matchers.
 * @license MIT
 */
export class TestingExpectToHave extends Expect {
  /**
   * @description
   */
  public get been() {
    return this.toHaveBeen;
  }

  /**
   * @description
   */
  private toHaveBeen;

  /**
   * @description
   * @param expect 
   */
  constructor(expect: TestingExpect = new TestingExpect()) {
    super(expect);
    this.toHaveBeen = new TestingExpectToHaveBeen(expect);
  }
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
    expectationFailOutput?: any
  ): this {
    this
      .expect(actual, expectationFailOutput)
      .toHaveSpyInteractions();
    this.setNot(false);
    return this;
  }
}
