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
  /**
   * @description Expects provided value to be the given `expected`.
   * @param actual The value of a generic `Value` type captured from the given `value` and passed to the `expect()` function of
   * jasmine.
   * @param expected The expected value to compare against the given `value`, passed to the `toBe()` method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) of a
   * specific from the method type.
   * @returns The return value is an instance of a `TestingMatchers`.
   */
  public toBe<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<typeof actual>,
    expectationFailOutput: any = this.getExpectationFailOutput('toBe')
  ): this {
    this.expect(actual, expectationFailOutput).toBe(expected);
    this.setNot(false);
    return this;
  }
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
  public toThrow<T>(
    actual: ExpectType<T>,
    expected?: any,
    expectationFailOutput: any = this.getExpectationFailOutput('toThrow')
  ): this {
    this.expect(actual, expectationFailOutput).toThrow(expected);
    this.setNot(false);
    return this;
  }
}
