// Class.
import { TestingActual } from "./testing-actual.class";
import { TestingDescribe } from './testing-describe.class';
import { TestingExpect } from "./testing-expect.class";
import { TestingIt } from "./testing-it.class";
import { TextualExpectation } from "./textual-expectation.abstract";
// Function.
import { mixinTests } from "./function";
// Type.
import { Constructor } from "@angular-package/type";
import { CounterConfig, Execute, InstanceTypes, TestingExpectations } from "../type";
// Interface.
import { TestingConfig, TestingInterface, Textual } from "../interface";
/**
 * @class
 * @classdesc
 */
export class TestingProxy<
  Tests extends Constructor<any>[] = [],
  Descriptions extends string = string,
  Expectations extends string = string,
> {
  //#region static methods
  //#region public
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
  //#endregion
  //#endregion

  //#region public getter
  public get executeDescribe() {
    return this._testing.describe.allowed;
  }

  public get executeIt() {
    return this._testing.it.allowed;
  }

  /**
   * @description
   */
  public get expect() {
    return this._tests.expectation;
  }

  /**
   * @description
   */
  public get tests() {
    return this._tests;
  }

  /**
   * @description
   */
  public get textual() {
    return this._textual;
  }


  //#endregion

  //#region protected property
  /**
   * @description
   * @protected
   */
  protected _testing;

  /**
   * @description
   * @protected
   */
  protected _tests;
  //#endregion

  //#region private property
  /**
   * @private
   */
  private _textual;
  //#endregion

  /**
   * @description
   * @param tests
   * @param execute
   * @param textual
   * @param counter
   * @param testing
   */
  constructor(
    tests: [...Tests],
    execute: Execute,

    // Textual.
    textual?: Textual<Descriptions, Expectations>,
  
    // Counter.
    counter?: CounterConfig,

    // Testing instances.
    testing?: TestingConfig<Descriptions, Expectations>
  ) {
    // Allow.
    const { describe: executeDescribe, it: executeIt } = {
      ...{describe: true, it: true},
      ...(typeof execute === 'boolean' ? {describe: execute, it: execute} : execute)
    };

    // Testing instances.
    this._testing = {
      ...{
        describe: new TestingDescribe(
          typeof executeDescribe === 'boolean' ? executeDescribe : true,
          typeof executeDescribe === 'number' || Array.isArray(executeDescribe) ? executeDescribe : undefined,
          counter
        ),
        it: new TestingIt(
          typeof executeIt === 'boolean' ? executeIt : true,
          typeof executeIt === 'number' || Array.isArray(executeIt) ? executeIt : undefined,
          counter
        ),
        expect: new TestingExpect()  
      },
      ...testing
    };

    //#region Assign.
    // Textual.
    this._textual = textual;
    
    // Tests.
    this._tests = new (mixinTests<Tests, Descriptions, Expectations>(...tests))(
      execute,
      counter,
      this._testing,
    );
    //#endregion

    //#region Proxy.
    // Proxy to delegate method calls to _testing
    return new Proxy(this as this & InstanceTypes<Tests>, {
      get(target: TestingProxy<Tests> & InstanceTypes<Tests>, prop: PropertyKey) {
        return prop in target ? (target as any)[prop] : (target as any)._tests[prop];
      },
    }) as this & TestingProxy<Tests> & InstanceTypes<Tests>;
    //#endregion
  }

  /**
   * @description
   * @param actual 
   * @param specDefinitions 
   * @returns 
   */
  // public actual<T>(
  //   actual: ExpectType<T>,
  //   specDefinitions: (test: TestingActual) => TestingActual
  // ): this {
  //   specDefinitions(new TestingActual(this.allowDescribe, this.allowIt).actual(actual));
  //   return this;
  // }

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
    this._tests.describe(description, specDefinitions, execute);
    return this;
  }

  /**
   * @description
   * @param description 
   * @param specDefinitions 
   * @returns 
   */
  public fdescribe<Description extends string>(
    description: Descriptions | Description,
    specDefinitions: () => any,
  ): this {
    this._tests.fdescribe(description, specDefinitions);
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
    this._tests.it(expectation, assertion, execute);
    return this;
  }

  /**
   * @description
   * @param key 
   * @param value 
   * @returns 
   */
  public setSpecProperty(key: string, value: unknown) {
    this._tests.setSpecProperty(key, value);
    return this;
  }

  /**
   * @description
   * @param key 
   * @param value 
   * @returns 
   */
  public setSuiteProperty(key: string, value: unknown) {
    this._tests.setSuiteProperty(key, value);
    return this;
  }

  /**
   * @description
   * @param assertion 
   * @param description 
   * @param execute 
   * @returns 
   */
  public spec(
    assertion: (
      // TestingExpectationType // UnionToIntersection<ExpectMethods<T[number]>> // GetExpectationsArray<InstanceType<T[number]>>
      expectation: TestingExpectations<Tests[number]>) => any, 
    description: string = '',
    execute?: boolean,
  ): this {
    if (description.length === 0) {
      Object
        .entries(TextualExpectation.message)
        .forEach(([name, message]) => assertion
          .toString()
          .includes(name) && (description += message.ok + " and ")
        );
      description = description.slice(0, -5);
    }
    this.it(
      description,
      () => assertion(this._tests.expectation),
      execute
    );
    return this;
  }

  /**
   * @description
   * @param spy 
   * @param specDefinitions 
   * @returns 
   */
  // public spy<T extends jasmine.Func>(
  //   spy: () => ExpectType<T>,
  //   specDefinitions: (test: TestingActual) => TestingActual
  // ): this {
  //   specDefinitions(new TestingActual(
  //     this.allowDescribe,
  //     this.allowIt,
  //     this.executable
  //   ).spy(spy));
  //   return this;
  // }

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
    this._tests.xdescribe(description, specDefinitions);
    return this;
  }
}

export const Testing = TestingProxy as TestingInterface;
