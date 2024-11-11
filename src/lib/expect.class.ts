// Class.
import { TestingExpect } from "./testing-expect.class";
import { TextualExpectation } from "./textual-expectation.abstract";
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
    this._expect.already;
    return this;
  }

  /**
   * @description Invert the matcher.
   */
  public get not(): this {
    this._expect.not;
    return this;
  }

  /**
   * @description
   */
  private _expect;

  /**
   * @description
   * @param expect 
   */
  constructor(expect: TestingExpect = new TestingExpect()) {
    this._expect = expect;
  }

  /**
   * 
   * @param actual 
   * @param expectationFailOutput 
   * @returns 
   */
  public expect<T>(
    actual: ExpectType<T>,
    expectationFailOutput?: any,
  ): jasmine.Matchers<ExpectType<T>> {
    return this._expect.expect(actual, expectationFailOutput);
  }

  public expectAsync<T, U>(
    actual: T | PromiseLike<T>,
    expectationFailOutput?: any,
    not?: boolean,
    already?: boolean,
  ): jasmine.AsyncMatchers<T, U> {
    already && this.already;
    not && this.not;
    return this._expect.expectAsync(actual, expectationFailOutput, not, already);
  }

  public getAlready() {
    return this._expect.already;
  }

  /**
   * @description
   * @param method 
   * @returns 
   */
  public getExpectationFailOutput<T>(
    method: keyof typeof TextualExpectation.message,
    actual?: ExpectType<T>,
    expected?: any
  ) {
    return TextualExpectation.getFail(method, this.getNot());
  }

  /**
   * @description Returns the state of invert the matcher.
   * @returns The return value is a state of invert the matcher.
   */
  public getNot() {
    return this._expect.getNot();
  }

  /**
   * 
   * @param invert 
   * @returns 
   */
  public invert(invert: boolean = false) {
    (invert ? this.not : this);
    return this;
  }

  /**
   * @description 
   * @param already 
   * @returns 
   */
  public setAlready(already: boolean): this {
    this._expect.setAlready(already);
    return this;
  }

  /**
   * @description Sets a state of a `boolean` type to invert the matcher .
   * @param not Value of a `boolean` type indicating a state to invert the matcher.
   * @returns The return value is an instance of a child class.
   */
  public setNot(not: boolean): this {
    this._expect.setNot(not);
    return this;
  }

  /**
   * @param message 
   */
  public withContext(message: string) {
    message && this._expect.withContext(message);
    return this;
  }

  protected expectation<T>(
    actual: ExpectType<T>,
    callbackfn: (matchers: jasmine.Matchers<ExpectType<T>>) => any,
    expectationFailOutput?: any,
  ): this {
    callbackfn && callbackfn(this.expect(actual, expectationFailOutput));
    return this;
  }
}
