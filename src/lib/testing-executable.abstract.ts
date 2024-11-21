// @angular-package/type.
import { is } from '@angular-package/type';
// Class.
import { TestingExecute } from './testing-execute.abstract';
// Type.
import { Executable } from '../type';
/**
 * Initialize executable storage.
 * @class
 * @classdesc Manages the `Set` executable tests storage of numbers.
 */
export abstract class TestingExecutable extends TestingExecute {
  /**
   * @description Returns the `Set` of unique numbers allowed to execute.
   */
  public get executable() {
    return this.#executable;
  }

  /**
   * @description An instance `Set` of unique numbers allowed to execute.
   */
  #executable: Set<number> = new Set();

  /**
   * @description Initializes the executable storage of unique numbers.
   * @param execute An optional parameter to set the initial execute state.
   * @param executable An optional `array` of unique numbers or `number` to populate the executable storage to execute.
   */
  constructor(
    execute?: boolean,
    executable?: Executable,
  ) {
    super(execute)
    is.defined(executable) && (this.#executable = new Set(!Array.isArray(executable) ? [executable] : executable));
  }

  /**
   * @description Checks whether the provided `uniqueNumber` exists in the executable storage.
   * @param uniqueNumber The number to check in the executable storage.
   * @returns The returned value is a `boolean` type indicating whether the provided `uniqueNumber` exists in the executable storage.
   */
  public isExecutable(uniqueNumber: number): boolean {
    return this.#executable.has(uniqueNumber);
  }
}
