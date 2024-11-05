// @angular-package/type.
import { are} from '@angular-package/type';
// Class.
import { Expect } from '../expect.class';
// Type.
import { ExpectType } from '../../type';
/**
 * Constructor description.
 * @class
 * @classdesc Matchers that use the `toBeArrayOf()` method of jasmine.
 * @license MIT
 */
export class TestingExpectToBeArrayOf extends Expect {
  /**
   * @description Expects `actual` value to be `array` of `bigint`. Tested with `@angular-package/type` by `are.bigint()` and `jasmine.toBe()`.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public bigint<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeArrayOfBigInt')
  ): this {
    are.bigint(...actual as any).every(
      result => this.toBe(expected, result && Array.isArray(actual) && actual.length > 0, expectationFailOutput)
    );
    return this;
  }

  /**
   * @description Tested with `@angular-package/type` by `are.boolean()` and `jasmine.toBe()`
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public boolean<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeArrayOfBoolean')
  ): this {
    are.boolean(...actual as any).every(
      result => this.toBe(expected, result && Array.isArray(actual) && actual.length > 0, expectationFailOutput)
    );
    return this;
  }

  /**
   * @description Expects `actual` value to be `array` of `date`. Tested with `@angular-package/type` by `are.date()` and `jasmine.toBe()`.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public date<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeArrayOfDate')
  ): this {
    are.date(...actual as any).every(
      result => this.toBe(expected, result && Array.isArray(actual) && actual.length > 0, expectationFailOutput)
    );
    return this;
  }

  /**
   * @description Expects `actual` value to be `array` of defined. Tested with `@angular-package/type` by `are.defined()` and `jasmine.toBe()`.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public defined<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeArrayOfDefined')
  ): this {
    are.defined(...actual as any).every(
      result => this.toBe(expected, result && Array.isArray(actual) && actual.length > 0, expectationFailOutput)
    );
    return this;
  }

  /**
   * @description Expects `actual` value to be `array` of `number`. Tested with `@angular-package/type` by `are.number()` and `jasmine.toBe()`.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public number<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeArrayOfNumber')
  ): this {
    are.number(...actual as any).every(
      result => this.toBe(expected, result && Array.isArray(actual) && actual.length > 0, expectationFailOutput)
    );
    return this;
  }

  /**
   * @description Expects `actual` value to be `array` of `null`. Tested with `@angular-package/type` by `are.null()` and `jasmine.toBe()`.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public null<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeArrayOfNull')
  ): this {
    are.null(...actual as any).every(
      result => this.toBe(expected, result && Array.isArray(actual) && actual.length > 0, expectationFailOutput)
    );
    return this;
  }

  /**
   * @description Expects `actual` value to be `array` of `false`. Tested with `@angular-package/type` by `are.false()` and `jasmine.toBe()`.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public false<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeArrayOfFalse')
  ): this {
    are.false(...actual as any).every(
      result => this.toBe(expected, result && Array.isArray(actual) && actual.length > 0, expectationFailOutput)
    );
    return this;
  }

  /**
   * @description Expects `actual` value to be `array` of `RegExp`. Tested with `@angular-package/type` by `are.regexp()` and `jasmine.toBe()`.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public regExp<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeArrayOfRegExp')
  ): this {
    are.regexp(...actual as any).every(
      result => this.toBe(expected, result && Array.isArray(actual) && actual.length > 0, expectationFailOutput)
    );
    return this;
  }

  /**
   * @description Expects `actual` value to be `array` of `string`. Tested with `@angular-package/type` by `are.string()` and `jasmine.toBe()`.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public string<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeArrayOfString')
  ): this {
    are.string(...actual as any).every(
      result => this.toBe(expected, result && Array.isArray(actual) && actual.length > 0, expectationFailOutput)
    );
    return this;
  }

  /**
   * @description Expects `actual` value to be `array` of `symbol`. Tested with `@angular-package/type` by `are.symbol()` and `jasmine.toBe()`.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public symbol<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeArrayOfSymbol')
  ): this {
    are.symbol(...actual as any).every(
      result => this.toBe(expected, result && Array.isArray(actual) && actual.length > 0, expectationFailOutput)
    );
    return this;
  }

  /**
   * @description Expects `actual` value to be `array` of `true`. Tested with `@angular-package/type` by `are.true()` and `jasmine.toBe()`.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public true<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeArrayOfTrue')
  ): this {
    are.true(...actual as any).every(
      result => this.toBe(expected, result && Array.isArray(actual) && actual.length > 0, expectationFailOutput)
    );
    return this;
  }

  /**
   * @description Expects `actual` value to be `array` of `undefined`. Tested with `@angular-package/type` by `are.undefined()` and `jasmine.toBe()`.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public undefined<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeArrayOfUndefined')
  ): this {
    are.undefined(...actual as any).every(
      result => this.toBe(expected, result && Array.isArray(actual) && actual.length > 0, expectationFailOutput)
    );
    return this;
  }

  private toBe(
    expected: jasmine.Expected<boolean> = true,
    result: boolean,
    expectationFailOutput?: any
  ){
    return this.expect(result, expectationFailOutput).toBe(expected),
      this.setNot(false),
      result;
  }
}
