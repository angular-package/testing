// Class.
import { TestingProxy } from '../lib/testing.class';
// Type.
import { Constructor } from '@angular-package/type';
import { InstanceTypes } from '../type';
/**
 * 
 */
export interface TestingInterface {
  new <T extends Constructor<any>[]>(
    testing: [...T],
  ): TestingProxy<T> & typeof TestingProxy & InstanceTypes<T>;
}
