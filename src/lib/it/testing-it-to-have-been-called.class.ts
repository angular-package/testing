// Class.
import { TestingCore } from '../testing-core.abstract';
import { TextualExpectation } from '../textual-expectation.abstract';
// Type.
import { ExpectType } from '../../type';
// Interface.
import { TestingOptions } from '../../interface';
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
    not: boolean = false,
    expectation: string = TextualExpectation.toHaveBeenCalledBefore,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#toHaveBeenCalled(not).before(spyExpected()[0], spyExpected()[1], expectationFailOutput),
      execute
    ); 
    return this;
  }
  public called<T extends jasmine.Func>(
    spy: () => ExpectType<T> | ExpectType<T>[],
    not: boolean = false,
    expectation: string = TextualExpectation.toHaveBeenCalled,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {    
    this.it(
      expectation,
      () => {
        let spies = spy();
        ((!Array.isArray(spies)) ? [spies] : spies).forEach(
          spy => this.#toHaveBeenCalled(not).called(spy, expectationFailOutput)
        );
      },
      execute
    );
    return this;
  }
  public onceWith<T extends jasmine.Func>(
    spy: () => ExpectType<T>,
    options: TestingOptions,
    ...params: any[]
  ): this {
    const { not, expectation = TextualExpectation.toHaveBeenCalledOnceWith, expectationFailOutput, execute } = options;
    this.it(
      expectation,
      () => this.#toHaveBeenCalled(not).withContext(expectationFailOutput).onceWith(spy(), ...params),
      execute
    );
    return this;
  }
  public times<T extends jasmine.Func>(
    spy: () => ExpectType<T>,
    expected: number,
    not: boolean = false,
    expectation: string = TextualExpectation.toHaveBeenCalledTimes,
    expectationFailOutput?: any,
    execute?: boolean,
  ): this {
    this.it(
      expectation,
      () => this.#toHaveBeenCalled(not).times(spy(), expected, expectationFailOutput),
      execute
    ); 
    return this;
  }
  public with<T extends jasmine.Func>(
    spy: () => ExpectType<T>,
    options: TestingOptions,
    ...params: any[]
  ): this {
    const { not, expectation = TextualExpectation.toHaveBeenCalledWith, expectationFailOutput, execute } = options;
    this.it(
      expectation,
      () => this.#toHaveBeenCalled(not).withContext(expectationFailOutput).with(spy(), ...params),
      execute
    ); 
    return this;
  }

  #toHaveBeenCalled(not: boolean = false) {
    return not
      ? this.expect.to.have.been.called.not
      : this.expect.to.have.been.called;
  }
}
