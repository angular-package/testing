// Class.
import { TestingExpect } from "./testing-expect.class";
// Type.
import { ExpectType } from "../type";
/**
 * @class
 * @classdesc Contains instance of the `TestingExpect`.
 */
export class Expect {
  /**
   * @description Fail as soon as possible if the actual is pending. Otherwise evaluate the matcher.
   */
  public get already(): this {
    this.#expect.already;
    return this;
  }

  /**
   * @description Invert the matcher.
   */
  public get not(): this {
    this.#expect.not;
    return this;
  }

  /**
   * @description
   */
  #expect;

  /**
   * @description
   * @param expect 
   */
  constructor(expect: TestingExpect = new TestingExpect()) {
    this.#expect = expect;
  }
  public expect<T>(
    actual: ExpectType<T>,
    expectationFailOutput?: any,
  ): jasmine.Matchers<typeof actual> {
    return this.#expect.expect(actual, expectationFailOutput);
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
  ): jasmine.AsyncMatchers<T, U> {
    already && this.already;
    not && this.not;
    return this.#expect.expectAsync(actual, expectationFailOutput, not, already);
  }
  public getAlready() {
    return this.#expect.already;
  }

  /**
   * @description Returns the state of invert the matcher.
   * @returns The return value is a state of invert the matcher.
   */
  public getNot() {
    return this.#expect.getNot();
  }

  /**
   * @description 
   * @param already 
   * @returns 
   */
  public setAlready(already: boolean): this {
    this.#expect.setAlready(already);
    return this;
  }

  /**
   * @description Sets a state of a `boolean` type to invert the matcher .
   * @param not Value of a `boolean` type indicating a state to invert the matcher.
   * @returns The return value is an instance of a child class.
   */
  public setNot(not: boolean): this {
    this.#expect.setNot(not);
    return this;
  }
}
