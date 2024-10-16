// Class.
import { TestingCore } from '../testing-core.class';
// Type.
import { ExpectType } from '../../type';
/**
 * Prepared simple tests.
 */
export class TestingTestToHaveBeenCalled extends TestingCore {
  /**
   * 
   */
  #expectation = {
    called: `The \`actual\` value (a Spy) to have been called.`,
    before: `The \`actual\` value (a Spy) to have been called before another Spy.`,
    onceWith: `The \`actual\` value (a Spy) to have been called exactly once, and exactly with the particular arguments.`,
    times: `The \`actual\` value (a Spy) to have been called the specified number of times.`,
    with: `The \`actual\` (a Spy) to have been called the specified number of times.`,
  }

  public before<T extends jasmine.Func>(
    spy: ExpectType<T>,
    expected: jasmine.Func,
    expectation: string = this.#expectation.before,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.have.been.called.before(spy, expected, expectationFailOutput),
      execute
    ); 
    return this;
  }

  public called<T extends jasmine.Func>(
    spy: ExpectType<T>,
    expectation: string = this.#expectation.called,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {    
    this.it(
      expectation,
      () => super.expect.to.have.been.called.called(spy, expectationFailOutput),
      execute
    );
    return this;
  }

  public onceWith<Actual extends jasmine.Func>(
    expectation: string = this.#expectation.onceWith,
    spy: ExpectType<Actual>,
    ...params: any[]
  ): this {
    this.it(
      expectation,
      () => super.expect.to.have.been.called.onceWith(spy, ...params),
      true
    );
    return this;
  }

  public times<T extends jasmine.Func>(
    spy: ExpectType<T>,
    expected: number,
    expectation: string = this.#expectation.times,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.have.been.called.times(spy, expected, expectationFailOutput),
      execute
    ); 
    return this;
  }

  public with<T extends jasmine.Func>(
    spy: ExpectType<T>,
    expected: any,
    expectation: string = this.#expectation.with,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.have.been.called.with(spy, expected, expectationFailOutput),
      execute
    ); 
    return this;
  }
}
