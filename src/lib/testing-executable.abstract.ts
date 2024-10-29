// @angular-package/type.
import { is } from '@angular-package/type';
// Class.
import { TestingCounter } from './testing-counter.abstract';
// Type.
import { AllowItNumber, CounterConfig } from '../type';
/**
 * Initialize executable storage.
 * @class
 * @classdesc Manages the `Set` storage of executable tests.
 */
export abstract class TestingExecutable<
  CounterActive extends boolean = boolean,
  CounterDescription extends boolean = boolean,
> extends TestingCounter<
  CounterActive,
  CounterDescription
> {
  /**
   * @description
   */
  public get allowed() {
    return this.#allow;
  }

  /**
   * @description Executables.
   */
  public get executable() {
    return this.#executable;
  }

  /**
   * @description Privately stored allow state of executing `describe)` method, which by default is set to `false`.
   */
  #allow = false;

  /**
   * @description An instance `Set` of unique numbers with allowed tests to execute.
   */
  #executable: Set<number> = new Set();

  /**
   * @description Initialize executable storage.
   * @param executable An optional `array` of unique numbers type to initially set executable storage.
   */
  constructor(
    allow?: boolean,
    executable?: AllowItNumber,
    counter: CounterConfig<CounterActive, CounterDescription> = [true, false] as any
  ) {
    super(...(typeof counter === 'boolean' ? [counter, counter] : counter) as any);
    this.#allow = is.boolean(allow) ? allow : this.#allow;
    is.defined(executable) && (this.#executable = new Set(!Array.isArray(executable) ? [executable] : executable));
  }

  /**
   * @description Allows executing `describe()` methods.
   * @returns The return value is an instance of `TestingDescribe`.
   */
  public allow(): this {
    this.#allow = true;
    return this;
  }

  /**
   * @description Disallows executing `describe()` methods, which means only those specified in the executable storage can be executed.
   * @returns The return value is an instance of `TestingDescribe`.
   */
  public disallow(): this {
    this.#allow = false;
    return this;
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
