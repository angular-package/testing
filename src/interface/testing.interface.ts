// Class.
import { TestingProxy } from '../lib/testing.class';
// Type.
import { Constructor } from '@angular-package/type';
import { InstanceTypes } from '../type';
/**
 * 
 */
export interface TestingInterface extends Omit<typeof TestingProxy, "prototype"> {
  new <T extends Constructor<any>[]>(
    testing: [...T],
  ): TestingProxy<T> & InstanceTypes<T>;
}
