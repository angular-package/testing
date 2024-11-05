// Class.
import { TestingCore } from '../testing-core.abstract';
import { TestingDescribe } from '../testing-describe.class';
import { TestingExpectation } from '../testing-expectation.class';
import { TestingIt } from '../testing-it.class';
import { TestingItToBeArrayOf } from './testing-it-to-be-arrayof.class';
import { TestingItToBeBoolean } from './testing-it-to-be-boolean.class';
import { TestingItToBeInstanceOf } from './testing-it-to-be-instanceof.class';
import { TextualExpectation } from '../textual-expectation.abstract';
// Type.
import { Constructor } from '@angular-package/type';
import { ExpectType, CounterConfig } from '../../type';
// Interface.
import { ExecutableTests } from '../../interface/executable-tests.interface';
/**
 * @class
 * @classdesc Prepared tests `it` of "toBe".
 * @license MIT
 */
export class TestingItToBe<
  Descriptions extends string = string,
  Expectations extends string = string
> extends TestingCore<
  Descriptions,
  Expectations
> {
  /**
   * @description 
   */
  public get arrayof() {
    return this.#toBeArrayOf;
  }

  /**
   * @description 
   */
  public get boolean() {
    return this.#toBeBoolean;
  }

  /**
   * @description 
   */
  public get instanceof() {
    return this.#toBeInstanceOf;
  }

  // TODO: Check.
  // private executable?

  /**
   * 
   */
  #toBeArrayOf: TestingItToBeArrayOf;

  /**
   * 
   */
  #toBeBoolean: TestingItToBeBoolean;

  /**
   * 
   */
  #toBeInstanceOf: TestingItToBeInstanceOf;

  /**
   * 
   * @param allowDescribe 
   * @param allowIt 
   * @param executable 
   */
  constructor(
    allowDescribe: boolean,
    allowIt: boolean,
    executable?: ExecutableTests,
    counter: CounterConfig = [true, false],
    testingDescribe: TestingDescribe = new TestingDescribe(allowDescribe, executable?.describe, counter),
    testingIt: TestingIt = new TestingIt(allowIt, executable?.it, counter),
    testingExpectation: TestingExpectation = new TestingExpectation()
  ) {
    super(allowDescribe, allowIt, executable, counter, testingDescribe, testingIt, testingExpectation);
    this.#toBeArrayOf = new TestingItToBeArrayOf(allowDescribe, allowIt, executable, counter, testingDescribe, testingIt, testingExpectation);
    this.#toBeBoolean = new TestingItToBeBoolean(allowDescribe, allowIt, executable, counter, testingDescribe, testingIt, testingExpectation);
    this.#toBeInstanceOf = new TestingItToBeInstanceOf(allowDescribe, allowIt, executable, counter, testingDescribe, testingIt, testingExpectation);
  }

  //#region toBe
  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be the given `expected` value.
   * "Expect the actual value to be === to the expected value."
   * @param actual The value of any type passed to the `expect()` function of jasmine.
   * @param expected The value of any type passed to the `toBe()` method of jasmine. "The expected value to compare against."
   * @param not Invert the matcher following this expectation.
   * @param expectation "Textual description of what this spec is checking" with an optional its unique `number` when adding `[counter]`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed. By default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public be<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<typeof actual>,
    not: boolean = false,
    expectation: string,
    expectationFailOutput?: any,
    execute?: boolean
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe(not).be(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `array` type on the `expected` of
   * `true`. The method uses `isArray()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be `array` type or an instance of `Array`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public array<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeArray'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().array(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `bigint` type on the `expected` of
   * `true`. The method uses `isBigInt()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be a `bigint` type.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public bigInt<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeBigInt'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().bigint(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `class`
   * on the `expected` of `true`. The method uses `isClass()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be a `class`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public class<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeClass'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().class(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description 
   * @param actual 
   * @param expected 
   * @param precision 
   * @param expectation 
   * @param expectationFailOutput 
   * @param execute 
   * @returns 
   */
  public closeTo<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    precision?: any,
    not?: boolean,
    expectation: string = TextualExpectation.get('toBeCloseTo'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe(not).closeTo(actual, expected, precision, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `date`
   * on the `expected` of `true`. The method uses `isDate()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value to be a `date`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public date<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeDate'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().date(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  public defined<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    not?: boolean,
    expectation: string = TextualExpectation.get('toBeDefined'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe(not).defined(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  public false<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeFalse'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().false(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  public falsy<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeFalsy'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().falsy(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `function`
   * on the `expected` of `true`. The method uses `isFunction()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be defined.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public function<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeFunction'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().function(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  //#region toBeGreaterThan
  // TODO: Description.
  public greaterThan<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    not?: boolean,
    expectation: string = TextualExpectation.get('toBeGreaterThan'), 
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe(not).greaterThan(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  // TODO: Description.
  public greaterThanOrEqual<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    not?: boolean,
    expectation: string = TextualExpectation.get('toBeGreaterThanOrEqual'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe(not).greaterThanOrEqual(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  //#endregion

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a instance of `constructor`
   * on the `expected` of `true`. The method uses `isInstance()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param constructor 
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value to be an instance of `constructor`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public instance<T, Type>(
    actual: ExpectType<T>,
    constructor: Constructor<Type>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeInstance'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().instance(actual, constructor, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  //#region toBeInstanceOf
  /**
   * @description 
   * @param actual 
   * @param expected 
   * @param expectation 
   * The `actual` value must be an instance of `expected`.
   * @param expectationFailOutput 
   * @param execute
   * @returns 
   */
  public instanceOf<T>(
    actual: ExpectType<T>,
    expected: jasmine.Constructor,
    not?: boolean,
    expectation: string = TextualExpectation.get('toBeInstanceOf'),
    expectationFailOutput?: any,
    execute?: boolean
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe(not).instanceOf(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  //#endregion

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `PropertyKey`
   * on the `expected` of `true`. The method uses `isKey()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value to be a `PropertyKey`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public key<T, Type>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeKey'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().key(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  //#region toBeLessThan
  public lessThan<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    not?: boolean,
    expectation: string = TextualExpectation.get('toBeLessThan'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe(not).lessThan(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  public lessThanOrEqual<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    not?: boolean,
    expectation: string = TextualExpectation.get('toBeLessThanOrEqual'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe(not).lessThanOrEqual(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  //#endregion

  public naN<T extends number>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeNaN'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().naN(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  public negativeInfinity<T extends number>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeNegativeInfinity'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().negativeInfinity(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be `null` on the `expected` of `true`. The
   * method uses `isNull()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be `null`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public null<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeNull'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().null(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` be a `number` type or an instance of a `Number` on the `expected` of `true`. The
   * method uses `isNumber()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value to be a `number` type or an instance of a `${Number.name}`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public number<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeNumber'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().number(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `number` type or an instance of a `Number` between the `range` of minimum and maximum on the `expected` of `true`. The
   * method uses `isNumberBetween()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param min The **minimum** range of generic type variable `Min` of the given `value`.
   * @param max The **maximum** range of generic type variable `Max` of the given `value`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * `'The value must be `number` type or an instance of `Number` between `min` and `max`'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public numberBetween<T, Min extends number, Max extends number>(
    actual: ExpectType<T>,
    min: Min,
    max: Max,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeNumberBetween'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().numberBetween(actual, min, max, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a `number` type on the `expected` of
   * `true`. The method uses `isNumberType()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   *The `actual` value must be of a `number` type.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public numberType<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeNumberType'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().numberType(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an `object` on the `expected` of
   * `true`. The method uses `isObject()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be of `object` type or an instance of `Object`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public object<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeObject'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().object(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an `object` with a given `key` on the `expected` of
   * `true`. The method uses `isObjectKey()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param key Property name of `PropertyKey` type of potential `object` from the provided `value`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be of `object` type or an instance of `Object` with a given `key`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public objectKey<T>(
    actual: ExpectType<T>,
    key: PropertyKey,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeObjectKey'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().objectKey(actual, key, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an `object` with a given `key` in it(or its prototype chain) on the `expected` of
   * `true`. The method uses `isobjectKeyIn()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param key Property name of a `PropertyKey` type of potential `object` from the provided `value`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be of `object` type or an instance of `Object` with given `keys`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public objectKeyIn<T>(
    actual: ExpectType<T>,
    key: PropertyKey,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeObjectKeyIn'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().objectKeyIn(actual, key, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an `object` with given `keys` on the `expected` of
   * `true`. The method uses `isObjectKeys()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param keys An `array` of property names of the `PropertyKey` type of potential `object` from the provided `value`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be of `object` type or an instance of `Object` with a given `key` in it(or its prototype chain).
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public objectKeys<T>(
    actual: ExpectType<T>,
    keys: PropertyKey[],
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeObjectKeys'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().objectKeys(actual, keys, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an `object` with given `keys` on the `expected` of
   * `true`. The method uses `isObjectKeys()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param keys An `Array` of property names or a two-dimensional `array` of property names to check if the given `value` contains some of
   * them or some groups of them.
   * @param keys An `array` of property names of the `PropertyKey` type of potential `object` from the provided `value`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be of `object` type or an instance of `Object` with given `keys` in it(or its prototype chain).
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public objectKeysIn<T>(
    actual: ExpectType<T>,
    keys: PropertyKey[],
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeObjectKeysIn'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().objectKeysIn(actual, keys, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an `object` with given `keys` on the `expected` of
   * `true`. The method uses `isobjectSomeKeys()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param keys An `Array` of property names or a two-dimensional `array` of property names to check if the given `value` contains some of
   * them or some groups of them.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be of `object` type or an instance of `Object` with some given `keys`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public objectSomeKeys<T>(
    actual: ExpectType<T>,
    keys: PropertyKey[],
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeObjectSomeKeys'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().objectSomeKeys(actual, keys, expected, expectationFailOutput),
      execute
    );
    return this;
  }


  // TODO: Description.
  public positiveInfinity<T extends number>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBePositiveInfinity'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().positiveInfinity(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `RegExp`
   * on the `expected` of `true`.
   * @param actual Any kind of value to check.
   * @param expected Expects the result of the expectation must be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be `${RegExp.name}`.
   * @param expectationFailOutput
   * @param execute Whether or not to execute the spec, by default it's set to `true`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public regExp<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeRegExp'),
    expectationFailOutput?: any,
    execute: boolean = true,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().regexp(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  // Mark a spec as pending, expectation results will be ignored.
  public pending<T>(
    actual: T | PromiseLike<T>,
    not?: boolean,
    expectation: string = TextualExpectation.get('toBePending'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      done => (this.#expectToBe(not).pending(actual, expectationFailOutput), done()),
      execute
    );
    return this;
  }

  // Expect a promise to be rejected.
  public rejected<T>(
    actual: T | PromiseLike<T>,
    not?: boolean,
    expectation: string = TextualExpectation.get('toBeRejected'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      done => (this.#expectToBe(not).rejected(actual, expectationFailOutput), done()),
      execute
    );
    return this;
  }

  // Expect a promise to be rejected with a value equal to the expected, using deep equality comparison.
  public rejectedWith<T, U>(
    actual: T | PromiseLike<T>,
    expected: jasmine.Expected<U>,
    not?: boolean,
    expectation: string = TextualExpectation.get('toBeRejectedWith'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      done => (this.#expectToBe(not).rejectedWith(actual, expected, expectationFailOutput), done()),
      execute
    );
    return this;
  }

  // Expect a promise to be rejected with a value matched to the expected
  public rejectedWithError<T, U>(
    actual: T | PromiseLike<T>,
    expected?: new (...args: any[]) => Error,
    message?: string | RegExp,
    not?: boolean,
    expectation: string = TextualExpectation.get('toBeRejectedWithError'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      done => (this.#expectToBe(not).rejectedWithError(actual, expected, message, expectationFailOutput), done()),
      execute
    );
    return this;
  }

  // Expect a promise to be resolved.
  public resolved<T>(
    actual: T | PromiseLike<T>,
    not?: boolean,
    expectation: string = TextualExpectation.get('toBeResolved'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      done => (this.#expectToBe(not).resolved(actual, expectationFailOutput), done()),
      execute
    );
    return this;
  }

  // Expect a promise to be resolved to a value equal to the expected, using deep equality comparison.
  public resolvedTo<T>(
    actual: T | PromiseLike<T>,
    expected: jasmine.Expected<T>, 
    not?: boolean,
    expectation: string = TextualExpectation.get('toBeResolvedTo'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      done => (this.#expectToBe(not).resolvedTo(actual, expected, expectationFailOutput), done()),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `string` type or an instance of a `String` on the `expected` of
   * `true`. The method uses `isString()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be a `string` type or an instance of a `String`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public string<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeString'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().string(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `string` type or an instance of a `String` that includes
   * the specified words/sentences on the `expected` of `true`. The method uses `isStringIncludes()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param includes An `Array` of strings as words/sentences to be case-sensitive searched for within the given `value`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be a `string` type or an instance of a `String` that includes the specified words/sentences.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public stringIncludes<T>(
    actual: ExpectType<T>,
    includes: string[],
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeStringIncludes'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().stringIncludes(actual, includes, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `string` type or an instance of a `String` that includes
   * some of the specified words/sentences on the `expected` of `true`. The method uses `isStringIncludes()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param includes An `Array` of strings as words/sentences to be case-sensitive searched for within the given `value`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be a `string` type or an instance of a `String` that includes some of the specified words/sentences.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public stringIncludesSome<T>(
    actual: ExpectType<T>,
    includes: string[],
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeStringIncludesSome'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().stringIncludesSome(actual, includes, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `string` type or an instance of a `String` of the given length
   * on the `expected` of `true`. The method uses `isStringLength()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param length The **length** of generic type variable `Length` for the given `value`,
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be a `string` type or an instance of a `String` of the given `length`..
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public stringOfLength<T, Length extends number>(
    actual: ExpectType<T>,
    length: Length,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeStringOfLength'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().stringOfLength(actual, length, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `string` type or an instance of a `String` of the length between the given
   * minimum and maximum on the `expected` of `true`. The method uses `isStringLengthBetween()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be a `string` type or an instance of a `String` of the length between the given `min` and `max`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public stringOfLengthBetween<T, Min extends number, Max extends number>(
    actual: ExpectType<T>,
    min: Min,
    max: Max,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeStringOfLengthBetween'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().stringOfLengthBetween(actual, min, max, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a `string` type on the `expected` of
   * `true`. The method uses `isStringType()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be of a `string` type.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public stringType<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeStringType'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().stringType(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `symbol` on the `expected` of
   * `true`. The method uses `isSymbol()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be a `symbol`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public symbol<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeSymbol'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().symbol(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `boolean` type or an instance of 
   * `Boolean` equal to`true` on the `expected` of `true`. The method uses `isSymbol()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be a `boolean` type or an instance of `Boolean` equal to `true`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public true<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeTrue'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().true(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  public truthy<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeTruthy'), 
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().truthy(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * @description Executes the spec on a state `true` from the `execute` expecting the provided `value` to be `undefined` on the `expected` of `true`. The method uses `isUndefined()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to
   * The `actual` value must be `undefined`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public undefined<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.get('toBeUndefined'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToBe().undefined(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  //#endregion

  // Private.
  #expectToBe(not: boolean = false) {
    return (not ? this.expect.to.be.not : this.expect.to.be);
  }
}
