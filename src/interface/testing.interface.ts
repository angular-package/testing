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
    tests: [...T],
    allow?: boolean | { describe?: boolean, it?: boolean },
    executable?: ExecutableTests,

    // Textual.
    textual?: {
      descriptions?: Descriptions | Descriptions[],
      expectations?: Expectations | Expectations[],  
    },
  
    // Counter.
    counter?: CounterConfig,

    // Instances.
    testing?: {
      describe: TestingDescribe,
      it: TestingIt,
      expect: TestingExpect
    }
  ): TestingProxy<T> & InstanceTypes<T>;
}
