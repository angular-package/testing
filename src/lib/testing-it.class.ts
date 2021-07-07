// @angular-package/type.
import { guard, is } from '@angular-package/type';
// Class.
import { TestingExecutable } from './testing-executable.class';
/**
 * Manages `it()` function of jasmine.
 */
export class TestingIt extends TestingExecutable {
  /**
   * Privately stored allow state of executing `it()` methods, which by default is set to `false`.
   */
  #allow = false;

  /**
   * Manages `it()` function of jasmine.
   * Creates an instance with optional allowed executing methods and executable storage.
   * @param allow An optional value of a `boolean` to initially allow executing `it()` methods.
   * @param executable An optional `array` of unique numbers type to initially set executable storage.
   */
  constructor(allow?: boolean, executable?: Array<number>) {
    super(executable);
    this.#allow = is.boolean(allow) ? allow : this.#allow;
  }

  /**
   * Defines the wrapper function for the `it()` function of jasmine with the ability to decide its execution.
   * @param expectation "Textual description of what this spec is checking"
   * @param assertion "Function that contains the code of your test. If not provided the test will be pending."
   * @param timeout "Custom timeout for an async spec."
   * @returns The return value is a `function` that contains the predefined `it()` function of jasmine with the
   * ability to decide its execution.
   */
  static define(
    expectation: string,
    assertion: jasmine.ImplementationCallback,
    timeout?: number | undefined
  ): (execute: boolean) => void {
    return (execute: boolean = false) => {
      if (is.true(execute) && is.function(assertion)) {
        it(expectation, assertion, timeout);
      }
    };
  }

  /**
   * Allow executing `it()` methods.
   * @returns The return value is an instance of `TestingIt`.
   */
  public allow(): this {
    this.#allow = true;
    return this;
  }

  /**
   * Disallow executing `it()` methods, which means only those specified in the executable storage can be executed.
   * @returns The return value is an instance of `TestingIt`.
   */
  public disallow(): this {
    this.#allow = false;
    return this;
  }

  /**
   * Executes defined `it()` function of jasmine on provided state `true` from the `execute`.
   * @param expectation "Textual description of what this spec is checking" with an optional its unique number when adding `[counter]`.
   * @param assertion "Function that contains the code of your test. If not provided the test will be pending."
   * @param execute A `boolean` type value to decide whether or not execute defined `it()` of jasmine function.
   * @returns The return value is an instance of `TestingIt`.
   */
  public it(
    expectation: string,
    assertion: jasmine.ImplementationCallback,
    execute: boolean = is.false(this.#allow)
      ? this.isExecutable(this.getCounter() + 1)
      : true
  ): this {
    this.count();
    TestingIt.define(this.defineExpectation(expectation), assertion)(execute);
    return this;
  }

  /**
   * Defines expectation for `it()` method with the added counter on demand.
   * @param expectation A `string` type value.
   * @returns The return value is a `string` type expectation.
   */
  private defineExpectation(expectation: string): string {
    if (guard.string(expectation)) {
      return expectation.replace('[counter]', `${this.getCounter()}`);
    }
    return '';
  }
}
