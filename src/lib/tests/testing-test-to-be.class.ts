// Class.
import { TestingCore } from '../testing-core.class';
import { TestingTestToBeInstanceOf } from './testing-test-to-be-instanceof.class';
// Type.
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
  #expectation = {
    toBeBigInt: `The \`actual\` must be a \`bigint\` type.`,
    toBeBooleanType: `The \`actual\` must be of a \`boolean\` type.`,
    toBeClass: `The \`actual\` must be a \`class\`.`,
    toBeCloseTo: `The \`actual\` must be within a specified precision of the \`expected\` actual.`,
    toBeDefined: `The \`actual\` must be defined.`,

    toBeFalse: `The \`actual\` must be false.`,
    toBeFalsy: `The \`actual\` must be falsy.`,

    // GreaterThan
    greaterThan: `The \`actual\` to be greater than the expected value.`,
    greaterThanOrEqual: `The \`actual\` to be greater than or equal to the expected value.`,

    // LessThan
    lessThan: `The \`actual\` to be less than the expected value.`,
    lessThanOrEqual: `The \`actual\` to be less than or equal to the expected value.`,

    toBeNaN: `The \`actual\` to be NaN (Not a Number).`,
    toBeNegativeInfinity: `The actual \`actual\` to be -Infinity (-infinity).`,
    toBeNull: `The \`actual\` value must be \`null\`.`,
    toBeNumberType: `The \`actual\` value must be of a \`number\` type.`,
    toBePositiveInfinity: `The \`actual\` value to be Infinity (infinity).`,
    toBeStringType: `The \`actual\` value must be of a \`string\` type.`,
    toBeTrue: `The \`actual\` value must be \`true\`.`,
    toBeTruthy: `The \`actual\` value to be truthy.`,
  }

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

  //#region toBe methods
  /**
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be the given `expected` value.
   * "Expect the actual value to be === to the expected value."
   * @param actual The value of any type passed to the `expect()` function of jasmine.
   * @param expected The value of any type passed to the `toBe()` method of jasmine. "The expected value to compare against."
   * @param expectation "Textual description of what this spec is checking" with an optional its unique `number` when adding `[counter]`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed. By default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
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
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be a `bigint` type on the `expected` of
   * `true`. The method uses `isBigInt()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be a bigint type'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public bigInt<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeBigInt,
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
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a `boolean` type
   * on the `expected` of `true`. The method uses `isBooleanType()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be of a boolean type'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public booleanType<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeBooleanType,
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
   * @returns The return value is an instance of a `TestingTests`.
   */
  public class<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeClass,
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
    expectation: string = this.#expectation.toBeCloseTo,
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

  public defined<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeDefined,
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
    expectation: string = this.#expectation.toBeFalse,
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
    expectation: string = this.#expectation.toBeFalsy,
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

  //#region toBeGreaterThan methods
  public greaterThan<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    expectation: string = this.#expectation.greaterThan, 
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

  public greaterThanOrEqual<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    expectation: string = this.#expectation.greaterThanOrEqual,
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

  //#region toBeInstanceOf methods
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

  //#region toBeLessThan methods
  public lessThan<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    expectation: string = this.#expectation.lessThan,
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
    expectation: string = this.#expectation.lessThanOrEqual,
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
    expectation: string = this.#expectation.toBeNaN,
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
    expectation: string = this.#expectation.toBeNegativeInfinity,
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
   * @returns The return value is an instance of a `TestingTests`.
   */
  public null<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeNull,
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
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a `number` type on the `expected` of
   * `true`. The method uses `isNumberType()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be of a \`number\` type'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public numberType<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeNumberType,
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

  public positiveInfinity<T extends number>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBePositiveInfinity,
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
   * Executes the spec on a state `true` from the `execute` expecting the provided `value` to be of a `string` type on the `expected` of
   * `true`. The method uses `isStringType()` function of `@angular-package/type`.
   * @param actual The value of any type to check.
   * @param expected Expects the result of the expectation to be `true` or `false`, by default it's `true`.
   * @param expectation The message for the karma, which by default is set to `'The value must be of a \`string\` type'`.
   * @param expectationFailOutput
   * @param execute An optional parameter that specifies whether the spec is to be executed, by default it takes its value from the global
   * `allowIt` parameter specified in the `constructor`.
   * @returns The return value is an instance of a `TestingTests`.
   */
  public stringType<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeStringType,
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

  public true<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = this.#expectation.toBeTrue,
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
    expectation: string = this.#expectation.toBeTruthy, 
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
  //#endregion
}
