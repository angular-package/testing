// Class.
import { TestingCore } from '../testing-core.abstract';
import { TextualExpectation } from '../textual-expectation.abstract';
// Type.
import { ExpectType } from '../../type';
/**
 * @class
 * @classdesc
 * @license MIT
 */
export class TestingItToHaveBeenCalled<
  Descriptions extends string = string,
  Expectations extends string = string
> extends TestingCore<
  Descriptions,
  Expectations
> {
  public before<T extends jasmine.Func>(
    spyExpected: () => [ExpectType<T>, jasmine.Func],
    expectation: string = TextualExpectation.toHaveBeenCalledBefore,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.have.been.called.before(spyExpected()[0], spyExpected()[1], expectationFailOutput),
      execute
    ); 
    return this;
  }
  public called<T extends jasmine.Func>(
    spy: () => ExpectType<T> | ExpectType<T>[],
    expectation: string = TextualExpectation.toHaveBeenCalled,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {    
    this.it(
      expectation,
      () => {
        let spies = spy();
        ((!Array.isArray(spies)) ? [spies] : spies).forEach(
          spy => super.expect.to.have.been.called.called(spy, expectationFailOutput)
        );
      },
      execute
    );
    return this;
  }
  public onceWith<T extends jasmine.Func>(
    expectation: string = TextualExpectation.toHaveBeenCalledOnceWith,
    spy: () => ExpectType<T>,
    ...params: any[]
  ): this {
    this.it(
      expectation,
      () => super.expect.to.have.been.called.onceWith(spy(), ...params),
      true
    );
    return this;
  }
  public times<T extends jasmine.Func>(
    spy: () => ExpectType<T>,
    expected: number,
    expectation: string = TextualExpectation.toHaveBeenCalledTimes,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.have.been.called.times(spy(), expected, expectationFailOutput),
      execute
    ); 
    return this;
  }
  public with<T extends jasmine.Func>(
    expectation: string = TextualExpectation.toHaveBeenCalledWith,
    spy: () => ExpectType<T>,
    ...params: any[]
    // expectationFailOutput?: any,
    // execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => super.expect.to.have.been.called.with(spy(), ...params),
      true // execute
    ); 
    return this;
  }
}
