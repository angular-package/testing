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
export class TestingExpectToBeString extends Expect {
  //#region string
  /**
   * Expects provided value to be a `string` type or an instance of a `String`. The method uses `isString()` function from the
   * `@angular-package/type`.
   * @param actual The value of any type that is checked against a `string` type or an instance of a `String` and the result of its check is
   * passed to the `expect()` function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) a `string`
   * type or an instance of a `String`.
   * @returns The return value is an instance of `TestingToBe`.
   * @angularpackage
   */
  public toBeString<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeString')
  ): this {
    this.expect(is.string(actual), expectationFailOutput).toBe(expected);
    this.setNot(false);
    return this;
  }

  /**
   * Expects provided value to be a `string` type or an instance of a `String` that includes the specified words/sentences. The method uses
   * `isStringIncludes()` function from the `@angular-package/type`.
   * @param actual The value of any type to check against a `string` type or an instance of a `String` that contains words/sentences from a
   * given `includes` and the result of its check is passed to the `expect()` function of jasmine.
   * @param includes An `Array` of strings as words/sentences to be case-sensitive searched for within the given `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) a `string`
   * type or an instance of `String` that includes the specified words/sentences from a given `includes`.
   * @returns The return value is an instance of `TestingToBe`.
   * @angularpackage
   */
  public toBeStringIncludes<T>(
    actual: ExpectType<T>,
    includes: string[],
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeStringIncludes')
  ): this {
    this.expect(is.stringIncludes(actual, includes), expectationFailOutput).toBe(expected);
    this.setNot(false);
    return this;
  }

  /**
   * Expects provided value to be a `string` type or an instance of a `String` that includes some of the specified words/sentences. The
   * method uses `isStringIncludes()` function from the `@angular-package/type`.
   * @param actual The value of any type to check against a `string` type or an instance of a `String` that contains some of words/sentences
   * from a given `includes` and the result of its check is passed to the `expect()` function of jasmine.
   * @param includes An `Array` of strings as words/sentences to be case-sensitive searched for within the given `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) a `string`
   * type or an instance of `String` that includes some of the specified words/sentences from a given `includes`.
   * @returns The return value is an instance of `TestingToBe`.
   * @angularpackage
   */
  public toBeStringIncludesSome<T>(
    actual: ExpectType<T>,
    includes: string[],
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeStringIncludesSome')
  ): this {
    this.expect(is.stringIncludesSome(actual, includes), expectationFailOutput).toBe(expected);
    this.setNot(false);
    return this;
  }

  /**
   * Expects provided value to be a `string` type or an instance of a `String` of the given length. The method uses `isStringLength()`
   * function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against a `string` type or an instance of a `String` of the given `length` and
   * the result of its check is passed to the `expect()` function of jasmine.
   * @param length The **length** of generic type variable `Length` for the given `value`,
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) a `string`
   * type or an instance of a `String` of the specified `length`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public toBeStringOfLength<T, Length extends number>(
    actual: ExpectType<T>,
    length: Length,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeStringOfLength')
  ): this {
    this.expect(is.stringLength(actual, length), expectationFailOutput).toBe(expected);
    this.setNot(false);
    return this;
  }

  /**
   * Expects provided value to be a `string` type or an instance of a `String` of the length between the given minimum and maximum. The
   * method uses `isStringLengthBetween()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against a `string` type or an instance of a `String` of the given `min` and `max`
   * and the result of its check is passed to the `expect()` function of jasmine.
   * @param min The **minimum** length of generic type variable `Min` of the given `value`.
   * @param max The **maximum** length of generic type variable `Max` of the given `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) a `string`
   * type or an instance of a `String` of the `length` between the given minimum and maximum.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public toBeStringOfLengthBetween<T, Min extends number, Max extends number>(
    actual: ExpectType<T>,
    min: Min,
    max: Max,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeStringOfLengthBetween')
  ): this {
    this.expect(is.stringLengthBetween(actual, min, max), expectationFailOutput).toBe(expected);
    this.setNot(false);
    return this;
  }

  public toBeStringType<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeStringType')
  ): this {
    this.expect(is.stringType(actual), expectationFailOutput).toBe(expected);
    this.setNot(false);
    return this;
  }
  //#endregion
}
