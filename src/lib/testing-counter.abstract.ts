/**
 * Counter for testing purposes.
 * @class
 * @classdesc
 */
export abstract class TestingCounter<
  Active extends boolean = boolean,
  Description extends boolean = boolean
> {
  /**
   * @description Status of activated counter.
   */
  public get counterActive() {
    return this.#active;
  }

  /**
   * @description Status of automatically joined `[counter]` in description.
   */
  public get counterDescription() {
    return this.#description;
  }

  /**
   * 
   */
  #active: Active;

  /**
   * 
   */
  #description: Description;

  /**
   * @description Privately stored counter, which by default is set to `0`.
   */
  #counter = 0;

  /**
   *
   * @param active 
   * @param description Whether to automatically join `[counter]` in description.
   */
  constructor(
    active: Active = true as Active,
    description: Description = false as Description
  ) {
    this.#active = active;
    this.#description = description;
  }

  /**
   * @description Adds one number to the counter.
   * @returns The return value is an instance of a child class.
   */
  protected count(): this {
    this.#active && this.#counter++;
    return this;
  }

  /**
   * @description Resets counter to `0`.
   * @returns The return value is an instance of a child class.
   */
  public resetCounter(): this {
    this.#counter = 0;
    return this;
  }

  /**
   * @description Gets the actual counter.
   */
  public getCounter(): number {
    return this.#counter;
  }

  /**
   * @description
   * @param description 
   * @returns 
   */
  protected joinCounter<Description extends string>(description: Description): `[counter]. ${Description}` {
    return `[counter]. ${description}` as `[counter]. ${Description}`;
  }

  /**
   * @description Replaces `[counter]` in description method.
   * @param description A `string` type value.
   * @returns The return value is a `string` type description.
   */
  protected replaceCounter(description: string): string {
    return (this.#description
      ? this.joinCounter(description)
      : description).replace('[counter]', `${this.getCounter()}`);
  }
}
