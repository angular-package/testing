// Class.
import { Expect } from '../expect.class';
import { TestingExpect } from '../testing-expect.class';
import { TestingExpectToBe } from './testing-expect-to-be.class';
import { TestingExpectToHave } from './testing-expect-to-have.class';
import { TestingExpectToThrow } from './testing-expect-to-throw.class';
// Type.
import { ExpectType } from '../../type/expect-type.type';
/**
 * Constructor description.
 * @class
 * @classdesc Testing `to`, `to.be`, `to.have`, `to.throw` matchers.
 * @license MIT
 */
export class TestingExpectTo extends Expect {
  /**
   * @public
   * @description
   */
  public get be() {
    return this.toBe;
  }

  /**
   * @public
   * @description
   */
  public get have() {
    return this.toHave;
  }

  /**
   * @public
   * @description
   */
  public get throw() {
    return this.toThrow;
  }

  /**
   * @description
   */
  private toBe;

  /**
   * @description
   */
  private toHave;

  /**
   * @description
   */
  private toThrow;

  /**
   * @description
   * @param expect 
   */
  constructor(expect: TestingExpect = new TestingExpect()) {
    super(expect);
    this.toBe = new TestingExpectToBe(expect);
    this.toHave = new TestingExpectToHave(expect);
    this.toThrow = new TestingExpectToThrow(expect);
  }
  public contain<T>(
    actual: ExpectType<T>,
    expected: any,
    expectationFailOutput: any = this.getExpectationFailOutput('toContain')
  ): this {
    this
      .expectation(actual, e => e.toContain(expected), expectationFailOutput)
      .setNot(false);
    return this;
  }
  public equal<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<typeof actual>,
    expectationFailOutput: any = this.getExpectationFailOutput('toEqual')
  ): this {
    this
      .expectation(actual, e => e.toEqual(expected), expectationFailOutput)
      .setNot(false);
    return this;
  }
  public match<T>(
    actual: ExpectType<T>,
    expected: string | RegExp,
    expectationFailOutput: any = this.getExpectationFailOutput('toMatch')
  ): this {
    this
      .expectation(actual, e => e.toMatch(expected), expectationFailOutput)
      .setNot(false);
    return this;
  }
}
