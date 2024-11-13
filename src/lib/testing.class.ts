// Abstract.
import { TestingCore } from "./testing-core.abstract";
// Class.
import { TestingActual } from "./testing-actual.class";
import { TestingDescribe } from './testing-describe.class';
import { TestingExpect } from "./testing-expect.class";
import { TestingExpectationProxy } from "./testing-expectation.class";
import { TestingIt } from "./testing-it.class";
import { TextualExpectation } from "./textual-expectation.abstract";
// Function.
import { mixinTesting } from "./function";
// Type.
import { Constructor } from "@angular-package/type";
import { CounterConfig, InstanceTypes } from "../type";
// Interface.
import { ExecutableTests, TestingInterface } from "../interface";
/**
 * @class
 * @classdesc
 */
export class TestingProxy<
  T extends Constructor<any>[] = [],
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
  public get allowDescribe() {
    return this.testingCore.testingDescribe.allowed;
  }

  public get allowIt() {
    return this.testingCore.testingIt.allowed;
  }

  /**
   * @description
   */
  public get descriptions() {
    return this._descriptions;
  }

  /**
   * @description
   */
  public get expect() {
    return (this._testing as any).expectation;
  }

  /**
   * @description
   */
  public get expectations() {
    return this._expectations;
  }

  /**
   * @description
   */
  public get test() {
    return this._testing;
  }
  //#endregion

  //#region protected property
  /**
   * @protected
   */
  // protected allowDescribe: boolean;

  /**
   * @protected
   */
  // protected allowIt: boolean;

  /**
   * @protected
   */
  // protected executable?: ExecutableTests;

  /**
   * @protected
   */
  protected testingCore;
  //#endregion

  //#region private property
  /**
   * @private
   */
  private _descriptions;

  /**
   * @private
   */
  private _expectations;

  /**
   * @private
   */
  private _testing;
  //#endregion

  /**
   * @description
   * @param tests
   * @param allow
   * @param executable 
   * @param descriptions
   * @param expectations
   * @param counter
   * @param testing
   */
  constructor(
    tests: [...T],
    allow: boolean | { describe?: boolean, it?: boolean } = true,
    executable?: ExecutableTests,

    // Textual.
    textual?: {
      descriptions?: Descriptions | Descriptions[],
      expectations?: Expectations | Expectations[],  
    },
  
    // Counter.
    counter: CounterConfig = [true, false],

    // Testing instances.
    testing?: {
      describe: TestingDescribe<Descriptions>,
      it: TestingIt<Expectations>,
      expect: TestingExpect
    }
  ) {
    // Allow.
    const { describe: allowDescribe, it: allowIt } = {
      ...{describe: true, it: true},
      ...(typeof allow === 'boolean' ? {describe: allow, it: allow} : allow)
    };

    // Textual.
    const { descriptions: descriptions, expectations: expectations } = {
      ...{descriptions: [], expectations: []},
      ...textual
    };

    // Testing instances.
    testing = {
      ...{
        describe: new TestingDescribe(allowDescribe, executable?.describe, counter),
        it: new TestingIt(allowIt, executable?.it, counter),
        expect: new TestingExpect()  
      },
      ...testing
    };

    //#region Assign.
    // Textual.
    this._descriptions = descriptions;
    this._expectations = expectations;

    // Tests.
    this._testing = new (mixinTesting(...tests))(
      allow,
      executable,
      counter,
      testing,
    );

    // Class to handle core features.
    this.testingCore = new (class<
      Descriptions extends string = string,
      Expectations extends string = string
    > extends TestingCore<
      Descriptions,
      Expectations
    > {})<Descriptions, Expectations>(
      allow,
      executable,
      counter,
      testing
    );
    //#endregion

    //#region Proxy.
    // Proxy to delegate method calls to _testing
    return new Proxy(this as this & InstanceTypes<T>, {
      get(target: TestingProxy<T> & InstanceTypes<T>, prop: PropertyKey) {
        return prop in target ? (target as any)[prop] : (target as any)._testing[prop];
      },
    }) as this & TestingExpectationProxy<T> & InstanceTypes<T>;
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
    this.testingCore.describe(description, specDefinitions, execute);
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
    this.testingCore.fdescribe(description, specDefinitions);
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
    this.testingCore.it(expectation, assertion, execute);
    return this;
  }

  /**
   * @description
   * @param key 
   * @param value 
   * @returns 
   */
  public setSpecProperty(key: string, value: unknown) {
    this.testingCore.setSpecProperty(key, value);
    return this;
  }

  /**
   * @description
   * @param key 
   * @param value 
   * @returns 
   */
  public setSuiteProperty(key: string, value: unknown) {
    this.testingCore.setSuiteProperty(key, value);
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
    assertion: (expectation: TestingExpectationProxy<T> & InstanceTypes<T>) => any,
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
      () => assertion(this.expect),
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
    this.testingCore.xdescribe(description, specDefinitions);
    return this;
  }
}

export const Testing = TestingProxy as TestingInterface;
