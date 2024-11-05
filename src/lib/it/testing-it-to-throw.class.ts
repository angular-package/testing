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
    expectation: string = TextualExpectation.get('toThrowError'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToThrow(not).error(actual, message, expectationFailOutput),
      execute
    );
    return this;
  }
  public matching<T>(
    actual: ExpectType<T>,
    predicate: (thrown: any) => boolean,
    not: boolean = false,
    expectation: string = TextualExpectation.get('toThrowMatching'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToThrow(not).matching(actual, predicate, expectationFailOutput),
      execute
    );
    return this;
  }
  public throw<T>(
    actual: ExpectType<T>,
    expected?: any,
    not: boolean = false,
    expectation: string = TextualExpectation.get('toThrow'),
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#expectToThrow(not).throw(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  // Private.
  #expectToThrow(not: boolean = false) {
    return (not ? this.expect.to.throw.not : this.expect.to.throw);
  }
}
