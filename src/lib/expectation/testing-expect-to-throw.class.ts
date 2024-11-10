// Class.
import { Expect } from '../expect.class';
// Type.
import { ExpectType } from '../../type/expect-type.type';
/**
 * Constructor description.
 * @class
 * @classdesc Testing `throw` matchers.
 * @license MIT
 */
export class TestingExpectToThrow extends Expect {
  public toThrowError<T extends jasmine.Func>(
    actual: ExpectType<T>,
    message?: string | RegExp,
    expectationFailOutput: any = this.getExpectationFailOutput('toThrowError')
  ): this {
    this.expect(actual, expectationFailOutput).toThrowError(message);
    this.setNot(false);
    return this;
  }
  public toThrowMatching<T>(
    actual: ExpectType<T>,
    predicate: (thrown: any) => boolean,
    expectationFailOutput: any = this.getExpectationFailOutput('toThrowMatching')
  ): this {
    this.expect(actual, expectationFailOutput).toThrowMatching(predicate);
    this.setNot(false);
    return this;
  }
}
