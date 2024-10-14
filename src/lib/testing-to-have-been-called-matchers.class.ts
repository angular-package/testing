// Class.
import { TestingExpect } from './testing-expect.abstract';
// Type.
import { ExpectType } from '../type/expect-type.type';

/**
 * Testing `ToHaveBeenCalled` matchers.
 */
export class TestingToHaveBeenCalledMatchers extends TestingExpect {
  public before<Value>(
    value: ExpectType<Value>,
    expected: any,
    expectationFailOutput?: any
  ): this {
    this
      .expect(value, expectationFailOutput)
      .toHaveBeenCalledBefore(expected);
    this.setNot(false);
    return this;
  }

  // TODO:
  public called<Value>(
    value: ExpectType<Value>,
    expectationFailOutput?: any
  ): this {
    this
      .expect(value, expectationFailOutput)
      .toHaveBeenCalled();
    this.setNot(false);
    return this;
  }

  public onceWith<Value>(
    value: ExpectType<Value>,
    ...params: any[]
  ): this {
    this
      .expect(value)
      .toHaveBeenCalledOnceWith(...params);
    this.setNot(false);
    return this;
  }

  public times<Value>(
    value: ExpectType<Value>,
    expected: any,
    expectationFailOutput?: any
  ): this {
    this
      .expect(value, expectationFailOutput)
      .toHaveBeenCalledTimes(expected);
    this.setNot(false);
    return this;
  }

  public with<Value>(
    value: ExpectType<Value>,
    expected: any,
    expectationFailOutput?: any
  ): this {
    this
      .expect(value, expectationFailOutput)
      .toHaveBeenCalledWith(expected);
    this.setNot(false);
    return this;
  }
}
