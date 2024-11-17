/**
 * Description for testing purposes.
 * @class
 * @classdesc
 */
export class TestingDescription<
  Active extends boolean = boolean
> {
  /**
   * @static
   */
  public static template = '[counter]';

  /**
   * @description Status of automatically joining template in description.
   */
  public get active(): boolean {
    return this.#active;
  }

  /**
   * @private
   */
  #active: Active = false as Active;

  /**
   * @private
   */
  #template = TestingDescription.template;

  /**
   * @param active Whether to automatically join `[counter]` in description.
   */
  constructor(
    active?: Active,
    template?: string
  ) {
    typeof active === 'boolean' && (this.#active = active);
    typeof template === 'string' && (this.#template = template);
  }

  /**
   * @description Replaces `TestingDescription.template` in `description`.
   * @param description A `string` type value.
   * @returns The returned value is a `string` type `description`.
   */
  public replace(
    description: string,
    replacement: string,
    replace: string = TestingDescription.template,
  ): string {
    return (this.#active
      ? this.join(description)
      : description).replace(replace, `${replacement}`);
  }

  /**
   * @description
   * @param description 
   * @returns 
   */
  protected join<Description extends string>(description: Description): string {
    return `${TestingDescription.template}. ${description}`;
  }
}
