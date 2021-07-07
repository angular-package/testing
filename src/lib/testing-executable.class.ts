// @angular-package/type.
import { guard, is } from '@angular-package/type';
// Class.
import { TestingCounter } from './testing-counter.class';
/**
 * Manages the storage of executable tests.
 */
export class TestingExecutable extends TestingCounter {
  /**
   * An instance `Set` of unique numbers with allowed tests to execute.
   */
  #executable: Set<number> = new Set();

  /**
   * Manages the storage of executable tests.
   * Initialize executable storage.
   * @param executable An optional `array` of unique numbers type to initially set executable storage.
   */
  constructor(executable?: Array<number>) {
    super();
    if (is.defined(executable)) {
      if (guard.array(executable)) {
        this.#executable = new Set(executable);
      }
    }
  }

  /**
   * Returns the result of the check if the provided `num` or actual `counter` is in the executable storage.
   * @returns The return value is a `boolean` type indicating whether or not the provided `num` or
   * actual stored number from the `counter` exists in the executable storage.
   */
  public isExecutable(uniqueNumber?: number): boolean {
    return this.#executable.has(is.number(uniqueNumber) ? uniqueNumber : this.getCounter());
  }
}
