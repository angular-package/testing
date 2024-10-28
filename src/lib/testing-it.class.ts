// @angular-package/type.
import { is } from '@angular-package/type';
// Class.
import { TestingExecutable } from './testing-executable.abstract';
// Type.
import { CounterConfig } from '../type/counter-config.type';
// Interface.
import { ExecutableTests } from '../interface/executable-tests.interface';
/**
 * Creates an instance with optional allowed executing methods and executable storage.
 * @class
 * @classdesc Manages `it()` function of jasmine.
 */
export class TestingIt<
  Expectations extends string = string,
  CounterActive extends boolean = boolean,
  CounterDescription extends boolean = boolean
> extends TestingExecutable<
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
   * @description Privately stored allow state of executing `it()` methods, which by default is set to `false`.
   */
  #allow = false;

  /**
   * TODO: Add expectation to params.
   * @param allow An optional value of a `boolean` to initially allow executing `it()` methods.
   * @param executable An optional `array` of unique numbers type to initially set executable storage.
   * @param counter
   */
  constructor(
    allow?: boolean,
    executable?: ExecutableTests['it'],
    counter: CounterConfig<CounterActive, CounterDescription> = [true, false] as any
  ) {
    super(allow, executable, counter);
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
    execute: boolean = is.false(super.allowed)
      ? super.isExecutable(this.getCounter() + 1)
      : true,
    timeout?: number
  ): this {
    this.count();
    TestingIt.define(this.replaceCounter(expectation), assertion, timeout)(execute);
    return this;
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
    this.count();
    fit(this.replaceCounter(expectation), assertion, timeout);
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
    this.count();
    xit(this.replaceCounter(expectation), assertion, timeout);
    return this;
  }
}
