// @angular-package/type.
import { is } from '@angular-package/type';
// Class.
import { TestingCommon } from './testing-common.abstract';
// Type.
import { CounterConfig, Executable } from '../type';
/**
 * Initialize the`TestingDescribe` instance.
 * @class
 * @classdesc Manages `describe()` function of jasmine.
 */
export class TestingDescribe<
  Descriptions extends string = string,
  CounterActive extends boolean = boolean,
  CounterDescription extends boolean = boolean,
> extends TestingCommon<
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
   * @param execute An optional value of a `boolean` whether to execute `describe()` methods.
   * @param executable An optional `array` of unique numbers type to initially set executable `describe()` methods of counter numbers.
   * @param counter
   */
  constructor(
    execute?: boolean,
    executable?: Executable,
    counter?: CounterConfig<CounterActive, CounterDescription>,
  ) {
    super(
      execute,
      executable,
      typeof counter === 'boolean' ? counter : counter?.active as any
    );
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
    execute: boolean = super.executable.size > 0
      ? is.true(this.allowed) && super.isExecutable(super.counter.current + 1)
      : true
  ): this {
    super.counter.increment();
    TestingDescribe.define(
      super.description.replace(description, `${super.counter.current}`),
      specDefinitions
    )(execute);
    return this;
  }
  public fdescribe<Description extends string>(
    description: Descriptions | Description,
    specDefinitions: () => void,
  ): this {
    super.counter.increment();
    fdescribe(super.description.replace(description, `${super.counter.current}`), specDefinitions);
    return this;
  }
  public xdescribe<Description extends string>(
    description: Descriptions | Description,
    specDefinitions: () => void,
  ): this {
    super.counter.increment();
    xdescribe(super.description.replace(description, `${super.counter.current}`), specDefinitions);
    return this;
  }
}
