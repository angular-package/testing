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
  #expectation = {
    class: `The \`actual\` value to be a DOM element that has the expected class.`,
    size: `The \`actual\` size to be equal to the expected, using array-like length or object keys size.`,
    spyInteractions: `The \`actual\` value (a SpyObj) spies to have been called.`,
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
    expectation: string = this.#expectation.class, 
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
    expectation: string = this.#expectation.size, 
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
    expectation: string = this.#expectation.spyInteractions,
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
