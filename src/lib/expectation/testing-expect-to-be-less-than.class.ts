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
export class TestingExpectToBeLessThan extends Expect {
  //#region lessThan
  // TODO: Description.
  public toBeLessThan<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeLessThan')
  ): this {
    this.expect(actual, expectationFailOutput).toBeLessThan(expected);
    this.setNot(false);
    return this;
  }

  // TODO: Description.
  public toBeLessThanOrEqual<T extends number>(
    actual: ExpectType<T>,
    expected: number,
    expectationFailOutput: any = this.getExpectationFailOutput('toBeLessThanOrEqual')
  ): this {
    this.expect(actual, expectationFailOutput).toBeLessThanOrEqual(expected);
    this.setNot(false);
    return this;
  }
  //#endregion
}
