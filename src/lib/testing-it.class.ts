// @angular-package/type.
import { is } from '@angular-package/type';
// Class.
import { TestingCommon } from './testing-common.abstract';
// Type.
import { CounterConfig, Executable } from '../type';
/**
 * Creates an instance with optional allowed executing methods and executable storage.
 * @class
 * @classdesc Manages `it()` function of jasmine.
 */
export class TestingIt<
  Expectations extends string = string,
  CounterActive extends boolean = boolean,
  CounterDescription extends boolean = boolean
> extends TestingCommon<
  CounterActive,
  CounterDescription
> {
  /**
   * @description Defines the wrapper function for the `it()` function of jasmine with the ability to decide its execution.
   * @param expectation "Textual description of what this spec is checking"
   * @param assertion "Function that contains the code of your test. If not provided the test will be pending."
   * @param timeout "Custom timeout for an async spec."
   * @returns The return value is a `function` that contains the predefined `it()` function of jasmine with the
   * ability to decide its execution.
   */
  public static define(
    expectation: string,
    assertion: jasmine.ImplementationCallback,
    timeout?: number | undefined
  ) {
    return (execute: boolean = false) => is.true(execute)
      && is.function(assertion)
      && it(expectation, assertion, timeout)
  }

  /**
   * TODO: Add expectation to params.
   * @param execute An optional value of a `boolean` to initially allow executing `it()` methods.
   * @param executable An optional `array` of unique numbers type to initially set executable storage.
   * @param counter
   */
  constructor(
    execute?: boolean,
    executable?: Executable,
    counter?: CounterConfig<CounterActive, CounterDescription>
  ) {
    super(
      execute,
      executable,
      typeof counter === 'boolean' ? counter : counter?.active as any
    );
  }

  /**
   * @description
   * @param expectation 
   * @param assertion 
   * @param timeout 
   * @returns 
   */
  public fit<Expectation extends string>(
    expectation: Expectations | Expectation,
    assertion: jasmine.ImplementationCallback,
    timeout?: number
  ): this {
    super.counter.increment();
    fit(super.description.replace(expectation, `${super.counter.current}`), assertion, timeout);
    return this;
  }

  /**
   * @description Executes defined `it()` function of jasmine on provided state `true` from the `execute`.
   * @param expectation "Textual description of what this spec is checking" with an optional its unique number when adding `[counter]`.
   * @param assertion "Function that contains the code of your test. If not provided the test will be pending."
   * @param execute A `boolean` type value to decide whether or not execute defined `it()` of jasmine function.
   * @returns The return value is an instance of `TestingIt`.
   */
  public it<Expectation extends string>(
    expectation: Expectations | Expectation,
    assertion: jasmine.ImplementationCallback,
    execute: boolean = super.executable.size > 0
      ? is.true(super.allowed) && super.isExecutable(super.counter.current + 1)
      : true,
    timeout?: number
  ): this {
    super.counter.increment();
    TestingIt.define(super.description.replace(expectation, `${super.counter.current}`), assertion, timeout)(execute);
    return this;
  }

  /**
   * @description
   * @param expectation 
   * @param assertion 
   * @param timeout 
   * @returns 
   */
  public xit<Expectation extends string>(
    expectation: Expectations | Expectation,
    assertion: jasmine.ImplementationCallback,
    timeout?: number
  ): this {
    super.counter.increment();
    xit(super.description.replace(expectation, `${super.counter.current}`), assertion, timeout);
    return this;
  }
}
