// Class.
import { TestingCore } from '../testing-core.abstract';
import { TextualExpectation } from '../textual-expectation.abstract';
// Type.
import { ExpectType } from '../../type';
/**
 * @class
 * @classdesc Prepared `toThrow` tests.
 * @license MIT
 */
export class TestingItToThrow<
  Descriptions extends string = string,
  Expectations extends string = string
> extends TestingCore<
  Descriptions,
  Expectations
> {
  public error<T extends jasmine.Func>(
    actual: ExpectType<T>,
    message?: string | RegExp,
    not: boolean = false,
    expectation: string = TextualExpectation.toThrowError,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => (not ? super.expect.to.throw.not : super.expect.to.throw).error(actual, message, expectationFailOutput),
      execute
    );
    return this;
  }
  public matching<T>(
    actual: ExpectType<T>,
    predicate: (thrown: any) => boolean,
    not: boolean = false,
    expectation: string = TextualExpectation.toThrowMatching,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => (not ? super.expect.to.throw.not : super.expect.to.throw).matching(actual, predicate, expectationFailOutput),
      execute
    );
    return this;
  }
  public throw<T>(
    actual: ExpectType<T>,
    expected?: any,
    not: boolean = false,
    expectation: string = TextualExpectation.toThrow,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => (not ? super.expect.to.throw.not : super.expect.to.throw).throw(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
}
