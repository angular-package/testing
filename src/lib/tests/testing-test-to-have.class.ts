// Class.
import { TestingCore } from '../testing-core.class';
import { TestingTestToHaveBeen } from './testing-test-to-have-been.class';
// Type.
import { ExpectType } from '../../type';
/**
 * Prepared `toHave` tests.
 */
export class TestingTestToHave extends TestingCore {
  /**
   * 
   */
  public get been() {
    return this.#been;
  }

  /**
   * 
   */
  #been: TestingTestToHaveBeen;

  /**
   * 
   * @param allowDescribe 
   * @param allowIt 
   * @param executable 
   */
  constructor(
    allowDescribe: boolean,
    allowIt: boolean,
    executable?: {
      describe?: Array<number>,
      it?: Array<number>
    }
  ) {
    super(allowDescribe, allowIt, executable);
    this.#been = new TestingTestToHaveBeen(allowDescribe, allowIt, executable);
  }

  public class<T>(
    actual: ExpectType<T>,
    expected: string,
    expectation: string = TestingCore.expectation.toHaveClass, 
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.have.class(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  public size<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<typeof actual>,
    expectation: string = TestingCore.expectation.toHaveSize, 
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.have.size(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }

  public spyInteractions<T>(
    actual: ExpectType<T>,
    expected: jasmine.Expected<typeof actual>,
    expectation: string = TestingCore.expectation.toHaveSpyInteractions,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.have.spyInteractions(actual, expected, expectationFailOutput),
      execute
    );
    return this;
  }
}
