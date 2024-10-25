// Class.
import { TestingCore } from '../testing-core.class';
// Type.
import { ExpectType } from '../../type';
/**
 * Prepared simple tests.
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
    expectation: string = TestingCore.expectation.toBeArrayOfBigInt,
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
    expectation: string = TestingCore.expectation.toBeArrayOfBoolean,
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
    expectation: string = TestingCore.expectation.toBeArrayOfDate,
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
    expectation: string = TestingCore.expectation.toBeArrayOfDefined,
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
    expectation: string = TestingCore.expectation.toBeArrayOfFalse,
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
    expectation: string = TestingCore.expectation.toBeArrayOfNull,
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
    expectation: string = TestingCore.expectation.toBeArrayOfNumber,
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
    expectation: string = TestingCore.expectation.toBeArrayOfRegExp,
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
    expectation: string = TestingCore.expectation.toBeArrayOfString,
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
    expectation: string = TestingCore.expectation.toBeArrayOfSymbol,
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
    expectation: string = TestingCore.expectation.toBeArrayOfTrue,
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
    expectation: string = TestingCore.expectation.toBeArrayOfUndefined,
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
