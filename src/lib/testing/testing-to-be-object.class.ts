// Class.
import { TestingCore } from '../testing-core.abstract';
import { TestingDescribe } from '../testing-describe.class';
import { TestingExpect } from '../testing-expect.class';
import { TestingIt } from '../testing-it.class';
import { TestingItToBe } from '../it';
// Type.
import { CounterConfig, ExpectType } from '../../type';
// Interface.
import { ExecutableTests } from '../../interface/executable-tests.interface';
/**
 * Prepared simple tests.
 */
export class TestingToBeObject<
  Descriptions extends string = string,
  Expectations extends string = string
> extends TestingCore<
  Descriptions,
  Expectations
> {
  /**
   * 
   */
  protected toBe: TestingItToBe;

  /**
   * Simple `class` to support testing.
   * Creates an instance with setting for global allow executing of the `describe()` and `it()` methods,
   * and optionally sets the list of allowed executable tests (those that execute even on the disallowed state).
   * @param allowDescribe Allow executing `describe()` methods.
   * @param allowIt Allow executing `it()` methods.
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
    testingDescribe?: TestingDescribe,
    testingIt?: TestingIt,
    testingExpect?: TestingExpect
  ) {
    super(allowDescribe, allowIt, executable, counter, testingDescribe, testingIt, testingExpect);
    this.toBe = new TestingItToBe(
      allowDescribe,
      allowIt,
      executable,
      counter,
      testingDescribe,
      testingIt,
      testingExpect
    );
  }

  //#region toBeObject
  /**
   * 
   * @param actual 
   * @param expected 
   * @param expectation 
   * The `actual` value must be of `object` type or an instance of `Object`.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBeObject<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.toBe.object(actual, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param actual 
   * @param key 
   * @param expected 
   * @param expectation 
   * The `actual` value must be of `object` type or an instance of `Object` with a given `key`.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBeObjectKey<T>(
    actual: ExpectType<T>,
    key: PropertyKey,
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.toBe.objectKey(actual, key, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param actual 
   * @param key 
   * @param expected 
   * @param expectation 
   * The `actual` value must be of `object` type or an instance of `Object` with given `keys`.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBeObjectKeyIn<T>(
    actual: ExpectType<T>,
    key: PropertyKey,
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.toBe.objectKeyIn(actual, key, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param actual 
   * @param keys 
   * @param expected 
   * @param expectation 
   * The `actual` value must be of `object` type or an instance of `Object` with a given `key` in it(or its prototype chain).
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBeObjectKeys<T>(
    actual: ExpectType<T>,
    keys: PropertyKey[],
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.toBe.objectKeys(actual, keys, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param actual 
   * @param keys 
   * @param expected 
   * @param expectation 
   * The `actual` value must be of `object` type or an instance of `Object` with given `keys` in it(or its prototype chain).
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBeObjectKeysIn<T>(
    actual: ExpectType<T>,
    keys: PropertyKey[],
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.toBe.objectKeysIn(actual, keys, expected, expectation, expectationFailOutput, execute);
    return this;
  }

  /**
   * 
   * @param actual 
   * @param keys 
   * @param expected 
   * @param expectation 
   * The `actual` value must be of `object` type or an instance of `Object` with some given `keys`.
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public toBeObjectSomeKeys<T>(
    actual: ExpectType<T>,
    keys: PropertyKey[],
    expected?: jasmine.Expected<boolean>,
    expectation?: string,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.toBe.objectSomeKeys(actual, keys, expected, expectation, expectationFailOutput, execute);
    return this;
  }
  //#endregion
}
