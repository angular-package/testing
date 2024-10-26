// Class.
import { TestingCore } from '../testing-core.class';
import { TestingDescribe } from '../testing-describe.class';
import { TestingIt } from '../testing-it.class';
import { TestingItToHaveBeen } from './testing-it-to-have-been.class';
// Type.
import { ExpectType } from '../../type';
// Interface.
import { ExecutableTests } from '../../interface/executable-tests.interface';
/**
 * Prepared `toHave` tests.
 */
export class TestingItToHave<
  Descriptions extends string = string,
  Expectations extends string = string
> extends TestingCore<
  Descriptions,
  Expectations
> {
  /**
   * 
   */
  public get been() {
    return this.#toHaveBeen;
  }

  /**
   * 
   */
  #toHaveBeen: TestingItToHaveBeen;

  /**
   * 
   * @param allowDescribe 
   * @param allowIt 
   * @param executable 
   */
  constructor(
    allowDescribe: boolean,
    allowIt: boolean,
    executable?: ExecutableTests,
    testingDescribe?: TestingDescribe,
    testingIt?: TestingIt
  ) {
    super(allowDescribe, allowIt, executable, testingDescribe, testingIt);
    this.#toHaveBeen = new TestingItToHaveBeen(allowDescribe, allowIt, executable, testingDescribe, testingIt);
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
    expected: number,
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
