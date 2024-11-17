/**
 * Counter for testing purposes.
 * @class
 * @classdesc
 */
export class TestingCounter<
  Active extends boolean = boolean,
  Description extends boolean = boolean
> {
  /**
   * @description Status of counter.
   */
  public get active() {
    return this.#active;
  }

  /**
   * @description Status of automatically joining `[counter]` in description.
   */
  public get description() {
    return this.#description;
  }

  /**
   * 
   */
  #active: Active = true as Active;

  /**
   * 
   */
  #description: Description = false as Description;

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
    active?: Active,
    description?: Description
  ) {
    typeof active === 'boolean' && (this.#active = active);
    typeof description === 'boolean' && (this.#description = description);
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
   * @description Gets the actual counter.
   */
  public get(): number {
    return this.#counter;
  }

  /**
   * @description
   * @param description 
   * @returns 
   */
  protected join<Description extends string>(description: Description): `[counter]. ${Description}` {
    return `[counter]. ${description}` as `[counter]. ${Description}`;
  }

  /**
   * @description Resets counter to `0`.
   * @returns The return value is an instance of a child class.
   */
  public reset(): this {
    this.#counter = 0;
    return this;
  }

  /**
   * @description Replaces `[counter]` in description method.
   * @param description A `string` type value.
   * @returns The return value is a `string` type description.
   */
  protected replace(description: string): string {
    return (this.#description
      ? this.join(description)
      : description).replace('[counter]', `${this.get()}`);
  }
}
