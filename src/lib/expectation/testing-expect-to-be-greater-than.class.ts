// Class.
import { Expect } from '../expect.class';
// Type.
import { ExpectType } from '../../type';
/**
 * Constructor description.
 * @class
 * @classdesc Matchers that use the `toBe()` method of jasmine.
 * @license MIT
 */
export class TestingExpectToBGreaterThan extends Expect {
  //#region greaterThan
  // TODO: Description.
  public toBeGreaterThan<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeGreaterThan')
  ): this {
    this.expect(actual, expectationFailOutput).toBeGreaterThan(expected);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  public toBeGreaterThanOrEqual<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeGreaterThanOrEqual')
  ): this {
    this.expect(actual, expectationFailOutput).toBeGreaterThanOrEqual(expected);
    this.setNot(false);
    return this;
  }
  //#endregion
}
