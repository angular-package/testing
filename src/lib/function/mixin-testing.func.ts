// Class.
import { TestingDescribe } from '../testing-describe.class';
import { TestingExpect } from "../testing-expect.class";
import { TestingExpectation } from '../testing-expectation.class';
import { TestingIt } from "../testing-it.class";
// Type.
import { Constructor } from "@angular-package/type";
import { CounterConfig, InstanceOfConstructor, UnionToIntersection } from "../../type";
// Interface.
import { ExecutableTests } from "../../interface/executable-tests.interface";
// Mixin function: combining multiple class constructors into one
export function mixinTesting<T extends Constructor<any>[]>(...classes: T) {
  return classes.reduce((acc, currClass, currIndex) => (
    class extends acc {
      public expectation;
      private _expectations!: any[];

      constructor(
        allowDescribe: boolean,
        allowIt: boolean,
        executable?: ExecutableTests,
        counter?: CounterConfig,
        testingDescribe?: TestingDescribe,
        testingIt?: TestingIt,
        testingExpect?: TestingExpect,
      ) {
        super(
          allowDescribe,
          allowIt,
          executable,
          counter,
          testingDescribe,
          testingIt,
          testingExpect,
        );

        // Call the constructor of each class to initialize properties
        const instance = new currClass(
          allowDescribe,
          allowIt,
          executable,
          counter,
          testingDescribe,
          testingIt,
          testingExpect
        );
        Object.assign(this, instance);

        // Merge expectations
        this._expectations = [...this._expectations, ...instance.expectations];

        // Create an `TestingExpectation` instance of merged `_expectations`
        if (currIndex === classes.length - 1) {
          this.expectation = new TestingExpectation(this._expectations, testingExpect);
        }

        // Copy methods from the current class prototype
        Object
          .getOwnPropertyNames(currClass.prototype)
          .forEach(name => {
            Object.defineProperty(
              acc.prototype,
              name,
              Object.getOwnPropertyDescriptor(currClass.prototype, name) ||
                Object.create(null)
            );
          })
          // .forEach(name => (name !== 'constructor') && ((this as any)[name] = currClass.prototype[name].bind(this)));
      }
    }
  ), class { private _expectations: Constructor<any>[] = []; }) as
    Constructor<UnionToIntersection<InstanceOfConstructor<T[number]>>>;
  // as Constructor<UnionToIntersection<IntersectionOfInstances<T>>>;
}