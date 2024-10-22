// @angular-package/type.
import { is } from '@angular-package/type';

// Type.
import { ExpectType } from '../type';

/**
 * Manages `expect()` function of jasmine.
 */
export abstract class TestingExpect {
  /**
   * Fail as soon as possible if the actual is pending. Otherwise evaluate the matcher.
   */
  public get already(): this {
    this.#already = true;
    return this;
  }

  /**
   * Invert the matcher.
   */
  public get not(): this {
    this.#not = true;
    return this;
  }

  /**
   * 
   */
  #already = false;
 
  /**
   * Privately stored state of invert the matcher.
   */
  #not = false;

  /**
   * Wrapper method for the `expect()` function of jasmine.
   * @param actual The value of a type captured from the `actual` that is passed to the `expect()` function of jasmine.
   * @param expectationFailOutput
   * @returns The return value is an `object` of jasmine matchers to use.
   */
  public expect<T>(
    actual: ExpectType<T>,
    expectationFailOutput?: any,
    e = expect(actual).withContext(expectationFailOutput)
  ): jasmine.Matchers<typeof actual> {
    return is.true(this.#not) ? e.not : e;
  }

  protected expectation<T>(
    actual: ExpectType<T>,
    callbackfn: (matchers: jasmine.Matchers<typeof actual>) => any,
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
    e = expectAsync(actual).withContext(expectationFailOutput)
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
   * Returns the state of invert the matcher.
   * @returns The return value is a state of invert the matcher.
   */
  public getNot() {
    return this.#not;
  }

  /**
   * 
   * @param already 
   * @returns 
   */
  public setAlready(already: boolean): this {
    is.boolean(already) && (this.#already = already);
    return this;
  }

  /**
   * Sets a state of a `boolean` type to invert the matcher .
   * @param not Value of a `boolean` type indicating a state to invert the matcher.
   * @returns The return value is an instance of a child class.
   */
  public setNot(not: boolean): this {
    is.boolean(not) && (this.#not = not);
    return this;
  }
}
