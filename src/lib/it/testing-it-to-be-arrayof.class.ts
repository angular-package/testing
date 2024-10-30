// Class.
import { TestingCore } from '../testing-core.abstract';
import { TextualExpectation } from '../textual-expectation.abstract';
// Type.
import { ExpectType } from '../../type';
/**
 * @class
 * @classdesc
 * @license MIT
 */
export class TestingItToBeArrayOf<
  Descriptions extends string = string,
  Expectations extends string = string
> extends TestingCore<
  Descriptions,
  Expectations
> {
  //#region TestingItToBeArrayOf
  public bigint<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.toBeArrayOfBigInt,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.arrayof.bigint(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  public boolean<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.toBeArrayOfBoolean,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.arrayof.boolean(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  public date<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.toBeArrayOfDate,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.arrayof.date(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  public defined<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.toBeArrayOfDefined,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.arrayof.defined(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  public false<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.toBeArrayOfFalse,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.arrayof.false(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  public null<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.toBeArrayOfNull,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.arrayof.null(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  public number<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.toBeArrayOfNumber,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.arrayof.number(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  public regExp<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.toBeArrayOfRegExp,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.arrayof.regExp(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  public string<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.toBeArrayOfString,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.arrayof.string(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  public symbol<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.toBeArrayOfSymbol,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.arrayof.symbol(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  public true<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.toBeArrayOfTrue,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.arrayof.true(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  public undefined<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<boolean> = true,
    expectation: string = TextualExpectation.toBeArrayOfUndefined,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.be.arrayof.undefined(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
  //#endregion
}
