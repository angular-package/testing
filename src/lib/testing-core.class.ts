// @angular-package/type.
import { is } from '@angular-package/type';
// Class.
import { TestingDescribe } from './testing-describe.class';
import { TestingExpectation } from './testing-expectation.class';
import { TestingIt } from './testing-it.class';
/**
 * Core object with describe and it instances.
 */
export abstract class TestingCore<
  Descriptions extends string = string,
  Expectations extends string = string
> {
  /**
   * 
   */
  public static expectation = {
    toBeArray: `The \`actual\` value must be \`array\` type or an instance of \`Array\`.`,

    toBeBigInt: `The \`actual\` value must be a \`bigint\` type.`,
    toBeBoolean: `The \`actual\` value must be of a \`boolean\` type or an instance of \`${Boolean.name}\`.`,
    toBeBooleanType: `The \`actual\` value must be of a \`boolean\` type.`,

    toBeClass: `The \`actual\` value must be a \`class\`.`,
    toBeCloseTo: `The \`actual\` value must be within a specified \`precision\` of the \`expected\` actual.`,

    toBeDate: `The \`actual\` value to be a \`date\`.`,
    toBeDefined: `The \`actual\` value must be defined.`,
  
    // false
    toBeFalse: `The \`actual\` value must be \`false\`.`,
    toBeFalsy: `The \`actual\` value must be falsy.`,
    toBeFunction: `The \`actual\` value must be \`function\`.`,
  
    // GreaterThan
    toBeGreaterThan: `The \`actual\` value to be greater than the \`expected\` value.`,
    toBeGreaterThanOrEqual: `The \`actual\` value to be greater than or equal to the \`expected\` value.`,
  
    // instance
    toBeInstance: `The \`actual\` value to be an instance of \`constructor\`.`,
    toBeInstanceOf: `The \`actual\` value must be an instance of \`expected\`.`,
    
    // InstanceOf
    toBeInstanceOfArray: `The \`actual\` value must be an instance of an \`${Array.name}\`.`,
    toBeInstanceOfBoolean: `The \`actual\` value must be an instance of \`${Boolean.name}\`.`,
    toBeInstanceOfDate: `The \`actual\` value must be an instance of \`${Date.name}\`.`,
    toBeInstanceOfError: `The \`actual\` value must be an instance of an \`${Error.name}\`.`,
    toBeInstanceOfFunction: `The \`actual\` value must be an instance of a \`${Function.name}\`.`,
    toBeInstanceOfMap: `The \`actual\` value must be an instance of a \`${Map.name}\`.`,
    toBeInstanceOfNumber: `The \`actual\` value must be an instance of a \`${Number.name}\`.`,
    toBeInstanceOfObject: `The \`actual\` value must be an instance of an \`${Object.name}\`.`,
    toBeInstanceOfPromise: `The \`actual\` value must be an instance of \`${Promise.name}\`.`,
    toBeInstanceOfRangeError: `The \`actual\` value must be an instance of \`${RangeError.name}\`.`,
    toBeInstanceOfReferenceError: `The \`actual\` value must be an instance of \`${ReferenceError.name}\`.`,
    toBeInstanceOfRegExp: `The \`actual\` value must be an instance of \`${RegExp.name}\`.`,
    toBeInstanceOfSet: `The \`actual\` value must be an instance of \`${Set.name}\`.`,
    toBeInstanceOfStorage: `The \`actual\` value must be an instance of \`${Storage.name}\`.`,
    toBeInstanceOfString: `The \`actual\` value must be an instance of a \`${String.name}\`.`,
    toBeInstanceOfSyntaxError: `The \`actual\` value must be an instance of \`${SyntaxError.name}\`.`,
    toBeInstanceOfTypeError: `The \`actual\` value must be an instance of \`${TypeError.name}\`.`,
    toBeInstanceOfURIError: `The \`actual\` value must be an instance of \`${URIError.name}\`.`,
    toBeInstanceOfWeakSet: `The \`actual\` value must be an instance of a \`${WeakSet.name}\`.`,
  
    //
    toBeKey: `The \`actual\` value to be a \`PropertyKey\`.`,

    // LessThan
    toBeLessThan: `The \`actual\` value to be less than the \`expected\` value.`,
    toBeLessThanOrEqual: `The \`actual\` value to be less than or equal to the \`expected\` value.`,
  
    toBeNaN: `The \`actual\` value to be NaN (Not a Number).`,
    toBeNegativeInfinity: `The \`actual\` value to be -Infinity (-infinity).`,
    toBeNull: `The \`actual\` value must be \`null\`.`,
    toBeNumber: `The \`actual\` value to be a \`number\` type or an instance of a \`${Number.name}\`.`,
    toBeNumberBetween: `The \`actual\` value to be a \`number\` type or an instance of \`${Number.name}\` between the range of \`min\` and \`max\`.`,
    toBeNumberType: `The \`actual\` value must be of a \`number\` type.`,

    // object
    toBeObject: `The \`actual\` value must be of \`object\` type or an instance of \`Object\`.`,
    toBeObjectKey: `The \`actual\` value must be of \`object\` type or an instance of \`Object\` with a given \`key\`.`,
    toBeObjectKeys: `The \`actual\` value must be of \`object\` type or an instance of \`Object\` with given \`keys\`.`,
    toBeObjectKeyIn: `The \`actual\` value must be of \`object\` type or an instance of \`Object\` with a given \`key\` in it(or its prototype chain).`,
    toBeObjectKeysIn: `The \`actual\` value must be of \`object\` type or an instance of \`Object\` with given \`keys\` in it(or its prototype chain).`,
    toBeObjectSomeKeys: `The \`actual\` value must be of \`object\` type or an instance of \`Object\` with some given \`keys\`.`,

    toBePending: ``,
    toBePositiveInfinity: `The \`actual\` value to be Infinity (infinity).`,

    toBeRegExp: `The \`actual\` value must be \`${RegExp.name}\`.`,
  
    // async
    toBeRejected: `Expect the \`actual\` value a promise to be rejected.`,
    toBeRejectedWith: `Expect the \`actual\` value a promise to be rejected with a value equal to the expected, using deep equality comparison.`,
    toBeRejectedWithError: `Expect the \`actual\` value a promise to be rejected with a value matched to the expected.`,
    toBeResolved: `Expect the \`actual\` value a promise to be resolved.`,
    toBeResolvedTo: `Expect the \`actual\` value a promise to be resolved to a value equal to the expected, using deep equality comparison.`,
  
    // string
    toBeString: `The \`actual\` value must be a \`string\` type or an instance of a \`String\`.`,
    toBeStringIncludes: `The \`actual\` value must be a \`string\` type or an instance of a \`String\` that includes the specified words/sentences.`,
    toBeStringIncludesSome: `The \`actual\` value must be a \`string\` type or an instance of a \`String\` that includes some of the specified words/sentences.`,
    toBeStringOfLength: `The \`actual\` value must be a \`string\` type or an instance of a \`String\` of the given \`length\`.`,
    toBeStringOfLengthBetween: `The \`actual\` value must be a \`string\` type or an instance of a \`String\` of the length between the given \`min\` and \`max\`.`,
    toBeStringType: `The \`actual\` value must be of a \`string\` type.`,

    // symbol
    toBeSymbol: `The \`actual\` value must be a \`symbol\`.`,

    // true
    toBeTrue: `The \`actual\` value must be a \`boolean\` type or an instance of \`Boolean\` equal to \`true\`.`,
    toBeTruthy: `The \`actual\` value to be truthy.`,

    toBeUndefined: `The \`actual\` value must be \`undefined\`.`,

    toContain: `The \`actual\` value to contain a specific value.`,
    toEqual: `The \`actual\` value to be equal to the \`expected\`, using deep equality comparison.`,
  
    // toHaveBeen
    toHaveBeenCalled: `The \`actual\` value (a Spy) to have been called.`,
    toHaveBeenCalledBefore: `The \`actual\` value (a Spy) to have been called before another Spy.`,
    toHaveBeenCalledOnceWith: `The \`actual\` value (a Spy) to have been called exactly once, and exactly with the particular arguments.`,
    toHaveBeenCalledTimes: `The \`actual\` value (a Spy) to have been called the specified number of times.`,
    toHaveBeenCalledWith: `The \`actual\` (a Spy) to have been called with particular arguments at least once.`,

    toHaveClass: `The \`actual\` value to be a DOM element that has the expected class.`,
    toHaveSize: `The \`actual\` size to be equal to the expected, using array-like length or object keys size.`,
    toHaveSpyInteractions: `The \`actual\` value (a SpyObj) spies to have been called.`,

    toMatch: `The \`actual\` value to match a regular expression.`,

    toThrow: `The \`actual\` value a function to throw something.`,
    toThrowError: `The \`actual\` value a function to throw an Error.`,
    toThrowMatching: `The \`actual\` value a function to throw something matching a predicate.`,
  };

  /**
   * 
   */
  public get expect(): TestingExpectation {
    return this.#expect;
  }

  /**
   * 
   */
  protected get testingDescribe() {
    return this.#testingDescribe;
  }

  /**
   * 
   */
  protected get testingIt() {
    return this.#testingIt;
  }

  /**
   * 
   */
  #expect = new TestingExpectation();

  /**
   * Privately stored instance of a `TestingDescribe`.
   */
  #testingDescribe = new TestingDescribe<Descriptions>();

  /**
   * Privately stored instance of a `TestingIt`.
   */
  #testingIt = new TestingIt<Expectations>();

  /**
   * Core object with describe and it instances.
   * @param allowDescribe Allows executing `describe()` methods from a child instance.
   * @param allowIt Allows executing `it()`  methods from a child instance.
   * @param executable An optional `object` of executable storage for `describe()` and `it()` methods.
   */
  constructor(allowDescribe: boolean, allowIt: boolean, executable?: {
    describe?: Array<number>,
    it?: Array<number>
  }) {
    if (is.defined(executable)) {
      is.array(executable.describe) && (this.#testingDescribe = new TestingDescribe(allowDescribe, executable.describe));
      is.array(executable.it) && (this.#testingIt = new TestingIt<Expectations>(allowIt, executable.it));
    }
    is.true(allowDescribe) && this.#testingDescribe.allow();
    is.true(allowIt) && this.#testingIt.allow();
  }

  /**
   * 
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
   * 
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
   * 
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
   * 
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
   * Executes defined `describe()` function of jasmine on provided state `true` from the `execute`, and resets the counter to `0`.
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
   * Executes defined `it()` function of jasmine on provided state `true` from the `execute`.
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
   * 
   * @param key 
   * @param value 
   * @returns 
   */
  public setSpecProperty(key: string, value: unknown) {
    setSpecProperty(key, value);
    return this;
  }

  /**
   * 
   * @param key 
   * @param value 
   * @returns 
   */
  public setSuiteProperty(key: string, value: unknown) {
    setSuiteProperty(key, value);
    return this;
  }

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
