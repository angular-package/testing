// Class.
import { TestingCore } from '../testing-core.class';
import { TestingTestToBeInstanceOf } from './testing-test-to-be-instanceof.class';
// Type.
import { Constructor } from '@angular-package/type';
import { ExpectType } from '../../type';
/**
 * Prepared simple tests.
 */
export class TestingTestToBe extends TestingCore {
  /**
   * 
   */
  public get instanceof() {
    return this.#instanceof;
  }

  /**
   * 
   */
  #instanceof: TestingTestToBeInstanceOf;

  /**
   * 
   * @param allowDescribe 
   * @param allowIt 
   * @param executable 
   */
  constructor(
    allowDescribe: boolean,
    allowIt: boolean,
    executable?: {
      describe?: Array<number>,
      it?: Array<number>
    }
  ) {
    super(allowDescribe, allowIt, executable);
    this.#instanceof = new TestingTestToBeInstanceOf(allowDescribe, allowIt, executable);
  }

  //#region toBe
  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be the given `expected` value.
   * "Expect the actual value to be === to the expected value."
   * @param actual The value of any type passed to the `expect()` function of jasmine.
   * @param expected The value of any type passed to the `toBe()` method of jasmine. "The expected value to compare against."
   * @param expectation "Textual description of what this spec is checking" with an optional its unique `number` when adding `[counter]`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed. By default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public be<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<typeof actual>,
    expectation: string,
    expectationFailOutput?: any,
    execute?: boolean
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.be(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `array` type on the `expected` of
   * `true`. The method uses `isArray()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be a bigint type'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public array<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeArray,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.array(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `bigint` type on the `expected` of
   * `true`. The method uses `isBigInt()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be a bigint type'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public bigInt<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeBigInt,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.bigint(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a `boolean` type or an instance of `Boolean`
   * on the `expected` of `true`. The method uses `isBoolean()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be of a boolean type'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public boolean<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeBoolean,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.boolean(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a `boolean` type
   * on the `expected` of `true`. The method uses `isBooleanType()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be of a boolean type'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public booleanType<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeBooleanType,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.booleanType(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `class`
   * on the `expected` of `true`. The method uses `isClass()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `The value must be a class`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public class<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeClass,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.class(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  public closeTo<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    precision?: any,
    expectation: string = TestingTestToBe.expectation.toBeCloseTo,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.closeTo(actual, expected, precision, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `date`
   * on the `expected` of `true`. The method uses `isDate()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `The value must be a class`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public date<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeDate,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.date(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  public defined<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeDefined,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.defined(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  public false<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeFalse,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.false(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  public falsy<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeFalsy,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.falsy(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `function`
   * on the `expected` of `true`. The method uses `isFunction()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `The value must be a class`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public function<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeFunction,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.function(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  //#region toBeGreaterThan
  // TODO: Description.
  public greaterThan<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    expectation: string = TestingTestToBe.expectation.toBeGreaterThan, 
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.greaterThan(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  // TODO: Description.
  public greaterThanOrEqual<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    expectation: string = TestingTestToBe.expectation.toBeGreaterThanOrEqual,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.greaterThanOrEqual(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  //#endregion

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a instance of `constructor`
   * on the `expected` of `true`. The method uses `isInstance()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param constructor Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `The value must be a class`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public instance<T, Type>(
    actual: ExpectType<T>,
    constructor: Constructor<Type>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeInstance,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.instance(actual, constructor, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  //#region toBeInstanceOf
  public instanceOf<T>(
    actual: ExpectType<T>,
    expected: jasmine.Constructor,
    expectation: string,
    expectationFailOutput?: any,
    execute?: boolean
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.instanceOf(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  //#endregion

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `PropertyKey`
   * on the `expected` of `true`. The method uses `isKey()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `The value must be a class`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public key<T, Type>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeKey,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.key(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  //#region toBeLessThan
  public lessThan<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    expectation: string = TestingTestToBe.expectation.toBeLessThan,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.lessThan(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  public lessThanOrEqual<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    expectation: string = TestingTestToBe.expectation.toBeLessThanOrEqual,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.lessThanOrEqual(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  //#endregion

  public naN<T extends number>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeNaN,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.naN(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  public negativeInfinity<T extends number>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeNegativeInfinity,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.negativeInfinity(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be `null` on the `expected` of `true`. The
   * method uses `isNull()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be \`null\`'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public null<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeNull,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.null(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` be a `number` type or an instance of a `Number` on the `expected` of `true`. The
   * method uses `isNumber()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be \`number\` type or an instance of \`Number\`'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public number<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeNumber,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.number(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `number` type or an instance of a `Number` between the `range` of minimum and maximum on the `expected` of `true`. The
   * method uses `isNumberBetween()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param min The **minimum** range of generic type variable `Min` of the given `value`.
   * @param max The **maximum** range of generic type variable `Max` of the given `value`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be \`number\` type or an instance of \`Number\` between \`min\` and \`max\`'`.
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
    expectation: string = TestingTestToBe.expectation.toBeNumberBetween,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.numberBetween(actual, min, max, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a `number` type on the `expected` of
   * `true`. The method uses `isNumberType()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be of a \`number\` type'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public numberType<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeNumberType,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.numberType(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an `object` on the `expected` of
   * `true`. The method uses `isObject()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be an \`object\`'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public object<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeObject,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.object(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an `object` with a given `key` on the `expected` of
   * `true`. The method uses `isObjectKey()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param key Property name of `PropertyKey` type of potential `object` from the provided `value`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be an `object` with a given `key`'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public objectKey<T>(
    actual: ExpectType<T>,
    key: PropertyKey,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeObjectKey,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.objectKey(actual, key, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an `object` with a given `key` in it(or its prototype chain) on the `expected` of
   * `true`. The method uses `isobjectKeyIn()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param key Property name of a `PropertyKey` type of potential `object` from the provided `value`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be an `object` with a given `key`'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public objectKeyIn<T>(
    actual: ExpectType<T>,
    key: PropertyKey,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeObjectKeyIn,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.objectKeyIn(actual, key, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an `object` with given `keys` on the `expected` of
   * `true`. The method uses `isObjectKeys()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param keys An `array` of property names of the `PropertyKey` type of potential `object` from the provided `value`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be an `object` with given `keys`'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public objectKeys<T>(
    actual: ExpectType<T>,
    keys: PropertyKey[],
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeObjectKeys,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.objectKeys(actual, keys, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an `object` with given `keys` on the `expected` of
   * `true`. The method uses `isObjectKeys()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param keys An `Array` of property names or a two-dimensional `array` of property names to check if the given `value` contains some of
   * them or some groups of them.
   * @param keys An `array` of property names of the `PropertyKey` type of potential `object` from the provided `value`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be an `object` with given `keys`'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public objectKeysIn<T>(
    actual: ExpectType<T>,
    keys: PropertyKey[],
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeObjectKeysIn,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.objectKeysIn(actual, keys, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be an `object` with given `keys` on the `expected` of
   * `true`. The method uses `isobjectSomeKeys()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param keys An `Array` of property names or a two-dimensional `array` of property names to check if the given `value` contains some of
   * them or some groups of them.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be an `object` with given `keys`'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public objectSomeKeys<T>(
    actual: ExpectType<T>,
    keys: PropertyKey[],
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeObjectSomeKeys,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.objectSomeKeys(actual, keys, expected, expectationFailOutput),
      execute
    );
    return this;
  }


  // TODO: Description.
  public positiveInfinity<T extends number>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBePositiveInfinity,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.positiveInfinity(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `RegExp`
   * on the `expected` of `true`.
   * @param actual Any kind of value to check.
   * @param expected Expects the result of the expectation must be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `The value must be a RegExp.
   * @param expectationFailOutput
   * @param execute Whether or not to execute the spec, by default it's set to `true`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public regExp<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeRegExp,
    expectationFailOutput?: any,
    execute: boolean = true,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.regexp(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  // Mark a spec as pending, expectation results will be ignored.
  public pending<T>(
    actual: T | PromiseLike<T>,
    expectation: string = TestingTestToBe.expectation.toBePending,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.pending(actual, expectationFailOutput),
      execute
    );
    return this;
  }

  // Expect a promise to be rejected.
  public rejected<T>(
    actual: T | PromiseLike<T>,
    expectation: string = TestingTestToBe.expectation.toBeRejected,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.rejected(actual, expectationFailOutput),
      execute
    );
    return this;
  }

  // Expect a promise to be rejected with a value equal to the expected, using deep equality comparison.
  public rejectedWith<T, U>(
    actual: T | PromiseLike<T>,
    expected: jasmine.Expected<U>,
    expectation: string = TestingTestToBe.expectation.toBeRejectedWith,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.rejectedWith(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  // Expect a promise to be rejected with a value matched to the expected
  public rejectedWithError<T, U>(
    actual: T | PromiseLike<T>,
    expected?: new (...args: any[]) => Error,
    message?: string | RegExp,
    expectation: string = TestingTestToBe.expectation.toBeRejectedWith,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.rejectedWithError(actual, expected, message, expectationFailOutput),
      execute
    );
    return this;
  }

  // Expect a promise to be resolved.
  public resolved<T>(
    actual: T | PromiseLike<T>,
    expectation: string = TestingTestToBe.expectation.toBeResolved,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.resolved(actual, expectationFailOutput),
      execute
    );
    return this;
  }

  // Expect a promise to be resolved to a value equal to the expected, using deep equality comparison.
  public resolvedTo<T>(
    actual: T | PromiseLike<T>,
    expected: jasmine.Expected<T>, 
    expectation: string = TestingTestToBe.expectation.toBeResolvedTo,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.resolvedTo(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `string` type or an instance of a `String` on the `expected` of
   * `true`. The method uses `isString()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be a `string` type or an instance of a `String`'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public string<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeString,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.string(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `string` type or an instance of a `String` that includes
   * the specified words/sentences on the `expected` of `true`. The method uses `isStringIncludes()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param includes An `Array` of strings as words/sentences to be case-sensitive searched for within the given `value`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be a `string` type or an instance of a `String` that includes the specified words/sentences'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public stringIncludes<T>(
    actual: ExpectType<T>,
    includes: string[],
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeStringIncludes,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.stringIncludes(actual, includes, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `string` type or an instance of a `String` that includes
   * some of the specified words/sentences on the `expected` of `true`. The method uses `isStringIncludes()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param includes An `Array` of strings as words/sentences to be case-sensitive searched for within the given `value`.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be a `string` type or an instance of a `String` that includes some of the specified words/sentences'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public stringIncludesSome<T>(
    actual: ExpectType<T>,
    includes: string[],
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeStringIncludesSome,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.stringIncludesSome(actual, includes, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `string` type or an instance of a `String` of the given length
   * on the `expected` of `true`. The method uses `isStringLength()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param length The **length** of generic type variable `Length` for the given `value`,
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be a `string` type or an instance of a `String` of the given length'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public stringOfLength<T, Length extends number>(
    actual: ExpectType<T>,
    length: Length,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeStringOfLength,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.stringOfLength(actual, length, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `string` type or an instance of a `String` of the length between the given
   * minimum and maximum on the `expected` of `true`. The method uses `isStringLengthBetween()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be a `string` type or an instance of a `String` of the length between the given minimum and maximum.'`.
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
    expectation: string = TestingTestToBe.expectation.toBeStringOfLengthBetween,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.stringOfLengthBetween(actual, min, max, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a `string` type on the `expected` of
   * `true`. The method uses `isStringType()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be of a \`string\` type'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public stringType<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeStringType,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.stringType(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `symbol` on the `expected` of
   * `true`. The method uses `isSymbol()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be a `symbol`'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public symbol<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeSymbol,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.symbol(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `boolean` type or an instance of 
   * `Boolean` equal to`true` on the `expected` of `true`. The method uses `isSymbol()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be a `boolean` type or an instance of `Boolean` equal to `true`'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public true<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeTrue,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.true(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  public truthy<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeTruthy, 
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.truthy(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be `undefined` on the `expected` of `true`. The method uses `isUndefined()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be a `undefined`.'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTestToBe`.
   */
  public undefined<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TestingTestToBe.expectation.toBeUndefined,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.undefined(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  //#endregion
}
