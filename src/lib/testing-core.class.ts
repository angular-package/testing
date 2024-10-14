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
   * 
   */
  protected get testingDescribe() {
    return this.#testingDescribe;
  }

  /**
   * 
   */
  protected get testingIt() {
    return this.#testingIt;
  }

  /**
   * Privately stored instance of a `TestingDescribe`.
   */
  #testingDescribe = new TestingDescribe();

  /**
   * Privately stored instance of a `TestingIt`.
   */
  #testingIt = new TestingIt();

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
      is.array(executable.describe) && (this.#testingDescribe = new TestingDescribe(allowDescribe, executable.describe));
      is.array(executable.it) && (this.#testingIt = new TestingIt(allowIt, executable.it));
    }
    is.true(allowDescribe) && this.#testingDescribe.allow();
    is.true(allowIt) && this.#testingIt.allow();
  }
}
