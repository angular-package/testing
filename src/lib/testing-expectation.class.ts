// Class.
import { TestingTo } from './expectations/testing-to.class';
// Type.
import { Constructor } from '@angular-package/type';
import { ExpectType } from '../type';
/**
 * Testing expectation.
 */
export class TestingExpectation {
  /**
   * Fail as soon as possible if the actual is pending. Otherwise evaluate the matcher.
   */
  public get already(): this {
    this.#already = true;
    return this;
  }

  /**
   * Invert the matcher.
   */
  public get not(): this {
    this.#not = true;
    return this;
  }

  /**
   * 
   */
  public get to(): TestingTo {
    return this.#testingTo;
  }

  /**
   * 
   */
  #already = false;

  /**
   * 
   */
  #testingTo = new TestingTo();

  /**
   * 
   */
  #not = false;

  public setAlready(already: boolean): this {
    this.#already = already;
    return this;
  }

  public setNot(not: boolean): this {
    this.#not = not;
    return this;
  }

  //#region toBe
  public toBe<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<typeof actual>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.be(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeArray<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.array(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeArrayOfBigInt<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.arrayof.bigint(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeArrayOfBoolean<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.arrayof.boolean(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeArrayOfDate<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.arrayof.date(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeArrayOfDefined<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.arrayof.defined(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeArrayOfFalse<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.arrayof.false(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeArrayOfNull<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.arrayof.null(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeArrayOfNumber<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.arrayof.number(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeArrayOfRegExp<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.arrayof.regExp(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeArrayOfString<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.arrayof.string(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeArrayOfSymbol<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.arrayof.symbol(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeArrayOfTrue<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.arrayof.true(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeArrayOfUndefined<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.arrayof.undefined(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeBigInt<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.bigint(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeBoolean<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.boolean(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeBooleanType<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.booleanType(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeClass<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.class(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeCloseTo<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    precision?: any,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.closeTo(actual, expected, precision, expectationFailOutput));
    return this;
  }

  public toBeDate<T>(
    actual: ExpectType<T>,
    expected: any,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.date(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeDefined<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.defined(actual, expected, expectationFailOutput));
    return this;
  }

  //#region false boolean
  public toBeFalse<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.false(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeFalsy<T>(
    actual: ExpectType<T>,
    expected: any,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.falsy(actual, expected, expectationFailOutput));
    return this;
  }
  //#endregion

  public toBeFunction<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.function(actual, expected, expectationFailOutput));
    return this;
  }

  //#region toBeGreaterThan
  public toBeGreaterThan<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.greaterThan(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeGreaterThanOrEqual<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.greaterThanOrEqual(actual, expected, expectationFailOutput));
    return this;
  }
  //#endregion

  public toBeInstance<T, Type>(
    actual: ExpectType<T>,
    constructor: Constructor<Type>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.instance(actual, constructor, expected, expectationFailOutput));
    return this;
  }

  //#region toBeInstanceOf
  public toBeInstanceOf<T>(
    actual: ExpectType<T>,
    expected: jasmine.Constructor,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.instanceOf(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeInstanceOfArray<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBeInstanceOf(e => e.array(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeInstanceOfBoolean<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBeInstanceOf(e => e.boolean(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeInstanceOfDate<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBeInstanceOf(e => e.date(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeInstanceOfError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBeInstanceOf(e => e.error(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeInstanceOfFunction<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBeInstanceOf(e => e.function(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeInstanceOfMap<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBeInstanceOf(e => e.map(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeInstanceOfNumber<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBeInstanceOf(e => e.number(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeInstanceOfObject<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBeInstanceOf(e => e.object(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeInstanceOfPromise<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBeInstanceOf(e => e.promise(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeInstanceOfRangeError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBeInstanceOf(e => e.rangeError(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeInstanceOfReferenceError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBeInstanceOf(e => e.referenceError(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeInstanceOfRegExp<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBeInstanceOf(e => e.regexp(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeInstanceOfSet<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBeInstanceOf(e => e.set(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeInstanceOfStorage<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBeInstanceOf(e => e.storage(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeInstanceOfString<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBeInstanceOf(e => e.string(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeInstanceOfSyntaxError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBeInstanceOf(e => e.syntaxError(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeInstanceOfTypeError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBeInstanceOf(e => e.typeError(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeInstanceOfURIError<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBeInstanceOf(e => e.URIError(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeInstanceOfWeakSet<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBeInstanceOf(e => e.weakSet(actual, expected, expectationFailOutput));
    return this;
  }
  //#endregion

  public toBeKey<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.key(actual, expected, expectationFailOutput));
    return this;
  }

  //#region toBeLessThan
  public toBeLessThan<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.lessThan(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeLessThanOrEqual<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.lessThanOrEqual(actual, expected, expectationFailOutput));
    return this;
  }
  //#endregion

  public toBeNaN<T extends number>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.naN(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeNegativeInfinity<T extends number>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.negativeInfinity(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeNull<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.null(actual, expected, expectationFailOutput));
    return this;
  }

  //#region toBeNumber
  public toBeNumber<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.number(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeNumberBetween<T, Min extends number, Max extends number>(
    actual: ExpectType<T>,
    min: Min,
    max: Max,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.numberBetween(actual, min, max, expected, expectationFailOutput));
    return this;
  }

  public toBeNumberType<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.numberType(actual, expected, expectationFailOutput));
    return this;
  }
  //#endregion

  //#region toBeObject
  public toBeObject<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.object(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeObjectKey<T>(
    actual: ExpectType<T>,
    key: PropertyKey,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.objectKey(actual, key, expected, expectationFailOutput));
    return this;
  }

  public toBeObjectKeyIn<T>(
    actual: ExpectType<T>,
    key: PropertyKey,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.objectKeyIn(actual, key, expected, expectationFailOutput));
    return this;
  }

  public toBeObjectKeys<T>(
    actual: ExpectType<T>,
    keys: PropertyKey[],
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.objectKeys(actual, keys, expected, expectationFailOutput));
    return this;
  }

  public toBeObjectKeysIn<T>(
    actual: ExpectType<T>,
    keys: PropertyKey[],
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.objectKeysIn(actual, keys, expected, expectationFailOutput));
    return this;
  }

  public toBeObjectSomeKeys<T>(
    actual: ExpectType<T>,
    keys: (PropertyKey | PropertyKey[])[],
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.objectSomeKeys(actual, keys, expected, expectationFailOutput));
    return this;
  }
  //#endregion

  public toBePending<T>(
    actual: T | PromiseLike<T>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.pending(actual, expectationFailOutput));
    return this;
  }

  public toBePositiveInfinity<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.positiveInfinity(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeRegExp<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.regexp(actual, expected, expectationFailOutput));
    return this;
  }

  //#region toBeRejected
  public toBeRejected<T>(
    actual: T | PromiseLike<T>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.rejected(actual, expectationFailOutput));
    return this;
  }

  public toBeRejectedWith<T, U>(
    actual: T | PromiseLike<T>,
    expected: jasmine.Expected<U>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.rejectedWith(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeRejectedWithError<T, U>(
    actual: T | PromiseLike<T>,
    expected?: new (...args: any[]) => Error,
    message?: string | RegExp,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.rejectedWithError(actual, expected, message, expectationFailOutput));
    return this;
  }

  //#region toBeResolved
  public toBeResolved<T>(
    actual: T | PromiseLike<T>,
    expectationFailOutput?: any,
  ): this {
    this.#toBe(e => e.resolved(actual, expectationFailOutput));
    return this;
  }

  public toBeResolvedTo<T>(
    actual: T | PromiseLike<T>,
    expected: jasmine.Expected<T>,
    expectationFailOutput?: any,
  ): this {
    this.#toBe(e => e.resolvedTo(actual, expected, expectationFailOutput));
    return this;
  }

  //#region toBeString
  public toBeString<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.string(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeStringIncludes<T>(
    actual: ExpectType<T>,
    includes: string[],
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.stringIncludes(actual, includes, expected, expectationFailOutput));
    return this;
  }

  public toBeStringIncludesSome<T>(
    actual: ExpectType<T>,
    includes: string[],
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.stringIncludesSome(actual, includes, expected, expectationFailOutput));
    return this;
  }

  public toBeStringOfLength<T, Length extends number>(
    actual: ExpectType<T>,
    length: Length,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.stringOfLength(actual, length, expected, expectationFailOutput));
    return this;
  }

  public toBeStringOfLengthBetween<T, Min extends number, Max extends number>(
    actual: ExpectType<T>,
    min: Min,
    max: Max,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.stringOfLengthBetween(actual, min, max, expected, expectationFailOutput));
    return this;
  }

  public toBeStringType<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.stringType(actual, expected, expectationFailOutput));
    return this;
  }
  //#endregion

  public toBeSymbol<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.symbol(actual, expected, expectationFailOutput));
    return this;
  }

  //#region true boolean
  public toBeTrue<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.true(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeTruthy<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.truthy(actual, expected, expectationFailOutput));
    return this;
  }
  //#endregion

  public toBeTypeOf<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<string>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.typeOf(actual, expected, expectationFailOutput));
    return this;
  }

  public toBeUndefined<T>(
    actual: ExpectType<T>,
    expected?: jasmine.Expected<boolean>,
    expectationFailOutput?: any
  ): this {
    this.#toBe(e => e.undefined(actual, expected, expectationFailOutput));
    return this;
  }

  public toContain<T>(
    actual: ExpectType<T>,
    expected: any,
    expectationFailOutput?: any
  ): this {
    this.#to(e => e.contain(actual, expected, expectationFailOutput));
    return this;
  }

  public toEqual<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<typeof actual>,
    expectationFailOutput?: any
  ): this {
    this.#to(e => e.equal(actual, expected, expectationFailOutput));
    return this;
  }

  //#region toHaveBeenCalled
  public toHaveBeenCalled<T extends jasmine.Func>(
    spy: ExpectType<T>,
    expectationFailOutput?: any
  ): this {
    this.#toHaveBeenCalled(e => e.called(spy, expectationFailOutput));
    return this;
  }

  public toHaveBeenCalledBefore<T extends jasmine.Func>(
    spy: ExpectType<T>,
    expected: jasmine.Func,
    expectationFailOutput?: any
  ): this {
    this.#toHaveBeenCalled(e => e.before(spy, expected, expectationFailOutput));
    return this;
  }

  public toHaveBeenCalledOnceWith<T extends jasmine.Func>(
    spy: ExpectType<T>,
    ...params: any[]
  ): this {
    this.#toHaveBeenCalled(e => e.onceWith(spy, ...params));
    return this;
  }

  public toHaveBeenCalledTimes<T extends jasmine.Func>(
    spy: ExpectType<T>,
    expected: number,
    expectationFailOutput?: any
  ): this {
    this.#toHaveBeenCalled(e => e.times(spy, expected, expectationFailOutput));
    return this;
  }

  public toHaveBeenCalledWith<T extends jasmine.Func>(
    spy: ExpectType<T>,
    ...params: any[]
  ): this {
    this.#toHaveBeenCalled(e => e.with(spy, ...params));
    return this;
  }
  //#endregion

  //#region toHave
  public toHaveClass<T>(
    actual: ExpectType<T>,
    expected: string,
    expectationFailOutput?: any
  ): this {
    this.#toHave(e => e.class(actual, expected, expectationFailOutput));
    return this;
  }

  public toHaveSize<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<typeof actual>,
    expectationFailOutput?: any
  ): this {
    this.#toHave(e => e.size(actual, expected, expectationFailOutput));
    return this;
  }

  public toHaveSpyInteractions<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<typeof actual>,
    expectationFailOutput?: any
  ): this {
    this.#toHave(e => e.spyInteractions(actual, expected, expectationFailOutput));
    return this;
  }
  //#endregion

  public toMatch<T>(
    actual: ExpectType<T>,
    expected: string | RegExp,
    expectationFailOutput?: any
  ): this {
    this.#to(e => e.match(actual, expected, expectationFailOutput));
    return this;
  }

  //#region toThrow
  public toThrow<T>(
    actual: ExpectType<T>,
    expected?: any,
    expectationFailOutput?: any
  ): this {
    this.#toThrow(e => e.throw(actual, expected, expectationFailOutput));
    return this;
  }

  public toThrowError<T extends jasmine.Func>(
    actual: ExpectType<T>,
    message?: string | RegExp,
    expectationFailOutput?: any
  ): this {
    this.#toThrow(e => e.error(actual, message, expectationFailOutput));
    return this;
  }

  public toThrowMatching<T>(
    actual: ExpectType<T>,
    predicate: (thrown: any) => boolean,
    expectationFailOutput?: any
  ): this {
    this.#toThrow(e => e.matching(actual, predicate, expectationFailOutput));
    return this;
  }
  //#endregion

  //#region helpers
  #to(callbackfn: (expectation: typeof this.to) => any) {
    callbackfn(this.#not ? this.#testingTo.not : this.#testingTo);
    this.setNot(false);
    return this;
  }

  #toHave(callbackfn: (expectation: typeof this.to.have) => any) {
    callbackfn(this.#not ? this.#testingTo.have.not : this.#testingTo.have);
    this.setNot(false);
    return this;
  }

  #toHaveBeenCalled(callbackfn: (expectation: typeof this.to.have.been.called) => any) {
    callbackfn(this.#not ? this.#testingTo.have.been.called.not : this.#testingTo.have.been.called);
    this.setNot(false);
    return this;
  }

  #toBe(callbackfn: (expectation: typeof this.to.be) => any) {
    const e = this.#not ? this.#testingTo.be.not : this.#testingTo.be;
    callbackfn(this.#already ? e.already : e);
    this.setAlready(false).setNot(false);
    return this;
  }

  #toBeInstanceOf(callbackfn: (expectation: typeof this.to.be.instanceof) => any) {
    callbackfn(this.#not ? this.#testingTo.be.instanceof.not : this.#testingTo.be.instanceof);
    this.setNot(false);
    return this;
  }

  #toThrow(callbackfn: (expectation: typeof this.to.throw) => any) {
    callbackfn(this.#not ? this.#testingTo.throw.not : this.#testingTo.throw);
    this.setNot(false);
    return this;
  }
  //#endregion
}
