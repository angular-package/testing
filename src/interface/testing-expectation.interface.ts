// Class.
import { TestingExpect } from '../lib';
import { TestingExpectationProxy } from '../lib/testing-expectation.class';
// Type.
import { Constructor } from '@angular-package/type';
import { InstanceTypes } from '../type';

export interface TestingExpectationInterface extends Omit<typeof TestingExpectationProxy, "prototype"> {
  new <T extends Constructor<any>[]>(
    expectation: [...T],
    testingExpect?: TestingExpect
  ): TestingExpectationProxy<T> & InstanceTypes<T>;
}
