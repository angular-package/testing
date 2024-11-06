// Class.
import { Expect } from '../expect.class';
// Type.
import { ExpectType } from '../../type/expect-type.type';
/**
 * Constructor description.
 * @class
 * @classdesc Testing `ToHaveBeenCalled` matchers.
 * @license MIT
 */
export class TestingExpectToHaveBeenCalled extends Expect {
  /**
   * @description
   * @param spy 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public toHaveBeenCalledBefore<T extends jasmine.Func>(
    spy: ExpectType<T>,
    expected: jasmine.Func,
    expectationFailOutput: any = this.getExpectationFailOutput('toHaveBeenCalledBefore')
  ): this {
    this.expect(spy, expectationFailOutput).toHaveBeenCalledBefore(expected);
    this.setNot(false);
    return this;
  }

  /**
   * @description
   * @param spy 
   * @param expectationFailOutput 
   * @returns 
   */
  public toHaveBeenCalled<T extends jasmine.Func>(
    spy: ExpectType<T>,
    expectationFailOutput: any = this.getExpectationFailOutput('toHaveBeenCalled')
  ): this {
    this.expect(spy, expectationFailOutput).toHaveBeenCalled();
    this.setNot(false);
    return this;
  }

  /**
   * @description
   * @param spy 
   * @param params 
   * @returns 
   */
  public toHaveBeenCalledOnceWith<T extends jasmine.Func>(
    spy: ExpectType<T>,
    ...params: any[]
  ): this {
    this.expect(spy).withContext(
      this.getExpectationFailOutput('toHaveBeenCalledOnceWith')
    ).toHaveBeenCalledOnceWith(...params);
    this.setNot(false);
    return this;
  }

  /**
   * 
   * @param spy 
   * @param expected 
   * @param expectationFailOutput 
   * @returns 
   */
  public toHaveBeenCalledTimes<T extends jasmine.Func>(
    spy: ExpectType<T>,
    expected: number,
    expectationFailOutput: any = this.getExpectationFailOutput('toHaveBeenCalledTimes')
  ): this {
    this.expect(spy, expectationFailOutput).toHaveBeenCalledTimes(expected);
    this.setNot(false);
    return this;
  }

  /**
   * 
   * @param spy 
   * @param params 
   * @returns 
   */
  public toHaveBeenCalledWith<T extends jasmine.Func>(
    spy: ExpectType<T>,
    ...params: any[]
  ): this {
    this.expect(spy).withContext(
      this.getExpectationFailOutput('toHaveBeenCalledWith')
    ).toHaveBeenCalledWith(...params);
    this.setNot(false);
    return this;
  }
}
