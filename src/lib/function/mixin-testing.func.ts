// Class.
import { TestingCore } from '../testing-core.abstract';
import { TestingExpectation } from '../testing-expectation.class';
// Type.
import { Constructor } from "@angular-package/type";
import { CounterConfig, Execute, InstanceOfConstructor, TestingExpectations, UnionToIntersection } from "../../type";
// Interface.
import { TestingConfig } from '../../interface';
// Mixin function: combining multiple class constructors into one
export function mixinTesting<
  Tests extends Constructor<any>[],
  Descriptions extends string = string,
  Expectations extends string = string,
>(...tests: Tests) {
  return tests.reduce((acc, currTest, currIndex) => (
    class extends acc {
      public expectation;
      private _expectations!: any[];

      constructor(
        execute: Execute,
        counter?: CounterConfig,
        testing?: TestingConfig<Descriptions, Expectations>
      ) {
        super(
          execute,
          counter,
          testing
        );

        // Call the constructor of each class to initialize properties
        const instance = new currTest(
          execute,
          counter,
          testing
        );
        Object.assign(this, instance);

        // Merge expectations
        this._expectations = [...this._expectations, ...instance.expectations];

        // Create an `TestingExpectation` instance of merged `_expectations`
        if (currIndex === tests.length - 1) {
          this.expectation = new TestingExpectation(this._expectations, testing?.expect);
        }

        // Copy methods from the current class prototype and its chain
        let currentPrototype = currTest.prototype;
        while (currentPrototype !== Object.prototype) {
          Object
            .getOwnPropertyNames(currentPrototype)
            .forEach(name => {
              // Don't copy the constructor
              if (name !== 'constructor') {
                Object.defineProperty(
                  acc.prototype,
                  name,
                  Object.getOwnPropertyDescriptor(currentPrototype, name) || Object.create(null)
                );
              }
            });

          // Move up the prototype chain
          currentPrototype = Object.getPrototypeOf(currentPrototype);
        }
      }
    }
  ), class { private _expectations: Constructor<any>[] = []; }) as Constructor<
    UnionToIntersection<InstanceOfConstructor<Tests[number]>>
    & TestingCore<Descriptions, Expectations>
    & {expectation: TestingExpectations<Tests[number]>}
  >;
  // as Constructor<UnionToIntersection<IntersectionOfInstances<T>>>;
}