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
   * @description Executables.
   */
  public get executable() {
    return this.#executable;
  }

  /**
   * @description An instance `Set` of unique numbers allowed to execute.
   */
  #executable: Set<number> = new Set();

  /**
   * @description Initialize executable storage of numbers.
   * @param execute
   * @param executable An optional `array` of unique numbers or `number` to execute.
   */
  constructor(
    execute?: boolean,
    executable?: Executable,
  ) {
    super(execute)
    is.defined(executable) && (this.#executable = new Set(!Array.isArray(executable) ? [executable] : executable));
  }

  /**
   * @description Returns the result of the check if the provided `num` or actual `counter` is in the executable storage.
   * @returns The return value is a `boolean` type indicating whether or not the provided `num` or
   * actual stored number from the `counter` exists in the executable storage.
   */
  public isExecutable(uniqueNumber: number): boolean {
    return this.#executable.has(uniqueNumber);
  }
}
