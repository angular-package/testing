// @angular-package/type.
import { is } from '@angular-package/type';
// Class.
import { TestingDescribe } from './testing-describe.class';
import { TestingIt } from './testing-it.class';
/**
 * Core object with describe and it instances.
 */
export abstract class TestingCore {

  /**
   * Privately stored instance of a `TestingDescribe`.
   */
  #testingDescribe: TestingDescribe = new TestingDescribe();

  /**
   * Privately stored instance of a `TestingIt`.
   */
  #testingIt: TestingIt = new TestingIt();

  /**
   * Core object with describe and it instances.
   * @param allowDescribe Allows executing `describe()` methods from a child instance.
   * @param allowIt Allows executing `it()`  methods from a child instance.
   * @param executable An optional `object` of executable storage for `describe()` and `it()` methods.
   */
  constructor(allowDescribe: boolean, allowIt: boolean, executable?: {
    describe?: Array<number>,
    it?: Array<number>
  }) {
    if (is.defined(executable)) {
      if (is.array(executable.describe)) {
        this.#testingDescribe = new TestingDescribe(allowDescribe, executable.describe);
      }
      if (is.array(executable.it)) {
        this.#testingIt = new TestingIt(allowIt, executable.it);
      }
    }
    if (is.true(allowDescribe)) {
      this.#testingDescribe.allow();
    }
    if (is.true(allowIt)) {
      this.#testingIt.allow();
    }
  }

  /**
   * Executes defined `describe()` function of jasmine on provided state `true` from the `execute`, and resets the counter to `0`.
   * @param description "Textual description of the group" with an optional defined prefix indicating its unique number
   * inside the describe.
   * @param specDefinitions "Function for Jasmine to invoke that will define inner suites a specs"
   * @param execute A `boolean` type value to decide whether or not execute defined `describe()` of jasmine function.
   * @returns The return value is an instance of a child class.
   */
  public describe(
    description: string,
    specDefinitions: () => void,
    execute?: boolean
  ): this {
    this.#testingIt.resetCounter();
    this.#testingDescribe.describe(description, specDefinitions, execute);
    return this;
  }

  /**
   * Executes defined `it()` function of jasmine on provided state `true` from the `execute`.
   * @param expectation "Textual description of what this spec is checking" with an optional its unique number when adding `[counter]`.
   * @param assertion "Function that contains the code of your test. If not provided the test will be pending."
   * @param execute A `boolean` type value to decide whether or not execute defined `it()` of jasmine function.
   * @returns The return value is an instance of a child class.
   */
  public it(
    expectation: string,
    assertion: jasmine.ImplementationCallback,
    execute?: boolean
  ): this {
    this.#testingIt.it(expectation, assertion, execute);
    return this;
  }
}
