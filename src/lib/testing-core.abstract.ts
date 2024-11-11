// Class.
import { TestingDescribe } from './testing-describe.class';
import { TestingIt } from './testing-it.class';
// Interface.
import { ExecutableTests } from '../interface/executable-tests.interface';
// Type.
import { CounterConfig } from '../type/counter-config.type';
/**
 * @abstract
 * @class
 * @classdesc Core object with describe and it instances.
 */
export abstract class TestingCore<
  Descriptions extends string = string,
  Expectations extends string = string
> {
  /**
   * @description
   */
  public get testingDescribe() {
    return this.#testingDescribe;
  }

  /**
   * @description
   */
  public get testingIt() {
    return this.#testingIt;
  }

  /**
   * @description Privately stored instance of a `TestingDescribe`.
   */
  #testingDescribe: TestingDescribe<Descriptions>;

  /**
   * @description Privately stored instance of a `TestingIt`.
   */
  #testingIt: TestingIt<Expectations>;

  /**
   * @param allowDescribe Allows executing `describe()` methods from a child instance.
   * @param allowIt Allows executing `it()`  methods from a child instance.
   * @param executable An optional `object` of executable storage for `describe()` and `it()` methods.
   * @param counter
   * @param testingDescribe
   * @param testingIt
   * @param testingExpect
   */
  constructor(
    allowDescribe: boolean = true,
    allowIt: boolean = true,
    executable?: ExecutableTests,
    counter: CounterConfig = [true, false],
    // Replaces instances.
    testingDescribe: TestingDescribe<Descriptions> = new TestingDescribe<Descriptions>(
      allowDescribe,
      executable?.describe,
      counter
    ),
    testingIt: TestingIt<Expectations> = new TestingIt<Expectations>(
      allowIt,
      executable?.it,
      counter
    ),
  ) {
    this.#testingDescribe = testingDescribe;
    this.#testingIt = testingIt;
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
    this.testingIt.resetCounter();
    this.testingDescribe.describe(
      description,
      specDefinitions,
      execute
    );
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
    this.testingIt.resetCounter();
    this.testingDescribe.fdescribe(
      description,
      specDefinitions,
    );
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
    this.testingIt.it(expectation, assertion, execute);
    return this;
  }

  /**
   * @description
   * @param key 
   * @param value 
   * @returns 
   */
  public setSpecProperty(key: string, value: unknown) {
    setSpecProperty(key, value);
    return this;
  }

  /**
   * @description
   * @param key 
   * @param value 
   * @returns 
   */
  public setSuiteProperty(key: string, value: unknown) {
    setSuiteProperty(key, value);
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
    this.testingIt.resetCounter();
    this.testingDescribe.xdescribe(
      description,
      specDefinitions,
    );
    return this;
  }
}
