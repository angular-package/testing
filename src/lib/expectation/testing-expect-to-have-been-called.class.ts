// Class.
import { Expect } from '../expect.class';
import { TestingExpect } from '../testing-expect.class';
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
  public before<T extends jasmine.Func>(
    spy: ExpectType<T>,
    expected: jasmine.Func,
    expectationFailOutput?: any
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
  public called<T extends jasmine.Func>(
    spy: ExpectType<T>,
    expectationFailOutput?: any
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
  public onceWith<T extends jasmine.Func>(
    spy: ExpectType<T>,
    ...params: any[]
  ): this {
    this.expect(spy).toHaveBeenCalledOnceWith(...params);
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
  public times<T extends jasmine.Func>(
    spy: ExpectType<T>,
    expected: number,
    expectationFailOutput?: any
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
  public with<T extends jasmine.Func>(
    spy: ExpectType<T>,
    ...params: any[]
  ): this {
    this.expect(spy).toHaveBeenCalledWith(...params);
    this.setNot(false);
    return this;
  }
}
