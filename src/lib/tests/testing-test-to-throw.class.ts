// Class.
import { TestingCore } from '../testing-core.class';
// Type.
import { ExpectType } from '../../type';
/**
 * Prepared `toThrow` tests.
 */
export class TestingTestToThrow extends TestingCore {
  public error<T extends jasmine.Func>(
    actual: ExpectType<T>,
    message?: string | RegExp,
    expectation: string = TestingCore.expectation.toThrowError,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.throw.error(actual, message, expectationFailOutput),
      execute
    );
    return this;
  }

  public matching<T>(
    actual: ExpectType<T>,
    predicate: (thrown: any) => boolean,
    expectation: string = TestingCore.expectation.toThrowMatching,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.throw.matching(actual, predicate, expectationFailOutput),
      execute
    );
    return this;
  }

  public throw<T>(
    actual: ExpectType<T>,
    expected?: any,
    expectation: string = TestingCore.expectation.toThrow,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.throw.throw(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
}
