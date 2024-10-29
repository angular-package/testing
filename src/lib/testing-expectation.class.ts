// Class.
import { Expect } from './expect.class';
import { TestingExpect } from './testing-expect.class';
import { TestingExpectTo } from './expectation/testing-expect-to.class';
// Type.
import { Constructor } from '@angular-package/type';
import { ExpectType } from '../type';
/**
 * Testing expectation.
 * @class
 * @classdesc
 */
export class TestingExpectation extends Expect {
  /**
   * @description
   */
  public get to() {
    return this.#testingTo;
  }

  /**
   * @description
   */
  #testingTo;

  /**
   * @description
   * @param expect 
   */
  constructor(expect: TestingExpect = new TestingExpect()) {
    super(expect);
    this.#testingTo = new TestingExpectTo(expect);
  }

  //#region toBe
  /**
   * @jasmine
   * @description
   */
  public toBe<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<typeof actual>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.be(actual, expected, expectationFailOutput);
    return this;
  }

  //#region toBeArray
  /**
   * @angularpackage
   * @description
   */
  public toBeArray<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.array(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @angularpackage
   * @description
   */
  public toBeArrayOfBigInt<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.arrayof.bigint(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @angularpackage
   * @description
   */
  public toBeArrayOfBoolean<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.arrayof.boolean(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @angularpackage
   * @description
   */
  public toBeArrayOfDate<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.arrayof.date(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @angularpackage
   * @description
   */
  public toBeArrayOfDefined<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.arrayof.defined(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @angularpackage
   * @description
   */
  public toBeArrayOfFalse<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.arrayof.false(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @angularpackage
   * @description
   */
  public toBeArrayOfNull<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.arrayof.null(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @angularpackage
   * @description
   */
  public toBeArrayOfNumber<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.arrayof.number(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @angularpackage
   * @description
   */
  public toBeArrayOfRegExp<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.arrayof.regExp(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @angularpackage
   * @description
   */
  public toBeArrayOfString<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.arrayof.string(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @angularpackage
   * @description
   */
  public toBeArrayOfSymbol<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.arrayof.symbol(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @angularpackage
   * @description
   */
  public toBeArrayOfTrue<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.arrayof.true(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @angularpackage
   * @description
   */
  public toBeArrayOfUndefined<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.arrayof.undefined(actual, expected, expectationFailOutput);
    return this;
  }
  //#endregion
  /**
   * @angularpackage
   */
  public toBeBigInt<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.bigint(actual, expected, expectationFailOutput);
    return this;
  }
  //#region toBeBoolean
  /**
   * @angularpackage
   */
  public toBeBoolean<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.boolean(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @angularpackage
   */
  public toBeBooleanType<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.booleanType(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @angularpackage
   */
  public toBeClass<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.class(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   * @description
   * @param actual 
   * @param expected 
   * @param precision 
   * @param expectationFailOutput 
   * @returns 
   */
  public toBeCloseTo<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    precision?: any,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.closeTo(actual, expected, precision, expectationFailOutput);
    return this;
  }
  /**
   * @angularpackage
   */
  public toBeDate<T>(
    actual: ExpectType<T>,
    expected: any,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.date(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toBeDefined<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.defined(actual, expected, expectationFailOutput);
    return this;
  }
  //#region false boolean
  /**
   * @jasmine
   */
  public toBeFalse<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.false(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toBeFalsy<T>(
    actual: ExpectType<T>,
    expected: any,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.falsy(actual, expected, expectationFailOutput);
    return this;
  }
  //#endregion
  /**
   * @angularpackage
   */
  public toBeFunction<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.function(actual, expected, expectationFailOutput);
    return this;
  }
  //#region toBeGreaterThan
  /**
   * @jasmine
   */
  public toBeGreaterThan<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.greaterThan(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toBeGreaterThanOrEqual<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.greaterThanOrEqual(actual, expected, expectationFailOutput);
    return this;
  }
  //#endregion
  /**
   * @angularpackage
   */
  public toBeInstance<T, Type>(
    actual: ExpectType<T>,
    constructor: Constructor<Type>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.instance(actual, constructor, expected, expectationFailOutput);
    return this;
  }

  //#region toBeInstanceOf
  /**
   * @jasmine
   */
  public toBeInstanceOf<T>(
    actual: ExpectType<T>,
    expected: jasmine.Constructor,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.instanceOf(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toBeInstanceOfArray<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.instanceof.array(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toBeInstanceOfBoolean<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.instanceof.boolean(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toBeInstanceOfDate<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.instanceof.date(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toBeInstanceOfError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.instanceof.error(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toBeInstanceOfFunction<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.instanceof.function(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toBeInstanceOfMap<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.instanceof.map(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toBeInstanceOfNumber<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.instanceof.number(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toBeInstanceOfObject<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.instanceof.object(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toBeInstanceOfPromise<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.instanceof.promise(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toBeInstanceOfRangeError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.instanceof.rangeError(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toBeInstanceOfReferenceError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.instanceof.referenceError(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toBeInstanceOfRegExp<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.instanceof.regexp(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toBeInstanceOfSet<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.instanceof.set(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toBeInstanceOfStorage<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.instanceof.storage(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toBeInstanceOfString<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.instanceof.string(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toBeInstanceOfSyntaxError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.instanceof.syntaxError(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toBeInstanceOfTypeError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.instanceof.typeError(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toBeInstanceOfURIError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.instanceof.URIError(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toBeInstanceOfWeakSet<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.instanceof.weakSet(actual, expected, expectationFailOutput);
    return this;
  }
  //#endregion
  /**
   * @angularpackage
   */
  public toBeKey<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.key(actual, expected, expectationFailOutput);
    return this;
  }

  //#region toBeLessThan
  /**
   * @jasmine
   */
  public toBeLessThan<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.lessThan(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toBeLessThanOrEqual<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.lessThanOrEqual(actual, expected, expectationFailOutput);
    return this;
  }
  //#endregion

  /**
   * @jasmine
   */
  public toBeNaN<T extends number>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.naN(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toBeNegativeInfinity<T extends number>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.negativeInfinity(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toBeNull<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.null(actual, expected, expectationFailOutput);
    return this;
  }
  //#region toBeNumber
  /**
   * @angularpackage
   */
  public toBeNumber<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.number(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @angularpackage
   */
  public toBeNumberBetween<T, Min extends number, Max extends number>(
    actual: ExpectType<T>,
    min: Min,
    max: Max,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.numberBetween(actual, min, max, expected, expectationFailOutput);
    return this;
  }
  /**
   * @angularpackage
   */
  public toBeNumberType<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.numberType(actual, expected, expectationFailOutput);
    return this;
  }
  //#endregion
  //#region toBeObject
  /**
   * @angularpackage
   */
  public toBeObject<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.object(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @angularpackage
   */
  public toBeObjectKey<T>(
    actual: ExpectType<T>,
    key: PropertyKey,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.objectKey(actual, key, expected, expectationFailOutput);
    return this;
  }
  /**
   * @angularpackage
   */
  public toBeObjectKeyIn<T>(
    actual: ExpectType<T>,
    key: PropertyKey,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.objectKeyIn(actual, key, expected, expectationFailOutput);
    return this;
  }
  /**
   * @angularpackage
   */
  public toBeObjectKeys<T>(
    actual: ExpectType<T>,
    keys: PropertyKey[],
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.objectKeys(actual, keys, expected, expectationFailOutput);
    return this;
  }
  /**
   * @angularpackage
   */
  public toBeObjectKeysIn<T>(
    actual: ExpectType<T>,
    keys: PropertyKey[],
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.objectKeysIn(actual, keys, expected, expectationFailOutput);
    return this;
  }
  /**
   * @angularpackage
   */
  public toBeObjectSomeKeys<T>(
    actual: ExpectType<T>,
    keys: (PropertyKey | PropertyKey[])[],
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.objectSomeKeys(actual, keys, expected, expectationFailOutput);
    return this;
  }
  //#endregion
  public toBePending<T>(
    actual: T | PromiseLike<T>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.pending(actual, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toBePositiveInfinity<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.positiveInfinity(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @angularpackage
   */
  public toBeRegExp<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.regexp(actual, expected, expectationFailOutput);
    return this;
  }

  //#region toBeRejected
  public toBeRejected<T>(
    actual: T | PromiseLike<T>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.rejected(actual, expectationFailOutput);
    return this;
  }
  public toBeRejectedWith<T, U>(
    actual: T | PromiseLike<T>,
    expected: jasmine.Expected<U>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.rejectedWith(actual, expected, expectationFailOutput);
    return this;
  }
  public toBeRejectedWithError<T, U>(
    actual: T | PromiseLike<T>,
    expected?: new (...args: any[]) => Error,
    message?: string | RegExp,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.rejectedWithError(actual, expected, message, expectationFailOutput);
    return this;
  }
  //#region toBeResolved
  public toBeResolved<T>(
    actual: T | PromiseLike<T>,
    expectationFailOutput?: any,
  ): this {
    this.#testingTo.be.resolved(actual, expectationFailOutput);
    return this;
  }
  public toBeResolvedTo<T>(
    actual: T | PromiseLike<T>,
    expected: jasmine.Expected<T>,
    expectationFailOutput?: any,
  ): this {
    this.#testingTo.be.resolvedTo(actual, expected, expectationFailOutput);
    return this;
  }
  //#region toBeString
  /**
   * @angularpackage
   */
  public toBeString<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.string(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @angularpackage
   */
  public toBeStringIncludes<T>(
    actual: ExpectType<T>,
    includes: string[],
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.stringIncludes(actual, includes, expected, expectationFailOutput);
    return this;
  }
  /**
   * @angularpackage
   */
  public toBeStringIncludesSome<T>(
    actual: ExpectType<T>,
    includes: string[],
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.stringIncludesSome(actual, includes, expected, expectationFailOutput);
    return this;
  }
  /**
   * @angularpackage
   */
  public toBeStringOfLength<T, Length extends number>(
    actual: ExpectType<T>,
    length: Length,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.stringOfLength(actual, length, expected, expectationFailOutput);
    return this;
  }
  /**
   * @angularpackage
   */
  public toBeStringOfLengthBetween<T, Min extends number, Max extends number>(
    actual: ExpectType<T>,
    min: Min,
    max: Max,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.stringOfLengthBetween(actual, min, max, expected, expectationFailOutput);
    return this;
  }
  /**
   * @angularpackage
   */
  public toBeStringType<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.stringType(actual, expected, expectationFailOutput);
    return this;
  }
  //#endregion
  /**
   * @angularpackage
   */
  public toBeSymbol<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.symbol(actual, expected, expectationFailOutput);
    return this;
  }
  //#region true boolean
  /**
   * @jasmine
   */
  public toBeTrue<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.true(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toBeTruthy<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.truthy(actual, expected, expectationFailOutput);
    return this;
  }
  //#endregion
  /**
   * @angularpackage
   */
  public toBeTypeOf<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<string>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.typeOf(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toBeUndefined<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.be.undefined(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toContain<T>(
    actual: ExpectType<T>,
    expected: any,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.contain(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toEqual<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<typeof actual>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.equal(actual, expected, expectationFailOutput);
    return this;
  }
  //#region toHaveBeenCalled
  public toHaveBeenCalled<T extends jasmine.Func>(
    spy: ExpectType<T>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.have.been.called.called(spy, expectationFailOutput);
    return this;
  }
  public toHaveBeenCalledBefore<T extends jasmine.Func>(
    spy: ExpectType<T>,
    expected: jasmine.Func,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.have.been.called.before(spy, expected, expectationFailOutput);
    return this;
  }
  public toHaveBeenCalledOnceWith<T extends jasmine.Func>(
    spy: ExpectType<T>,
    ...params: any[]
  ): this {
    this.#testingTo.have.been.called.onceWith(spy, ...params);
    return this;
  }
  public toHaveBeenCalledTimes<T extends jasmine.Func>(
    spy: ExpectType<T>,
    expected: number,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.have.been.called.times(spy, expected, expectationFailOutput);
    return this;
  }
  public toHaveBeenCalledWith<T extends jasmine.Func>(
    spy: ExpectType<T>,
    ...params: any[]
  ): this {
    this.#testingTo.have.been.called.with(spy, ...params);
    return this;
  }
  //#endregion
  //#region toHave
  /**
   * @jasmine
   */
  public toHaveClass<T>(
    actual: ExpectType<T>,
    expected: string,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.have.class(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toHaveSize<T>(
    actual: ExpectType<T>,
    expected: number,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.have.size(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toHaveSpyInteractions<T>(
    actual: ExpectType<T>,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.have.spyInteractions(actual, expectationFailOutput);
    return this;
  }
  //#endregion
  /**
   * @jasmine
   */
  public toMatch<T>(
    actual: ExpectType<T>,
    expected: string | RegExp,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.match(actual, expected, expectationFailOutput);
    return this;
  }
  //#region toThrow
  /**
   * @jasmine
   */
  public toThrow<T>(
    actual: ExpectType<T>,
    expected?: any,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.throw.throw(actual, expected, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toThrowError<T extends jasmine.Func>(
    actual: ExpectType<T>,
    message?: string | RegExp,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.throw.error(actual, message, expectationFailOutput);
    return this;
  }
  /**
   * @jasmine
   */
  public toThrowMatching<T>(
    actual: ExpectType<T>,
    predicate: (thrown: any) => boolean,
    expectationFailOutput?: any
  ): this {
    this.#testingTo.throw.matching(actual, predicate, expectationFailOutput);
    return this;
  }
  //#endregion
}
