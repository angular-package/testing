// Class.
import { TestingDescribe, TestingExpect, TestingIt } from '../lib';
import { TestingProxy } from '../lib/testing.class';
// Type.
import { Constructor } from '@angular-package/type';
import { CounterConfig, InstanceTypes } from '../type';
// Interface.
import { ExecutableTests } from './executable-tests.interface';
/**
 * 
 */
export interface TestingInterface extends Omit<typeof TestingProxy, "prototype"> {
  new <
    T extends Constructor<any>[],
    Descriptions extends string = string,
    Expectations extends string = string,  
  >(
    testing: [...T],
    allowDescribe?: boolean,
    allowIt?: boolean,
    executable?: ExecutableTests,
    descriptions?: Descriptions[],
    expectations?: Expectations[],
    counter?: CounterConfig,
    testingDescribe?: TestingDescribe,
    testingIt?: TestingIt,
    testingExpect?: TestingExpect
  ): TestingProxy<T> & InstanceTypes<T>;
}
