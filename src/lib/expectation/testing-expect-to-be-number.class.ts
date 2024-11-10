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
export class TestingExpectToBeNumber extends Expect {
  //#region number
  /**
   * Expects provided value to be a `number` type or an instance of a `Number`. The method uses `isNumber()` function from the
   * `@angular-package/type`.
   * @param actual The value of any type that is checked against a `number` type or an instance of a `Number` and the result of its check is
   * passed to the `expect()` function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) a
   * `number` type or an instance of a `Number`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public toBeNumber<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeNumber')
  ): this {
    this.expect(is.number(actual), expectationFailOutput).toBe(expected);
    this.setNot(false);
    return this;
  }

  /**
   * Expects provided value to be a `number` type or an instance of a `Number` between the `range` of minimum and maximum. The method uses
   * `isNumberBetween()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against a `number` type or an instance of a `Number` within the specified `range`
   * and the result of its check is passed to the `expect()` function of jasmine.
   * @param min The **minimum** range of generic type variable `Min` of the given `value`.
   * @param max The **maximum** range of generic type variable `Max` of the given `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) a `number`
   * type or an instance of a `Number` between the `range` of minimum and maximum.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public toBeNumberBetween<T, Min extends number, Max extends number>(
    actual: ExpectType<T>,
    min: Min,
    max: Max,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeNumberBetween')
  ): this {
    this.expect(is.numberBetween(actual, min, max), expectationFailOutput).toBe(expected);
    this.setNot(false);
    return this;
  }

  public toBeNumberType<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeNumberType')
  ): this {
    this.expect(is.numberType(actual), expectationFailOutput).toBe(expected);
    this.setNot(false);
    return this;
  }
  //#endregion
}
