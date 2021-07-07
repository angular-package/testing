/**
 * Counter for testing purposes.
 */
export abstract class TestingCounter {
  /**
   * Privately stored counter, which by default is set to `0`.
   */
  #counter = 0;

  /**
   * Adds one number to the counter.
   * @returns The return value is an instance of a child class.
   */
  protected count(): this {
    this.#counter++;
    return this;
  }

  /**
   * Resets counter to `0`.
   * @returns The return value is an instance of a child class.
   */
  public resetCounter(): this {
    this.#counter = 0;
    return this;
  }

  /**
   * Gets the actual counter.
   */
  protected getCounter(): number {
    return this.#counter;
  }
}
