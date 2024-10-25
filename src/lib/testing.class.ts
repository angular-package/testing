// Function.
import { mixin } from './function/mixin.func';
// Interface.
import { ExecutableTests } from '../interface/executable-tests.interface';
// Testing.
import {
  TestingToBeArrayOf,
  TestingToBeBoolean,
  TestingToBeGreaterThan,
  TestingToBeInstanceOf,
  TestingToBeLessThan,
  TestingToBeNumber,
  TestingToBeObject,
  TestingToBeString,
  TestingToBe,
  TestingToHave,
  TestingToThrow,
  TestingTo,
} from './testing';
import { ExpectType } from '../type';
import { TestingActual } from './testing-actual.class';
import { TestingCore } from './testing-core.class';
import { TestingDescribe } from './testing-describe.class';
import { TestingExpectation } from './testing-expectation.class';
import { TestingIt } from './testing-it.class';

export class Testing<
  Descriptions extends string = string,
  Expectations extends string = string
> extends mixin(
  TestingToBeArrayOf,
  TestingToBeBoolean,
  TestingToBeGreaterThan,
  TestingToBeInstanceOf,
  TestingToBeLessThan,
  TestingToBeNumber,
  TestingToBeObject,
  TestingToBeString,
  TestingToBe,
  TestingToHave,
  TestingToThrow,
  TestingTo
) {
  /**
   * @description Defines the wrapper function of the `describe()` function of jasmine with the ability to decide its execution.
   * @param description "Textual description of the group"
   * @param specDefinitions "Function for Jasmine to invoke that will define"
   * @returns The return value is a `function` that contains the `describe()` function of jasmine with the ability to decide its execution.
   */
  public static defineDescribe(
    description: string,
    specDefinitions: () => void
  ): (execute: boolean) => void {
    return TestingDescribe.define(description, specDefinitions);
  }

  /**
   * @description Defines the wrapper function of the `it()` function of jasmine with the ability to decide its execution.
   * @param expectation "Textual description of what this spec is checking"
   * @param assertion "Function that contains the code of your test. If not provided the test will be pending."
   * @param timeout "Custom timeout for an async spec."
   * @returns The return value is a `function` that contains the `it()` function of jasmine with the ability to decide its execution.
   */
  public static defineIt(
    expectation: string,
    assertion: jasmine.ImplementationCallback,
    timeout?: number | undefined
  ): (execute: boolean) => void {
    return TestingIt.define(expectation, assertion, timeout);
  }

  /**
   * @description
   */
  public get expect() {
    return this.main.expect;
  }

  /**
   * 
   */
  protected main;

  /**
   * @description
   * @param allowDescribe 
   * @param allowIt 
   * @param executable 
   */
  constructor(
    allowDescribe: boolean,
    allowIt: boolean,
    executable?: ExecutableTests
  ) {
    super(allowDescribe, allowIt, executable);
    // this.itTo = new TestingItTo(allowDescribe, allowIt, executable);
    this.main = new (class<
      Descriptions extends string = string,
      Expectations extends string = string
    > extends TestingCore<
      Descriptions,
      Expectations
    > {})<Descriptions, Expectations>(allowDescribe, allowIt, executable);
  }

  /**
   * @description
   * @param actual 
   * @param specDefinitions 
   * @returns 
   */
  public actual<T>(
    actual: ExpectType<T>,
    specDefinitions: (test: TestingActual) => TestingActual
  ): this {
    specDefinitions(new TestingActual(true, true).actual(actual));
    return this;
  }

  /**
   * @description
   * @param action 
   * @param timeout 
   * @returns 
   */
  public afterAll(
    action: jasmine.ImplementationCallback,
    timeout?: number,
    execute: boolean = true
  ): this {
    (execute => execute && afterAll(action, timeout))(execute);
    return this;
  }

  /**
   * @description
   * @param action 
   * @param timeout 
   * @returns 
   */
  public afterEach(
    action: jasmine.ImplementationCallback,
    timeout?: number,
    execute: boolean = true
  ): this {
    (execute => execute && afterEach(action, timeout))(execute);
    return this;
  }

  /**
   * @description
   * @param action 
   * @param timeout 
   * @returns 
   */
  public beforeAll(
    action: jasmine.ImplementationCallback,
    timeout?: number,
    execute: boolean = true
  ): this {
    (execute => execute && beforeAll(action, timeout))(execute);
    return this;
  }

  /**
   * @description
   * @param action 
   * @param timeout 
   * @returns 
   */
  public beforeEach(
    action: jasmine.ImplementationCallback,
    timeout?: number,
    execute: boolean = true
  ): this {
    (execute => execute && beforeEach(action, timeout))(execute);
    return this;
  }

  /**
   * @description Executes defined `describe()` function of jasmine on provided state `true` from the `execute`, and resets the counter to `0`.
   * @param description "Textual description of the group" with an optional defined prefix indicating its unique number
   * inside the describe.
   * @param specDefinitions "Function for Jasmine to invoke that will define inner suites a specs"
   * @param execute A `boolean` type value to decide whether or not execute defined `describe()` of jasmine function.
   * @returns The return value is an instance of a child class.
   */
  public describe<Description extends string>(
    description: Descriptions | Description,
    specDefinitions: () => any,
    execute?: boolean
  ): this {
    this.main.describe(description, specDefinitions, execute);
    return this;
  }

  public fdescribe<Description extends string>(
    description: Descriptions | Description,
    specDefinitions: () => any,
  ): this {
    this.main.fdescribe(description, specDefinitions);
    return this;
  }

  /**
   * @description Executes defined `it()` function of jasmine on provided state `true` from the `execute`.
   * @param expectation "Textual description of what this spec is checking" with an optional its unique number when adding `[counter]`.
   * @param assertion "Function that contains the code of your test. If not provided the test will be pending."
   * @param execute A `boolean` type value to decide whether or not execute defined `it()` of jasmine function.
   * @returns The return value is an instance of a child class.
   */
  public it<Expectation extends string>(
    expectation: Expectations | Expectation,
    assertion: jasmine.ImplementationCallback,
    execute?: boolean
  ): this {
    this.main.it(expectation, assertion, execute);
    return this;
  }

  /**
   * @description
   * @param key 
   * @param value 
   * @returns 
   */
  public setSpecProperty(key: string, value: unknown) {
    this.main.setSpecProperty(key, value);
    return this;
  }

  /**
   * @description
   * @param key 
   * @param value 
   * @returns 
   */
  public setSuiteProperty(key: string, value: unknown) {
    this.main.setSuiteProperty(key, value);
    return this;
  }

  /**
   * @description
   * @param assertion 
   * @param description 
   * @param execute 
   * @returns 
   */
  public spec<T>(
    assertion: (expectation: TestingExpectation) => any,
    description: string = '',
    execute?: boolean,
  ): this {
    this.main.spec(assertion, description, execute);
    return this;
  }

  /**
   * @description
   * @param spy 
   * @param specDefinitions 
   * @returns 
   */
  public spy<T extends jasmine.Func>(
    spy: () => ExpectType<T>,
    specDefinitions: (test: TestingActual) => TestingActual
  ): this {
    specDefinitions(new TestingActual(true, true).spy(spy));
    return this;
  }

  /**
   * @description
   * @param description 
   * @param specDefinitions 
   * @returns 
   */
  public xdescribe<Description extends string>(
    description: Descriptions | Description,
    specDefinitions: () => any,
  ): this {
    this.main.xdescribe(description, specDefinitions);
    return this;
  }
}
