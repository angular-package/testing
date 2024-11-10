// TestingExpect.
import { Expect } from '../expect.class';
// Type.
import { ExpectType } from '../../type';
/**
 * Constructor description.
 * @class
 * @classdesc Matchers that use the `toBe()` method of jasmine.
 * @license MIT
 */
export class TestingExpectToBeInstanceOf extends Expect {
  /**
   * @description Expects provided value to be an instance of `array`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual The value of any type that is checked against the `array` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `array`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public toBeInstanceOfArray<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeInstanceOfArray')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(Array);
    this.setNot(false);
    return this;
  }

  /**
   * @description Expects provided value to be an instance of `Boolean`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual The value of any type that is checked against a `boolean` type or an instance of `Boolean` and the result of its check
   * is passed to the `expect()` function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not)
   * `boolean`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public toBeInstanceOfBoolean<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeInstanceOfBoolean')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(Boolean);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  /**
   * @description Expects provided value to be an instance of `DataView`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public toBeInstanceOfDataView<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeInstanceOfDataView')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(DataView);
    this.setNot(false);
    return this;
  }

  /**
   * @description Expects provided value to be an instance of `Date`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual The value of any type that is checked against `date` and the result of its check is passed to the `expect()` function
   * of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) a `Date`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public toBeInstanceOfDate<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeInstanceOfDate')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(Date);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  /**
   * @description Expects provided value to be an instance of `Error`. Tested by `toBeInstanceOf()` of jasmine.
   */
  public toBeInstanceOfError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeInstanceOfError')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(Error);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  /**
   * @description Expects provided value to be an instance of `EvalError`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public toBeInstanceOfEvalError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeInstanceOfEvalError')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(EvalError);
    this.setNot(false);
    return this;
  }

  /**
   * @description Expects provided value to be an instance of `Function`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual The value of any type that is checked against `function` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not)
   * `function`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public toBeInstanceOfFunction<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeInstanceOfFunction')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(Function);
    this.setNot(false);
    return this;
  }

  /**
   * @description Expects provided value to be an instance of `Map`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public toBeInstanceOfMap<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeInstanceOfMap')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(Map);
    this.setNot(false);
    return this;
  }

  /**
   * @description Expects provided value to be an instance of `Number`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual The value of any type that is checked against a `number` type or an instance of a `Number` and the result of its check is
   * passed to the `expect()` function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) a
   * `number` type or an instance of a `Number`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public toBeInstanceOfNumber<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeNumber')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(Number);
    this.setNot(false);
    return this;
  }

  /**
   * @description Expects provided value to be an instance of `Object`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual The value of any type that is checked against an `object` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `object`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public toBeInstanceOfObject<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeObject')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(Object);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  /**
   * @description Expects provided value to be an instance of `Promise`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public toBeInstanceOfPromise<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeInstanceOfPromise')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(Promise);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  /**
   * @description Expects provided value to be an instance of `RangeError`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public toBeInstanceOfRangeError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeInstanceOfRangeError')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(RangeError);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  /**
   * @description Expects provided value to be an instance of `ReferenceError`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public toBeInstanceOfReferenceError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeInstanceOfReferenceError')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(ReferenceError);
    this.setNot(false);
    return this;
  }

  /**
   * @description Expects provided value to be an instance of `RegExp`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual The value of any type that is checked against `RegExp` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) `RegExp`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   */
  public toBeInstanceOfRegExp<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeInstanceOfRegExp')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(RegExp);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  /**
   * @description Expects provided value to be an instance of `Set`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public toBeInstanceOfSet<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeInstanceOfSet')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(Set);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  /**
   * @description Expects provided value to be an instance of `SyntaxError`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public toBeInstanceOfSyntaxError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeInstanceOfSyntaxError')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(SyntaxError);
    this.setNot(false);
    return this;
  }

  /**
   * @description Expects provided value to be an instance of `String`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual The value of any type that is checked against a `string` type or an instance of a `String` and the result of its check is
   * passed to the `expect()` function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) a `string`
   * type or an instance of a `String`.
   * @returns The return value is an instance of `TestingToBeMatchers`.
   * @angularpackage
   */
  public toBeInstanceOfString<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeInstanceOfString')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(String);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  /**
   * @description Expects provided value to be an instance of `TypeError`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public toBeInstanceOfTypeError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeInstanceOfTypeError')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(TypeError);
    this.setNot(false);
    return this;
  }
  

  // TODO: Description.
  /**
   * @description Expects provided value to be an instance of `URIError`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public toBeInstanceOfURIError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeInstanceOfURIError')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(URIError);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  /**
   * @description Expects provided value to be an instance of `WeakMap`. Tested by `toBeInstanceOf()` of jasmine.
   */
  public toBeInstanceOfWeakMap<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeInstanceOfWeakMap')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(WeakMap);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  /**
   * @description Expects provided value to be an instance of `WeakSet`. Tested by `toBeInstanceOf()` of jasmine.
   * @param actual 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public toBeInstanceOfWeakSet<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeInstanceOfWeakSet')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeInstanceOf(WeakSet);
    this.setNot(false);
    return this;
  }
}
