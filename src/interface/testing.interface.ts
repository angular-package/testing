// Class.
import { TestingProxy } from '../lib/testing.class';
// Type.
import { Constructor } from '@angular-package/type';
import { CounterConfig, Execute, InstanceTypes } from '../type';
// Interface.
import { TestingConfig } from './testing-config.interface';
/**
 * 
 */
export interface TestingInterface extends Omit<typeof TestingProxy, "prototype"> {
  new <
    Tests extends Constructor<any>[],
    Descriptions extends string = string,
    Expectations extends string = string,  
  >(
    tests: [...Tests],
    execute?: Execute,

    // Textual.
    textual?: {
      descriptions?: Descriptions | Descriptions[],
      expectations?: Expectations | Expectations[],  
    },
  
    // Counter.
    counter?: CounterConfig,

    // Testing instances.
    testing?: TestingConfig<Descriptions, Expectations>,
  ): TestingProxy<Tests, Descriptions, Expectations> & InstanceTypes<Tests>;
}
