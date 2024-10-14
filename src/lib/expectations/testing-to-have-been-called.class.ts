// Class.
import { TestingExpect } from '../testing-expect.abstract';
import { TestingToHaveBeen } from './testing-to-have-been.class';
// Type.
import { ExpectType } from '../../type/expect-type.type';

/**
 * Testing `ToHaveBeenCalled` matchers.
 */
export class TestingToHaveBeenCalled extends TestingExpect {
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

  public called<Value>(
    value: ExpectType<Value>,
    expectationFailOutput?: any
  ): this {
    new TestingToHaveBeen().called(value, expectationFailOutput);
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
