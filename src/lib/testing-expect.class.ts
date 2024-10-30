import {} from "jasmine";
// @angular-package/type.
import { is } from '@angular-package/type';
// Type.
import { ExpectType } from '../type';
/**
 * @class
 * @classdesc Manages `expect()` function of jasmine.
 */
export class TestingExpect {
  /**
   * @description Fail as soon as possible if the actual is pending. Otherwise evaluate the matcher.
   */
  public get already(): this {
    this.#already = true;
    return this;
  }

  /**
   * @description Invert the matcher.
   */
  public get not(): this {
    this.#not = true;
    return this;
  }

  /**
   * @description 
   */
  #already = false;
 
  /**
   * @description Privately stored state of invert the matcher.
   */
  #not = false;

  /**
   * @description Wrapper method for the `expect()` function of jasmine.
   * @param actual The value of a type captured from the `actual` that is passed to the `expect()` function of jasmine.
   * @param expectationFailOutput
   * @returns The return value is an `object` of jasmine matchers to use.
   */
  public expect<T>(
    actual: ExpectType<T>,
    expectationFailOutput?: any,
    e = expectationFailOutput
      ? expect(actual).withContext(expectationFailOutput)
      : expect(actual)
  ): jasmine.Matchers<ExpectType<T>> {
    return is.true(this.#not) ? e.not : e;
  }

  protected expectation<T>(
    actual: ExpectType<T>,
    callbackfn: (matchers: jasmine.Matchers<ExpectType<T>>) => any,
    expectationFailOutput?: any,
  ): this {
    callbackfn && callbackfn(this.expect(actual, expectationFailOutput));
    return this;
  }

  public expectAsync<T, U>(
    actual: T | PromiseLike<T>,
    expectationFailOutput?: any,
    not?: boolean,
    already?: boolean,
    e = expectationFailOutput
      ? expectAsync(actual).withContext(expectationFailOutput)
      : expectAsync(actual)
  ): jasmine.AsyncMatchers<T, U> {
    already && this.already;
    not && this.not;
    return is.true(this.#not)
      ? is.true(this.#already) ? e.not.already : e.not
      : is.true(this.#already) ? e.already : e;
  }

  public getAlready() {
    return this.#already;
  }

  /**
   * @description Returns the state of invert the matcher.
   * @returns The return value is a state of invert the matcher.
   */
  public getNot() {
    return this.#not;
  }

  /**
   * @description 
   * @param already 
   * @returns 
   */
  public setAlready(already: boolean): this {
    is.boolean(already) && (this.#already = already);
    return this;
  }

  /**
   * @description Sets a state of a `boolean` type to invert the matcher .
   * @param not Value of a `boolean` type indicating a state to invert the matcher.
   * @returns The return value is an instance of a child class.
   */
  public setNot(not: boolean): this {
    is.boolean(not) && (this.#not = not);
    return this;
  }
}
