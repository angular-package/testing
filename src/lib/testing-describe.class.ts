// @angular-package/type.
import { is } from '@angular-package/type';
// Class.
import { TestingExecutable } from './testing-executable.abstract';
// Type.
import { CounterConfig } from '../type/counter-config.type';
/**
 * Initialize executable storage.
 * @class
 * @classdesc Manages `describe()` function of jasmine.
 */
export class TestingDescribe<
  Descriptions extends string = string,
  CounterActive extends boolean = boolean,
  CounterDescription extends boolean = boolean,
> extends TestingExecutable<
  CounterActive,
  CounterDescription
> {
  /**
   * @description Defines the wrapper function for the `describe()` function of jasmine with the ability to decide its execution.
   * @param description "Textual description of the group" with a defined prefix indicating its unique number.
   * @param specDefinitions "Function for Jasmine to invoke that will define"
   * @returns The return value is a `function` that contains `describe()` of jasmine with the ability to decide of its execution.
   */
  public static define(
    description: string,
    specDefinitions: () => void
  ): (execute: boolean) => void {
    return (execute: boolean = false) => is.true(execute)
      && describe(description, specDefinitions);
  }

  /**
   * @description Privately stored allow state of executing `describe)` method, which by default is set to `false`.
   */
  #allow = false;

  /**
   * @allow An optional value of a `boolean` to initially allow executing `describe()` methods.
   * @param executable An optional `array` of unique numbers type to initially set executable storage.
   * @param counter
   */
  constructor(
    allow?: boolean,
    executable?: Array<number>,
    counter: CounterConfig<CounterActive, CounterDescription> = [true, false] as any
  ) {
    super(executable, counter);
    this.#allow = is.boolean(allow) ? allow : this.#allow;
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
   * @description Executes defined `describe()` function of jasmine on provided state `true` from the `execute`.
   * @param description "Textual description of the group" with an optional its unique number when adding `[counter]`.
   * @param specDefinitions "Function for Jasmine to invoke that will define inner suites a specs"
   * @param execute A `boolean` type value to decide whether or not execute defined `describe()` of jasmine function.
   * @returns The return value is an instance of `TestingDescribe`.
   */
  public describe<Description extends string>(
    description: Descriptions | Description,
    specDefinitions: () => void,
    execute: boolean = is.false(this.#allow)
      ? this.isExecutable(this.getCounter() + 1)
      : true
  ): this {
    this.count();
    TestingDescribe.define(
      this.replaceCounter(description),
      specDefinitions
    )(execute);
    return this;
  }

  public fdescribe<Description extends string>(
    description: Descriptions | Description,
    specDefinitions: () => void,
  ): this {
    this.count();
    fdescribe(this.replaceCounter(description), specDefinitions);
    return this;
  }

  public xdescribe<Description extends string>(
    description: Descriptions | Description,
    specDefinitions: () => void,
  ): this {
    this.count();
    xdescribe(this.replaceCounter(description), specDefinitions);
    return this;
  }
}
