// @angular-package/type.
import { is } from '@angular-package/type';
// Class.
import { Expect } from '../expect.class';
// Type.
import { ExpectType } from '../../type';
/**
 * Constructor description.
 * @class
 * @classdesc Matchers that use the `toBe()` method of jasmine.
 * @license MIT
 */
export class TestingExpectToBeBoolean extends Expect {
  /**
   * @description 
   * @param actual The value of any type that is checked against a `boolean` type or an instance of `Boolean` and the result of its check
   * is passed to the `expect()` function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not)
   * `boolean`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public toBeBoolean<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeBoolean')
  ): this {
    this.expect(is.boolean(actual), expectationFailOutput).toBe(expected);
    this.setNot(false);
    return this;
  }
  public toBeBooleanType<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeBooleanType')
  ): this {
    this.expect(is.booleanType(actual), expectationFailOutput).toBe(expected);
    this.setNot(false);
    return this;
  }
}
