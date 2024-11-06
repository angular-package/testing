// Class.
import { Expect } from '../expect.class';
// Type.
import { ExpectType } from '../../type/expect-type.type';
/**
 * Constructor description.
 * @class
 * @classdesc Testing `to`, `to.be`, `to.have`, `to.throw` matchers.
 * @license MIT
 */
export class TestingExpectTo extends Expect {
  public toContain<T>(
    actual: ExpectType<T>,
    expected: any,
    expectationFailOutput: any = this.getExpectationFailOutput('toContain')
  ): this {
    this
      .expectation(actual, e => e.toContain(expected), expectationFailOutput)
      .setNot(false);
    return this;
  }
  public toEqual<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<typeof actual>,
    expectationFailOutput: any = this.getExpectationFailOutput('toEqual')
  ): this {
    this
      .expectation(actual, e => e.toEqual(expected), expectationFailOutput)
      .setNot(false);
    return this;
  }
  public toMatch<T>(
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
