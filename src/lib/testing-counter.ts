/**
 * Counter for testing purposes.
 * @class
 * @classdesc
 */
export class TestingCounter<Active extends boolean = boolean> {
  /**
   * @description Status of counter.
   */
  public get active(): Active {
    return this.#active;
  }

  /**
   * @description Current counter value.
   * @readonly
   */
  public get current(): number {
    return this.#value;
  }

  /**
   * 
   */
  #active: Active = true as Active;

  /**
   * @description Privately stored counter, which by default is set to `0`.
   */
  #value = 0;

  /**
   * @constructor
   * @param active 
   */
  constructor(active?: Active,) {
    typeof active === 'boolean' && (this.#active = active);
  }

  /**
   * @description Gets the actual counter.
   */
  public get(): number {
    return this.#value;
  }

  /**
   * @description Increase the counter by `1`.
   * @returns The return value is an instance of a child class.
   */
  public increment(): this {
    this.#active && this.#value++;
    return this;
  }

  /**
   * @description Resets counter to `0`.
   * @returns The return value is an instance of a child class.
   */
  public reset(): this {
    this.#value = 0;
    return this;
  }

}
