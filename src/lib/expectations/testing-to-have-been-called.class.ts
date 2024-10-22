// Class.
import { TestingExpect } from '../testing-expect.abstract';
// Type.
import { ExpectType } from '../../type/expect-type.type';
/**
 * Testing `ToHaveBeenCalled` matchers.
 */
export class TestingToHaveBeenCalled extends TestingExpect {
  /**
   * 
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
   * 
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
   * 
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
