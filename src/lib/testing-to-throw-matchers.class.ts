// Class.
import { TestingExpect } from './testing-expect.abstract';
// Type.
import { ExpectType } from '../type/expect-type.type';
/**
 * Testing `throw` matchers.
 */
export class TestingToThrowMatchers extends TestingExpect {
  public throw<Value>(
    actual: ExpectType<Value>,
    expected?: any,
    expectationFailOutput?: any
  ): this {
    this.expect(actual, expectationFailOutput).toThrow(expected);
    this.setNot(false);
    return this;
  }

  public error<Value extends jasmine.Func>(
    actual: ExpectType<Value>,
    message?: string | RegExp,
    expectationFailOutput?: any
  ): this {
    this.expect(actual, expectationFailOutput).toThrowError(message);
    this.setNot(false);
    return this;
  }

  public matching<Value>(
    actual: ExpectType<Value>,
    predicate: (thrown: any) => boolean,
    expectationFailOutput?: any
  ): this {
    this.expect(actual, expectationFailOutput).toThrowMatching(predicate);
    this.setNot(false);
    return this;
  }
}
