// Class.
import { TestingExpect } from '../testing-expect.abstract';
import { TestingToHaveBeen } from './testing-to-have-been.class';
// Type.
import { ExpectType } from '../../type/expect-type.type';

/**
 * Testing `ToHaveBeenCalled` matchers.
 */
export class TestingToHaveBeenCalled extends TestingExpect {

  public before<T extends jasmine.Func>(
    spy: ExpectType<T>,
    expected: jasmine.Func,
    expectationFailOutput?: any
  ): this {
    this
      .expect(spy, expectationFailOutput)
      .toHaveBeenCalledBefore(expected);
    this.setNot(false);
    return this;
  }

  public called<T extends jasmine.Func>(
    spy: ExpectType<T>,
    expectationFailOutput?: any
  ): this {
    this
      .expect(spy, expectationFailOutput)
      .toHaveBeenCalled();
    this.setNot(false);
    return this;
  }

  public onceWith<T extends jasmine.Func>(
    spy: ExpectType<T>,
    ...params: any[]
  ): this {
    this
      .expect(spy)
      .toHaveBeenCalledOnceWith(...params);
    this.setNot(false);
    return this;
  }

  public times<T extends jasmine.Func>(
    spy: ExpectType<T>,
    expected: number,
    expectationFailOutput?: any
  ): this {
    this
      .expect(spy, expectationFailOutput)
      .toHaveBeenCalledTimes(expected);
    this.setNot(false);
    return this;
  }

  public with<T extends jasmine.Func>(
    spy: ExpectType<T>,
    expected: any,
    expectationFailOutput?: any
  ): this {
    this
      .expect(spy, expectationFailOutput)
      .toHaveBeenCalledWith(expected);
    this.setNot(false);
    return this;
  }
}
