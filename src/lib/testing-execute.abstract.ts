// @angular-package/type.
import { is } from '@angular-package/type';
/**
 * Initialize execute state.
 * @class
 * @classdesc
 */
export abstract class TestingExecute {
  /**
   * @description
   */
  public get allowed() {
    return this.#execute;
  }

  /**
   * @description Privately stored execute state, which by default is set to `false`.
   */
  #execute = false;

  /**
   * @param execute
   */
  constructor(execute?: boolean) {
    this.#execute = is.boolean(execute) ? execute : this.#execute;
  }

  /**
   * @description Allows executing.
   */
  public allow(): this {
    this.#execute = true;
    return this;
  }

  /**
   * @description Disallows executing.
   */
  public disallow(): this {
    this.#execute = false;
    return this;
  }
}
