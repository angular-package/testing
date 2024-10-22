// @angular-package/type.
import { guard, is } from '@angular-package/type';
// Class.
import { TestingExecutable } from './testing-executable.class';
/**
 * Manages `describe()` function of jasmine.
 */
export class TestingDescribe<
  Descriptions extends string = string
> extends TestingExecutable {
  /**
   * Defines the wrapper function for the `describe()` function of jasmine with the ability to decide its execution.
   * @param description "Textual description of the group" with a defined prefix indicating its unique number.
   * @param specDefinitions "Function for Jasmine to invoke that will define"
   * @returns The return value is a `function` that contains `describe()` of jasmine with the ability to decide of its execution.
   */
  public static define(
    description: string,
    specDefinitions: () => void
  ): (execute: boolean) => void {
    return (execute: boolean = false) => is.true(execute)
      && describe(description, specDefinitions);
  }

  /**
   * Privately stored allow state of executing `describe)` method, which by default is set to `false`.
   */
  #allow = false;

  /**
   * Manages `describe()` function of jasmine.
   * Initialize executable storage.
   * @allow An optional value of a `boolean` to initially allow executing `describe()` methods.
   * @param executable An optional `array` of unique numbers type to initially set executable storage.
   */
  constructor(allow?: boolean, executable?: Array<number>) {
    super(executable);
    this.#allow = is.boolean(allow) ? allow : this.#allow;
  }

  /**
   * Allows executing `describe()` methods.
   * @returns The return value is an instance of `TestingDescribe`.
   */
  public allow(): this {
    this.#allow = true;
    return this;
  }

  /**
   * Disallows executing `describe()` methods, which means only those specified in the executable storage can be executed.
   * @returns The return value is an instance of `TestingDescribe`.
   */
  public disallow(): this {
    this.#allow = false;
    return this;
  }

  /**
   * Executes defined `describe()` function of jasmine on provided state `true` from the `execute`.
   * @param description "Textual description of the group" with an optional its unique number when adding `[counter]`.
   * @param specDefinitions "Function for Jasmine to invoke that will define inner suites a specs"
   * @param execute A `boolean` type value to decide whether or not execute defined `describe()` of jasmine function.
   * @returns The return value is an instance of `TestingDescribe`.
   */
  public describe<Description extends string>(
    description: Descriptions | Description,
    specDefinitions: () => void,
    execute: boolean = is.false(this.#allow)
      ? this.isExecutable(this.getCounter() + 1)
      : true
  ): this {
    this.count();
    TestingDescribe.define(
      this.defineDescription(description),
      specDefinitions
    )(execute);
    return this;
  }

  public fdescribe<Description extends string>(
    description: Descriptions | Description,
    specDefinitions: () => void,
  ): this {
    this.count();
    fdescribe(description, specDefinitions);
    return this;
  }

  /**
   * Defines description for `describe()` method with adding counter on demand.
   * @param description A `string` type value.
   * @returns The return value is a `string` type description.
   */
  private defineDescription(description: string): string {
    if (guard.string(description)) {
      return description.replace('[counter]', `${this.getCounter()}`);
    }
    return '';
  }

  public xdescribe<Description extends string>(
    description: Descriptions | Description,
    specDefinitions: () => void,
  ): this {
    this.count();
    xdescribe(description, specDefinitions);
    return this;
  }
}
