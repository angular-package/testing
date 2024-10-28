// Class.
import { Expect } from '../expect.class';
import { TestingExpect } from '../testing-expect.class';
// Type.
import { ExpectType } from '../../type/expect-type.type';
/**
 * Constructor description.
 * @class
 * @classdesc Testing `throw` matchers.
 * @license MIT
 */
export class TestingExpectToThrow extends Expect {
  public error<T extends jasmine.Func>(
    actual: ExpectType<T>,
    message?: string | RegExp,
    expectationFailOutput?: any
  ): this {
    this.expect(actual, expectationFailOutput).toThrowError(message);
    this.setNot(false);
    return this;
  }
  public matching<T>(
    actual: ExpectType<T>,
    predicate: (thrown: any) => boolean,
    expectationFailOutput?: any
  ): this {
    this.expect(actual, expectationFailOutput).toThrowMatching(predicate);
    this.setNot(false);
    return this;
  }
  public throw<T>(
    actual: ExpectType<T>,
    expected?: any,
    expectationFailOutput?: any
  ): this {
    this.expect(actual, expectationFailOutput).toThrow(expected);
    this.setNot(false);
    return this;
  }
}
