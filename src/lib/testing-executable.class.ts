// @angular-package/type.
import { guard, is } from '@angular-package/type';
// Class.
import { TestingCounter } from './testing-counter.class';
// Type.
import { CounterConfig } from '../type/counter-config.type';
/**
 * Initialize executable storage.
 * @class
 * @classdesc Manages the `Set` storage of executable tests.
 */
export class TestingExecutable<
  CounterActive extends boolean = boolean,
  CounterDescription extends boolean = boolean,
> extends TestingCounter<
  CounterActive,
  CounterDescription
> {
  /**
   * @description An instance `Set` of unique numbers with allowed tests to execute.
   */
  #executable: Set<number> = new Set();

  /**
   * @description Initialize executable storage.
   * @param executable An optional `array` of unique numbers type to initially set executable storage.
   */
  constructor(
    executable?: Array<number>,
    counter: CounterConfig<CounterActive, CounterDescription> = [true, false] as any
  ) {
    super(...(typeof counter === 'boolean' ? [counter, counter] : counter) as any);
    is.defined(executable)
      && guard.array(executable)
      && (this.#executable = new Set(executable));
  }

  /**
   * @description Returns the result of the check if the provided `num` or actual `counter` is in the executable storage.
   * @returns The return value is a `boolean` type indicating whether or not the provided `num` or
   * actual stored number from the `counter` exists in the executable storage.
   */
  public isExecutable(uniqueNumber?: number): boolean {
    return this.#executable.has(is.number(uniqueNumber) ? uniqueNumber : this.getCounter());
  }
}
