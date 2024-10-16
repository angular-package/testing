// @angular-package/type.
import { is } from '@angular-package/type';

// Type.
import { ExpectType } from '../type';

/**
 * Manages `expect()` function of jasmine.
 */
export abstract class TestingExpect {
  /**
   * Invert the matcher.
   */
  public get not(): this {
    this.#not = true;
    return this;
  }

  /**
   * Sets a state of a `boolean` type to invert the matcher .
   * @param not Value of a `boolean` type indicating a state to invert the matcher.
   * @returns The return value is an instance of a child class.
   */
  protected setNot(not: boolean): this {
    is.boolean(not) && (this.#not = not);
    return this;
  }

  /**
   * Returns the state of invert the matcher.
   * @returns The return value is a state of invert the matcher.
   */
  protected getNot(): boolean {
    return this.#not;
  }

  /**
   * Privately stored state of invert the matcher.
   */
  #not = false;

  /**
   * Wrapper method for the `expect()` function of jasmine.
   * @param actual The value of a type captured from the `actual` that is passed to the `expect()` function of jasmine.
   * @returns The return value is an `object` of jasmine matchers to use.
   */
  protected expect<T>(
    actual: ExpectType<T>,
    expectationFailOutput?: any
  ): jasmine.Matchers<typeof actual> {
    return is.true(this.#not)
      ? expect(actual).withContext(expectationFailOutput).not
      : expect(actual).withContext(expectationFailOutput);
  }

  protected expectAsync<T, U>(
    actual: T | PromiseLike<T>,
    expectationFailOutput?: any,
  ): jasmine.AsyncMatchers<T, U> {
    return is.true(this.#not)
      ? expectAsync(actual).withContext(expectationFailOutput).not
      : expectAsync(actual).withContext(expectationFailOutput);
  }
}
