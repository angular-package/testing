// @angular-package/type.
import { is, Constructor, typeOf, are } from '@angular-package/type';
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
export class TestingExpectToBe extends Expect {
  /**
   * @description Expects provided value to be an `array`. The method uses `isArray()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against the `array` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `array`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public toBeArray<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeArray')
  ): this {
    this.toBe(is.array(actual), expected, expectationFailOutput);
    return this;
  }

  public toBeArrayOf<T, U>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<U>,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeArrayOf')
  ): this {
    // are.defined(...actual as any).every(
    //   result => (
    //     this.expect(result && Array.isArray(actual) && actual.length > 0, expectationFailOutput).toBe(expected),
    //     this.setNot(false),
    //     result
    //   )
    // );
    return this;
  }
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

  /**
   * @description Expects provided value to be a `bigint` type. The method uses `isBigInt()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against `bigint` and the result of its check is passed to the `expect()` function
   * of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) `bigint`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public toBeBigInt<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeBigInt')
  ): this {
    this.toBe(is.bigint(actual), expected, expectationFailOutput);
    return this;
  }

  /**
   * @description Expects provided value to be `class`. The method uses `isClass()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against `class` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) `class`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public toBeClass<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeClass')
  ): this {
    this.toBe(is.class(actual), expected, expectationFailOutput);
    return this;
  }

  // TODO: Description.
  public toBeCloseTo<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    precision?: any,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeCloseTo')
  ): this {
    this.expect(actual, expectationFailOutput).toBeCloseTo(expected, precision);
    this.setNot(false);
    return this;
  }

  /**
   * @description Expects provided value to be a `Date`. The method uses `isDate()` function from the `@angular-package/type` with `toBe()` of `jasmine`.
   * @param actual The value of any type that is checked against `date` and the result of its check is passed to the `expect()` function
   * of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) a `Date`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public toBeDate<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeDate')
  ): this {
    this.toBe(is.date(actual), expected, expectationFailOutput);
    return this;
  }

  /**
   * @description Expects provided value to be defined. The method uses `toBeDefined()` matcher of `jasmine`.
   * @param actual The value of any type that is checked against defined and the result of its check is passed to the `expect()` function
   * of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) defined.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public toBeDefined<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeDefined')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeDefined();
    this.setNot(false);
    return this;
  }

  //#region boolean expectations
  /**
   * @description Expects provided value to be `false`. The method uses `toBeFalse()` matcher of `jasmine`.
   * @param actual The value of any type that is checked against a `boolean` type or an instance of `Boolean` equal to `false` and the
   * result of its check is passed to the `expect()` function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) a
   * `boolean` type or an instance of `Boolean` equal to `false`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public toBeFalse<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeFalse')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeFalse();
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  public toBeFalsy<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeFalsy')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeFalsy();
    this.setNot(false);
    return this;
  }
  //#endregion

  /**
   * @description Expects provided value to be `function`. The method uses `isFunction()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against `function` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not)
   * `function`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public toBeFunction<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeFunction')
  ): this {
    this.toBe(is.function(actual), expected, expectationFailOutput);
    return this;
  }

  //#region instance
  /**
   * @description Expects provided value to be an instance of a `class` from the given `constructor`. The method uses `isInstance()` function from the
   * `@angular-package/type`.
   * @param actual The value of any type that is checked against an instance of a `class` from the given `constructor` and the result of its
   * check is passed to the `expect()` function of jasmine.
   * @param constructor A `class` or `function` that specifies the type of the `constructor`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * instance of `class` from the given `constructor`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public toBeInstance<T, Type>(
    actual: ExpectType<T>,
    constructor: Constructor<Type>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeInstance')
  ): this {
    this.toBe(is.instance(actual, constructor), expected, expectationFailOutput);    
    return this;
  }

  public toBeInstanceOf<T>(
    actual: ExpectType<T>,
    expected: jasmine.Constructor,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeInstanceOf', actual, expected)
  ): this {
    this.expect(actual, expectationFailOutput).toBeInstanceOf(expected);
    this.setNot(false);
    return this;
  }
  //#endregion

  /**
   * @description Expects provided value to be property key. The method uses `isKey()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against the property key and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) the
   * property key.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public toBeKey<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeKey')
  ): this {
    this.toBe(is.key(actual), expected, expectationFailOutput);
    return this;
  }

  // TODO: Description.
  public toBeNaN<T extends number>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeNaN')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeNaN();
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  public toBeNegativeInfinity<T extends number>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeNegativeInfinity')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeNegativeInfinity();
    this.setNot(false);
    return this;
  }

  /**
   * Expects provided value to be `null`. The method uses `isNull()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against `null` and the result of its check is passed to the `expect()` function of
   * jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) `null`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public toBeNull<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeNull')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeNull();
    this.setNot(false);
    return this;
  }

  public toBePending<T>(
    actual: T | PromiseLike<T>,
    expectationFailOutput?: any,
  ): this {
    this.expectAsync(actual, expectationFailOutput).toBePending();
    this.setAlready(false).setNot(false);
    return this;
  }

  // TODO: Description.
  public toBePositiveInfinity<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBePositiveInfinity')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBePositiveInfinity();
    this.setNot(false);
    return this;
  }

  /**
   * Expects provided value to be `RegExp`. The method uses `isRegExp()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against `RegExp` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) `RegExp`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public toBeRegexp<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeRegExp')
  ): this {
    this.toBe(is.regexp(actual), expected, expectationFailOutput);
    return this;
  }

  //#region rejected
  public toBeRejected<T>(
    actual: T | PromiseLike<T>,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeRejected')
  ): this {
    this.expectAsync(actual, expectationFailOutput).toBeRejected();
    this.setAlready(false).setNot(false);
    return this;
  }

  public toBeRejectedWith<T, U>(
    actual: T | PromiseLike<T>,
    expected: jasmine.Expected<U>,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeRejectedWith')
  ): this {
    this.expectAsync(actual, expectationFailOutput).toBeRejectedWith(expected);
    this.setAlready(false).setNot(false);
    return this;
  }

  public toBeRejectedWithError<T, U>(
    actual: T | PromiseLike<T>,
    expected?: new (...args: any[]) => Error,
    message?: string | RegExp,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeRejectedWithError')
  ): this {
    this.expectAsync<T, U>(actual, expectationFailOutput).toBeRejectedWithError(expected, message)
    this.setAlready(false).setNot(false);
    return this;
  }

  public toBeResolved<T>(
    actual: T | PromiseLike<T>,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeResolved')
  ): this {
    this.expectAsync(actual, expectationFailOutput).toBeResolved();
    this.setAlready(false).setNot(false);
    return this;
  }

  public toBeResolvedTo<T>(
    actual: T | PromiseLike<T>,
    expected: jasmine.Expected<T>,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeResolvedTo')
  ): this {
    this.expectAsync(actual, expectationFailOutput).toBeResolvedTo(expected);
    this.setAlready(false).setNot(false);
    return this;
  }
  //#endregion

  /**
   * Expects provided value to be a `symbol`. The method uses `isSymbol()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against a `symbol` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) a `symbol`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public toBeSymbol<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeSymbol')
  ): this {
    this.toBe(is.symbol(actual), expected, expectationFailOutput);
    return this;
  }

  //#region true boolean
  /**
   * Expects provided value to be a `boolean` type or an instance of `Boolean` equal to `true`. The method uses `isTrue()` function from
   * the `@angular-package/type`.
   * @param actual The value of any type that is checked against a `boolean` type or an instance of `Boolean` equal to `true` and the
   * result of its check is passed to the `expect()` function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) a `boolean`
   * type or an instance of `Boolean` equal to `true`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public toBeTrue<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeTrue')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeTrue();
    this.setNot(false);
    return this;
  }

  public toBeTruthy<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeTruthy')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeTruthy();
    this.setNot(false);
    return this;
  }
  //#endregion

  public toBeTypeOf<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<string>,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeTypeOf')
  ): this {
    this.expect(typeOf(actual) === expected, expectationFailOutput).toBeTrue();
    this.setNot(false);
    return this;
  }

  /**
   * Expects provided value to be `undefined`. The method uses `isUndefined()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against `undefined` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the value should be (or not) `undefined`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public toBeUndefined<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeUndefined')
  ): this {
    expected === false && (this.not);
    this.expect(actual, expectationFailOutput).toBeUndefined();
    this.setNot(false);
    return this;
  }
}
