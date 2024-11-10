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
export class TestingExpectToBeObject extends Expect {
  //#region object
  /**
   * Expects provided value to be an `object`. The method uses `isObject()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against an `object` and the result of its check is passed to the `expect()`
   * function of jasmine.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `object`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public toBeObject<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeObject')
  ): this {
    this.expect(is.object(actual), expectationFailOutput).toBe(expected);
    this.setNot(false);
    return this;
  }

  /**
   * Expects provided value to be an `object` with a given `key`. The method uses `isObjectKey()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against an `object` that contains a given `key` and the result of its check is
   * passed to the `expect()` function of jasmine.
   * @param key Property name of `PropertyKey` type of potential `object` from the provided `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `object` with a given `key`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public toBeObjectKey<T>(
    actual: ExpectType<T>,
    key: PropertyKey,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeObjectKey')
  ): this {
    this.expect(is.objectKey(actual, key), expectationFailOutput).toBe(expected);
    this.setNot(false);
    return this;
  }

  /**
   * Expects provided value to be an `object` with a given `key` in it(or its prototype chain). The method uses `isObjectKeyIn()` function
   * from the `@angular-package/type`.
   * @param actual The `value` of any type that is checked against an `object` with a given `key` in it(or its prototype chain) and the
   * result of its check is passed to the `expect()` function of jasmine.
   * @param key Property name of a `PropertyKey` type of potential `object` from the provided `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `object` with a given `key` in it(or its prototype chain).
   * @returns The return value is an instance of `TestingToBe`.
   */
  public toBeObjectKeyIn<T>(
    actual: ExpectType<T>,
    key: PropertyKey,
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeObjectKeyIn')
  ): this {
    this.expect(is.objectKeyIn(actual, key), expectationFailOutput).toBe(expected);
    this.setNot(false);
    return this;
  }

  /**
   * Expects provided value to be an `object` with given `keys`. The method uses `isObjectKeys()` function from the `@angular-package/type`.
   * @param actual The value of any type that is checked against an `object` that contains given `keys` and the result of its check is passed
   * to the `expect()` function of jasmine.
   * @param keys An `array` of property names of the `PropertyKey` type of potential `object` from the provided `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `object` with given `keys`.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public toBeObjectKeys<T>(
    actual: ExpectType<T>,
    keys: PropertyKey[],
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeObjectKeys')
  ): this {
    this.expect(is.objectKeys(actual, keys), expectationFailOutput).toBe(expected);
    this.setNot(false);
    return this;
  }

  /**
   * Expects provided value to be an `object` with given `keys` in it(or its prototype chain). The method uses `isObjectKeysIn()` function
   * from the `@angular-package/type`.
   * @param actual The value of any type that is checked against an `object` that contains given `keys` in it(or its prototype chain) and
   * the result of its check is passed to the `expect()` function of jasmine.
   * @param keys An `array` of property names of the `PropertyKey` type of potential `object` from the provided `value`.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `object` with given `keys` in it(or its prototype chain).
   * @returns The return value is an instance of `TestingToBe`.
   */
  public toBeObjectKeysIn<T>(
    actual: ExpectType<T>,
    keys: PropertyKey[],
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeObjectKeysIn')
  ): this {
    this.expect(is.objectKeysIn(actual, keys), expectationFailOutput).toBe(expected);
    this.setNot(false);
    return this;
  }

  /**
   * Expects provided value to be an `object` with some of its keys or some groups of its keys of the `PropertyKey` type. The method uses
   * `objectSomeKeys()` function from the `@angular-package/type`.
   * @param actual The value of any type to check against an `object` that contains some of its keys or some groups of its keys from given
   * `keys` and the result of its check is passed to the `expect()` function of jasmine.
   * @param keys An `Array` of property names or a two-dimensional `array` of property names to check if the given `value` contains some of
   * them or some groups of them.
   * @param expected The expected `value` of a `boolean` to compare against the result of the `value` check that is passed to the `toBe()`
   * method of `jasmine.Matchers`.
   * @param expectationFailOutput An additional message when the matcher fails, by default, states the `value` should be (or not) an
   * `object` with some given keys.
   * @returns The return value is an instance of `TestingToBe`.
   */
  public toBeObjectSomeKeys<T>(
    actual: ExpectType<T>,
    keys: (PropertyKey | PropertyKey[])[],
    expected: jasmine.Expected<boolean> = true,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeObjectSomeKeys')
  ): this {
    this.expect(is.objectSomeKeys(actual, keys), expectationFailOutput).toBe(expected);
    this.setNot(false);
    return this;
  }
  //#endregion
}
