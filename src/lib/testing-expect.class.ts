//
import { is } from '@angular-package/type';
/**
 * Manages the `expect()` function of jasmine.
 */
export abstract class TestingExpect {
  /**
   * Invert the matcher.
   */
  get not(): this {
    this.#not = true;
    return this;
  }

  /**
   * Privately stored state of invert the matcher.
   */
  #not = false;

  /**
   * Sets a state of a `boolean` type to invert the matcher .
   * @param not Value of a `boolean` type indicating a state to invert the matcher.
   * @returns The return value is an instance of a child class.
   */
  protected setNot(not: boolean): this {
    if (is.boolean(not)) {
      this.#not = not;
    }
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
   * Wrapper method for the `expect()` function of jasmine.
   * @param actual The value of a type captured from the `actual` that is passed to the `expect()` function of jasmine.
   * @returns The return value is an `object` of jasmine matchers to use.
   */
  protected expect<Actual>(actual: Actual): jasmine.Matchers<Actual> {
    return is.true(this.#not) ? expect(actual).not : expect(actual);
  }
}
