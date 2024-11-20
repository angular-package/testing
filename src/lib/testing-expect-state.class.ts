/**
 * @class
 * @classdesc Manages state of `expect()` function of jasmine.
 */
export class TestingExpectState {
  /**
   * @description Returns the state of `already`.
   */
  public get already(): boolean {
    return this.#already;
  }

  /**
   * @description
   */
  public get clear() {
    return {
      already: (): this => {
        this.#already = false;
        return this;
      },
      not: (): this => {
        this.#not = false;
        return this;
      },
    }
  }

  /**
   * @description
   */
  public get set() {
    return {
      already: {
        true: (): this => {
          this.#already = true;
          return this;
        },
        false: (): this => {
          this.#already = false;
          return this;
        }
      },
      not: {
        true: (): this => {
          this.#not = true;
          return this;
        },
        false: (): this => {
          this.#not = false;
          return this;
        }
      }
    }
  }

  /**
   * @description Returns the state of `not`.
   */
  public get not(): boolean {
    return this.#not;
  }


  /**
   * @description 
   */
  #already = false;
 
  /**
   * @description Privately stored state of invert the matcher.
   */
  #not = false;

  /**
   * 
   * @returns 
   */
  public reset(): this {
    this.#already = false;
    this.#not = false;
    return this;
  }
}
