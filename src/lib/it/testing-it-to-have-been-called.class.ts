// Class.
import { TestingCore } from '../testing-core.abstract';
// Type.
import { ExpectType } from '../../type';
/**
 * Prepared simple tests.
 */
export class TestingItToHaveBeenCalled<
  Descriptions extends string = string,
  Expectations extends string = string
> extends TestingCore<
  Descriptions,
  Expectations
> {
  public before<T extends jasmine.Func>(
    spy: ExpectType<T>,
    expected: jasmine.Func,
    expectation: string = TestingCore.expectation.toHaveBeenCalledBefore,
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
    expectation: string = TestingCore.expectation.toHaveBeenCalled,
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
    expectation: string = TestingCore.expectation.toHaveBeenCalledOnceWith,
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
    expectation: string = TestingCore.expectation.toHaveBeenCalledTimes,
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
    expectation: string = TestingCore.expectation.toHaveBeenCalledWith,
    spy: ExpectType<T>,
    ...params: any[]
    // expectationFailOutput?: any,
    // execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.have.been.called.with(spy, ...params),
      true // execute
    ); 
    return this;
  }
}
