// Class.
import { Expect } from './expect.class';
import { TestingExpect } from './testing-expect.class';
// Function.
import { mixin } from './function';
// Type.
import { Constructor } from '@angular-package/type';
import { InstanceTypes } from '../type/instance-types.type';
// Interface.
import { TestingExpectationInterface } from '../interface';
/**
 * Creates an instance of `TestingExpectationProxy`.
 * @class
 * @classdesc Testing expectation.
 */
export class TestingExpectationProxy<
  T extends Constructor<any>[] = [],
> extends Expect {
  /**
   * 
   */
  private $expectation;

  /**
   * @description
   * @param testingExpect 
   */
  constructor(
    expectation: T,
    testingExpect: TestingExpect = new TestingExpect()
  ) {
    super(testingExpect);

    // Tests.
    this.$expectation = new (mixin(...expectation))(testingExpect) as InstanceTypes<T>;

    // Proxy to delegate method calls to $expectation
    return new Proxy(this as this & InstanceTypes<T>, {
      get(target: TestingExpectationProxy<T> & InstanceTypes<T>, prop: PropertyKey) {
        return prop in target ? (target as any)[prop] : (target as any).$expectation[prop];
      },
    }) as this & InstanceTypes<T>;
  }
}

export const TestingExpectation = TestingExpectationProxy as unknown as TestingExpectationInterface;
